import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Image } from 'react-native';
import { getThemeByName } from '../utils/theme';
import { getPlayerStyles } from '../utils/getPlayerStyles';

// Коэффициенты
const CONTAINER_SCALE = 3;
const MOVEMENT_SCALE = 0.1;

// Вычисляем размеры контейнера на основе текущих размеров экрана
const getContainerDimensions = () => {
  const { width, height } = Dimensions.get('window');
  
  // Базовые размеры контейнера
  const containerWidth = width * CONTAINER_SCALE;
  const containerHeight = height * CONTAINER_SCALE;
  
  // Разница между размером контейнера и экрана
  const diffX = containerWidth - width;
  const diffY = containerHeight - height;
  
  // Центрируем контейнер
  const offsetX = diffX / 2;
  const offsetY = diffY / 2;
  
  // Максимальное смещение при анимации
  const maxOffsetX = offsetX * MOVEMENT_SCALE;
  const maxOffsetY = offsetY * MOVEMENT_SCALE;

  return {
    width: containerWidth,
    height: containerHeight,
    offsetX,
    offsetY,
    maxOffsetX,
    maxOffsetY
  };
};

const HomeScreen = ({ navigation }) => {
  const [themeName] = useState("dark");
  const theme = getThemeByName(themeName);
  
  // Состояние для хранения размеров
  const [containerDims, setContainerDims] = useState(getContainerDimensions());
  
  // Анимация
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  // Обновляем размеры при изменении ориентации
  useEffect(() => {
    const updateDimensions = () => {
      // Останавливаем текущую анимацию
      translateX.stopAnimation();
      translateY.stopAnimation();
      
      // Обновляем размеры
      setContainerDims(getContainerDimensions());
      
      // Сбрасываем позицию
      translateX.setValue(0);
      translateY.setValue(0);
      
      // Перезапускаем анимацию
      animateContainer();
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);
    return () => subscription.remove();
  }, []);

  const animateContainer = () => {
    const createCircularMotion = () => {
      const duration = 60000;
      const { maxOffsetX, maxOffsetY } = containerDims;
      
      return Animated.sequence([
        Animated.timing(translateX, {
          toValue: -maxOffsetX,
          duration: duration / 4,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -maxOffsetY,
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
  }, [containerDims]); // Перезапускаем анимацию при изменении размеров

  const getScreenDimensions = () => {
    const { width, height } = Dimensions.get('window');
    return {
      width,
      height,
      planetSize: Math.min(width, height) / 1.5,
    };
  };

  const [dimensions, setDimensions] = useState(getScreenDimensions());

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions(getScreenDimensions());
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);
    return () => subscription.remove();
  }, []);

  const styles = getHomeScreenStyles(theme, dimensions);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.starsContainer,
          {
            width: containerDims.width,
            height: containerDims.height,
            left: -containerDims.offsetX,
            top: -containerDims.offsetY,
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