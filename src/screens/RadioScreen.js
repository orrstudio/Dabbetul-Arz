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
  "tr": require("../../assets/images/logos/flags/flag-tr.png"),
};

const RadioScreen = () => {
  const [themeName] = useState("dark");
  const theme = {
    colors: {
      background: '#111112',
      surface: '#1E1E1E',
      primary: '#2196F3',
      text: '#FFFFFF'
    }
  };
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
  const SYSTEM_TRAY_HEIGHT = 48;

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
        text = await FileSystem.readAsStringAsync(asset.localUri);
      }

      const lines = text.split('\n');
      const parsedChannels = [];
      let currentEntry = {};

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF:')) {
          const match = line.match(/tvg-logo="([^"]*)"[^,]*,(.*)/);
          if (match) {
            currentEntry = {
              logo: match[1],
              title: match[2].trim(),
            };
          }
        } else if (line.startsWith('http')) {
          currentEntry.url = line;
          parsedChannels.push({ ...currentEntry });
          currentEntry = {};
        }
      }

      setChannels(parsedChannels);
      if (parsedChannels.length > 0) {
        setCurrentChannel(parsedChannels[0]);
      }
    } catch (error) {
      console.error('Error loading playlist:', error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    videoContainer: {
      width: videoWidth,
      height: videoHeight,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    channelList: {
      flex: 1,
      padding: 10,
    },
    channelItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      backgroundColor: theme.colors.surface,
      borderRadius: 5,
    },
    channelLogo: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    channelTitle: {
      color: theme.colors.text,
      fontSize: 16,
    },
    activeChannel: {
      backgroundColor: theme.colors.primary,
    },
    flagIcon: {
      width: 24,
      height: 24,
      marginLeft: 10,
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <VideoWindow
            url={currentChannel?.url}
            style={styles.videoContainer}
          />
          <ScrollView style={styles.channelList}>
            {channels.map((channel, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.channelItem,
                  currentChannel?.url === channel.url && styles.activeChannel,
                ]}
                onPress={() => setCurrentChannel(channel)}
              >
                {channel.logo && channelLogos[channel.logo] && (
                  <Image
                    source={channelLogos[channel.logo]}
                    style={styles.channelLogo}
                    resizeMode="contain"
                  />
                )}
                <Text style={styles.channelTitle}>{channel.title}</Text>
                {channel.title.includes('[') && channel.title.includes(']') && (
                  <Image
                    source={flagIcons[channel.title.match(/\[(.*?)\]/)[1]]}
                    style={styles.flagIcon}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <RadioClock />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RadioScreen;
