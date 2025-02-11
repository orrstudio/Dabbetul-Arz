---
created: 2025-02-08T14:38:29 (UTC +04:00)
tags: []
source: https://docs.expo.dev/versions/latest/sdk/video/#configuration-in-app-config
author: 
---

# Video (expo-video) - Expo Documentation

> ## Excerpt
> A library that provides an API to implement video playback in apps.

---
A library that provides an API to implement video playback in apps.

___

`expo-video` is a cross-platform, performant video component for React Native and Expo with Web support.

## Installation[](https://docs.expo.dev/versions/latest/sdk/video/#installation)

`-` `npx expo install expo-video`

Если вы устанавливаете это в [существующем нативном приложении React](https://docs.expo.dev/bare/overview) , начните с [установка `expo`](https://docs.expo.dev/bare/installing-expo-modules) в вашем проекте. Затем следуйте [Дополнительные инструкции](https://github.com/expo/expo/tree/main/packages/expo-video) Как упоминалось в чтце библиотеки под «Установка в раздел« Голые реагируемые проекты » .

## Конфигурация в конфигурации приложения[](https://docs.expo.dev/versions/latest/sdk/video/#configuration-in-app-config)

Вы можете настроить `expo-video` Использование встроенного [плагина конфигурации](https://docs.expo.dev/config-plugins/introduction) , если вы используете плагины конфигурации в своем проекте ( [EAS Build](https://docs.expo.dev/build/introduction) или `npx expo run:[android|ios]`) Плагин позволяет настроить различные свойства, которые не могут быть установлены во время выполнения, и требуют создания нового двоичного приложения для вступления в силу. Если в вашем приложении не используется сборка EAS, вам нужно вручную настроить пакет.

### Пример app.json с плагином конфигурации[](https://docs.expo.dev/versions/latest/sdk/video/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": [
      [
        "expo-video",
        {
          "supportsBackgroundPlayback": true,
          "supportsPictureInPicture": true
        }
      ]
    ],
  }
}
```

### Настраиваемые свойства[](https://docs.expo.dev/versions/latest/sdk/video/#configurable-properties)

| Имя | По умолчанию | Описание |
| --- | --- | --- |
| `supportsBackgroundPlayback` | `undefined` | 
Только для:  

iOS

  

Логическое значение для включения фона воспроизведения на iOS. Если `true`, `audio` Ключ добавляется в `UIBackgroundModes` массив в файле info.plist . Если `false`, ключ удален. Когда `undefined`, ключ не модифицирован.

 |
| `supportsPictureInPicture` | `undefined` | 

Логическое значение, чтобы включить картину на Android и iOS. Если `true`, позволяет `android:supportsPictureInPicture` свойство на Android и добавляет `audio` ключ к `UIBackgroundModes` Массив в файле info.plist на iOS. Если `false`, ключ удален. Когда `undefined`, конфигурация не изменена.

 |

## Использование[](https://docs.expo.dev/versions/latest/sdk/video/#usage)

Вот простой пример видео с кнопкой воспроизведения и паузы.

```
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, Button } from 'react-native';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function VideoScreen() {
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.contentContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
```

### Получение событий[](https://docs.expo.dev/versions/latest/sdk/video/#receiving-events)

Изменения в свойствах [`VideoPlayer`](https://docs.expo.dev/versions/latest/sdk/video#videoplayer) Не обновляйте состояние React. Поэтому, чтобы отобразить информацию о текущем состоянии `VideoPlayer`, необходимо выслушать [события,](https://docs.expo.dev/versions/latest/sdk/video#videoplayerevents) которые они излучают. Система событий основана на [`EventEmitter`](https://docs.expo.dev/versions/latest/sdk/expo#eventemitter) класс и [крючки](https://docs.expo.dev/versions/latest/sdk/expo#hooks) от [`expo`](https://docs.expo.dev/versions/latest/sdk/expo) упаковка. Есть несколько способов выслушать события:

#### `useEvent` крюк[](https://docs.expo.dev/versions/latest/sdk/video/#useevent-hook)

Создает слушателя, который вернет стационарное значение, которое можно использовать в компоненте. Он также очищается автоматически, когда компонент наносит на нет компонент.

```
import { useEvent } from 'expo';
// ... Other imports, definition of the component, creating the player etc.

const { status, error } = useEvent(player, 'statusChange', { status: player.status });
// Rest of the component...
```

#### `useEventListener` крюк[](https://docs.expo.dev/versions/latest/sdk/video/#useeventlistener-hook)

Построен вокруг `Player.addListener` и `Player.removeListener` Методы создают слушателя событий с автоматической очисткой.

```
import { useEventListener } from 'expo';
// ...Other imports, definition of the component, creating the player etc.

useEventListener(player, 'statusChange', ({ status, error }) => {
  setPlayerStatus(status);
  setPlayerError(error);
  console.log('Player status changed: ', status);
});
// Rest of the component...
```

#### `Player.addListener` метод[](https://docs.expo.dev/versions/latest/sdk/video/#playeraddlistener-method)

Самый гибкий способ прослушивания событий, но требует ручной очистки и большего количества кода шаблона.

```
// ...Imports, definition of the component, creating the player etc.

useEffect(() => {
  const subscription = player.addListener('statusChange', ({ status, error }) => {
    setPlayerStatus(status);
    setPlayerError(error);
    console.log('Player status changed: ', status);
  });

  return () => {
    subscription.remove();
  };
}, []);
// Rest of the component...
```

### Воспроизведение локального мультимедиа из каталога ресурсов[](https://docs.expo.dev/versions/latest/sdk/video/#playing-local-media-from-the-assets-directory)

`expo-video` поддерживает воспроизведение локальных медиа, загруженных с использованием `require` функция Вы можете использовать результат в качестве источника напрямую или назначить его `assetId` параметр а [`VideoSource`](https://docs.expo.dev/versions/latest/sdk/video#videosource) Если вы также хотите настроить другие свойства.

```
import { VideoSource } from 'expo-video';

const assetId = require('./assets/bigbuckbunny.mp4');

const videoSource: VideoSource = {
  assetId,
  metadata: {
    title: 'Big Buck Bunny',
    artist: 'The Open Movie Project',
  },
};

const player1 = useVideoPlayer(assetId); // You can use the `asset` directly as a video source
const player2 = useVideoPlayer(videoSource);
```

### Предварительная загрузка видео[](https://docs.expo.dev/versions/latest/sdk/video/#preloading-videos)

В то время как другое видео воспроизводится, видео можно загрузить, прежде чем показать его в представлении. Это обеспечивает более быстрые переходы между последующими видео и лучшим пользовательским опытом.

Чтобы предварительно загрузить видео, вы должны создать `VideoPlayer` С источником видео. Даже когда игрок не подключен к `VideoView`, это заполнит буферы. Как только он будет подключен к `VideoView`, он сможет начать играть без буферизации.

В некоторых случаях полезно предварительно загружать видео позже в жизненном цикле экрана. В этом случае `VideoPlayer` с `null` Источник должен быть создан. Чтобы начать предварительное загрузку, замените источник игрока на видео источника, используя `replace()` функция

Вот пример того, как предварительно загружать видео:

Предварительная загрузка видео

```
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const bigBuckBunnySource: VideoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const elephantsDreamSource: VideoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

export default function PreloadingVideoPlayerScreen() {
  const player1 = useVideoPlayer(bigBuckBunnySource, player => {
    player.play();
  });

  const player2 = useVideoPlayer(elephantsDreamSource, player => {
    player.currentTime = 20;
  });

  const [currentPlayer, setCurrentPlayer] = useState(player1);

  const replacePlayer = useCallback(async () => {
    currentPlayer.pause();
    if (currentPlayer === player1) {
      setCurrentPlayer(player2);
      player1.pause();
      player2.play();
    } else {
      setCurrentPlayer(player1);
      player2.pause();
      player1.play();
    }
  }, [player1, currentPlayer]);

  return (
    <View style={styles.contentContainer}>
      <VideoView player={currentPlayer} style={styles.video} nativeControls={false} />
      <TouchableOpacity style={styles.button} onPress={replacePlayer}>
        <Text style={styles.buttonText}>Replace Player</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#4630ec',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#eeeeee',
    textAlign: 'center',
  },
  video: {
    width: 300,
    height: 168.75,
    marginVertical: 20,
  },
});
```

### Using the VideoPlayer directly[](https://docs.expo.dev/versions/latest/sdk/video/#using-the-videoplayer-directly)

In most cases, the [`useVideoPlayer`](https://docs.expo.dev/versions/latest/sdk/video#usevideoplayersource-setup) hook should be used to create a `VideoPlayer` instance. It manages the player's lifecycle and ensures that it is properly disposed of when the component is unmounted. However, in some advanced use cases, it might be necessary to create a `VideoPlayer` that does not get automatically destroyed when the component is unmounted. In those cases, the `VideoPlayer` can be created using the [`createVideoPlayer`](https://docs.expo.dev/versions/latest/sdk/video#videocreatevideoplayersource) function. You need be aware of the risks that come with this approach, as it is your responsibility to call the [`release()`](https://docs.expo.dev/versions/latest/sdk/expo#release) method when the player is no longer needed. If not handled properly, this approach may lead to memory leaks.

```
import { createVideoPlayer } from 'expo-video';
const player = createVideoPlayer(videoSource);
```

## API[](https://docs.expo.dev/versions/latest/sdk/video/#api)

```
import { VideoView, useVideoPlayer } from 'expo-video';
```

## Component[](https://docs.expo.dev/versions/latest/sdk/video/#component)

### `VideoView`[](https://docs.expo.dev/versions/latest/sdk/video/#videoview)

Type: `React.[PureComponent](https://react.dev/reference/react/PureComponent)<[VideoViewProps](https://docs.expo.dev/versions/latest/sdk/video/#videoviewprops)>`

VideoViewProps[](https://docs.expo.dev/versions/latest/sdk/video/#videoviewprops)

### `allowsFullscreen`[](https://docs.expo.dev/versions/latest/sdk/video/#allowsfullscreen)

Optional • 

Type:

`boolean` • Default: `true`

Determines whether fullscreen mode is allowed or not.

### `allowsPictureInPicture`[](https://docs.expo.dev/versions/latest/sdk/video/#allowspictureinpicture)

Determines whether the player allows Picture in Picture (PiP) mode.

> Note: The `supportsPictureInPicture` property of the [config plugin](https://docs.expo.dev/versions/latest/sdk/video/#configuration-in-app-config) has to be configured for the PiP to work.

### `allowsVideoFrameAnalysis`[](https://docs.expo.dev/versions/latest/sdk/video/#allowsvideoframeanalysis)

Optional • 

Type:

`boolean` • Default: `true`

Specifies whether to perform video frame analysis (Live Text in videos). Check official [Apple documentation](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/allowsvideoframeanalysis) for more details.

### `contentFit`[](https://docs.expo.dev/versions/latest/sdk/video/#contentfit)

Optional • 

Type:

`[VideoContentFit](https://docs.expo.dev/versions/latest/sdk/video/#videocontentfit)` • Default: `'contain'`

Describes how the video should be scaled to fit in the container. Options are `'contain'`, `'cover'`, and `'fill'`.

### `contentPosition`[](https://docs.expo.dev/versions/latest/sdk/video/#contentposition)

Optional • 

Type:

`{ dx: number, dy: number }`

Определяет смещение позиции видео внутри контейнера.

### `nativeControls`[](https://docs.expo.dev/versions/latest/sdk/video/#nativecontrols)

Необязательный •

Тип:

`boolean` • По умолчанию: `true`

Определяет, должны ли отображаться собственные элементы управления или нет.

### `onFullscreenEnter`[](https://docs.expo.dev/versions/latest/sdk/video/#onfullscreenenter)

Необязательный •

Тип:

`() => void`

Обратный вызов для вызова после перехода видеоплеера в полноэкранный режим.

### `onFullscreenExit`[](https://docs.expo.dev/versions/latest/sdk/video/#onfullscreenexit)

Необязательный •

Тип:

`() => void`

Обратный вызов для вызова после выхода видеоплеера из полноэкранного режима.

### `onPictureInPictureStart`[](https://docs.expo.dev/versions/latest/sdk/video/#onpictureinpicturestart)

Необязательный •

Тип:

`() => void`

Обратный вызов для вызова после того, как видеоплеер перейдет в режим «Картинка в картинке» (PiP).

### `onPictureInPictureStop`[](https://docs.expo.dev/versions/latest/sdk/video/#onpictureinpicturestop)

Необязательный •

Тип:

`() => void`

Обратный вызов для вызова после выхода видеоплеера из режима «Картинка в картинке» (PiP).

### `player`[](https://docs.expo.dev/versions/latest/sdk/video/#player)

Экземпляр видеоплеера. Использовать [`useVideoPlayer()`](https://docs.expo.dev/versions/latest/sdk/video/#usevideoplayersource-setup) крючок для его создания.

### `requiresLinearPlayback`[](https://docs.expo.dev/versions/latest/sdk/video/#requireslinearplayback)

Необязательный •

Тип:

`boolean` • По умолчанию: `false`

Определяет, позволяет ли проигрыватель пользователю пропускать мультимедийный контент.

### `showsTimecodes`[](https://docs.expo.dev/versions/latest/sdk/video/#showstimecodes)

Необязательный •

Тип:

`boolean` • По умолчанию: `true`

Определяет, должны ли отображаться таймкоды или нет.

### `startsPictureInPictureAutomatically`[](https://docs.expo.dev/versions/latest/sdk/video/#startspictureinpictureautomatically)

Необязательный •

Тип:

`boolean` • По умолчанию: `false`

Определяет, должен ли проигрыватель автоматически запускать «Картинка в картинке» (PiP), когда приложение находится в фоновом режиме.

> Примечание. Одновременно в режиме «Картинка в картинке» (PiP) может находиться только один игрок.

> : Примечание `supportsPictureInPicture` свойство [плагина конфигурации](https://docs.expo.dev/versions/latest/sdk/video/#configuration-in-app-config) необходимо настроить для работы PiP.

## Методы компонента[](https://docs.expo.dev/versions/latest/sdk/video/#component-methods)

### `enterFullscreen()`[](https://docs.expo.dev/versions/latest/sdk/video/#enterfullscreen)

Переход в полноэкранный режим.

### `exitFullscreen()`[](https://docs.expo.dev/versions/latest/sdk/video/#exitfullscreen)

Выход из полноэкранного режима.

### `startPictureInPicture()`[](https://docs.expo.dev/versions/latest/sdk/video/#startpictureinpicture)

Переход в режим «Картинка в картинке» (PiP). Выдает исключение, если устройство не поддерживает PiP.

> Примечание. Одновременно в режиме «Картинка в картинке» (PiP) может находиться только один игрок.

> : Примечание `supportsPictureInPicture` свойство [плагина конфигурации](https://docs.expo.dev/versions/latest/sdk/video/#configuration-in-app-config) необходимо настроить для работы PiP.

### `stopPictureInPicture()`[](https://docs.expo.dev/versions/latest/sdk/video/#stoppictureinpicture)

Выход из режима «Картинка в картинке» (PiP).

## Hooks[](https://docs.expo.dev/versions/latest/sdk/video/#hooks)

### `useVideoPlayer(source, setup)`[](https://docs.expo.dev/versions/latest/sdk/video/#usevideoplayersource-setup)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `[VideoSource](https://docs.expo.dev/versions/latest/sdk/video/#videosource)` | 
A video source that is used to initialize the player.

 |
| setup(optional) | `(player: [VideoPlayer](https://docs.expo.dev/versions/latest/sdk/video/#videoplayer)) => void` | 

A function that allows setting up the player. It will run after the player is created.

 |

  

Создает `VideoPlayer`, который будет автоматически очищен при размонтировании компонента.

## Классы[](https://docs.expo.dev/versions/latest/sdk/video/#classes)

### `VideoPlayer`[](https://docs.expo.dev/versions/latest/sdk/video/#videoplayer)

Тип: Класс расширяется `[SharedObject](https://docs.expo.dev/versions/v52.0.0/sdk/expo#sharedobject)<[VideoPlayerEvents](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents)>`

Класс, представляющий экземпляр видеоплеера.

Свойства видеоплеера

### `allowsExternalPlayback`[](https://docs.expo.dev/versions/latest/sdk/video/#allowsexternalplayback)

Тип:

`boolean` • По умолчанию: `true`

Определяет, должен ли проигрыватель разрешать внешнее воспроизведение.

### `audioMixingMode`[](https://docs.expo.dev/versions/latest/sdk/video/#audiomixingmode)

Тип:

`[AudioMixingMode](https://docs.expo.dev/versions/latest/sdk/video/#audiomixingmode)` • По умолчанию: `'auto'`

Определяет, как плеер будет взаимодействовать с другим звуком, воспроизводимым в системе.

### `availableSubtitleTracks`[](https://docs.expo.dev/versions/latest/sdk/video/#availablesubtitletracks)

Только чтение •

Тип:

`[SubtitleTrack[]](https://docs.expo.dev/versions/latest/sdk/video/#subtitletrack)`

Массив дорожек субтитров, доступных для текущего видео.

### `bufferedPosition`[](https://docs.expo.dev/versions/latest/sdk/video/#bufferedposition)

Только чтение •

Тип:

`number`

Плавающее значение, указывающее, насколько далеко проигрыватель буферизировал видео в секундах.

Это значение равно 0, если проигрыватель не выполнил буферизацию до текущего времени воспроизведения. Когда невозможно определить состояние буфера (например, когда проигрыватель не воспроизводит медиафайлы), это значение равно -1.

### `bufferOptions`[](https://docs.expo.dev/versions/latest/sdk/video/#bufferoptions)

Specifies buffer options which will be used by the player when buffering the video.

> You should provide a `BufferOptions` object when setting this property. Setting individual buffer properties is not supported.

### `currentLiveTimestamp`[](https://docs.expo.dev/versions/latest/sdk/video/#currentlivetimestamp)

Read Only • 

Type:

`null | number`

The exact timestamp when the currently displayed video frame was sent from the server, based on the `EXT-X-PROGRAM-DATE-TIME` tag in the livestream metadata. If this metadata is missing, this property will return `null`.

### `currentOffsetFromLive`[](https://docs.expo.dev/versions/latest/sdk/video/#currentoffsetfromlive)

Read Only • 

Type:

`null | number`

Float value indicating the latency of the live stream in seconds. If a livestream doesn't have the required metadata, this will return `null`.

### `currentTime`[](https://docs.expo.dev/versions/latest/sdk/video/#currenttime)

Float value indicating the current playback time in seconds.

If the player is not yet playing, this value indicates the time position at which playback will begin once the `play()` method is called.

Setting `currentTime` to a new value seeks the player to the given time.

### `duration`[](https://docs.expo.dev/versions/latest/sdk/video/#duration)

Float value indicating the duration of the current video in seconds.

### `isLive`[](https://docs.expo.dev/versions/latest/sdk/video/#islive)

Read Only • 

Type:

`boolean`

Boolean value indicating whether the player is currently playing a live stream.

### `loop`[](https://docs.expo.dev/versions/latest/sdk/video/#loop)

Type:

`boolean` • Default: `false`

Determines whether the player should automatically replay after reaching the end of the video.

### `muted`[](https://docs.expo.dev/versions/latest/sdk/video/#muted)

Type:

`boolean` • Default: `false`

Boolean value whether the player is currently muted. Setting this property to `true`/`false` will mute/unmute the player.

### `playbackRate`[](https://docs.expo.dev/versions/latest/sdk/video/#playbackrate)

Type:

`number` • Default: `1.0`

Float value between `0` and `16.0` indicating the current playback speed of the player.

### `playing`[](https://docs.expo.dev/versions/latest/sdk/video/#playing)

Read Only • 

Type:

`boolean`

Boolean value whether the player is currently playing.

> Use `play` and `pause` methods to control the playback.

### `preservesPitch`[](https://docs.expo.dev/versions/latest/sdk/video/#preservespitch)

Type:

`boolean` • Default: `true`

Boolean value indicating if the player should correct audio pitch when the playback speed changes.

### `showNowPlayingNotification`[](https://docs.expo.dev/versions/latest/sdk/video/#shownowplayingnotification)

Type:

`boolean` • Default: `false`

Boolean value determining whether the player should show the now playing notification.

### `status`[](https://docs.expo.dev/versions/latest/sdk/video/#status)

Read Only • 

Type:

`[VideoPlayerStatus](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerstatus)`

Indicates the current status of the player.

### `staysActiveInBackground`[](https://docs.expo.dev/versions/latest/sdk/video/#staysactiveinbackground)

Type:

`boolean` • Default: `false`

Determines whether the player should continue playing after the app enters the background.

### `subtitleTrack`[](https://docs.expo.dev/versions/latest/sdk/video/#subtitletrack)

Type:

`null | [SubtitleTrack](https://docs.expo.dev/versions/latest/sdk/video/#subtitletrack)` • Default: `null`

Specifies the subtitle track which is currently displayed by the player. `null` when no subtitles are displayed.

> To ensure a valid subtitle track, always assign one of the subtitle tracks from the [`availableSubtitleTracks`](https://docs.expo.dev/versions/latest/sdk/video/#availablesubtitletracks) array.

### `targetOffsetFromLive`[](https://docs.expo.dev/versions/latest/sdk/video/#targetoffsetfromlive)

Float value indicating the time offset from the live in seconds.

### `timeUpdateEventInterval`[](https://docs.expo.dev/versions/latest/sdk/video/#timeupdateeventinterval)

Type:

`number` • Default: `0`

Float value indicating the interval in seconds at which the player will emit the [`timeUpdate`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event. When the value is equal to `0`, the event will not be emitted.

### `volume`[](https://docs.expo.dev/versions/latest/sdk/video/#volume)

Type:

`number` • Default: `1.0`

Float value between `0` and `1.0` representing the current volume. Muting the player doesn't affect the volume. In other words, when the player is muted, the volume is the same as when unmuted. Similarly, setting the volume doesn't unmute the player.

VideoPlayer Methods

### `generateThumbnailsAsync(times)`[](https://docs.expo.dev/versions/latest/sdk/video/#generatethumbnailsasynctimes)

| Parameter | Type |
| --- | --- |
| times | `number | number[]` |

  

Generates thumbnails from the currently played asset. The thumbnails are references to native images, thus they can be used as a source of the `Image` component from `expo-image`.

### `pause()`[](https://docs.expo.dev/versions/latest/sdk/video/#pause)

### `play()`[](https://docs.expo.dev/versions/latest/sdk/video/#play)

### `replace(source)`[](https://docs.expo.dev/versions/latest/sdk/video/#replacesource)

| Parameter | Type |
| --- | --- |
| source | `[VideoSource](https://docs.expo.dev/versions/latest/sdk/video/#videosource)` |

  

Replaces the current source with a new one.

### `replay()`[](https://docs.expo.dev/versions/latest/sdk/video/#replay)

Seeks the playback to the beginning.

### `seekBy(seconds)`[](https://docs.expo.dev/versions/latest/sdk/video/#seekbyseconds)

| Parameter | Type |
| --- | --- |
| seconds | `number` |

  

Seeks the playback by the given number of seconds.

### `VideoThumbnail`[](https://docs.expo.dev/versions/latest/sdk/video/#videothumbnail)

Type: Class extends `[SharedRef](https://docs.expo.dev/versions/v52.0.0/sdk/expo#sharedref)<'image'>`

Represents a video thumbnail that references a native image. Instances of this class can be passed as a source to the `Image` component from `expo-image`.

VideoThumbnail Properties

### `actualTime`[](https://docs.expo.dev/versions/latest/sdk/video/#actualtime)

The time in seconds at which the thumbnail was actually generated.

### `height`[](https://docs.expo.dev/versions/latest/sdk/video/#height)

Height of the created thumbnail.

### `nativeRefType`[](https://docs.expo.dev/versions/latest/sdk/video/#nativereftype)

The type of the native reference.

### `requestedTime`[](https://docs.expo.dev/versions/latest/sdk/video/#requestedtime)

The time in seconds at which the thumbnail was to be created.

### `width`[](https://docs.expo.dev/versions/latest/sdk/video/#width)

Width of the created thumbnail.

## Methods[](https://docs.expo.dev/versions/latest/sdk/video/#methods)

### `Video.createVideoPlayer(source)`[](https://docs.expo.dev/versions/latest/sdk/video/#videocreatevideoplayersource)

| Parameter | Type |
| --- | --- |
| source | `[VideoSource](https://docs.expo.dev/versions/latest/sdk/video/#videosource)` |

  

Creates a direct instance of `VideoPlayer` that doesn't release automatically.

> For most use cases you should use the [`useVideoPlayer`](https://docs.expo.dev/versions/latest/sdk/video/#usevideoplayer) hook instead. See the [Using the VideoPlayer Directly](https://docs.expo.dev/versions/latest/sdk/video/#using-the-videoplayer-directly) section for more details.

### `Video.isPictureInPictureSupported()`[](https://docs.expo.dev/versions/latest/sdk/video/#videoispictureinpicturesupported)

Returns whether the current device supports Picture in Picture (PiP) mode.

> Note: All major web browsers support Picture in Picture (PiP) mode except Firefox. For more information, see [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API#browser_compatibility).

A `boolean` which is `true` if the device supports PiP mode, and `false` otherwise.

## Types[](https://docs.expo.dev/versions/latest/sdk/video/#types)

### `AudioMixingMode`[](https://docs.expo.dev/versions/latest/sdk/video/#audiomixingmode-1)

Literal Type: `string`

Specifies the audio mode that the player should use. Audio mode is set on per-app basis, if there are multiple players playing and have different a `AudioMode` specified, the highest priority mode will be used. Priority order: 'doNotMix' > 'auto' > 'duckOthers' > 'mixWithOthers'.

-   `mixWithOthers`: The player will mix its audio output with other apps.
-   `duckOthers`: The player will lower the volume of other apps if any of the active players is outputting audio.
-   `auto`: The player will allow other apps to keep playing audio only when it is muted. On iOS it will always interrupt other apps when `showNowPlayingNotification` is `true` due to system requirements.
-   `doNotMix`: The player will pause playback in other apps, even when it's muted.

> On iOS, the Now Playing notification is dependent on the audio mode. If the audio mode is different from `doNotMix` or `auto` this feature will not work.

Acceptable values are: `'mixWithOthers'` | `'duckOthers'` | `'auto'` | `'doNotMix'`

### `BufferOptions`[](https://docs.expo.dev/versions/latest/sdk/video/#bufferoptions-1)

Specifies buffer options which will be used by the player when buffering the video.

| Property | Type | Description |
| --- | --- | --- |
| maxBufferBytes(optional) | `number | null` | 
Only for: 

Android

  

The maximum number of bytes that the player can buffer from the network. When 0 the player will automatically decide appropriate buffer size.

Default:`0`



 |
| minBufferForPlayback(optional) | `number` | 

Only for: 

Android

  

Minimum duration of the buffer in seconds required to continue playing after the player has been paused or started buffering.

> This property will be ignored if `preferredForwardBufferDuration` is lower.

Default:`2`



 |
| preferredForwardBufferDuration(optional) | `number` | 

Only for: 

Android

iOS

  

The duration in seconds which determines how much media the player should buffer ahead of the current playback time.

On iOS when set to `0` the player will automatically decide appropriate buffer duration.

Equivalent to [`AVPlayerItem.preferredForwardBufferDuration`](https://developer.apple.com/documentation/avfoundation/avplayeritem/1643630-preferredforwardbufferduration).

Default:`Android: 20, iOS: 0`



 |
| prioritizeTimeOverSizeThreshold(optional) | `boolean` | 

Only for: 

Android

  

A Boolean value which determines whether the player should prioritize time over size when buffering media.

Default:`false`



 |
| waitsToMinimizeStalling(optional) | `boolean` | 

Only for: 

iOS

  

A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.

Equivalent to [`AVPlayer.automaticallyWaitsToMinimizeStalling`](https://developer.apple.com/documentation/avfoundation/avplayer/1643482-automaticallywaitstominimizestal).

Default:`true`



 |

### `DRMOptions`[](https://docs.expo.dev/versions/latest/sdk/video/#drmoptions)

Specifies DRM options which will be used by the player while loading the video.

| Property | Type | Description |
| --- | --- | --- |
| base64CertificateData(optional) | `string` | 
Only for: 

iOS

  

Specifies the base64 encoded certificate data for the FairPlay DRM. When this property is set, the `certificateUrl` property is ignored.



 |
| certificateUrl(optional) | `string` | 

Only for: 

iOS

  

Specifies the certificate URL for the FairPlay DRM.



 |
| contentId(optional) | `string` | 

Only for: 

iOS

  

Specifies the content ID of the stream.



 |
| headers(optional) | `Record<string, string>` | 

Determines headers sent to the license server on license requests.

 |
| licenseServer | `string` | 

Determines the license server URL.

 |
| multiKey(optional) | `boolean` | 

Only for: 

Android

  

Specifies whether the DRM is a multi-key DRM.



 |
| type | `[DRMType](https://docs.expo.dev/versions/latest/sdk/video/#drmtype)` | 

Determines which type of DRM to use.

 |

### `DRMType`[](https://docs.expo.dev/versions/latest/sdk/video/#drmtype)

Literal Type: `string`

Specifies which type of DRM to use:

-   Android supports ClearKey, PlayReady and Widevine.
-   iOS supports FairPlay.

Acceptable values are: `'clearkey'` | `'fairplay'` | `'playready'` | `'widevine'`

### `MutedChangeEventPayload`[](https://docs.expo.dev/versions/latest/sdk/video/#mutedchangeeventpayload)

Data delivered with the [`mutedChange`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event.

| Property | Type | Description |
| --- | --- | --- |
| muted | `boolean` | 
Boolean value whether the player is currently muted.

 |
| oldMuted(optional) | `boolean` | 

Previous value of the `isMuted` property.

 |

### `PlaybackRateChangeEventPayload`[](https://docs.expo.dev/versions/latest/sdk/video/#playbackratechangeeventpayload)

Data delivered with the [`playbackRateChange`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event.

| Property | Type | Description |
| --- | --- | --- |
| oldPlaybackRate(optional) | `number` | 
Previous value of the `playbackRate` property.

 |
| playbackRate | `number` | 

Float value indicating the current playback speed of the player.

 |

### `PlayerError`[](https://docs.expo.dev/versions/latest/sdk/video/#playererror)

Contains information about any errors that the player encountered during the playback

| Property | Type | Description |
| --- | --- | --- |
| message | `string` | \- |

### `PlayingChangeEventPayload`[](https://docs.expo.dev/versions/latest/sdk/video/#playingchangeeventpayload)

Data delivered with the [`playingChange`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event.

| Property | Type | Description |
| --- | --- | --- |
| isPlaying | `boolean` | 
Boolean value whether the player is currently playing.

 |
| oldIsPlaying(optional) | `boolean` | 

Previous value of the `isPlaying` property.

 |

### `SourceChangeEventPayload`[](https://docs.expo.dev/versions/latest/sdk/video/#sourcechangeeventpayload)

Data delivered with the [`sourceChange`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event.

| Property | Type | Description |
| --- | --- | --- |
| oldSource(optional) | `[VideoSource](https://docs.expo.dev/versions/latest/sdk/video/#videosource)` | 
Previous source of the player.

 |
| source | `[VideoSource](https://docs.expo.dev/versions/latest/sdk/video/#videosource)` | 

New source of the player.

 |

### `StatusChangeEventPayload`[](https://docs.expo.dev/versions/latest/sdk/video/#statuschangeeventpayload)

Data delivered with the [`statusChange`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event.

| Property | Type | Description |
| --- | --- | --- |
| error(optional) | `[PlayerError](https://docs.expo.dev/versions/latest/sdk/video/#playererror)` | 
Error object containing information about the error that occurred.

 |
| oldStatus(optional) | `[VideoPlayerStatus](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerstatus)` | 

Previous status of the player.

 |
| status | `[VideoPlayerStatus](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerstatus)` | 

New status of the player.

 |

### `TimeUpdateEventPayload`[](https://docs.expo.dev/versions/latest/sdk/video/#timeupdateeventpayload)

Data delivered with the [`timeUpdate`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event, contains information about the current playback progress.

| Property | Type | Description |
| --- | --- | --- |
| bufferedPosition | `number` | 
Only for: 

Android

iOS

  

Float value indicating how far the player has buffered the video in seconds. Same as the [`bufferedPosition`](https://docs.expo.dev/versions/latest/sdk/video/#bufferedPosition) property.



 |
| currentLiveTimestamp | `number | null` | 

Only for: 

Android

iOS

  

The exact timestamp when the currently displayed video frame was sent from the server, based on the `EXT-X-PROGRAM-DATE-TIME` tag in the livestream metadata. Same as the [`currentLiveTimestamp`](https://docs.expo.dev/versions/latest/sdk/video/#currentlivetimestamp) property.



 |
| currentOffsetFromLive | `number | null` | 

Only for: 

Android

iOS

  

Float value indicating the latency of the live stream in seconds. Same as the [`currentOffsetFromLive`](https://docs.expo.dev/versions/latest/sdk/video/#currentoffsetfromlive) property.



 |
| currentTime | `number` | 

Float value indicating the current playback time in seconds. Same as the [`currentTime`](https://docs.expo.dev/versions/latest/sdk/video/#currenttime) property.

 |

### `VideoContentFit`[](https://docs.expo.dev/versions/latest/sdk/video/#videocontentfit)

Literal Type: `string`

Describes how a video should be scaled to fit in a container.

-   `contain`: The video maintains its aspect ratio and fits inside the container, with possible letterboxing/pillarboxing.
-   `cover`: The video maintains its aspect ratio and covers the entire container, potentially cropping some portions.
-   `fill`: The video stretches/squeezes to completely fill the container, potentially causing distortion.

Acceptable values are: `'contain'` | `'cover'` | `'fill'`

### `VideoMetadata`[](https://docs.expo.dev/versions/latest/sdk/video/#videometadata)

Contains information that will be displayed in the now playing notification when the video is playing.

| Property | Type | Description |
| --- | --- | --- |
| artist(optional) | `string` | 
Only for: 

Android

iOS

  

Secondary text that will be displayed under the title.



 |
| artwork(optional) | `string` | 

Only for: 

Android

iOS

  

The uri of the video artwork.



 |
| title(optional) | `string` | 

Only for: 

Android

iOS

  

The title of the video.



 |

### `VideoPlayerEvents`[](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents)

Handlers for events which can be emitted by the player.

| Property | Type | Description |
| --- | --- | --- |
| availableSubtitleTracksChange | `(payload: [AvailableSubtitleTracksChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#availablesubtitletrackschangeeventpayload)) => void` | 
Handler for an event emitted when the available subtitle tracks change.

 |
| mutedChange | `(payload: [MutedChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#mutedchangeeventpayload)) => void` | 

Handler for an event emitted when the `muted` property of the player changes

 |
| playbackRateChange | `(payload: [PlaybackRateChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#playbackratechangeeventpayload)) => void` | 

Handler for an event emitted when the `playbackRate` property of the player changes.

 |
| playingChange | `(payload: [PlayingChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#playingchangeeventpayload)) => void` | 

Handler for an event emitted when the player starts or stops playback.

 |
| playToEnd | `() => void` | 

Handler for an event emitted when the player plays to the end of the current source.

 |
| sourceChange | `(payload: [SourceChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#sourcechangeeventpayload)) => void` | 

Handler for an event emitted when the current media source of the player changes.

 |
| statusChange | `(payload: [StatusChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#statuschangeeventpayload)) => void` | 

Handler for an event emitted when the status of the player changes.

 |
| subtitleTrackChange | `(payload: [SubtitleTrackChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#subtitletrackchangeeventpayload)) => void` | 

Handler for an event emitted when the current subtitle track changes.

 |
| timeUpdate | `(payload: [TimeUpdateEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#timeupdateeventpayload)) => void` | 

Handler for an event emitted in a given interval specified by the `timeUpdateEventInterval`.

 |
| volumeChange | `(payload: [VolumeChangeEventPayload](https://docs.expo.dev/versions/latest/sdk/video/#volumechangeeventpayload)) => void` | 

Handler for an event emitted when the `volume` of `muted` property of the player changes.

 |

### `VideoPlayerStatus`[](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerstatus)

Literal Type: `string`

Describes the current status of the player.

-   `idle`: The player is not playing or loading any videos.
-   `loading`: The player is loading video data from the provided source
-   `readyToPlay`: The player has loaded enough data to start playing or to continue playback.
-   `error`: The player has encountered an error while loading or playing the video.

Acceptable values are: `'idle'` | `'loading'` | `'readyToPlay'` | `'error'`

### `VideoSource`[](https://docs.expo.dev/versions/latest/sdk/video/#videosource)

Type: `string` or `number` or `null` or `object` shaped as below:

| Property | Type | Description |
| --- | --- | --- |
| assetId(optional) | `number` | 
The asset ID of a local video asset, acquired with the `require` function. This property is exclusive with the `uri` property. When both are present, the `assetId` will be ignored.

 |
| drm(optional) | `[DRMOptions](https://docs.expo.dev/versions/latest/sdk/video/#drmoptions)` | 

Specifies the DRM options which will be used by the player while loading the video.

 |
| headers(optional) | `Record<string, string>` | 

Only for: 

Android

iOS

  

Specifies headers sent with the video request.

> For DRM license headers use the `headers` field of [`DRMOptions`](https://docs.expo.dev/versions/latest/sdk/video/#drmoptions).



 |
| metadata(optional) | `[VideoMetadata](https://docs.expo.dev/versions/latest/sdk/video/#videometadata)` | 

Only for: 

Android

iOS

  

Specifies information which will be displayed in the now playing notification. When undefined the player will display information contained in the video metadata.



 |
| uri(optional) | `string` | 

The URI of the video.

This property is exclusive with the `assetId` property. When both are present, the `assetId` will be ignored.



 |

### `VolumeChangeEventPayload`[](https://docs.expo.dev/versions/latest/sdk/video/#volumechangeeventpayload)

Data delivered with the [`volumeChange`](https://docs.expo.dev/versions/latest/sdk/video/#videoplayerevents) event.

| Property | Type | Description |
| --- | --- | --- |
| oldVolume(optional) | `number` | 
Previous value of the `volume` property.

 |
| volume | `number` | 

Float value indicating the current volume of the player.

 |
 

---
created: 2025-02-09T22:26:53 (UTC +04:00)
tags: []
source: https://docs.expo.dev/versions/latest/sdk/audio/
author: 
---

# Audio (expo-audio) - Expo Documentation

> ## Excerpt
> A library that provides an API to implement audio playback and recording in apps.

---
A library that provides an API to implement audio playback and recording in apps.

___

> This page documents an upcoming version of the Audio library. Expo Audio is currently in alpha and subject to breaking changes.

`expo-audio` is a cross-platform audio library for accessing the native audio capabilities of the device.

Note that audio automatically stops if headphones/bluetooth audio devices are disconnected.

## Installation[](https://docs.expo.dev/versions/latest/sdk/audio/#installation)

`-` `npx expo install expo-audio`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-audio) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/audio/#configuration-in-app-config)

You can configure `expo-audio` using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect. If your app does not use EAS Build, then you'll need to manually configure the package.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/audio/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": [
      [
        "expo-audio",
        {
          "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone."
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/audio/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `microphonePermission` | `"Allow $(PRODUCT_NAME) to access your microphone"` | 
Only for: 

iOS

  

A string to set the [`NSMicrophoneUsageDescription`](https://docs.expo.dev/versions/latest/sdk/audio/#permission-nsmicrophoneusagedescription) permission message.

 |

## Usage[](https://docs.expo.dev/versions/latest/sdk/audio/#usage)

### Playing sounds[](https://docs.expo.dev/versions/latest/sdk/audio/#playing-sounds)

```
import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require('./assets/Hello.mp3');

export default function App() {
  const player = useAudioPlayer(audioSource);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={() => player.play()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
```

### Recording sounds[](https://docs.expo.dev/versions/latest/sdk/audio/#recording-sounds)

```
import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useAudioRecorder, RecordingOptions, AudioModule, RecordingPresets } from 'expo-audio';

export default function App() {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const record = () => audioRecorder.record();

  const stopRecording = async () => {
    // The recording will be available on `audioRecorder.uri`.
    await audioRecorder.stop();
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert('Permission to access microphone was denied');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title={audioRecorder.isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={audioRecorder.isRecording ? stopRecording : record}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
```

### Playing or recording audio in background [](https://docs.expo.dev/versions/latest/sdk/audio/#playing-or-recording-audio-in-background)

On iOS, audio playback and recording in background is only available in standalone apps, and it requires some extra configuration. On iOS, each background feature requires a special key in `UIBackgroundModes` array in your Info.plist file. In standalone apps this array is empty by default, so to use background features you will need to add appropriate keys to your app.json configuration.

See an example of app.json that enables audio playback in background:

```
{
  "expo": {
    ...
    "ios": {
      ...
      "infoPlist": {
        ...
        "UIBackgroundModes": [
          "audio"
        ]
      }
    }
  }
}
```

### Notes on web usage[](https://docs.expo.dev/versions/latest/sdk/audio/#notes-on-web-usage)

-   A MediaRecorder issue on Chrome produces WebM files missing the duration metadata. [See the open Chromium issue](https://bugs.chromium.org/p/chromium/issues/detail?id=642012).
-   MediaRecorder encoding options and other configurations are inconsistent across browsers, utilizing a Polyfill such as [kbumsik/opus-media-recorder](https://github.com/kbumsik/opus-media-recorder) or [ai/audio-recorder-polyfill](https://github.com/ai/audio-recorder-polyfill) in your application will improve your experience. Any options passed to `prepareToRecordAsync` will be passed directly to the MediaRecorder API and as such the polyfill.
-   Web browsers require sites to be served securely for them to listen to a mic. See [MediaDevices `getUserMedia()` security](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#security) for more details.

## API[](https://docs.expo.dev/versions/latest/sdk/audio/#api)

```
import { useAudioPlayer, useAudioRecorder } from 'expo-audio';
```

## Constants[](https://docs.expo.dev/versions/latest/sdk/audio/#constants)

### `Audio.AUDIO_SAMPLE_UPDATE`[](https://docs.expo.dev/versions/latest/sdk/audio/#audioaudio_sample_update)

Type: `'audioSampleUpdate'`

### `Audio.PLAYBACK_STATUS_UPDATE`[](https://docs.expo.dev/versions/latest/sdk/audio/#audioplayback_status_update)

Type: `'playbackStatusUpdate'`

### `Audio.RECORDING_STATUS_UPDATE`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiorecording_status_update)

Type: `'recordingStatusUpdate'`

### `Audio.RecordingPresets`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiorecordingpresets)

Type: `Record<string, [RecordingOptions](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptions)>`

Constant which contains definitions of the two preset examples of `RecordingOptions`, as implemented in the Audio SDK.

#### `HIGH_QUALITY`[](https://docs.expo.dev/versions/latest/sdk/audio/#high_quality)

```
RecordingPresets.HIGH_QUALITY = {
 extension: '.m4a',
  sampleRate: 44100,
  numberOfChannels: 2,
  bitRate: 128000,
  android: {
    outputFormat: 'mpeg4',
    audioEncoder: 'aac',
  },
  ios: {
    outputFormat: IOSOutputFormat.MPEG4AAC,
    audioQuality: AudioQuality.MAX,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {
    mimeType: 'audio/webm',
    bitsPerSecond: 128000,
  },
};
```

#### `LOW_QUALITY`[](https://docs.expo.dev/versions/latest/sdk/audio/#low_quality)

```
RecordingPresets.LOW_QUALITY = {
  extension: '.m4a',
  sampleRate: 44100,
  numberOfChannels: 2,
  bitRate: 64000,
  android: {
    extension: '.3gp',
    outputFormat: '3gp',
    audioEncoder: 'amr_nb',
  },
  ios: {
    audioQuality: AudioQuality.MIN,
    outputFormat: IOSOutputFormat.MPEG4AAC,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {
    mimeType: 'audio/webm',
    bitsPerSecond: 128000,
  },
};
```

## Hooks[](https://docs.expo.dev/versions/latest/sdk/audio/#hooks)

### `useAudioPlayer(source, updateInterval)`[](https://docs.expo.dev/versions/latest/sdk/audio/#useaudioplayersource-updateinterval)

| Parameter | Type |
| --- | --- |
| source(optional) | `number | [AudioSource](https://docs.expo.dev/versions/latest/sdk/audio/#audiosource)` |
| updateInterval(optional) | `number` |

  

### `useAudioPlayerStatus(player)`[](https://docs.expo.dev/versions/latest/sdk/audio/#useaudioplayerstatusplayer)

| Parameter | Type |
| --- | --- |
| player | `[AudioPlayer](https://docs.expo.dev/versions/latest/sdk/audio/#audioplayer)` |

  

### `useAudioRecorder(options, statusListener)`[](https://docs.expo.dev/versions/latest/sdk/audio/#useaudiorecorderoptions-statuslistener)

| Parameter | Type |
| --- | --- |
| options | `[RecordingOptions](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptions)` |
| statusListener(optional) | `(status: [RecordingStatus](https://docs.expo.dev/versions/latest/sdk/audio/#recordingstatus)) => void` |

  

### `useAudioRecorderState(recorder, interval)`[](https://docs.expo.dev/versions/latest/sdk/audio/#useaudiorecorderstaterecorder-interval)

| Parameter | Type |
| --- | --- |
| recorder | `[AudioRecorder](https://docs.expo.dev/versions/latest/sdk/audio/#audiorecorder)` |
| interval(optional) | `number` |

  

### `useAudioSampleListener(player, listener)`[](https://docs.expo.dev/versions/latest/sdk/audio/#useaudiosamplelistenerplayer-listener)

| Parameter | Type |
| --- | --- |
| player | `[AudioPlayer](https://docs.expo.dev/versions/latest/sdk/audio/#audioplayer)` |
| listener | `(data: [AudioSample](https://docs.expo.dev/versions/latest/sdk/audio/#audiosample)) => void` |

  

## Classes[](https://docs.expo.dev/versions/latest/sdk/audio/#classes)

### `AudioPlayer`[](https://docs.expo.dev/versions/latest/sdk/audio/#audioplayer)

Type: Class extends `[SharedObject](https://docs.expo.dev/versions/v52.0.0/sdk/expo/#sharedobject)<[AudioEvents](https://docs.expo.dev/versions/latest/sdk/audio/#audioevents)>`

AudioPlayer Properties

### `currentTime`[](https://docs.expo.dev/versions/latest/sdk/audio/#currenttime)

Type: `number`

The current position through the audio item, in seconds.

### `duration`[](https://docs.expo.dev/versions/latest/sdk/audio/#duration)

Type: `number`

The total duration of the audio in seconds.

### `id`[](https://docs.expo.dev/versions/latest/sdk/audio/#id)

Type: `number`

Unique identifier for the player object.

### `isAudioSamplingSupported`[](https://docs.expo.dev/versions/latest/sdk/audio/#isaudiosamplingsupported)

Type: `boolean`

Boolean value indicating whether audio sampling is supported on the platform.

### `isBuffering`[](https://docs.expo.dev/versions/latest/sdk/audio/#isbuffering)

Type: `boolean`

Boolean value indicating whether the player is buffering.

### `isLoaded`[](https://docs.expo.dev/versions/latest/sdk/audio/#isloaded)

Type: `boolean`

Boolean value indicating whether the player is finished loading.

### `loop`[](https://docs.expo.dev/versions/latest/sdk/audio/#loop)

Type: `boolean`

Boolean value indicating whether the player is currently looping.

### `muted`[](https://docs.expo.dev/versions/latest/sdk/audio/#muted)

Type: `boolean`

Boolean value indicating whether the player is currently muted.

### `paused`[](https://docs.expo.dev/versions/latest/sdk/audio/#paused)

Type: `boolean`

Boolean value indicating whether the player is currently paused.

### `playbackRate`[](https://docs.expo.dev/versions/latest/sdk/audio/#playbackrate)

Type: `number`

The current playback rate of the audio.

### `playing`[](https://docs.expo.dev/versions/latest/sdk/audio/#playing)

Type: `boolean`

Boolean value indicating whether the player is currently playing.

### `shouldCorrectPitch`[](https://docs.expo.dev/versions/latest/sdk/audio/#shouldcorrectpitch)

Type: `boolean`

A boolean describing if we are correcting the pitch for a changed rate.

### `volume`[](https://docs.expo.dev/versions/latest/sdk/audio/#volume)

Type: `number`

The current volume of the audio.

AudioPlayer Methods

### `pause()`[](https://docs.expo.dev/versions/latest/sdk/audio/#pause)

### `play()`[](https://docs.expo.dev/versions/latest/sdk/audio/#play)

### `remove()`[](https://docs.expo.dev/versions/latest/sdk/audio/#remove)

Remove the player from memory to free up resources.

### `replace(source)`[](https://docs.expo.dev/versions/latest/sdk/audio/#replacesource)

| Parameter | Type |
| --- | --- |
| source | `[AudioSource](https://docs.expo.dev/versions/latest/sdk/audio/#audiosource)` |

  

Replaces the current audio source with a new one.

### `seekTo(seconds)`[](https://docs.expo.dev/versions/latest/sdk/audio/#seektoseconds)

| Parameter | Type | Description |
| --- | --- | --- |
| seconds | `number` | 
The number of seconds to seek by.

 |

  

Seeks the playback by the given number of seconds.

### `setPlaybackRate(rate, pitchCorrectionQuality)`[](https://docs.expo.dev/versions/latest/sdk/audio/#setplaybackraterate-pitchcorrectionquality)

| Parameter | Type | Description |
| --- | --- | --- |
| rate | `number` | 
The playback rate of the audio.

 |
| pitchCorrectionQuality(optional) | `[PitchCorrectionQuality](https://docs.expo.dev/versions/latest/sdk/audio/#pitchcorrectionquality)` | 

The quality of the pitch correction.

 |

  

Sets the current playback rate of the audio.

### `AudioRecorder`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiorecorder)

Type: Class extends `[SharedObject](https://docs.expo.dev/versions/v52.0.0/sdk/expo/#sharedobject)<[RecordingEvents](https://docs.expo.dev/versions/latest/sdk/audio/#recordingevents)>`

AudioRecorder Properties

### `currentTime`[](https://docs.expo.dev/versions/latest/sdk/audio/#currenttime-1)

Type: `number`

The current length of the recording, in seconds.

### `id`[](https://docs.expo.dev/versions/latest/sdk/audio/#id-1)

Type: `number`

Unique identifier for the recorder object.

### `isRecording`[](https://docs.expo.dev/versions/latest/sdk/audio/#isrecording)

Type: `boolean`

Boolean value indicating whether the recording is in progress.

### `uri`[](https://docs.expo.dev/versions/latest/sdk/audio/#uri)

Type: `null | string`

The uri of the recording.

AudioRecorder Methods

### `getAvailableInputs()`[](https://docs.expo.dev/versions/latest/sdk/audio/#getavailableinputs)

Returns a list of available recording inputs. This method can only be called if the `Recording` has been prepared.

A `Promise` that is fulfilled with an array of `RecordingInput` objects.

### `getCurrentInput()`[](https://docs.expo.dev/versions/latest/sdk/audio/#getcurrentinput)

Returns the currently-selected recording input. This method can only be called if the `Recording` has been prepared.

A `Promise` that is fulfilled with a `RecordingInput` object.

### `getStatus()`[](https://docs.expo.dev/versions/latest/sdk/audio/#getstatus)

Status of the current recording.

### `pause()`[](https://docs.expo.dev/versions/latest/sdk/audio/#pause-1)

### `prepareToRecordAsync(options)`[](https://docs.expo.dev/versions/latest/sdk/audio/#preparetorecordasyncoptions)

  

Prepares the recording for recording.

### `record()`[](https://docs.expo.dev/versions/latest/sdk/audio/#record)

### `recordForDuration(seconds)`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordfordurationseconds)

| Parameter | Type | Description |
| --- | --- | --- |
| seconds | `number` | 
The time in seconds to stop recording at.

 |

  

Stops the recording once the specified time has elapsed.

### `setInput(inputUid)`[](https://docs.expo.dev/versions/latest/sdk/audio/#setinputinputuid)

| Parameter | Type | Description |
| --- | --- | --- |
| inputUid | `string` | 
The uid of a `RecordingInput`.

 |

  

Sets the current recording input.

A `Promise` that is resolved if successful or rejected if not.

### `startRecordingAtTime(seconds)`[](https://docs.expo.dev/versions/latest/sdk/audio/#startrecordingattimeseconds)

| Parameter | Type | Description |
| --- | --- | --- |
| seconds | `number` | 
The time in seconds to start recording at.

 |

  

Starts the recording at the given time.

### `stop()`[](https://docs.expo.dev/versions/latest/sdk/audio/#stop)

## Methods[](https://docs.expo.dev/versions/latest/sdk/audio/#methods)

### `Audio.getRecordingPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiogetrecordingpermissionsasync)

### `Audio.requestRecordingPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiorequestrecordingpermissionsasync)

### `Audio.setAudioModeAsync(mode)`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiosetaudiomodeasyncmode)

  

### `Audio.setIsAudioActiveAsync(active)`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiosetisaudioactiveasyncactive)

| Parameter | Type |
| --- | --- |
| active | `boolean` |

  

## Event Subscriptions[](https://docs.expo.dev/versions/latest/sdk/audio/#event-subscriptions)

### `Audio.useAudioSampleListener(player, listener)`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiouseaudiosamplelistenerplayer-listener)

| Parameter | Type |
| --- | --- |
| player | `[AudioPlayer](https://docs.expo.dev/versions/latest/sdk/audio/#audioplayer)` |
| listener | `(data: [AudioSample](https://docs.expo.dev/versions/latest/sdk/audio/#audiosample)) => void` |

  

## Interfaces[](https://docs.expo.dev/versions/latest/sdk/audio/#interfaces)

### `PermissionResponse`[](https://docs.expo.dev/versions/latest/sdk/audio/#permissionresponse)

An object obtained by permissions get and request functions.

| Property | Type | Description |
| --- | --- | --- |
| canAskAgain | `boolean` | 
Indicates if user can be asked again for specific permission. If not, one should be directed to the Settings app in order to enable/disable the permission.

 |
| expires | `[PermissionExpiration](https://docs.expo.dev/versions/latest/sdk/audio/#permissionexpiration)` | 

Determines time when the permission expires.

 |
| granted | `boolean` | 

A convenience boolean that indicates if the permission is granted.

 |
| status | `[PermissionStatus](https://docs.expo.dev/versions/latest/sdk/audio/#permissionstatus)` | 

Determines the status of the permission.

 |

## Types[](https://docs.expo.dev/versions/latest/sdk/audio/#types)

### `AndroidAudioEncoder`[](https://docs.expo.dev/versions/latest/sdk/audio/#androidaudioencoder)

Literal Type: `string`

Acceptable values are: `'default'` | `'amr_nb'` | `'amr_wb'` | `'aac'` | `'he_aac'` | `'aac_eld'`

### `AndroidOutputFormat`[](https://docs.expo.dev/versions/latest/sdk/audio/#androidoutputformat)

Literal Type: `string`

Acceptable values are: `'default'` | `'3gp'` | `'mpeg4'` | `'amrnb'` | `'amrwb'` | `'aac_adts'` | `'mpeg2ts'` | `'webm'`

### `AudioEvents`[](https://docs.expo.dev/versions/latest/sdk/audio/#audioevents)

| Property | Type | Description |
| --- | --- | --- |
| audioSampleUpdate | `(data: [AudioSample](https://docs.expo.dev/versions/latest/sdk/audio/#audiosample)) => void` | \- |
| playbackStatusUpdate | `(status: [AudioStatus](https://docs.expo.dev/versions/latest/sdk/audio/#audiostatus)) => void` | \- |

### `AudioMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiomode)

| Property | Type | Description |
| --- | --- | --- |
| allowsRecording | `boolean` | \- |
| interruptionMode | `[InterruptionMode](https://docs.expo.dev/versions/latest/sdk/audio/#interruptionmode)` | \- |
| playsInSilentMode | `boolean` | \- |
| shouldPlayInBackground | `boolean` | \- |
| shouldRouteThroughEarpiece | `boolean` | \- |

### `AudioSample`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiosample)

| Property | Type | Description |
| --- | --- | --- |
| channels | `[AudioSampleChannel[]](https://docs.expo.dev/versions/latest/sdk/audio/#audiosamplechannel)` | \- |
| timestamp | `number` | \- |

### `AudioSampleChannel`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiosamplechannel)

| Property | Type | Description |
| --- | --- | --- |
| frames | `number[]` | \- |

### `AudioSource`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiosource)

Type: `string` or `null` or `object` shaped as below:

| Property | Type | Description |
| --- | --- | --- |
| headers(optional) | `Record<string, string>` | 
An object representing the HTTP headers to send along with the request for a remote audio source. On web requires the `Access-Control-Allow-Origin` header returned by the server to include the current domain.

 |
| uri(optional) | `string` | 

A string representing the resource identifier for the audio, which could be an HTTPS address, a local file path, or the name of a static audio file resource.

 |

### `AudioStatus`[](https://docs.expo.dev/versions/latest/sdk/audio/#audiostatus)

| Property | Type | Description |
| --- | --- | --- |
| currentTime | `number` | \- |
| duration | `number` | \- |
| id | `number` | \- |
| isBuffering | `boolean` | \- |
| isLoaded | `boolean` | \- |
| loop | `boolean` | \- |
| mute | `boolean` | \- |
| playbackRate | `number` | \- |
| playbackState | `string` | \- |
| playing | `boolean` | \- |
| reasonForWaitingToPlay | `string` | \- |
| shouldCorrectPitch | `boolean` | \- |
| timeControlStatus | `string` | \- |

### `BitRateStrategy`[](https://docs.expo.dev/versions/latest/sdk/audio/#bitratestrategy)

Literal Type: `string`

Acceptable values are: `'constant'` | `'longTermAverage'` | `'variableConstrained'` | `'variable'`

### `InterruptionMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#interruptionmode)

Literal Type: `string`

Acceptable values are: `'mixWithOthers'` | `'doNotMix'` | `'duckOthers'`

### `PermissionExpiration`[](https://docs.expo.dev/versions/latest/sdk/audio/#permissionexpiration)

Literal Type: multiple types

Permission expiration time. Currently, all permissions are granted permanently.

Acceptable values are: `'never'` | `number`

### `PitchCorrectionQuality`[](https://docs.expo.dev/versions/latest/sdk/audio/#pitchcorrectionquality)

Literal Type: `string`

Acceptable values are: `'low'` | `'medium'` | `'high'`

### `RecorderState`[](https://docs.expo.dev/versions/latest/sdk/audio/#recorderstate)

| Property | Type | Description |
| --- | --- | --- |
| canRecord | `boolean` | \- |
| durationMillis | `number` | \- |
| isRecording | `boolean` | \- |
| mediaServicesDidReset | `boolean` | \- |
| metering(optional) | `number` | \- |
| url | `string | null` | \- |

### `RecordingEvents`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordingevents)

| Property | Type | Description |
| --- | --- | --- |
| recordingStatusUpdate | `(status: [RecordingStatus](https://docs.expo.dev/versions/latest/sdk/audio/#recordingstatus)) => void` | \-
`status: [RecordingStatus](https://docs.expo.dev/versions/latest/sdk/audio/#recordingstatus)`



 |

### `RecordingInput`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordinginput)

| Property | Type | Description |
| --- | --- | --- |
| name | `string` | \- |
| type | `string` | \- |
| uid | `string` | \- |

### `RecordingOptions`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptions)

| Property | Type | Description |
| --- | --- | --- |
| android | `[RecordingOptionsAndroid](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptionsandroid)` | 
Recording options for the Android platform.

 |
| bitRate | `number` | 

The desired bit rate.

Example

`128000`





 |
| extension | `string` | 

The desired file extension.

Example

`.caf`





 |
| ios | `[RecordingOptionsIos](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptionsios)` | 

Recording options for the iOS platform.

 |
| numberOfChannels | `number` | 

The desired number of channels.

Example

`2`





 |
| sampleRate | `number` | 

The desired sample rate.

Example

`44100`





 |
| web(optional) | `[RecordingOptionsWeb](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptionsweb)` | 

Recording options for the Web platform.

 |

### `RecordingOptionsAndroid`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptionsandroid)

| Property | Type | Description |
| --- | --- | --- |
| audioEncoder | `[AndroidAudioEncoder](https://docs.expo.dev/versions/latest/sdk/audio/#androidaudioencoder)` | 
The desired audio encoder. See the [`AndroidAudioEncoder`](https://docs.expo.dev/versions/latest/sdk/audio/#androidaudioencoder) enum for all valid values.

 |
| extension(optional) | `string` | 

The desired file extension.

Example

`.caf`





 |
| maxFileSize(optional) | `number` | 

The desired maximum file size in bytes, after which the recording will stop (but `stopAndUnloadAsync()` must still be called after this point).

Example

`65536`





 |
| outputFormat | `[AndroidOutputFormat](https://docs.expo.dev/versions/latest/sdk/audio/#androidoutputformat)` | 

The desired file format. See the [`AndroidOutputFormat`](https://docs.expo.dev/versions/latest/sdk/audio/#androidoutputformat) enum for all valid values.

 |
| sampleRate(optional) | `number` | 

The desired sample rate.

Example

`44100`





 |

### `RecordingOptionsIos`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptionsios)

| Property | Type | Description |
| --- | --- | --- |
| audioQuality | `[AudioQuality](https://docs.expo.dev/versions/latest/sdk/audio/#audioquality) | number` | 
The desired audio quality. See the [`AudioQuality`](https://docs.expo.dev/versions/latest/sdk/audio/#audioquality) enum for all valid values.

 |
| bitDepthHint(optional) | `number` | 

The desired bit depth hint.

Example

`16`





 |
| bitRateStrategy(optional) | `number` | 

The desired bit rate strategy. See the next section for an enumeration of all valid values of `bitRateStrategy`.

 |
| extension(optional) | `string` | 

The desired file extension.

Example

`.caf`





 |
| linearPCMBitDepth(optional) | `number` | 

The desired PCM bit depth.

Example

`16`





 |
| linearPCMIsBigEndian(optional) | `boolean` | 

A boolean describing if the PCM data should be formatted in big endian.

 |
| linearPCMIsFloat(optional) | `boolean` | 

A boolean describing if the PCM data should be encoded in floating point or integral values.

 |
| outputFormat(optional) | `string | [IOSOutputFormat](https://docs.expo.dev/versions/latest/sdk/audio/#iosoutputformat) | number` | 

The desired file format. See the [`IOSOutputFormat`](https://docs.expo.dev/versions/latest/sdk/audio/#iosoutputformat) enum for all valid values.

 |
| sampleRate(optional) | `number` | 

The desired sample rate.

Example

`44100`





 |

### `RecordingOptionsWeb`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordingoptionsweb)

| Property | Type | Description |
| --- | --- | --- |
| bitsPerSecond(optional) | `number` | \- |
| mimeType(optional) | `string` | \- |

### `RecordingStatus`[](https://docs.expo.dev/versions/latest/sdk/audio/#recordingstatus)

| Property | Type | Description |
| --- | --- | --- |
| error | `string | null` | \- |
| hasError | `boolean` | \- |
| id | `number` | \- |
| isFinished | `boolean` | \- |
| url | `string | null` | \- |

## Enums[](https://docs.expo.dev/versions/latest/sdk/audio/#enums)

### `AudioQuality`[](https://docs.expo.dev/versions/latest/sdk/audio/#audioquality)

#### `MEDIUM`[](https://docs.expo.dev/versions/latest/sdk/audio/#medium)

`AudioQuality.MEDIUM ＝ 64`

#### `HIGH`[](https://docs.expo.dev/versions/latest/sdk/audio/#high)

`AudioQuality.HIGH ＝ 96`

#### `MAX`[](https://docs.expo.dev/versions/latest/sdk/audio/#max)

`AudioQuality.MAX ＝ 127`

### `IOSOutputFormat`[](https://docs.expo.dev/versions/latest/sdk/audio/#iosoutputformat)

#### `AC3`[](https://docs.expo.dev/versions/latest/sdk/audio/#ac3)

`IOSOutputFormat.AC3 ＝ "ac-3"`

#### `AES3`[](https://docs.expo.dev/versions/latest/sdk/audio/#aes3)

`IOSOutputFormat.AES3 ＝ "aes3"`

#### `APPLELOSSLESS`[](https://docs.expo.dev/versions/latest/sdk/audio/#applelossless)

`IOSOutputFormat.APPLELOSSLESS ＝ "alac"`

#### `ALAW`[](https://docs.expo.dev/versions/latest/sdk/audio/#alaw)

`IOSOutputFormat.ALAW ＝ "alaw"`

#### `AUDIBLE`[](https://docs.expo.dev/versions/latest/sdk/audio/#audible)

`IOSOutputFormat.AUDIBLE ＝ "AUDB"`

#### `60958AC3`[](https://docs.expo.dev/versions/latest/sdk/audio/#60958ac3)

`IOSOutputFormat.60958AC3 ＝ "cac3"`

#### `APPLEIMA4`[](https://docs.expo.dev/versions/latest/sdk/audio/#appleima4)

`IOSOutputFormat.APPLEIMA4 ＝ "ima4"`

#### `QUALCOMM`[](https://docs.expo.dev/versions/latest/sdk/audio/#qualcomm)

`IOSOutputFormat.QUALCOMM ＝ "Qclp"`

#### `AMR`[](https://docs.expo.dev/versions/latest/sdk/audio/#amr)

`IOSOutputFormat.AMR ＝ "samr"`

#### `AMR_WB`[](https://docs.expo.dev/versions/latest/sdk/audio/#amr_wb)

`IOSOutputFormat.AMR_WB ＝ "sawb"`

#### `DVIINTELIMA`[](https://docs.expo.dev/versions/latest/sdk/audio/#dviintelima)

`IOSOutputFormat.DVIINTELIMA ＝ 1836253201`

#### `ENHANCEDAC3`[](https://docs.expo.dev/versions/latest/sdk/audio/#enhancedac3)

`IOSOutputFormat.ENHANCEDAC3 ＝ "ec-3"`

#### `ILBC`[](https://docs.expo.dev/versions/latest/sdk/audio/#ilbc)

`IOSOutputFormat.ILBC ＝ "ilbc"`

#### `LINEARPCM`[](https://docs.expo.dev/versions/latest/sdk/audio/#linearpcm)

`IOSOutputFormat.LINEARPCM ＝ "lpcm"`

#### `MACE3`[](https://docs.expo.dev/versions/latest/sdk/audio/#mace3)

`IOSOutputFormat.MACE3 ＝ "MAC3"`

#### `MACE6`[](https://docs.expo.dev/versions/latest/sdk/audio/#mace6)

`IOSOutputFormat.MACE6 ＝ "MAC6"`

#### `MICROSOFTGSM`[](https://docs.expo.dev/versions/latest/sdk/audio/#microsoftgsm)

`IOSOutputFormat.MICROSOFTGSM ＝ 1836253233`

#### `MPEGLAYER1`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeglayer1)

`IOSOutputFormat.MPEGLAYER1 ＝ ".mp1"`

#### `MPEGLAYER2`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeglayer2)

`IOSOutputFormat.MPEGLAYER2 ＝ ".mp2"`

#### `MPEGLAYER3`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeglayer3)

`IOSOutputFormat.MPEGLAYER3 ＝ ".mp3"`

#### `MPEG4AAC`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac)

`IOSOutputFormat.MPEG4AAC ＝ "aac "`

#### `MPEG4AAC_ELD`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac_eld)

`IOSOutputFormat.MPEG4AAC_ELD ＝ "aace"`

#### `MPEG4AAC_ELD_SBR`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac_eld_sbr)

`IOSOutputFormat.MPEG4AAC_ELD_SBR ＝ "aacf"`

#### `MPEG4AAC_ELD_V2`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac_eld_v2)

`IOSOutputFormat.MPEG4AAC_ELD_V2 ＝ "aacg"`

#### `MPEG4AAC_HE`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac_he)

`IOSOutputFormat.MPEG4AAC_HE ＝ "aach"`

#### `MPEG4AAC_LD`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac_ld)

`IOSOutputFormat.MPEG4AAC_LD ＝ "aacl"`

#### `MPEG4AAC_HE_V2`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac_he_v2)

`IOSOutputFormat.MPEG4AAC_HE_V2 ＝ "aacp"`

#### `MPEG4AAC_SPATIAL`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4aac_spatial)

`IOSOutputFormat.MPEG4AAC_SPATIAL ＝ "aacs"`

#### `MPEG4CELP`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4celp)

`IOSOutputFormat.MPEG4CELP ＝ "celp"`

#### `MPEG4HVXC`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4hvxc)

`IOSOutputFormat.MPEG4HVXC ＝ "hvxc"`

#### `QDESIGN2`[](https://docs.expo.dev/versions/latest/sdk/audio/#qdesign2)

`IOSOutputFormat.QDESIGN2 ＝ "QDM2"`

#### `QDESIGN`[](https://docs.expo.dev/versions/latest/sdk/audio/#qdesign)

`IOSOutputFormat.QDESIGN ＝ "QDMC"`

#### `MPEG4TWINVQ`[](https://docs.expo.dev/versions/latest/sdk/audio/#mpeg4twinvq)

`IOSOutputFormat.MPEG4TWINVQ ＝ "twvq"`

#### `ULAW`[](https://docs.expo.dev/versions/latest/sdk/audio/#ulaw)

`IOSOutputFormat.ULAW ＝ "ulaw"`

### `PermissionStatus`[](https://docs.expo.dev/versions/latest/sdk/audio/#permissionstatus)

#### `DENIED`[](https://docs.expo.dev/versions/latest/sdk/audio/#denied)

`PermissionStatus.DENIED ＝ "denied"`

User has denied the permission.

#### `GRANTED`[](https://docs.expo.dev/versions/latest/sdk/audio/#granted)

`PermissionStatus.GRANTED ＝ "granted"`

User has granted the permission.

#### `UNDETERMINED`[](https://docs.expo.dev/versions/latest/sdk/audio/#undetermined)

`PermissionStatus.UNDETERMINED ＝ "undetermined"`

User hasn't granted or denied the permission yet.
