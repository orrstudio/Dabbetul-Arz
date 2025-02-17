import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Image } from 'react-native';
import { getThemeByName } from '../utils/theme';
import { getPlayerStyles } from '../utils/getPlayerStyles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const getScreenDimensions = () => {
  const { width, height } = Dimensions.get('window');
  return {
    width,
    height,
    planetSize: Math.min(width, height) / 1.5,
  };
};

const HomeScreen = ({ navigation }) => {
  const [themeName] = useState("dark");
  const theme = getThemeByName(themeName);
  const [dimensions, setDimensions] = useState(getScreenDimensions());
  
  // Анимация
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  // Для теста выведем одну звезду
  useEffect(() => {
    console.log('Component mounted');
    const image = require('../../assets/images/animation/stars.png');
    console.log('Image loaded:', image);
  }, []);

  // Обновляем размеры при изменении ориентации
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions(getScreenDimensions());
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);
    return () => subscription.remove();
  }, []);

  const animateContainer = () => {
    const createCircularMotion = () => {
      const duration = 60000;
      
      return Animated.sequence([
        Animated.timing(translateX, {
          toValue: -SCREEN_WIDTH * 0.2,
          duration: duration / 4,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -SCREEN_HEIGHT * 0.2,
          duration: duration / 4,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: duration / 4,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: duration / 4,
          useNativeDriver: true,
        }),
      ]);
    };

    Animated.loop(createCircularMotion()).start();
  };

  useEffect(() => {
    animateContainer();
  }, [dimensions]);

  const styles = getHomeScreenStyles(theme, dimensions);

  return (
    <View style={styles.container}>
      {/* Тестовый контейнер с одной звездой */}
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
        <Animated.Image
          source={require('../../assets/images/animation/stars.png')}
          style={styles.starsImage}
        />
      </Animated.View>

      {/* Остальные элементы */}
      <Animated.Image
        source={require('../../assets/images/animation/earth.png')}
        style={styles.planetImage}
      />

      <Animated.Image
        source={require('../../assets/images/animation/moon.png')}
        style={styles.moonImage}
      />

      {/* Спутник (статичный) */}
      <View style={styles.dabbeContainer}>
        <Animated.Image
          source={require('../../assets/images/animation/dabbe.png')}
          style={styles.dabbeImage}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Dabbetül Arz</Text>
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

const getHomeScreenStyles = (theme, dimensions) => StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#00121E',
  },
  starsContainer: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    zIndex: 1,
  },
  starsImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'repeat',
  },
  planetImage: {
    position: 'absolute',
    bottom: '-13%', // Выходит за нижнюю границу
    left: '-10%', // Выходит за левую границу
    width: dimensions.planetSize,
    height: dimensions.planetSize,
    resizeMode: 'contain',
    zIndex: 2, // Планета над звездами
  },
  moonImage: {
    position: 'absolute',
    bottom: '-2%', // Немного выходит за нижнюю границу
    right: '-1%', // Немного выходит за правую границу
    width: dimensions.planetSize * 0.3, // 30% от размера планеты
    height: dimensions.planetSize * 0.3,
    resizeMode: 'contain',
    zIndex: 3, // Луна над планетой
  },
  dabbeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: dimensions.planetSize * 0.9,
    height: dimensions.planetSize * 0.9,
    zIndex: 2,
  },
  dabbeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: '-30%',
    marginRight: '-20%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4, // Контент над всеми элементами
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