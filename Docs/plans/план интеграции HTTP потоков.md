# План интеграции HTTP потоков через WebView

## 1. Подход WebView для HTTP-стримов

### Преимущества
- Работает с HTTP без дополнительных разрешений
- WebView имеет собственную реализацию плеера, которая может обойти ограничения
- Не требует внешних серверов
- Легкая интеграция в существующее приложение

### Архитектура решения
- Создание нового компонента `WebViewPlayer`
- Интеграция компонента в существующий `VideoWindow`
- Обертка для передачи URL и управления плеером

## 2. Шаги реализации

### 2.1 Создание WebViewPlayer

```javascript
// src/components/WebViewPlayer.js
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewPlayer = ({ source, style, controls = true, onError, onReady }) => {
  const [loading, setLoading] = useState(true);
  const webViewRef = useRef(null);

  // HTML для воспроизведения видео с HLS.js
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
        <style>
          body, html { margin: 0; padding: 0; width: 100%; height: 100%; background: #000; overflow: hidden; }
          video { width: 100%; height: 100%; object-fit: contain; }
          .loading { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <video id="video" ${controls ? 'controls' : ''} autoplay></video>
        
        <script>
          // Функция воспроизведения видео
          function playVideo(videoSource) {
            const video = document.getElementById('video');
            
            // Если HLS.js поддерживается
            if (Hls.isSupported()) {
              const hls = new Hls({
                fragLoadingMaxRetry: 10,
                levelLoadingMaxRetry: 10,
                manifestLoadingMaxRetry: 10
              });
              
              // Обработка ошибок
              hls.on(Hls.Events.ERROR, function (event, data) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'error',
                  message: data.details
                }));
              });
              
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'ready'
                }));
                video.play();
              });
              
              hls.loadSource(videoSource);
              hls.attachMedia(video);
            } 
            // Если браузер поддерживает HLS нативно (Safari)
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
              video.src = videoSource;
              video.addEventListener('loadedmetadata', function() {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'ready'
                }));
                video.play();
              });
              video.addEventListener('error', function(e) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'error',
                  message: 'Video native error: ' + e.message
                }));
              });
            } else {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'error',
                message: 'HLS is not supported in this WebView'
              }));
            }
            
            // Добавляем прослушивание состояния воспроизведения
            video.addEventListener('playing', function() {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'status',
                state: 'playing'
              }));
            });
            
            video.addEventListener('pause', function() {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'status',
                state: 'paused'
              }));
            });
            
            video.addEventListener('waiting', function() {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'status',
                state: 'buffering'
              }));
            });
          }
          
          // Инициализация с пустым источником
          playVideo('${source}');
          
          // Прослушивание сообщений из React Native
          window.addEventListener('message', function(e) {
            const data = JSON.parse(e.data);
            if (data.type === 'setSource') {
              playVideo(data.source);
            } else if (data.type === 'pause') {
              document.getElementById('video').pause();
            } else if (data.type === 'play') {
              document.getElementById('video').play();
            }
          });
        </script>
      </body>
    </html>
  `;
  
  const handleMessage = (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      
      if (data.type === 'error' && onError) {
        onError(data.message);
        console.error('WebViewPlayer error:', data.message);
      } else if (data.type === 'ready' && onReady) {
        setLoading(false);
        onReady();
      } else if (data.type === 'status') {
        console.log('Player status:', data.state);
      }
    } catch (error) {
      console.error('Error parsing WebView message:', error);
    }
  };
  
  return (
    <View style={[styles.container, style]}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo={true}
        onMessage={handleMessage}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    position: 'relative',
  },
  webview: {
    backgroundColor: 'transparent',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default WebViewPlayer;
```

### 2.2 Модификация VideoWindow

```javascript
// src/components/VideoWindow.js
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import HLSVideoPlayer from './HLSVideoPlayer';
import { VideoView } from 'expo-video';
import WebViewPlayer from './WebViewPlayer';

/**
 * VideoWindow — обёртка для видео, которая при монтировании
 * разблокирует (разрешает) изменение ориентации только для окна видео,
 * а при размонтировании возвращает блокировку на портрет.
 *
 * Компонент выбирается в зависимости от типа URI и платформы:
 * - На веб используется HLSVideoPlayer
 * - Для HTTP URI на мобильных используется WebViewPlayer
 * - Для HTTPS URI на мобильных используется VideoView
 */
const VideoWindow = ({ currentChannel, videoWidth, videoHeight, player, controls = true }) => {
  useEffect(() => {
    async function unlockOrientation() {
      try {
        await ScreenOrientation.unlockAsync();
        console.log("Видео окно: ориентация разблокирована");
      } catch (error) {
        console.log("Ошибка разблокировки ориентации для видео:", error);
      }
    }
    unlockOrientation();

    return () => {
      async function lockOrientationBack() {
        try {
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
          console.log("Видео окно: ориентация снова заблокирована");
        } catch (error) {
          console.log("Ошибка повторной блокировки ориентации:", error);
        }
      }
      lockOrientationBack();
    };
  }, []);

  // Проверяем, является ли URI HTTP (не HTTPS)
  const isHttpUri = currentChannel?.uri?.startsWith('http:');
  
  if (Platform.OS === 'web') {
    return (
      <HLSVideoPlayer
        source={currentChannel.uri}
        style={{ width: videoWidth, height: videoHeight }}
        controls={controls}
      />
    );
  }
  
  // Для HTTP URI используем WebViewPlayer на мобильных платформах
  if (isHttpUri) {
    return (
      <WebViewPlayer
        source={currentChannel.uri}
        style={{ width: videoWidth, height: videoHeight }}
        controls={controls}
        onError={(error) => console.log('WebViewPlayer error:', error)}
        onReady={() => console.log('WebViewPlayer ready')}
      />
    );
  }

  // Для HTTPS URI используем стандартный VideoView
  return (
    <VideoView
      player={player}
      style={{ width: videoWidth, height: videoHeight }}
      useNativeControls={true}
      resizeMode="contain"
    />
  );
};

export default VideoWindow;
```

### 2.3 Дополнительные улучшения в RadioScreen

```javascript
// src/screens/RadioScreen.js (фрагмент)

// Добавить хук для обработки ошибок воспроизведения
const [playbackError, setPlaybackError] = useState(null);

// Модифицировать инициализацию плеера с обработкой ошибок
const player = useVideoPlayer(currentChannel?.uri, (player) => {
  if (player) {
    player.loop = true;
    player.staysActiveInBackground = true;
    
    // Добавляем обработчики ошибок
    player.onError = (error) => {
      console.error('Player error:', error);
      setPlaybackError(error);
    };
    
    player.play();
  }
});

// Добавить отображение ошибки, если она есть
{playbackError && (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>
      Ошибка воспроизведения: {playbackError.message || 'Неизвестная ошибка'}
    </Text>
  </View>
)}
```

## 3. Кеширование и оптимизация

### 3.1 Кеширование для WebView

```javascript
// Настройка для сохранения данных в кеше WebView
// Добавить в компонент WebViewPlayer

const cacheSettings = `
  <meta http-equiv="Cache-Control" content="max-age=3600">
`;

// HTML для воспроизведения видео теперь будет включать настройки кеширования
const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${cacheSettings}
      <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
      ...
`;
```

### 3.2 Кеширование манифестов плейлистов

```javascript
// src/services/cacheService.js
import * as FileSystem from 'expo-file-system';

const CACHE_DIRECTORY = FileSystem.cacheDirectory + 'playlists/';

export const setupCache = async () => {
  const dirInfo = await FileSystem.getInfoAsync(CACHE_DIRECTORY);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(CACHE_DIRECTORY, { intermediates: true });
  }
};

export const cachePlaylist = async (url, content) => {
  try {
    const fileName = url.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filePath = CACHE_DIRECTORY + fileName;
    await FileSystem.writeAsStringAsync(filePath, content);
    return filePath;
  } catch (error) {
    console.error('Ошибка кеширования плейлиста:', error);
    return null;
  }
};

export const getCachedPlaylist = async (url) => {
  try {
    const fileName = url.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filePath = CACHE_DIRECTORY + fileName;
    const fileInfo = await FileSystem.getInfoAsync(filePath);
    
    if (fileInfo.exists) {
      const content = await FileSystem.readAsStringAsync(filePath);
      return content;
    }
    return null;
  } catch (error) {
    console.error('Ошибка чтения кешированного плейлиста:', error);
    return null;
  }
};
```

## 4. Обработка ошибок

### 4.1 Индикация состояния воспроизведения

```javascript
// src/components/PlaybackStatusIndicator.js
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const PlaybackStatusIndicator = ({ status, error }) => {
  let content = null;
  
  if (error) {
    content = (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Ошибка: {error}</Text>
      </View>
    );
  } else if (status === 'buffering') {
    content = (
      <View style={styles.bufferingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.statusText}>Буферизация...</Text>
      </View>
    );
  }
  
  if (!content) return null;
  
  return (
    <View style={styles.container}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bufferingContainer: {
    alignItems: 'center',
  },
  errorContainer: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    maxWidth: '80%',
  },
  statusText: {
    color: '#ffffff',
    marginTop: 10,
  },
  errorText: {
    color: '#ff5555',
    textAlign: 'center',
  },
});

export default PlaybackStatusIndicator;
```

### 4.2 Автоматическое переключение на резервные источники

```javascript
// src/hooks/useReliableStream.js
import { useState, useEffect } from 'react';

/**
 * Хук для управления надежным воспроизведением стримов 
 * с автоматическим переключением на резервные источники при ошибках
 */
export const useReliableStream = (primarySource, fallbackSources = []) => {
  const [currentSource, setCurrentSource] = useState(primarySource);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('initial');
  
  const allSources = [primarySource, ...fallbackSources];
  
  useEffect(() => {
    // Сброс состояния при изменении источников
    setCurrentSource(primarySource);
    setSourceIndex(0);
    setError(null);
    setStatus('initial');
  }, [primarySource, JSON.stringify(fallbackSources)]);
  
  const handleError = (errorMessage) => {
    console.log(`Error playing source ${sourceIndex}:`, errorMessage);
    setError(errorMessage);
    
    // Пробуем следующий источник, если он есть
    const nextIndex = sourceIndex + 1;
    if (nextIndex < allSources.length) {
      console.log(`Switching to source ${nextIndex}`);
      setSourceIndex(nextIndex);
      setCurrentSource(allSources[nextIndex]);
      setStatus('switching');
    } else {
      setStatus('failed');
    }
  };
  
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus === 'playing') {
      setError(null);
    }
  };
  
  return {
    currentSource,
    status,
    error,
    onError: handleError,
    onStatusChange: handleStatusChange,
  };
};
```

## 5. План тестирования и отладки

1. **Прототипирование и отладка WebViewPlayer**:
   - Создать тестовый экран для проверки только WebViewPlayer
   - Тестировать с разными HTTP-источниками
   - Проверить обработку ошибок

2. **Интеграция с существующим VideoWindow**:
   - Добавить проверку HTTP/HTTPS и соответствующую логику выбора плеера
   - Сохранить обратную совместимость с HTTPS-потоками

3. **Тестирование производительности**:
   - Проверить использование памяти и CPU при воспроизведении через WebView
   - Оптимизировать в случае проблем

4. **Тестирование на разных устройствах**:
   - Android (разные версии)
   - iOS (разные версии)

## 6. Дополнительные улучшения (опционально)

### 6.1 Показ превью/миниатюр для каналов

Добавить запрос миниатюр каналов и показывать их в списке:

```javascript
// В компонент для списка каналов добавить логику загрузки миниатюр
const ChannelItem = ({ channel, ...props }) => {
  const [thumbnail, setThumbnail] = useState(null);
  
  useEffect(() => {
    // Функция для получения миниатюры из видеопотока
    const loadThumbnail = async () => {
      try {
        // Логика получения миниатюры...
        // Может быть как статический URL, так и динамический захват
      } catch (error) {
        console.log('Ошибка загрузки миниатюры:', error);
      }
    };
    
    loadThumbnail();
  }, [channel.uri]);
  
  return (
    <TouchableOpacity {...props}>
      <View style={styles.channelItemContainer}>
        {thumbnail ? (
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        ) : (
          <View style={styles.placeholderThumbnail} />
        )}
        <Text style={styles.channelTitle}>{channel.metadata.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
```

### 6.2 Переключение качества потока

Для HLS-потоков добавить возможность выбора качества:

```javascript
// Добавить в WebViewPlayer
const qualitySelectionScript = `
  // Получение доступных качеств
  function getQualityLevels() {
    if (window.hls && window.hls.levels) {
      const levels = window.hls.levels.map((level, index) => ({
        index,
        height: level.height,
        bitrate: level.bitrate
      }));
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'qualityLevels',
        levels
      }));
    }
  }
  
  // Установка качества
  function setQuality(index) {
    if (window.hls) {
      window.hls.currentLevel = index;
    }
  }
`;
```

## 7. Сроки и этапы реализации

1. **Этап 1: Создание WebViewPlayer и базовая интеграция** (2-3 дня)
   - Создание компонента WebViewPlayer
   - Базовое воспроизведение HTTP-стримов
   - Тестирование отдельного компонента

2. **Этап 2: Модификация VideoWindow и интеграция в приложение** (1-2 дня)
   - Логика выбора плеера в зависимости от URI
   - Интеграция с существующим кодом
   - Базовое тестирование интеграции

3. **Этап 3: Кеширование и обработка ошибок** (2-3 дня)
   - Реализация кеширования
   - Добавление обработки ошибок и индикаторов состояния
   - Тестирование на разных устройствах и сетях

4. **Этап 4: Оптимизация и доработка** (1-2 дня)
   - Оптимизация производительности
   - Устранение выявленных проблем
   - Финальное тестирование

5. **Этап 5: Документация и развертывание** (1 день)
   - Документирование решения
   - Подготовка релиза
