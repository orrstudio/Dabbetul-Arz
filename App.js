import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Platform, StatusBar as RNStatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ClockSettingsProvider } from './src/contexts/ClockSettingsContext';

const Stack = createStackNavigator();

const MainLayout = ({ children }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        {children}
      </View>
    </View>
  );
};

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      RNStatusBar.setBarStyle('light-content');
      RNStatusBar.setBackgroundColor('#111112');
      NavigationBar.setBackgroundColorAsync('#111112');
      NavigationBar.setButtonStyleAsync('light');
    }
  }, []);

  return (
    <ClockSettingsProvider>
      <NavigationContainer>
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
              <MainLayout>
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
    </ClockSettingsProvider>
  );
}
