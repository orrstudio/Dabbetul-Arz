import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import HLSVideoPlayer from './HLSVideoPlayer';
import { VideoView } from 'expo-video';

/**
 * VideoWindow — обёртка для видео, которая при монтировании
 * разблокирует (разрешает) изменение ориентации только для окна видео,
 * а при размонтировании возвращает блокировку на портрет.
 *
 * При платформе web используется HLSVideoPlayer, а на остальных — VideoView.
 *
 * Пропсы:
 *   currentChannel: объект с данными канала (uri и metadata)
 *   videoWidth, videoHeight: размеры видео
 *   player: плеер (для VideoView, используется на мобильных устройствах)
 *   controls: флаг отображения панели управления
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

  if (Platform.OS === 'web') {
    return (
      <HLSVideoPlayer
        source={currentChannel.uri}
        style={{ width: videoWidth, height: videoHeight }}
        controls={controls}
      />
    );
  } else {
    return (
      <VideoView
        player={player}
        style={{ width: videoWidth, height: videoHeight }}
        useNativeControls={true}
        resizeMode="contain"
      />
    );
  }
};

export default VideoWindow; 