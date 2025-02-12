import React, { useEffect, useState, useRef } from 'react';
import { useColorScheme, StyleSheet, View, Platform, Dimensions, Text, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';

// Mapping путей к логотипам, как указано в плейлисте tv.m3u8,
// для использования локальных изображений через require.
const channelLogos = {
  "../assets/images/logos/mpl.png": require("./assets/images/logos/mpl.png"),
  "../assets/images/logos/nurtv.png": require("./assets/images/logos/nurtv.png"),
  "../assets/images/logos/hkhm.png": require("./assets/images/logos/hkhm.png"),
  "../assets/images/logos/hkhz.png": require("./assets/images/logos/hkhz.png"),
  "../assets/images/logos/klv7r.png": require("./assets/images/logos/klv7r.png"),
  "../assets/images/logos/ibrahimlive_de.png": require("./assets/images/logos/ibrahimlive_de.png"),
  "../assets/images/logos/ibrahimlive_en.png": require("./assets/images/logos/ibrahimlive_en.png"),
  "../assets/images/logos/ibrahimlive_ru.png": require("./assets/images/logos/ibrahimlive_ru.png"),
  "../assets/images/logos/ibrahimlive_ar.png": require("./assets/images/logos/ibrahimlive_ar.png"),
  "../assets/images/logos/ibrahimlive_ku.png": require("./assets/images/logos/ibrahimlive_ku.png"),
  "../assets/images/logos/ibrahimlive_fr.png": require("./assets/images/logos/ibrahimlive_fr.png"),
  "../assets/images/logos/ibrahimlive_es.png": require("./assets/images/logos/ibrahimlive_es.png"),
  "../assets/images/logos/ibrahimlive_zh.png": require("./assets/images/logos/ibrahimlive_zh.png"),
  "../assets/images/logos/ibrahimlive_bg.png": require("./assets/images/logos/ibrahimlive_bg.png"),
  "../assets/images/logos/ibrahimlive_nl.png": require("./assets/images/logos/ibrahimlive_nl.png"),
  "../assets/images/logos/ibrahimlive_fa.png": require("./assets/images/logos/ibrahimlive_fa.png"),
};

// Mapping для флаговых иконок. Флаговое имя строится по коду языка, например flag-ar.png
const flagIcons = {
  "de": require("./assets/images/logos/flags/flag-de.png"),
  "en": require("./assets/images/logos/flags/flag-en.png"),
  "ru": require("./assets/images/logos/flags/flag-ru.png"),
  "ar": require("./assets/images/logos/flags/flag-ar.png"),
  "ku": require("./assets/images/logos/flags/flag-ku.png"),
  "fr": require("./assets/images/logos/flags/flag-fr.png"),
  "es": require("./assets/images/logos/flags/flag-es.png"),
  "zh": require("./assets/images/logos/flags/flag-zh.png"),
  "bg": require("./assets/images/logos/flags/flag-bg.png"),
  "nl": require("./assets/images/logos/flags/flag-nl.png"),
  "fa": require("./assets/images/logos/flags/flag-fa.png"),
  "tr": require("./assets/images/logos/flags/flag-tr.png"),
};

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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Player" 
          component={PlayerScreen} 
          options={{ title: 'Player' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
