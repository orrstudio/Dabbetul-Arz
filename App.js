import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BottomNavigation from './src/components/BottomNavigation';
import { View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const MainLayout = ({ children }) => {
  // Получаем отступы устройства (например, для устройств с вырезом или кнопкой "Домой")
  const insets = useSafeAreaInsets();
  // Предположим, что высота панели навигации равна 60 пикселям
  const bottomNavHeight = 60;

  return (
    <View style={{ flex: 1 }}>
      {/* Добавляем paddingBottom = высота панели + нижний inset */}
      <View style={{ flex: 1, paddingBottom: bottomNavHeight + insets.bottom }}>
        {children}
      </View>
      {/* Абсолютное позиционирование панели навигации на всех платформах */}
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <MainLayout><HomeScreen {...props} /></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="Player">
          {(props) => <MainLayout><PlayerScreen {...props} /></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {(props) => <MainLayout><SettingsScreen {...props} /></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <MainLayout><ProfileScreen {...props} /></MainLayout>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
