import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Platform, Dimensions 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { useWindowDimensions } from 'react-native';
import { useVideoPlayer } from 'expo-video';
import useLockOrientation from '../hooks/useLockOrientation';
import VideoWindow from '../components/VideoWindow';
import { getPlayerStyles } from '../utils/getPlayerStyles';
import { getThemeByName } from '../utils/theme';
import { useNavigation } from '@react-navigation/native';

// Mapping путей к логотипам (обновлённые пути для расположения из папки screens)
const channelLogos = {
  "../assets/images/logos/mpl.png": require("../../assets/images/logos/mpl.png"),
  "../assets/images/logos/nurtv.png": require("../../assets/images/logos/nurtv.png"),
  "../assets/images/logos/hkhm.png": require("../../assets/images/logos/hkhm.png"),
  "../assets/images/logos/hkhz.png": require("../../assets/images/logos/hkhz.png"),
  "../assets/images/logos/klv7r.png": require("../../assets/images/logos/klv7r.png"),
  "../assets/images/logos/ibrahimlive_de.png": require("../../assets/images/logos/ibrahimlive_de.png"),
  "../assets/images/logos/ibrahimlive_en.png": require("../../assets/images/logos/ibrahimlive_en.png"),
  "../assets/images/logos/ibrahimlive_ru.png": require("../../assets/images/logos/ibrahimlive_ru.png"),
  "../assets/images/logos/ibrahimlive_ar.png": require("../../assets/images/logos/ibrahimlive_ar.png"),
  "../assets/images/logos/ibrahimlive_ku.png": require("../../assets/images/logos/ibrahimlive_ku.png"),
  "../assets/images/logos/ibrahimlive_fr.png": require("../../assets/images/logos/ibrahimlive_fr.png"),
  "../assets/images/logos/ibrahimlive_es.png": require("../../assets/images/logos/ibrahimlive_es.png"),
  "../assets/images/logos/ibrahimlive_zh.png": require("../../assets/images/logos/ibrahimlive_zh.png"),
  "../assets/images/logos/ibrahimlive_bg.png": require("../../assets/images/logos/ibrahimlive_bg.png"),
  "../assets/images/logos/ibrahimlive_nl.png": require("../../assets/images/logos/ibrahimlive_nl.png"),
  "../assets/images/logos/ibrahimlive_fa.png": require("../../assets/images/logos/ibrahimlive_fa.png"),
};

// Mapping для флаговых иконок (обновлённые пути)
const flagIcons = {
  "de": require("../../assets/images/logos/flags/flag-de.png"),
  "en": require("../../assets/images/logos/flags/flag-en.png"),
  "ru": require("../../assets/images/logos/flags/flag-ru.png"),
  "ar": require("../../assets/images/logos/flags/flag-ar.png"),
  "ku": require("../../assets/images/logos/flags/flag-ku.png"),
  "fr": require("../../assets/images/logos/flags/flag-fr.png"),
  "es": require("../../assets/images/logos/flags/flag-es.png"),
  "zh": require("../../assets/images/logos/flags/flag-zh.png"),
  "bg": require("../../assets/images/logos/flags/flag-bg.png"),
  "nl": require("../../assets/images/logos/flags/flag-nl.png"),
  "fa": require("../../assets/images/logos/flags/flag-fa.png"),
  "tr": require("../../assets/images/logos/flags/flag-tr.png"),
};

// Если требуется, функция для динамического импорта модуля expo-screen-orientation может быть здесь

