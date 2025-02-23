import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Image, Platform } from 'react-native';
import { getThemeByName } from '../utils/theme';
import { getPlayerStyles } from '../utils/getPlayerStyles';
import { Ionicons } from '@expo/vector-icons';
import SmallDigitalClock from '../components/SmallDigitalClock';
import * as ScreenOrientation from 'expo-screen-orientation';

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
  const earthRotation = useRef(new Animated.Value(0)).current;
  const earthScale = useRef(new Animated.Value(1)).current;
  const dabbeScale = useRef(new Animated.Value(1)).current;
  const dabbeOffset = useRef(new Animated.Value(0)).current;
  const dabbeVerticalOffset = useRef(new Animated.Value(0)).current;
  const titleTopColor = useRef(new Animated.Value(0)).current;
  const titleBottomColor = useRef(new Animated.Value(0)).current;

  const topTextColor = titleTopColor.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: [
      '#f3c300',  // золотой
      '#ffffff',  // белый
      '#ffffff',  // белый
      '#ff0000',  // красный
      '#ff0000',  // красный
      '#ffffff',  // белый
      '#f3c300'   // обратно в золотой
    ]
  });

  const bottomTextColor = titleBottomColor.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: [
      '#f3c300',  // золотой
      '#ffffff',  // белый
      '#ff0000',  // красный
      '#ff0000',  // красный
      '#ffffff',  // белый
      '#f3c300',  // обратно в золотой
      '#f3c300'   // обратно в золотой
    ]
  });

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

    const createEarthRotation = () => {
      return Animated.sequence([
        Animated.timing(earthRotation, {
          toValue: 1,
          duration: 100000,
          useNativeDriver: true,
          easing: Animated.linear
        }),
        Animated.timing(earthRotation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true
        })
      ]);
    };

    const createEarthScale = () => {
      return Animated.sequence([
        Animated.timing(earthScale, {
          toValue: 2,
          duration: 100000,
          useNativeDriver: true,
          easing: Animated.linear
        }),
        Animated.timing(earthScale, {
          toValue: 1,
          duration: 100000,
          useNativeDriver: true,
          easing: Animated.linear
        })
      ]);
    };

    const createDabbeAnimation = () => {
      const scaleAnimation = Animated.sequence([
        Animated.timing(dabbeScale, {
          toValue: 0.5,
          duration: 100000,
          useNativeDriver: true,
          easing: Animated.easeInOut
        }),
        Animated.timing(dabbeScale, {
          toValue: 1,
          duration: 100000,
          useNativeDriver: true,
          easing: Animated.easeInOut
        })
      ]);

      const offsetAnimation = Animated.sequence([
        Animated.timing(dabbeOffset, {
          toValue: 30, // смещение на 50 единиц вправо
          duration: 50000, // чуть дольше чем уменьшение (15000)
          useNativeDriver: true,
          easing: Animated.easeInOut
        }),
        Animated.timing(dabbeOffset, {
          toValue: 0, // возврат в исходную позицию
          duration: 50000,
          useNativeDriver: true,
          easing: Animated.easeInOut
        })
      ]);

      const verticalAnimation = Animated.sequence([
        Animated.timing(dabbeVerticalOffset, {
          toValue: 30, // смещение на 30 единиц вниз
          duration: 50000, // короче чем уменьшение (15000)
          useNativeDriver: true,
          easing: Animated.easeInOut
        }),
        Animated.timing(dabbeVerticalOffset, {
          toValue: 0, // возврат в исходную позицию
          duration: 50000,
          useNativeDriver: true,
          easing: Animated.easeInOut
        })
      ]);

      return Animated.parallel([scaleAnimation, offsetAnimation, verticalAnimation]);
    };

    const createTitleAnimation = () => {
      const topColorAnimation = Animated.sequence([
        Animated.timing(titleTopColor, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleTopColor, {
          toValue: 2,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleTopColor, {
          toValue: 3,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleTopColor, {
          toValue: 4,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleTopColor, {
          toValue: 5,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleTopColor, {
          toValue: 6,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.easeInOut
        }),
        Animated.timing(titleTopColor, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false
        })
      ]);

      const bottomColorAnimation = Animated.sequence([
        Animated.timing(titleBottomColor, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleBottomColor, {
          toValue: 2,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleBottomColor, {
          toValue: 3,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleBottomColor, {
          toValue: 4,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleBottomColor, {
          toValue: 5,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.linear
        }),
        Animated.timing(titleBottomColor, {
          toValue: 6,
          duration: 10000,
          useNativeDriver: false,
          easing: Animated.easeInOut
        }),
        Animated.timing(titleBottomColor, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false
        })
      ]);

      return Animated.parallel([topColorAnimation, bottomColorAnimation]);
    };

    Animated.loop(createCircularMotion()).start();
    Animated.loop(createEarthRotation()).start();
    Animated.loop(createEarthScale()).start();
    Animated.loop(createDabbeAnimation()).start();
    Animated.loop(createTitleAnimation()).start();
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

  // Блокируем ориентацию в портретном режиме при монтировании
  useEffect(() => {
    async function lockOrientation() {
      try {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        console.log("HomeScreen: ориентация заблокирована в портретном режиме");
      } catch (error) {
        console.log("Ошибка блокировки ориентации:", error);
      }
    }
    lockOrientation();
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
        style={[styles.planetImage, {
          transform: [
            {
              rotate: earthRotation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
            },
            { scale: earthScale }
          ]
        }]}
      />

      {/* Спутник */}
      <View style={styles.dabbeContainer}>
        <Animated.Image
          source={require('../../assets/images/animation/dabbe1.png')}
          style={[styles.dabbeImage, {
            transform: [
              { rotate: dimensions.width > dimensions.height ? '-25deg' : '0deg' },
              { scale: dabbeScale },
              { translateX: dabbeOffset },
              { translateY: dabbeVerticalOffset }
            ]
          }]}
        />
      </View>

      {/* Горизонтальная ориентация */}
      {dimensions.width > dimensions.height && (
        <View style={[styles.titleContainer, { top: dimensions.height * 0.08 }]}>
          <View style={[styles.textWrapper, { marginTop: dimensions.height * 0.01 }]}>
            <Animated.Text style={[
              styles.titleText, 
              { 
                fontSize: Math.min(dimensions.width * 0.1, dimensions.height * 0.08),
                color: topTextColor
              }
            ]}>
              Dabbetül
            </Animated.Text>
          </View>
          <View style={[styles.textWrapper, { marginTop: dimensions.height * 0.01 }]}>
            <Animated.Text style={[
              styles.titleText, 
              { 
                fontSize: Math.min(dimensions.width * 0.15, dimensions.height * 0.12),
                color: bottomTextColor
              }
            ]}>
              Arz
            </Animated.Text>
          </View>
        </View>
      )}

      {/* Вертикальная ориентация */}
      {dimensions.width <= dimensions.height && (
        <View style={[
          styles.titleContainer,
          {
            top: Platform.OS === 'android' ? dimensions.height * 0.09 : dimensions.height * 0.13,
          }
        ]}>
          <View style={[styles.textWrapper, { marginTop: dimensions.height * -0.1 }]}>
            <Animated.Text style={[
              styles.titleText, 
              { 
                fontSize: Math.min(dimensions.width * 0.12, dimensions.height * 0.1),
                color: topTextColor
              }
            ]}>
              Dabbetül
            </Animated.Text>
          </View>
          <View style={[styles.textWrapper, { marginTop: dimensions.height * -0.03 }]}>
            <Animated.Text style={[
              styles.titleText, 
              { 
                fontSize: Math.min(dimensions.width * 0.15, dimensions.height * 0.12),
                color: bottomTextColor
              }
            ]}>
              Arz
            </Animated.Text>
          </View>
        </View>
      )}

      <View style={styles.contentContainer}>
        {/* Контейнер для кнопок */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { height: 'auto' }]}
            onPress={() => navigation.navigate('Player')}
          >
            <Text style={[styles.buttonText, { fontSize: 24, lineHeight: 32 }]}>TV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { marginTop: 5, height: 'auto'  }]}
            onPress={() => navigation.navigate('Radio')}
          >
            <Text style={[styles.buttonText, { fontSize: 24, lineHeight: 32 }]}>Radio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { marginTop: 5, height: 'auto'  }]}
            onPress={() => navigation.navigate('Sosial')}
          >
            <Text style={[styles.buttonText, { fontSize: 24, lineHeight: 32 }]}>Sosial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginTop: 5, height: 'auto' }]} onPress={() => navigation.navigate('SplashScreen', { nextScreen: 'Home' })}>
            <SmallDigitalClock 
              timeScale={0.05} 
              showDate={false}
              containerStyle={{ flex: 0, marginTop: 0 }}
              style={{ fontSize: 24, lineHeight: 32 }}
              topContainerStyle={{ marginTop: 0 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Кнопка настроек */}
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate('Settings')}
      >
        <Ionicons name="settings" size={30} color="white" />
      </TouchableOpacity>

      {/* Кнопка информации */}
      <TouchableOpacity
        style={[styles.settingsButton, { left: 90 }]}
        onPress={() => navigation.navigate('Info')}
      >
        <Ionicons name="information" size={30} color="white" />
      </TouchableOpacity>
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
    bottom: '-9%', // Выходит за нижнюю границу
    right: '-7%', // Выходит за левую границу
    width: dimensions.planetSize,
    height: dimensions.planetSize,
    resizeMode: 'contain',
    zIndex: 2, // Планета над звездами
  },
  dabbeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: dimensions.planetSize * 1,
    height: dimensions.planetSize * 1,
    zIndex: 1,
  },
  dabbeImage: {
    width: '130%',
    height: '130%',
    resizeMode: 'contain',
    marginTop: '3%',
  },
  titleContainer: {
    position: 'absolute',
    left: dimensions.width * 0.08,
    zIndex: 1,
  },
  textWrapper: {
    position: 'relative',
  },
  titleText: {
    color: '#f3c300',
    fontWeight: '900',
    textAlign: 'left',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1.5, height: 2 },
    textShadowRadius: 2,
    opacity: 1,
    marginVertical: 0,
    lineHeight: dimensions.height * 0.09,
  },
  contentContainer: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
    zIndex: 10, // Поднимаем контейнер с кнопками выше всех
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center', // Центрирование по вертикали
    alignItems: 'center', // Центрирование по горизонтали
    zIndex: 10, // Поднимаем контейнер с кнопками выше всех
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: '#0099CC',
    borderRadius: 10,
    minWidth: 200, // Минимальная ширина кнопки
    zIndex: 10, // Поднимаем кнопки выше всех
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  settingsButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: '#0099CC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Поднимаем кнопки настроек выше всех
  },
});

export default HomeScreen;