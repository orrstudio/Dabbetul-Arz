import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Platform, StatusBar as RNStatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';
import BottomNavigation from './src/components/BottomNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const MainLayout = ({ children, hideBottomNavigation = false }) => {
  // Получаем отступы устройства (например, для устройств с вырезом или кнопкой "Домой")
  const insets = useSafeAreaInsets();
  // Предположим, что высота панели навигации равна 60 пикселям
  const bottomNavHeight = 60;

  return (
    <View style={{ flex: 1 }}>
      {/* При скрытии панели используем только нижний inset */}
      <View style={{ flex: 1, paddingBottom: hideBottomNavigation ? insets.bottom : bottomNavHeight + insets.bottom }}>
        {children}
      </View>
      {/* Условное отображение панели навигации */}
      {!hideBottomNavigation && (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <BottomNavigation />
        </View>
      )}
    </View>
  );
};

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // Программно задаём параметры статус-бара. Эти методы могут не работать в Expo Go.
      RNStatusBar.setBarStyle('light-content');
      RNStatusBar.setBackgroundColor('#111112');
      NavigationBar.setBackgroundColorAsync('#111112');
      NavigationBar.setButtonStyleAsync('light');
    }
  }, []);

  return (
    <NavigationContainer>
      {/* Передаём проп style="light" для установки светлого (белого) стиля текста статус-бара */}
      <StatusBar style="light" backgroundColor="#111112" />
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => (
            <MainLayout>
              <HomeScreen {...props} />
            </MainLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="Player">
          {(props) => (
            <MainLayout hideBottomNavigation={true}>
              <PlayerScreen {...props} />
            </MainLayout>
          )}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {(props) => (
            <MainLayout>
              <SettingsScreen {...props} />
            </MainLayout>
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
