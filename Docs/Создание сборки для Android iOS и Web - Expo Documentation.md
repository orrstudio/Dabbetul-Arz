---
created: 2025-02-17T12:59:19 (UTC +04:00)
source: https://docs.expo.dev/build/setup/
---

# [СОЗДАНИЕ СБОРКИ для Android iOS и Web](https://www.youtube.com/watch?v=iCwxkm2PkQE)

> 💡 EAS Build позволяет вам создавать двоичный файл вашего приложения для готового к отправке для Google Play Store или Apple App Store.  
>  
> 💡 EAS Build доступна для всех с учетной записью Expo, независимо от того, платите ли вы за EAS или используете наш бесплатный план. Вы можете зарегистрироваться на [https://expo.dev/signup](https://expo.dev/signup).  
> 

## 1. Установка EAS CLI

EAS CLI-это приложение для взаимодействия с услугами EAS с вашего терминала. Для установки:  
```
npm install -g eas-cli
```
или
```
npx eas-cli@latest
```
Это к тому же проверит, доступна ли новая версия EAS CLI. 

## 2. Войдите в свою учетную запись Expo

> 💡 Если вы уже вошли в учетную запись Expo, пропустите эти шаги. 

Команда для входа в систему:

```
eas login
```

Команда для проверки вошли ли вы в систему:
```
eas whoami
```

## 4. [Документация по запуску сборки для Android и iOS](https://docs.expo.dev/build/setup/) Нажмите чтобы прочесть 

## 5. Запуск сборки для Web

> 💡 Это создаст в корневой директории проекта папку `dist`. Если она есть, удалите ее.

```
npx expo export --platform web
```

## 6. Развернуть сборку на сайте
 
```bash
eas deploy --prod
```