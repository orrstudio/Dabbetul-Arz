# Сценарий сборки Android-приложения

## Подготовка к сборке

### Установка bundletool
1. Скачать bundletool:
```bash
cd ~/GitHub/Dabbetul-Arz/.tools/bundletool
wget https://github.com/google/bundletool/releases/download/1.15.6/bundletool-all-1.15.6.jar
```

### Очистка проекта
1. Удалить кэш и временные файлы и файлы от старой сборки:
```bash
cd ~/GitHub/Dabbetul-Arz/
rm -rf android/app/build
rm -rf android/build
rm -rf node_modules/.cache
rm -rf .tools/extracted_apks/*
rm -rf .tools/artifacts/*.apks
rm -rf .tools/artifacts/*.aab
npm cache clean --force
```

2. Обновить зависимости:
```bash
npm install
```

## Сборка приложения

### Удаленная сборка
```bash
npx eas build -p android
```

### Сохранение артефактов
1. Скачать AAB-файл с сервера Expo:
```bash
# Вставить ссылку, полученную после сборки
wget -O ~/GitHub/Dabbetul-Arz/.tools/artifacts/app.aab [ССЫЛКА_НА_AAB]
```

### Использование bundletool
1. После сборки обязательно конвертировать AAB в APK:
```bash
java -jar ~/GitHub/Dabbetul-Arz/.tools/bundletool/bundletool-all-1.15.6.jar build-apks \
  --bundle=~/GitHub/Dabbetul-Arz/.tools/artifacts/app.aab \
  --output=~/GitHub/Dabbetul-Arz/.tools/artifacts/app.apks \
  --device-spec=~/GitHub/Dabbetul-Arz/.tools/device-spec.json
```

2. Извлечение APK:
```bash
java -jar ~/GitHub/Dabbetul-Arz/.tools/bundletool/bundletool-all-1.15.6.jar extract-apks \
  --apks=~/GitHub/Dabbetul-Arz/.tools/artifacts/app.apks \
  --output-dir=~/GitHub/Dabbetul-Arz/.tools/extracted_apks \
  --device-spec=~/GitHub/Dabbetul-Arz/.tools/device-spec.json
```

### Подпись APK (опционально)
Подпись требуется в следующих случаях:
- Публикация в Google Play Store
- Распространение приложения вне официальных магазинов
- Обновление существующей версии приложения
- Тестирование на устройствах с включенной проверкой подписи

Команда подписи:
```bash
java -jar ~/GitHub/Dabbetul-Arz/.tools/bundletool/bundletool-all-1.15.6.jar build-apks \
  --bundle=~/GitHub/Dabbetul-Arz/.tools/artifacts/app.aab \
  --output=~/GitHub/Dabbetul-Arz/.tools/artifacts/app.apks \
  --device-spec=~/GitHub/Dabbetul-Arz/.tools/device-spec.json \
  --ks=~/GitHub/Dabbetul-Arz/.tools/my-upload-key.keystore \
  --ks-pass=pass:ваш_пароль \
  --ks-key-alias=ваш_алиас
```

## Установка на устройство

### Установка на устройство
1. Подключить Android-устройство по USB:
```bash
# Включить режим разработчика на телефоне
# Разрешить отладку по USB
adb devices  # Проверить подключение
```

2. Установка APK:
```bash
# Выбрать конкретный APK для установки
adb install ~/GitHub/Dabbetul-Arz/.tools/extracted_apks/base-master.apk
```

### Troubleshooting установки
- Если устройство не определяется: 
  1. Проверить USB-кабель
  2. Перезапустить ADB-сервер: `adb kill-server && adb start-server`
- Возможные ошибки при установке:
  - `INSTALL_FAILED_VERSION_DOWNGRADE`: удалить старую версию
  - `INSTALL_PARSE_FAILED_NO_CERTIFICATES`: проверить подпись APK

## Важные замечания
- **НИКОГДА** не используйте `expo build:android` (устарело)
- Всегда используйте `npx eas build -p android`
- Сборка всегда производится на удаленных серверах Expo
- Перед сборкой всегда очищайте кэш и временные файлы
- Всегда проверяйте версию bundletool
- Используйте последнюю стабильную версию
- Храните bundletool в отдельной папке проекта

## Возможные проблемы и их решение

### Ошибки зависимостей
- Если возникают ошибки с зависимостями, выполните:
```bash
npm install
npm audit fix
```

### Обновление проекта
- При необходимости обновить Expo:
```bash
npx expo upgrade
```

## Развертывание

- Собранный APK/AAB всегда доступен по ссылке на сервисе Expo
- Для установки используйте ссылку, сгенерированную во время сборки

## Контроль версий

- Каждая сборка автоматически увеличивает `versionCode` и `versionName`
- Следите за версиями в `app.json` и `eas.json`
