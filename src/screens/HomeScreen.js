import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { getThemeByName } from '../utils/theme';
import { getPlayerStyles } from '../utils/getPlayerStyles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Размеры контейнера со звездами (2 экрана в высоту, 3 в ширину)
const STARS_CONTAINER_WIDTH = SCREEN_WIDTH * 3;
const STARS_CONTAINER_HEIGHT = SCREEN_HEIGHT * 2;

// Создаем массив позиций для звезд (9 звезд, чтобы заполнить контейнер)
const STAR_POSITIONS = [
  { x: 0, y: 0 },                           // Верхний левый
  { x: SCREEN_WIDTH, y: 0 },                // Верхний центр
  { x: SCREEN_WIDTH * 2, y: 0 },           // Верхний правый
  { x: 0, y: SCREEN_HEIGHT * 0.5 },        // Центр левый
  { x: SCREEN_WIDTH, y: SCREEN_HEIGHT * 0.5 }, // Центр
  { x: SCREEN_WIDTH * 2, y: SCREEN_HEIGHT * 0.5 }, // Центр правый
  { x: 0, y: SCREEN_HEIGHT },              // Нижний левый
  { x: SCREEN_WIDTH, y: SCREEN_HEIGHT },   // Нижний центр
  { x: SCREEN_WIDTH * 2, y: SCREEN_HEIGHT } // Нижний правый
];

/**
 * HomeScreen - начальный экран приложения.
 *
 * @returns {JSX.Element} Элемент экрана.
 */
const HomeScreen = ({ navigation }) => {
  const [themeName] = useState("dark");
  const theme = getThemeByName(themeName);
  const styles = getHomeScreenStyles(theme);

  // Создаем анимированное значение для движения контейнера
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  
  // Функция для создания круговой анимации
  const animateContainer = () => {
    // Создаем последовательность движений для формирования круга
    const createCircularMotion = () => {
      const duration = 60000; // 60 секунд на полный круг
      
      return Animated.sequence([
        // Движение вправо
        Animated.timing(translateX, {
          toValue: -SCREEN_WIDTH,
          duration: duration / 4,
          useNativeDriver: true,
        }),
        // Движение вверх
        Animated.timing(translateY, {
          toValue: -SCREEN_HEIGHT * 0.5,
          duration: duration / 4,
          useNativeDriver: true,
        }),
        // Движение влево
        Animated.timing(translateX, {
          toValue: 0,
          duration: duration / 4,
          useNativeDriver: true,
        }),
        // Движение вниз
        Animated.timing(translateY, {
          toValue: 0,
          duration: duration / 4,
          useNativeDriver: true,
        }),
      ]);
    };

    // Запускаем анимацию и повторяем её бесконечно
    Animated.loop(createCircularMotion()).start();
  };

  useEffect(() => {
    animateContainer();
  }, []);

  return (
    <View style={styles.container}>
      {/* Фоновая картинка */}
      <Animated.Image
        source={require('../../assets/images/background-home-1.png')}
        style={styles.backgroundImage}
      />
      
      {/* Контейнер со звездами */}
      <Animated.View
        style={[
          styles.starsContainer,
          {
            transform: [
              { translateX },
              { translateY }
            ]
          }
        ]}
      >
        {/* Размещаем звезды по всему контейнеру */}
        {STAR_POSITIONS.map((position, index) => (
          <Animated.Image
            key={index}
            source={require('../../assets/images/background-home-2.png')}
            style={[
              styles.starsImage,
              {
                left: position.x,
                top: position.y,
              }
            ]}
          />
        ))}
      </Animated.View>
      
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
    overflow: 'hidden', // Скрываем всё, что выходит за пределы экрана
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'cover',
  },
  starsContainer: {
    position: 'absolute',
    width: STARS_CONTAINER_WIDTH,
    height: STARS_CONTAINER_HEIGHT,
  },
  starsImage: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'contain',
  },
  planetImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
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