const PlayerScreen = () => {
  const [themeName] = useState("dark");
  const theme = getThemeByName(themeName);
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState(null);

  const dimensions = Dimensions.get('window');
  const isPortrait = dimensions.height >= dimensions.width;
  const videoWidth = isPortrait ? dimensions.width : dimensions.width * 0.7;
  const videoHeight = videoWidth / (16 / 9);

  const player = useVideoPlayer(currentChannel, (player) => {
    if (player) {
      player.loop = true;
      player.staysActiveInBackground = true;
      player.play();
    }
  });
  
  useLockOrientation();

  const videoDimensions = useWindowDimensions();
  const SYSTEM_TRAY_HEIGHT = 48; // Примерное значение высоты системного трейа, скорректируйте по необходимости

  const navigation = useNavigation();

  useEffect(() => {
    loadPlaylist();
  }, []);

  const loadPlaylist = async () => {
    try {
      let text;
      if (Platform.OS === 'web') {
        // Для web: require возвращает URL
        const assetUrl = require("../../assets/playlists/tv.m3u8");
        text = await fetch(assetUrl).then(response => response.text());
      } else {
        const asset = Asset.fromModule(require("../../assets/playlists/tv.m3u8"));
        await asset.downloadAsync();
        const fileUri = asset.localUri || asset.uri;
        text = await FileSystem.readAsStringAsync(fileUri);
      }
      const lines = text.split(/\r?\n/);
      const loadedChannels = [];
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('#EXTINF:')) {
          const info = lines[i];
          const title = info.substring(info.indexOf(',') + 1).trim();
          const logoMatch = info.match(/tvg-logo="([^"]+)"/);
          const logo = logoMatch ? logoMatch[1] : null;
          const uri = lines[i + 1] ? lines[i + 1].trim() : '';
          if (uri) {
            loadedChannels.push({ uri, metadata: { title, logo } });
          }
        }
      }
      setChannels(loadedChannels);
      if (loadedChannels.length > 0) {
        setCurrentChannel(loadedChannels[0]);
      }
    } catch (error) {
      console.error("Ошибка при загрузке плейлиста:", error);
    }
  };

  const windowHeight = videoDimensions.height;
  let channelListMaxHeight = windowHeight;
  if (isPortrait) {
    channelListMaxHeight = windowHeight - videoHeight;
  } else {
    channelListMaxHeight = windowHeight - 35;
  }

  const layoutWidths = isPortrait 
    ? {
        playerWidth: videoDimensions.width,
        listWidth: videoDimensions.width,
      }
    : {
        playerWidth: Platform.OS === 'ios'
          ? videoDimensions.width * 0.65
          : Platform.OS === 'android'
            ? videoDimensions.width * 0.64
            : videoDimensions.width * 0.65,
        listWidth: Platform.OS === 'ios'
          ? videoDimensions.width * 0.25
          : Platform.OS === 'android'
            ? videoDimensions.width * 0.35
            : videoDimensions.width * 0.34,
      };

  const handleChannelChange = (channel) => {
    if (channel.uri !== currentChannel.uri) {
      setCurrentChannel(channel);
    }
  };

  // Получаем стили из отдельной функции
  const styles = getPlayerStyles(theme, isPortrait, videoHeight);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        { isPortrait ? (
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
                <Text style={{ color: theme.text, textAlign: "center", padding: 10 }}>
                  Channels not loaded
                </Text>
              )}
            </View>
            <View style={styles.controls}>
              {currentChannel && (
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.currentChannelText, { textAlign: 'center' }]}
                  >
                    {currentChannel.metadata.title}
                  </Text>
                </View>
              )}
            </View>
            {channels.length > 0 && (
              <ScrollView 
                style={Platform.OS === 'web' ? { maxHeight: channelListMaxHeight, overflowY: 'auto' } : {}}
                contentContainerStyle={styles.channelList}
              >
                {channels.map((channel, index) => (
                  <TouchableOpacity 
                    key={channel.uri} 
                    style={[
                      styles.channelItem,
                      channel.uri === currentChannel.uri && styles.activeChannelItem
                    ]}
                    onPress={() => handleChannelChange(channel)}
                  >
                    <View style={styles.channelRow}>
                      <View style={styles.leftIconContainer}>
                        {channel.metadata.logo && channelLogos[channel.metadata.logo] ? (
                          <Image source={channelLogos[channel.metadata.logo]} style={styles.iconStyle} />
                        ) : (
                          <Image source={require("../../assets/icon.png")} style={styles.iconStyle} />
                        )}
                      </View>
                      <View style={styles.middleTextContainer}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={[
                            styles.channelText,
                            channel.uri === currentChannel.uri && styles.activeChannelText
                          ]}
                        >
                          {channel.metadata.title}
                        </Text>
                      </View>
                      <View style={styles.rightFlagContainer}>
                        {(() => {
                          if (index < 5) {
                            return (
                              <Image source={flagIcons["tr"]} style={styles.flagIconStyle} />
                            );
                          }
                          const logoFilename = channel.metadata.logo;
                          const match = logoFilename && logoFilename.match(/ibrahimlive_([a-z]{2})\.png$/i);
                          if (match) {
                            const langCode = match[1].toLowerCase();
                            if (flagIcons[langCode]) {
                              return (
                                <Image source={flagIcons[langCode]} style={styles.flagIconStyle} />
                              );
                            }
                          }
                          return null;
                        })()}
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
        ) : (
          Platform.OS !== 'web' ? (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: '90%' }}>
                {currentChannel ? (
                  <VideoWindow 
                    currentChannel={currentChannel}
                    videoWidth={videoDimensions.width * 0.9}
                    videoHeight={videoDimensions.height - SYSTEM_TRAY_HEIGHT}
                    player={player}
                    controls={true}
                  />
                ) : (
                  <Text style={{ 
                    color: theme.text, 
                    textAlign: 'center', 
                    padding: 10
                  }}>
                    Channels not loaded
                  </Text>
                )}
              </View>
              <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: theme.activeChannelBackground,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 4
                  }}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={{ color: theme.activeChannelText }}>Профиль</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
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
                      color: theme.text, 
                      textAlign: 'center', 
                      padding: 10
                    }}>
                      Channels not loaded
                    </Text>
                  )}
                </View>
                {currentChannel && (
                  <View style={styles.controls}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={[styles.currentChannelText, { textAlign: 'center' }]}
                      >
                        {currentChannel.metadata.title}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
              <View style={[styles.rightColumn, { width: layoutWidths.listWidth }]}>
                {channels.length > 0 && (
                  <ScrollView
                    style={[
                      styles.landscapeChannelList,
                      {
                        maxHeight: channelListMaxHeight,
                        marginTop: 20,
                        marginBottom: 20,
                        overflowY: 'auto'
                      }
                    ]}
                    contentContainerStyle={[
                      styles.channelList,
                      styles.landscapeChannelListContainer,
                      { flexGrow: 1 }
                    ]}
                  >
                    {channels.map((channel, index) => (
                      <TouchableOpacity
                        key={channel.uri}
                        style={[
                          styles.channelItem,
                          channel.uri === currentChannel.uri && styles.activeChannelItem
                        ]}
                        onPress={() => handleChannelChange(channel)}
                      >
                        <View style={styles.channelRow}>
                          <View style={styles.leftIconContainer}>
                            {channel.metadata.logo && channelLogos[channel.metadata.logo] ? (
                              <Image source={channelLogos[channel.metadata.logo]} style={styles.iconStyle} />
                            ) : (
                              <Image source={require("../../assets/icon.png")} style={styles.iconStyle} />
                            )}
                          </View>
                          <View style={styles.middleTextContainer}>
                            <Text
                              numberOfLines={1}
                              ellipsizeMode="tail"
                              style={[
                                styles.channelText,
                                channel.uri === currentChannel.uri && styles.activeChannelText
                              ]}
                            >
                              {channel.metadata.title}
                            </Text>
                          </View>
                          <View style={styles.rightFlagContainer}>
                            {(() => {
                              if (index < 5) {
                                return <Image source={flagIcons["tr"]} style={styles.flagIconStyle} />;
                              }
                              const logoFilename = channel.metadata.logo;
                              const match = logoFilename && logoFilename.match(/ibrahimlive_([a-z]{2})\.png$/i);
                              if (match) {
                                const langCode = match[1].toLowerCase();
                                if (flagIcons[langCode]) {
                                  return <Image source={flagIcons[langCode]} style={styles.flagIconStyle} />;
                                }
                              }
                              return null;
                            })()}
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>
            </View>
          )
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PlayerScreen; 