import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { getThemeByName } from '../utils/theme';
import { getPlayerStyles } from '../utils/getPlayerStyles';

/**
 * HomeScreen - начальный экран приложения.
 *
 * @returns {JSX.Element} Элемент экрана.
 */
const HomeScreen = ({ navigation }) => {
  const [themeName] = useState("dark"); // Всегда выбираем "dark"
  const theme = getThemeByName(themeName);
  const styles = getHomeScreenStyles(theme);

  // Инициализация анимационных значений для фоновых картинок
  const [firstOpacity] = useState(new Animated.Value(1));
  const [secondOpacity] = useState(new Animated.Value(0));
  const [thirdOpacity] = useState(new Animated.Value(0));

  // Анимация последовательного перехода от первой картинки к третьей
  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),
      Animated.parallel([
        Animated.timing(firstOpacity, { toValue: 0, duration: 1000, useNativeDriver: true }),
        Animated.timing(secondOpacity, { toValue: 1, duration: 1000, useNativeDriver: true })
      ]),
      Animated.delay(500),
      Animated.timing(thirdOpacity, { toValue: 1, duration: 1000, useNativeDriver: true })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/background-home-1.png')}
        style={[styles.backgroundImage, { opacity: firstOpacity }]}
      />
      <Animated.Image
        source={require('../../assets/images/background-home-2.png')}
        style={[styles.backgroundImage, { opacity: secondOpacity }]}
      />
      <Animated.Image
        source={require('../../assets/images/background-home-3.png')}
        style={[styles.backgroundImage, { opacity: thirdOpacity }]}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to the App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Player')}
        >
          <Text style={styles.buttonText}>Go to Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Функция для генерации стилей для HomeScreen с учетом темы
const getHomeScreenStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
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
  },
});

export default HomeScreen;