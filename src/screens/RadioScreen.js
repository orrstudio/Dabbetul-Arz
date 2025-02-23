import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Platform, Dimensions, useWindowDimensions 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { useVideoPlayer } from 'expo-video';
import useLockOrientation from '../hooks/useLockOrientation';
import VideoWindow from '../components/VideoWindow';
import { getPlayerStyles } from '../utils/getPlayerStyles';
import { getThemeByName } from '../utils/theme';
import { useNavigation } from '@react-navigation/native';
import DigitalClock from '../components/DigitalClock';
import TimeDisplay from '../components/TimeDisplay';
import RadioClock from '../components/RadioClock';

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
  "tr": require("../../assets/images/logos/flags/flag-tr.png")
};

const RadioScreen = () => {
  const [themeName] = useState("dark");
  const theme = getThemeByName(themeName);
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState(null);

  const dimensions = Dimensions.get('window');
  const videoDimensions = useWindowDimensions();
  const isPortrait = dimensions.height >= dimensions.width;
  const videoWidth = isPortrait ? dimensions.width : dimensions.width * 0.7;
  const videoHeight = videoWidth / (16 / 9);

  const windowHeight = videoDimensions.height;
  let channelListMaxHeight = windowHeight;
  if (isPortrait) {
    channelListMaxHeight = windowHeight - videoHeight - 100; // 100px для заголовка и отступов
  } else {
    channelListMaxHeight = windowHeight - 0;
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

  const player = useVideoPlayer(currentChannel?.uri, (player) => {
    if (player) {
      player.loop = true;
      player.staysActiveInBackground = true;
      player.play();
    }
  });
  
  useLockOrientation();

  const navigation = useNavigation();
  
  useEffect(() => {
    loadPlaylist();
  }, []);

  const loadPlaylist = async () => {
    try {
      let text;
      if (Platform.OS === 'web') {
        const assetUrl = require("../../assets/playlists/radio.m3u8");
        text = await fetch(assetUrl).then(response => response.text());
      } else {
        const asset = Asset.fromModule(require("../../assets/playlists/radio.m3u8"));
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
          const langMatch = info.match(/tvg-language="([^"]+)"/);
          const language = langMatch ? langMatch[1] : null;
          const uri = lines[i + 1] ? lines[i + 1].trim() : '';
          if (uri) {
            loadedChannels.push({ uri, metadata: { title, logo, language } });
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

  const handleChannelChange = (channel) => {
    if (channel?.uri && (!currentChannel || channel.uri !== currentChannel.uri)) {
      setCurrentChannel(channel);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
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
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.text,
      textAlign: 'center',
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 5,
      padding: 0,
      flexWrap: 'wrap',
    },
    channelList: {
      paddingVertical: 0,
      paddingHorizontal: 5,
      marginHorizontal: 5,
    },
    channelItem: {
      padding: 0,
      marginBottom: 5,
      backgroundColor: theme.channelBackground,
      borderRadius: 20,
    },
    channelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    leftIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
    },
    middleTextContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    rightFlagContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: 50,
    },
    channelText: {
      fontSize: 16,
      color: theme.channelText,
      textAlign: 'left',
    },
    activeChannelItem: {
      backgroundColor: theme.activeChannelBackground,
    },
    activeChannelText: {
      fontSize: 20,
      color: theme.activeChannelText,
      fontWeight: 'bold',
    },
    iconStyle: {
      width: 50,
      height: 50,
      marginRight: 8,
      resizeMode: 'contain',
    },
    flagIconStyle: {
      width: 40,
      height: 40,
      marginLeft: 4,
      resizeMode: 'contain',
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
    },
  });

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
                  Каналы не загружены
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
                    {currentChannel?.metadata?.title}
                  </Text>
                </View>
              )}
            </View>
            {channels.length > 0 && (
              <ScrollView 
                style={[
                  Platform.OS === 'web' ? { maxHeight: channelListMaxHeight, overflowY: 'auto' } : {},
                  styles.channelList
                ]}
              >
                {channels.map((channel, index) => (
                  <TouchableOpacity 
                    key={channel.uri} 
                    style={[
                      styles.channelItem,
                      channel.uri === currentChannel?.uri && styles.activeChannelItem
                    ]}
                    onPress={() => handleChannelChange(channel)}
                  >
                    <View style={styles.channelRow}>
                      <View style={styles.leftIconContainer}>
                        {channel.metadata?.logo && channelLogos[channel.metadata.logo] && (
                          <Image
                            source={channelLogos[channel.metadata.logo]}
                            style={styles.iconStyle}
                            resizeMode="contain"
                          />
                        )}
                      </View>
                      <View style={styles.middleTextContainer}>
                        <Text 
                          style={[
                            styles.channelText,
                            channel.uri === currentChannel?.uri && styles.activeChannelText
                          ]}
                          numberOfLines={1}
                        >
                          {channel?.metadata?.title || 'Без названия'}
                        </Text>
                      </View>
                      <View style={styles.rightFlagContainer}>
                        {(channel.metadata?.language || channel.metadata?.logo === "../assets/images/logos/mpl.png" || channel.metadata?.logo === "../assets/images/logos/nurtv.png") && (
                          <Image
                            source={flagIcons[channel.metadata?.language || "tr"]}
                            style={styles.flagIconStyle}
                            resizeMode="contain"
                          />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
        ) : (
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: layoutWidths.playerWidth }}>
              {currentChannel ? (
                <>
                  <VideoWindow 
                    currentChannel={currentChannel}
                    videoWidth={layoutWidths.playerWidth}
                    videoHeight={videoHeight}
                    player={player}
                    controls={true}
                  />
                  <View style={styles.controls}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={[styles.currentChannelText, { textAlign: 'center' }]}
                    >
                      {currentChannel?.metadata?.title}
                    </Text>
                  </View>
                </>
              ) : (
                <Text style={{ color: theme.text, textAlign: "center", padding: 10 }}>
                  Каналы не загружены
                </Text>
              )}
              <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <DigitalClock />
                <TimeDisplay />
                <RadioClock />
              </View>
            </View>
            {channels.length > 0 && (
              <ScrollView 
                style={[
                  { width: layoutWidths.listWidth },
                  Platform.OS === 'web' ? { overflowY: 'auto' } : {},
                  styles.landscapeChannelList
                ]}
              >
                {channels.map((channel, index) => (
                  <TouchableOpacity 
                    key={channel.uri} 
                    style={[
                      styles.channelItem,
                      channel.uri === currentChannel?.uri && styles.activeChannelItem
                    ]}
                    onPress={() => handleChannelChange(channel)}
                  >
                    <View style={styles.channelRow}>
                      <View style={styles.leftIconContainer}>
                        {channel.metadata?.logo && channelLogos[channel.metadata.logo] && (
                          <Image
                            source={channelLogos[channel.metadata.logo]}
                            style={styles.iconStyle}
                            resizeMode="contain"
                          />
                        )}
                      </View>
                      <View style={styles.middleTextContainer}>
                        <Text 
                          style={[
                            styles.channelText,
                            channel.uri === currentChannel?.uri && styles.activeChannelText
                          ]}
                          numberOfLines={1}
                        >
                          {channel?.metadata?.title || 'Без названия'}
                        </Text>
                      </View>
                      <View style={styles.rightFlagContainer}>
                        {(channel.metadata?.language || channel.metadata?.logo === "../assets/images/logos/mpl.png" || channel.metadata?.logo === "../assets/images/logos/nurtv.png") && (
                          <Image
                            source={flagIcons[channel.metadata?.language || "tr"]}
                            style={styles.flagIconStyle}
                            resizeMode="contain"
                          />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RadioScreen;
