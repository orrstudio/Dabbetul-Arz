import React, { useRef, useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Hls from 'hls.js';
import * as ScreenOrientation from 'expo-screen-orientation';
import OnAirImage from '../../assets/images/OnAir.png';

const HLSVideoPlayer = ({ source, style, controls = true, ...restProps }) => {
  const videoRef = useRef(null);

  // Обработка изменения размеров окна (ориентация)
  const [videoDimensions, setVideoDimensions] = useState(Dimensions.get('window'));
  useEffect(() => {
    const onChange = ({ window }) => {
      setVideoDimensions(window);
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  const isPortrait = videoDimensions.height >= videoDimensions.width;
  // Размеры по умолчанию: если в портретной ориентации — вся ширина окна, иначе 70% ширины
  const defaultWidth = isPortrait ? videoDimensions.width : videoDimensions.width * 0.7;
  const defaultHeight = defaultWidth / (16 / 9);
  // Объединяем стиль по умолчанию с переданным style (если он есть)
  const mergedStyle = StyleSheet.flatten([{ width: defaultWidth, height: defaultHeight }, style]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Если браузер нативно поддерживает HLS (например, Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
    } else if (Hls.isSupported()) {
      // Если поддерживается Hls.js
      const hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(video);
      // Очищаем hls-инстанс при размонтировании компонента
      return () => {
        hls.destroy();
      };
    } else {
      console.error('HLS streaming is not supported in this browser.');
    }
  }, [source]);

  // Разблокируем ориентацию для видео-окна, чтобы менять размеры при повороте устройства.
  // По окончании работы плеера (при размонтировании) снова блокируем ориентацию на портрет.
  useEffect(() => {
    async function unlockVideoOrientation() {
      try {
        await ScreenOrientation.unlockAsync();
        console.log("Видео окно: ориентация разблокирована");
      } catch (error) {
        console.log("Ошибка разблокировки ориентации для видео:", error);
      }
    }
    unlockVideoOrientation();
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

  return (
    <video
      ref={videoRef}
      style={mergedStyle}
      controls={controls}
      poster={OnAirImage}
      {...restProps}
    />
  );
};

export default HLSVideoPlayer; 