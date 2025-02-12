import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { getThemeByName } from '../../utils/theme';
import { getPlayerStyles } from '../../utils/getPlayerStyles';

/**
 * HomeScreen - начальный экран приложения.
 *
 * @returns {JSX.Element} Элемент экрана.
 */
const HomeScreen = ({ navigation }) => {
  const [themeName] = useState("dark"); // Всегда выбираем "dark"
  const theme = getThemeByName(themeName);
  // Создаем объект стилей, генерируемых функцией с передачей темы:
  const styles = getHomeScreenStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Player')}
      >
        <Text style={styles.buttonText}>Go to Player</Text>
      </TouchableOpacity>
    </View>
  );
};

// Функция для генерации стилей для HomeScreen с учетом темы
const getHomeScreenStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen; 