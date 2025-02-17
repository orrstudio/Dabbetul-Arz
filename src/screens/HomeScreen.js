import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { getThemeByName } from '../utils/theme';
import { getPlayerStyles } from '../utils/getPlayerStyles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * HomeScreen - начальный экран приложения.
 *
 * @returns {JSX.Element} Элемент экрана.
 */
const HomeScreen = ({ navigation }) => {
  const [themeName] = useState("dark");
  const theme = getThemeByName(themeName);
  const styles = getHomeScreenStyles(theme);

  // Анимированное значение для горизонтального движения звезд
  const starsPosition = useRef(new Animated.Value(0)).current;
  
  // Функция для создания анимации движения звезд
  const animateStars = () => {
    // Сначала двигаем влево
    Animated.sequence([
      // Движение влево
      Animated.timing(starsPosition, {
        toValue: -200, // Значение для сдвига влево
        duration: 15000, // 15 секунд на движение
        useNativeDriver: true,
      }),
      // Пауза
      Animated.delay(3000),
      // Движение вправо
      Animated.timing(starsPosition, {
        toValue: 0,
        duration: 15000,
        useNativeDriver: true,
      }),
      // Пауза перед повтором
      Animated.delay(3000),
    ]).start(() => {
      // После завершения запускаем анимацию снова
      animateStars();
    });
  };

  // Запускаем анимацию при монтировании компонента
  useEffect(() => {
    animateStars();
  }, []);

  return (
    <View style={styles.container}>
      {/* Фоновая картинка */}
      <Animated.Image
        source={require('../../assets/images/background-home-1.png')}
        style={styles.backgroundImage}
      />
      
      {/* Звезды с анимацией */}
      <Animated.Image
        source={require('../../assets/images/background-home-2.png')}
        style={[
          styles.starsImage,
          {
            transform: [{ translateX: starsPosition }]
          }
        ]}
      />
      
      {/* Планета (статичная) */}
      <Animated.Image
        source={require('../../assets/images/background-home-3.png')}
        style={styles.planetImage}
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

const getHomeScreenStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'cover',
  },
  starsImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SCREEN_WIDTH + 400, // Делаем картинку шире экрана для анимации
    height: SCREEN_HEIGHT,
    resizeMode: 'contain',
  },
  planetImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.75, // Пропорционально размеру картинки
    resizeMode: 'contain',
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