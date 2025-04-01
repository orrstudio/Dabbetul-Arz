# План преобразования HTTP-стримов через HTTPS-прокси

## Общая архитектура решения

1. **Локальный прокси-сервер в приложении**:
   - Создаем локальный HTTP-сервер прямо внутри React Native приложения
   - Он будет получать HTTP-потоки и передавать их через локальный HTTPS

2. **Варианты реализации**:
   - **Вариант 1**: Node.js-сервер, встроенный в приложение
   - **Вариант 2**: Собственный прокси на React Native

## План реализации

### 1. Добавление зависимостей

```bash
npx expo install react-native-background-actions react-native-http-bridge cors
```

### 2. Создание прокси-сервера

Создадим новый сервис в `/src/services/ProxyService.js`:

```javascript
import { BackgroundService } from 'react-native-background-actions';
import HttpBridge from 'react-native-http-bridge';

// Порт для локального прокси
const PROXY_PORT = 8888;

// Преобразует HTTP URL в локальный HTTPS URL
export const proxyUrl = (url) => {
  if (!url) return url;
  
  // Если URL уже HTTPS - возвращаем его без изменений
  if (url.startsWith('https://')) {
    return url;
  }
  
  // Заменяем http:// на https://localhost:PORT/
  const proxyBase = `https://localhost:${PROXY_PORT}/proxy?url=`;
  return `${proxyBase}${encodeURIComponent(url)}`;
};

// Запуск прокси-сервера
const startProxyServer = async () => {
  try {
    HttpBridge.start(PROXY_PORT, (request, response) => {
      const url = new URL(request.url, `http://localhost:${PROXY_PORT}`);
      
      // Обрабатываем запросы к прокси
      if (url.pathname === '/proxy') {
        const targetUrl = url.searchParams.get('url');
        if (!targetUrl) {
          response.send(400, 'text/plain', 'Missing URL parameter');
          return;
        }
        
        // Делаем запрос к оригинальному URL
        fetch(targetUrl)
          .then(res => res.arrayBuffer())
          .then(buffer => {
            // Копируем нужные заголовки
            const headers = {
              'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type'
            };
            
            // Отправляем ответ
            response.send(200, headers, buffer);
          })
          .catch(err => {
            console.error('Proxy error:', err);
            response.send(500, 'text/plain', 'Proxy error');
          });
      } else {
        response.send(404, 'text/plain', 'Not found');
      }
    });
    
    console.log(`Прокси-сервер запущен на порту ${PROXY_PORT}`);
    return true;
  } catch (error) {
    console.error('Ошибка запуска прокси-сервера:', error);
    return false;
  }
};

// Задача для фонового выполнения
const proxyTask = async () => {
  await startProxyServer();
  
  // Поддерживаем сервер активным
  return new Promise(() => {
    // Бесконечная задача
  });
};

// Опции для фонового сервиса
const options = {
  taskName: 'HLSProxy',
  taskTitle: 'Медиа прокси',
  taskDesc: 'Обеспечивает работу HTTP-стримов',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  linkingURI: 'yourapp://proxy',
};

// Управление прокси
export const ProxyService = {
  // Запуск прокси
  start: async () => {
    if (await BackgroundService.isRunning()) {
      console.log('Прокси-сервер уже запущен');
      return true;
    }
    
    try {
      await BackgroundService.start(proxyTask, options);
      return true;
    } catch (error) {
      console.error('Ошибка запуска фонового сервиса:', error);
      return false;
    }
  },
  
  // Остановка прокси
  stop: async () => {
    try {
      await BackgroundService.stop();
      HttpBridge.stop();
      return true;
    } catch (error) {
      console.error('Ошибка остановки прокси-сервера:', error);
      return false;
    }
  },
  
  // Проверка статуса
  isRunning: async () => {
    return await BackgroundService.isRunning();
  }
};
```

### 3. Модификация WebViewPlayer для работы с прокси

```javascript
// В компоненте WebViewPlayer.js
import { proxyUrl } from '../services/ProxyService';

// ...

const WebViewPlayer = ({ source, style, controls = true, onError, onReady, hlsConfig }) => {
  // Используем прокси для преобразования HTTP в локальный HTTPS
  const processedSource = useMemo(() => proxyUrl(source), [source]);
  
  // Остальной код остается прежним, но используем processedSource вместо source
  // ...
};
```

### 4. Запуск прокси в App.js при старте приложения

```javascript
// В App.js
import { ProxyService } from './src/services/ProxyService';

// ...

useEffect(() => {
  // Запускаем прокси-сервер при старте приложения
  ProxyService.start();
  
  return () => {
    // Останавливаем при выходе
    ProxyService.stop();
  };
}, []);
```

## Преимущества этого подхода

1. **Безопасность**: Все HTTP-запросы преобразуются в локальные HTTPS
2. **Совместимость**: Решает проблему безопасности в релизных сборках  
3. **Универсальность**: Работает со всеми HTTP-потоками без изменения их URL в плейлистах

## Потенциальные проблемы

1. **Разрешения**: Потребуется дополнительные разрешения для фоновых сервисов
2. **Производительность**: Может добавить небольшую задержку при обработке потоков
3. **Батарея**: Фоновый сервис может потреблять ресурсы батареи
