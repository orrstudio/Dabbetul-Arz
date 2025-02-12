import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getThemeByName } from '../utils/theme';

/**
 * BottomNavigation - глобальная панель навигации, отображаемая на всех экранах.
 *
 * @returns {JSX.Element} Элемент нижней панели навигации.
 */
const BottomNavigation = () => {
  const navigation = useNavigation();
  // Жестко задаём тему как темную
  const theme = getThemeByName('dark');

  return (
    <View style={[styles.container, { backgroundColor: theme.background, borderTopColor: theme.background }]}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>Домой</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Player')}>
        <Ionicons name="tv-outline" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>Плеер</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>Настройки</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SplashScreen')}>
        <Ionicons name="person-outline" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>Splash</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 0,
    backgroundColor: '#111112',
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNavigation; 