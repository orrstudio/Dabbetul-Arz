import React, { useEffect, useState, useRef } from 'react';
import { useColorScheme, StyleSheet, View, Platform, Dimensions, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Ionicons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import HLSVideoPlayer from './components/HLSVideoPlayer';
import useLockOrientation from './hooks/useLockOrientation';
import VideoWindow from './components/VideoWindow';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { useWindowDimensions } from 'react-native';

// Функция для динамического импорта модуля expo-screen-orientation.
async function getScreenOrientation() {
  if (Platform.OS === 'web') {
    return {
      unlockAsync: async () => {},
      lockAsync: async () => {},
      OrientationLock: { PORTRAIT: 'PORTRAIT' },
    };
  } else {
    return await import('expo-screen-orientation');
  }
}

export default function App() {
  // Тема приложения (по умолчанию "dark")
  const [theme] = useState("dark");
  // Рамка всегда белая независимо от темы.
  const appBorderColor = "#fff";

  // Список каналов (будет загружен из плейлиста)
  const [channels, setChannels] = useState([]);
  // Текущий выбранный канал (изначально отсутствует)
  const [currentChannel, setCurrentChannel] = useState(null);
  
  // Функция для смены канала при нажатии на элемент списка
  const handleChannelChange = (channel) => {
    if (channel.uri !== currentChannel.uri) {
      setCurrentChannel(channel);
    }
  };

  // Получение размеров окна и отслеживание изменения ориентации
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  useEffect(() => {
    const onChange = ({ window }) => setDimensions(window);
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription.remove();
  }, []);

  const isPortrait = dimensions.height >= dimensions.width;
  const videoWidth = isPortrait ? dimensions.width : dimensions.width * 0.7;
  const videoHeight = videoWidth / (16 / 9);

  // Инициализация плеера с использованием useVideoPlayer и текущего канала в качестве источника
  const player = useVideoPlayer(currentChannel, (player) => {
    if (player) {
      player.loop = true;
      player.staysActiveInBackground = true;
      // Автостарт воспроизведения (на мобильных платформах)
      player.play();
    }
  });

  // Блокируем общую ориентацию приложения (PORTRAIT)
  useLockOrientation();
  // Автоматическая загрузка плейлиста при запуске приложения
  useEffect(() => {
    loadPlaylist();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#1a1a2e" : "#fff",
    },
    videoContainer: {
      width: isPortrait ? dimensions.width : dimensions.width * 0.7,
      height: videoHeight,
      alignSelf: 'flex-start',
      backgroundColor: "#000",
      margin: 0,
      padding: 0,
    },
    controls: {
      alignItems: 'flex-start',
      marginVertical: 0,
      padding: 0,
    },
    currentChannelText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme === "dark" ? "#fff" : "#000",
      textAlign: 'center',
      alignSelf: 'center',
      marginTop: 3,
      marginBottom: 3,
      padding: 0,
      flexWrap: 'wrap',
    },
    channelList: {
      padding: 3,
      margin: 3,
    },
    channelItem: {
      padding: 12,
      marginBottom: 3,
      backgroundColor: theme === "dark" ? "#333" : "#ddd",
      borderRadius: 5,
    },
    channelText: {
      fontSize: 16,
      color: theme === "dark" ? "#fff" : "#000",
    },
    activeChannelItem: {
      backgroundColor: theme === "dark" ? "#555" : "#eee",
    },
    activeChannelText: {
      fontWeight: 'bold',
    },
    landscapeContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    landscapeVideoContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 0,
      margin: 0,
    },
    landscapeChannelList: {
      width: '100%',
      padding: 3,
      margin: 3,
    },
    landscapeChannelListContainer: {
      justifyContent: 'flex-start',
    },
    leftColumn: {
      flexDirection: 'column',
      padding: 3,
    },
    rightColumn: {
      padding: 3,
    },
  });

  // Функция для загрузки плейлиста ТВ каналов из файла m3u8
  const loadPlaylist = async () => {
    try {
      console.log("loadPlaylist: Запуск функции загрузки плейлиста");
      let text;
      if (Platform.OS === 'web') {
        console.log("loadPlaylist: Платформа - WEB");
        // Для web: require возвращает URL, поэтому делаем fetch для получения содержимого файла
        const assetUrl = require('./assets/playlists/tv.m3u8');
        console.log("loadPlaylist: Получен URL для веб:", assetUrl);
        text = await fetch(assetUrl).then(response => response.text());
        console.log("loadPlaylist: Получен текст из fetch для web:", text);
      } else {
        console.log("loadPlaylist: Платформа - NATIVE (iOS/Android)");
        // Для нативных платформ также используем tv.m3u8
        const asset = Asset.fromModule(require('./assets/playlists/tv.m3u8'));
        console.log("loadPlaylist: Asset загружен:", asset);
        await asset.downloadAsync();
        // Если asset.localUri не задан, используем asset.uri
        const fileUri = asset.localUri || asset.uri;
        console.log("loadPlaylist: Asset успешно скачан, fileUri =", fileUri);
        text = await FileSystem.readAsStringAsync(fileUri);
        console.log("loadPlaylist: Получен текст из FileSystem");
      }
      console.log("loadPlaylist: Полный текст плейлиста:\n", text);
      const lines = text.split(/\r?\n/);
      console.log("loadPlaylist: Количество строк после split:", lines.length);
      const loadedChannels = [];
      // Простой парсер m3u8: каждая информация находится в строке, начинающейся с #EXTINF,
      // а следующая строка содержит URL потока
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('#EXTINF:')) {
          const info = lines[i];
          const title = info.substring(info.indexOf(',') + 1).trim();
          const uri = lines[i + 1] ? lines[i + 1].trim() : '';
          if (uri) {
            loadedChannels.push({ uri, metadata: { title } });
          }
        }
      }
      console.log("loadPlaylist: Загруженные каналы:", loadedChannels);
      setChannels(loadedChannels);
      if (loadedChannels.length > 0) {
        setCurrentChannel(loadedChannels[0]);
        console.log("loadPlaylist: Установлен текущий канал:", loadedChannels[0]);
      } else {
        console.log("loadPlaylist: Не удалось загрузить каналы");
      }
    } catch (error) {
      console.error("Ошибка при загрузке плейлиста:", error);
    }
  };

  // Используем хук useWindowDimensions для отслеживания размеров экрана (он автоматически обновляется)
  const videoDimensions = useWindowDimensions();

  // Вычисляем ширины для плеера и списка в одном объекте
  const layoutWidths = isPortrait 
    ? {
        // В портретном режиме плеер занимает всю ширину,
        // а список каналов либо не используется, либо равен ширине плеера.
        playerWidth: videoDimensions.width,
        listWidth: videoDimensions.width,
      }
    : {
        playerWidth: Platform.OS === 'ios'
          ? videoDimensions.width * 0.65  // для iOS
          : Platform.OS === 'android'
            ? videoDimensions.width * 0.64  // для Андроид
            : videoDimensions.width * 0.65, // для web
        listWidth: Platform.OS === 'ios'
          ? videoDimensions.width * 0.25  // для iOS
          : Platform.OS === 'android'
            ? videoDimensions.width * 0.35  // для Андроид
            : videoDimensions.width * 0.34, // для web
      };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      <SafeAreaView style={styles.container}>
        { isPortrait ? (
          // При вертикальной ориентации - плеер сверху, список под ним
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.videoContainer}>
              {currentChannel ? (
                <VideoWindow 
                  currentChannel={currentChannel}
                  videoWidth={layoutWidths.playerWidth}
                  videoHeight={videoHeight}
                  player={player}
                  controls={true}
                />
              ) : (
                <Text style={{ color: theme === "dark" ? "#fff" : "#000", textAlign: "center", padding: 10 }}>
                  Каналы не загружены
                </Text>
              )}
            </View>
            <View style={styles.controls}>
              {currentChannel && (
                <Text style={styles.currentChannelText}>
                  {currentChannel.metadata.title}
                </Text>
              )}
            </View>
            {channels.length > 0 && (
              <ScrollView contentContainerStyle={styles.channelList}>
                {channels.map((channel) => (
                  <TouchableOpacity 
                    key={channel.uri} 
                    style={[
                      styles.channelItem,
                      channel.uri === currentChannel.uri && styles.activeChannelItem
                    ]}
                    onPress={() => handleChannelChange(channel)}
                  >
                    <Text style={[
                      styles.channelText,
                      channel.uri === currentChannel.uri && styles.activeChannelText
                    ]}>
                      {channel.metadata.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
        ) : (
          // При горизонтальной ориентации: левый столбец – видео с названием под ним, правый столбец – список каналов
          <View style={styles.landscapeContainer}>
            <View style={[styles.leftColumn, { width: layoutWidths.playerWidth }]}>
              <View style={styles.landscapeVideoContainer}>
                {currentChannel ? (
                  <VideoWindow 
                    currentChannel={currentChannel}
                    videoWidth={layoutWidths.playerWidth}
                    videoHeight={videoHeight}
                    player={player}
                    controls={true}
                  />
                ) : (
                  <Text style={{ 
                    color: theme === "dark" ? "#fff" : "#000", 
                    textAlign: "center", 
                    padding: 10 
                  }}>
                    Каналы не загружены
                  </Text>
                )}
              </View>
              {currentChannel && (
                <View style={styles.controls}>
                  <Text style={styles.currentChannelText}>
                    {currentChannel.metadata.title}
                  </Text>
                </View>
              )}
            </View>
            <View style={[styles.rightColumn, { width: layoutWidths.listWidth }]}>
              {channels.length > 0 && (
                <ScrollView 
                  style={styles.landscapeChannelList}
                  contentContainerStyle={[styles.channelList, styles.landscapeChannelListContainer]}
                >
                  {channels.map((channel) => (
                    <TouchableOpacity 
                      key={channel.uri} 
                      style={[
                        styles.channelItem,
                        channel.uri === currentChannel.uri && styles.activeChannelItem
                      ]}
                      onPress={() => handleChannelChange(channel)}
                    >
                      <Text style={[
                        styles.channelText,
                        channel.uri === currentChannel.uri && styles.activeChannelText
                      ]}>
                        {channel.metadata.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
