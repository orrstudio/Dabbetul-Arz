import React, { useRef, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

/**
 * WebViewPlayer - компонент для воспроизведения медиа через WebView
 * 
 * @param {Object} props - Свойства компонента
 * @param {string} props.source - URL источника видео (HTTP-поток)
 * @param {Object} props.style - Стили для контейнера WebView
 * @param {boolean} props.controls - Показывать ли элементы управления плеером
 * @param {Function} props.onError - Функция обратного вызова при ошибке
 * @param {Function} props.onReady - Функция обратного вызова когда плеер готов
 * @param {Object} props.hlsConfig - Конфигурация HLS.js (необязательно)
 */
const WebViewPlayer = ({ source, style, controls = true, onError, onReady, hlsConfig }) => {
  const [loading, setLoading] = useState(true);
  const webViewRef = useRef(null);

  // Базовая стандартная конфигурация HLS.js 
  const defaultHlsConfig = {
    // Настройки буферизации
    maxBufferSize: 30 * 1000 * 1000,      // максимальный размер буфера 30Мб
    maxBufferLength: 30,                  // длина буфера 30 секунд
    maxMaxBufferLength: 600,              // максимальный буфер до 10 минут
    
    // Настройки восстановления - без таймаута для максимальной скорости
    manifestLoadingMaxRetry: 1,           // 1 повторная попытка
    manifestLoadingRetryDelay: 300,       // очень маленькая задержка между попытками
    
    // Настройки фрагментов - тоже без таймаута
    fragLoadingMaxRetry: 1,               // 1 повторная попытка для фрагментов
    fragLoadingRetryDelay: 300,           // очень маленькая задержка
    
    // Другие настройки
    startFragPrefetch: true,              // предварительная загрузка первого фрагмента
    lowLatencyMode: false,                // выключаем режим низкой задержки для стабильности
    enableWorker: true,                   // используем web worker для производительности
    backBufferLength: 30,                 // буфер на 30 секунд назад
  };

  // HTML-страница с плеером, использующим HLS.js для воспроизведения потока
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
        <style>
          body, html { margin: 0; padding: 0; width: 100%; height: 100%; background: #000; overflow: hidden; }
          video { width: 100%; height: 100%; object-fit: contain; }
        </style>
      </head>
      <body>
        <video id="video" ${controls ? 'controls' : ''} autoplay></video>
        
        <script>
          // Получаем конфигурацию из React Native
          const hlsConfigFromProps = ${hlsConfig ? JSON.stringify(hlsConfig) : 'null'};
          
          // Базовая конфигурация для HLS.js
          const defaultConfig = ${JSON.stringify(defaultHlsConfig)};
          
          // Используем переданную конфигурацию или дефолтную
          const hlsConfig = hlsConfigFromProps ? { ...defaultConfig, ...hlsConfigFromProps } : defaultConfig;
          
          // Выводим используемую конфигурацию для отладки
          console.log('Using HLS config:', hlsConfig);
          
          // Функция воспроизведения видео
          function playVideo(videoSource) {
            const video = document.getElementById('video');
            
            // Логирование для отладки
            console.log('Attempting to play:', videoSource);
            
            // Настройки для нативного плеера
            video.addEventListener('error', function(e) {
              const errorDetails = e.target.error ? e.target.error.message : 'Unknown video error';
              console.error('Native video error:', errorDetails);
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'error',
                message: 'Native error: ' + errorDetails
              }));
            });
            
            // Если HLS.js поддерживается
            if (Hls.isSupported()) {
              // Уничтожаем предыдущий Hls инстанс, если он существует
              if (window.hls) {
                window.hls.destroy();
              }
              
              // Создаем новый Hls инстанс с нашей конфигурацией
              const hls = new Hls(hlsConfig);
              window.hls = hls;
              
              // Загружаем источник и привязываем его к видео элементу
              hls.loadSource(videoSource);
              hls.attachMedia(video);
              
              // Обработка событий HLS.js
              hls.on(Hls.Events.MEDIA_ATTACHED, function() {
                console.log('HLS.js attached to media');
                video.play().catch(e => {
                  console.warn('Auto-play failed:', e);
                  // Постим сообщение, но не считаем это фатальной ошибкой
                  window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'warning',
                    message: 'Autoplay prevented by browser, tap to play'
                  }));
                });
              });
              
              hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                console.log('Manifest parsed, found ' + data.levels.length + ' quality levels');
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'ready',
                  levels: data.levels.length
                }));
              });
              
              // Умная классификация ошибок на критичные и некритичные
              hls.on(Hls.Events.ERROR, function(event, data) {
                if (data.fatal) {
                  console.error('Fatal HLS error:', data.type, data.details);
                  
                  switch(data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                      // Попытка восстановления при сетевых ошибках
                      console.log('Fatal network error, trying to recover');
                      hls.startLoad();
                      break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                      // Попытка восстановления при ошибках медиа
                      console.log('Fatal media error, trying to recover');
                      hls.recoverMediaError();
                      break;
                    default:
                      // Другие фатальные ошибки - уничтожаем и сообщаем
                      console.error('Unrecoverable HLS error');
                      hls.destroy();
                      window.ReactNativeWebView.postMessage(JSON.stringify({
                        type: 'error',
                        message: 'HLS error: ' + data.details
                      }));
                      break;
                  }
                } else {
                  // Обработка некритичных ошибок
                  console.warn('Non-fatal HLS error:', data.type, data.details);
                  
                  // Игнорируем некоторые частые некритичные ошибки, но логируем их
                  if (data.details === Hls.ErrorDetails.BUFFER_STALLED_ERROR ||
                      data.details === Hls.ErrorDetails.BUFFER_SEEK_OVER_HOLE) {
                    console.log('Ignoring common non-fatal error:', data.details);
                  } else {
                    // Сообщаем о других некритичных ошибках как предупреждения
                    window.ReactNativeWebView.postMessage(JSON.stringify({
                      type: 'warning',
                      message: 'HLS warning: ' + data.details
                    }));
                  }
                }
              });
              
              // Обработка события окончания воспроизведения
              video.addEventListener('ended', function() {
                console.log('Video playback ended');
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'ended'
                }));
              });
              
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
              // Фолбек для устройств с нативной поддержкой HLS (iOS Safari)
              console.log('Using native HLS support');
              video.src = videoSource;
              video.addEventListener('loadedmetadata', function() {
                video.play().catch(e => {
                  console.warn('Auto-play failed:', e);
                });
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'ready'
                }));
              });
            } else {
              // HLS не поддерживается
              console.error('HLS not supported on this device');
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'error',
                message: 'HLS not supported on this device'
              }));
            }
          }
          
          // Начать воспроизведение при загрузке
          document.addEventListener('DOMContentLoaded', function() {
            playVideo("${source}");
          });
        </script>
      </body>
    </html>
  `;

  const handleMessage = (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log('Message from WebView:', data);
      
      if (data.type === 'ready') {
        setLoading(false);
        if (onReady) onReady(data);
      } else if (data.type === 'error') {
        setLoading(false);
        if (onError) onError(data.message);
      } else if (data.type === 'warning') {
        console.warn('WebViewPlayer warning:', data.message);
      }
    } catch (error) {
      console.error('Error parsing WebView message:', error);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <WebView
        ref={webViewRef}
        source={{ html }}
        style={styles.webView}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        onMessage={handleMessage}
        originWhitelist={['*']}
        allowsFullscreenVideo={true}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    position: 'relative',
    overflow: 'hidden',
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});

export default WebViewPlayer;
