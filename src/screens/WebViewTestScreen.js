import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import WebViewPlayer from '../components/WebViewPlayer';

/**
 * Тестовый экран для проверки WebViewPlayer с HTTP-стримами
 */
const WebViewTestScreen = () => {
  // Реальные URL из плейлиста tv.m3u8 для тестирования с разными конфигурациями
  const testUrls = [
    // HTTPS-потоки (гарантированно работающие)
    {
      uri: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
      name: 'Тестовый поток (HTTPS)',
      config: 'стандартная'
    },
    {
      uri: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      name: 'Akamai тест (HTTPS)',
      config: 'быстрая'
    },
    {
      uri: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8',
      name: 'Apple тест (HTTPS)',
      config: 'таймаут 1 сек'
    },
    
    // Стандартные настройки (без таймаута)
    {
      uri: 'http://ibrahimiptv.com:1935/mpltv/mpltv/playlist.m3u8',
      name: 'MPL TV (HTTP)',
      config: 'стандартная'
    },
    
    // Быстрая настройка
    {
      uri: 'http://ibrahimiptv.com:1935/nurtv/nurtv/playlist.m3u8',
      name: 'NUR TV (HTTP)',
      config: 'быстрая'
    },
    
    // С таймаутом 1 секунда
    {
      uri: 'http://ibrahimiptv.com:1935/herankuran/herankuran/playlist.m3u8',
      name: 'HERAN KURAN (HTTP)',
      config: 'таймаут 1 сек'
    },
    
    // С 5 повторными попытками
    {
      uri: 'http://ibrahimiptv.com:1935/heranzikir/heranzikir/playlist.m3u8',
      name: 'HERAN ZİKİR (HTTP)',
      config: '5 повторных попыток'
    },
    
    // Со стандартными настройками
    {
      uri: 'http://ibrahimiptv.com:1935/kuran/kuran/playlist.m3u8',
      name: 'KURAN LAFZI (HTTP)',
      config: 'стандартная'
    }
  ];
  
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [customUrl, setCustomUrl] = useState('');
  const [playerStatus, setPlayerStatus] = useState('loading');
  const [playerError, setPlayerError] = useState(null);
  const [useCustomConfig, setUseCustomConfig] = useState(false);
  
  // Текущий URL и конфигурация
  const currentChannel = testUrls[currentUrlIndex];
  
  const dimensions = Dimensions.get('window');
  const isPortrait = dimensions.height > dimensions.width;
  
  const videoWidth = isPortrait ? dimensions.width : dimensions.width * 0.7;
  const videoHeight = videoWidth / (16 / 9);
  
  // Получаем настройки HLS на основе конфигурации текущего канала
  const getHlsConfig = () => {
    if (useCustomConfig) return null; // Вернет null для использования пользовательской конфигурации из поля ввода
    
    const configType = currentChannel.config;
    
    if (configType === 'таймаут 1 сек') {
      return {
        manifestLoadingTimeOut: 1000,     // таймаут 1 секунда
        manifestLoadingMaxRetry: 1,       // 1 повторная попытка
        manifestLoadingRetryDelay: 300,   // очень маленькая задержка
      };
    } else if (configType === '5 повторных попыток') {
      return {
        manifestLoadingMaxRetry: 5,       // оставляем 5 попыток как просил пользователь
        fragLoadingMaxRetry: 5,           // 5 попыток для фрагментов 
        manifestLoadingRetryDelay: 300,   // очень маленькая задержка
        fragLoadingRetryDelay: 300,       // очень маленькая задержка
      };
    } else if (configType === 'быстрая') {
      return {
        manifestLoadingTimeOut: 1000,     // таймаут 1 секунда как было раньше
        manifestLoadingMaxRetry: 1,       // 1 повторная попытка
        manifestLoadingRetryDelay: 500,   // задержка 500мс как было раньше
        fragLoadingMaxRetry: 1,           // 1 повторная попытка для фрагментов
        fragLoadingRetryDelay: 500,       // задержка 500мс как было раньше
        lowLatencyMode: false,            // выключаем режим низкой задержки для стабильности
        maxBufferLength: 30,              // длина буфера 30 секунд
      };
    } else if (configType === 'задержка 1000мс') {
      return {
        manifestLoadingMaxRetry: 1,       // 1 повторная попытка
        manifestLoadingRetryDelay: 1000,  // большая задержка 1000мс
        fragLoadingMaxRetry: 1,           // 1 повторная попытка для фрагментов
        fragLoadingRetryDelay: 1000,      // большая задержка 1000мс
      };
    } else if (configType === 'комбо 500мс/5x') {
      return {
        manifestLoadingTimeOut: 500,      // таймаут 500мс
        manifestLoadingMaxRetry: 5,       // 5 повторных попыток
        manifestLoadingRetryDelay: 1000,  // задержка 1 секунда
        fragLoadingMaxRetry: 5,           // 5 повторных попыток для фрагментов
        fragLoadingRetryDelay: 1000,      // задержка 1 секунда
      };
    } else {
      // Стандартная конфигурация - без изменений, использует дефолтные настройки из WebViewPlayer
      return null;
    }
  };
  
  // Разблокируем ориентацию для тестирования
  useEffect(() => {
    async function unlockOrientation() {
      try {
        await ScreenOrientation.unlockAsync();
        console.log("Тестовый экран: ориентация разблокирована");
      } catch (error) {
        console.log("Ошибка разблокировки ориентации:", error);
      }
    }
    unlockOrientation();

    return () => {
      async function lockOrientationBack() {
        try {
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
          console.log("Тестовый экран: ориентация снова заблокирована");
        } catch (error) {
          console.log("Ошибка повторной блокировки ориентации:", error);
        }
      }
      lockOrientationBack();
    };
  }, []);
  
  const handleError = (error) => {
    console.error('Ошибка плеера:', error);
    setPlayerError(error);
    setPlayerStatus('error');
  };
  
  const handleReady = () => {
    console.log('Плеер готов');
    setPlayerStatus('ready');
    setPlayerError(null);
  };
  
  const testCustomUrl = () => {
    if (customUrl && customUrl.trim()) {
      setUseCustomConfig(true);
      setPlayerStatus('loading');
      setPlayerError(null);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Тест WebView плеера для HTTP-стримов</Text>
        
        <View style={[styles.playerContainer, { width: videoWidth, height: videoHeight }]}>
          <WebViewPlayer 
            source={useCustomConfig ? customUrl : currentChannel.uri}
            style={{ width: videoWidth, height: videoHeight }}
            controls={true}
            onError={handleError}
            onReady={handleReady}
            hlsConfig={getHlsConfig()}
          />
        </View>
        
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Текущий статус:</Text>
          <Text style={[
            styles.statusText, 
            playerStatus === 'ready' ? styles.statusSuccess : 
            playerStatus === 'error' ? styles.statusError : 
            styles.statusLoading
          ]}>
            {playerStatus === 'ready' ? 'Готов' : 
             playerStatus === 'error' ? 'Ошибка' : 
             'Загрузка...'}
          </Text>
          
          {playerError && (
            <Text style={styles.errorText}>
              {typeof playerError === 'string' ? playerError : 'Неизвестная ошибка плеера'}
            </Text>
          )}
        </View>
        
        <View style={styles.urlContainer}>
          <Text style={styles.sectionTitle}>Текущий канал:</Text>
          <Text style={styles.urlText}>{useCustomConfig ? customUrl : currentChannel.name}</Text>
          {!useCustomConfig && (
            <View style={styles.configBadge}>
              <Text style={styles.configText}>Конфигурация: {currentChannel.config}</Text>
            </View>
          )}
        </View>
        
        <View style={styles.controlsContainer}>
          <Text style={styles.sectionTitle}>Тестовые каналы:</Text>
          <ScrollView 
            style={styles.channelListContainer}
            nestedScrollEnabled={true}
            persistentScrollbar={true}
          >
            {testUrls.map((channel, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.urlButton,
                  currentUrlIndex === index && !useCustomConfig ? styles.activeUrlButton : null,
                  getChannelStyle(channel.config)
                ]}
                onPress={() => {
                  setCurrentUrlIndex(index);
                  setUseCustomConfig(false);
                  setPlayerStatus('loading');
                  setPlayerError(null);
                }}
              >
                <Text style={styles.urlButtonText}>{channel.name}</Text>
                <Text style={styles.configLabel}>{channel.config}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.customUrlContainer}>
          <Text style={styles.sectionTitle}>Пользовательский URL:</Text>
          <TextInput
            style={styles.urlInput}
            value={customUrl}
            onChangeText={setCustomUrl}
            placeholder="Введите HTTP URL для тестирования"
            placeholderTextColor="#999"
          />
          <TouchableOpacity 
            style={styles.testButton}
            onPress={testCustomUrl}
          >
            <Text style={styles.testButtonText}>Тестировать URL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Вспомогательная функция для стилизации каналов с разными конфигурациями
const getChannelStyle = (config) => {
  switch(config) {
    case 'таймаут 1 сек':
      return { borderLeftColor: '#ff9800', borderLeftWidth: 5 };
    case '5 повторных попыток':
      return { borderLeftColor: '#2196f3', borderLeftWidth: 5 };
    case 'быстрая':
      return { borderLeftColor: '#e91e63', borderLeftWidth: 5 };
    case 'задержка 1000мс':
      return { borderLeftColor: '#9c27b0', borderLeftWidth: 5 };
    case 'комбо 500мс/5x':
      return { borderLeftColor: '#009688', borderLeftWidth: 5 };
    default:
      return { borderLeftColor: '#4caf50', borderLeftWidth: 5 };
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  playerContainer: {
    backgroundColor: '#000',
    marginBottom: 20,
    overflow: 'hidden',
  },
  statusContainer: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusSuccess: {
    color: '#4caf50',
  },
  statusError: {
    color: '#f44336',
  },
  statusLoading: {
    color: '#2196f3',
  },
  errorText: {
    color: '#f44336',
    marginTop: 5,
  },
  urlContainer: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  urlText: {
    color: '#bbbbbb',
    fontSize: 14,
    padding: 8,
    backgroundColor: '#252525',
    borderRadius: 4,
  },
  configBadge: {
    marginTop: 8,
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  configText: {
    color: '#fff',
    fontSize: 12,
  },
  controlsContainer: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  channelListContainer: {
    maxHeight: 300,
    width: '100%',
  },
  urlButton: {
    backgroundColor: '#333333',
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  activeUrlButton: {
    backgroundColor: '#1976d2',
  },
  urlButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  configLabel: {
    color: '#aaaaaa',
    fontSize: 12,
    marginTop: 4,
  },
  customUrlContainer: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  urlInput: {
    backgroundColor: '#252525',
    color: '#ffffff',
    padding: 12,
    borderRadius: 4,
    marginBottom: 10,
  },
  testButton: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 4,
  },
  testButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default WebViewTestScreen;
