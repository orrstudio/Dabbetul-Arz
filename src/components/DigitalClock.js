import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, PanResponder } from 'react-native';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const COLORS = [
  "#00FF00", // lime: (0, 1, 0, 1)
  "#00FFFF", // aqua: (0, 1, 1, 1)
  "#FF0000", // red: (1, 0, 0, 1)
  "#FFFF00", // yellow: (1, 1, 0, 1)
  "#FF00FF", // magenta: (1, 0, 1, 1)
  "#FFFFFF"  // white: (1, 1, 1, 1)
];

/**
 * DigitalClock
 * Компонент, отображающий цифровые часы в формате HH:MM.
 * Двоеточие мигает, переключаясь каждые 500 мс,
 * имитируя мигание секундомера.
 *
 * @param {Object} [props]
 * @param {number} [props.timeScale=0.21] Коэффициент для расчёта размера шрифта времени.
 * @param {number} [props.dateScale=0.05] Коэффициент для расчёта размера шрифта даты.
 * @param {boolean} [props.showDate=true] Управление отображением даты.
 * @returns {JSX.Element} Элемент цифровых часов.
 */
const DigitalClock = ({ timeScale = 0.21, dateScale = 0.05, showDate = true } = {}) => {
  // Загружаем шрифт
  const [fontsLoaded] = useFonts({
    'DSEG7Classic-Bold': require('../../assets/fonts/DSEG7Classic-Bold.ttf'),
  });

  // Инициализация состояний
  const [currentTime, setCurrentTime] = useState(new Date());
  const [colonVisible, setColonVisible] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const currentColor = COLORS[colorIndex];

  // Получаем размеры экрана
  const { width, height } = useWindowDimensions();
  const dynamicFontSize = width * timeScale;
  const dynamicDateFontSize = width * dateScale;

  // Состояние яркости часов и флаг загрузки настроек
  const [clockOpacity, setClockOpacity] = useState(1.0);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  // Прозрачность даты – 70% от яркости часов
  const dateOpacity = clockOpacity * 0.7;

  // Обновление времени каждую секунду
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  // Переключение видимости двоеточия каждые 500 мс
  useEffect(() => {
    const colonInterval = setInterval(() => {
      setColonVisible(prev => !prev);
    }, 500);
    return () => clearInterval(colonInterval);
  }, []);

  // Загрузка сохранённых настроек при входе в экран
  useFocusEffect(
    React.useCallback(() => {
      const loadSettings = async () => {
        try {
          const storedColorIndex = await AsyncStorage.getItem('clock_color_index');
          const storedClockOpacity = await AsyncStorage.getItem('clock_opacity');
          console.log("Load settings: ColorIndex:", storedColorIndex, "Clock Opacity:", storedClockOpacity);
          if (storedColorIndex !== null) {
            setColorIndex(parseInt(storedColorIndex, 10));
          }
          if (storedClockOpacity !== null) {
            setClockOpacity(parseFloat(storedClockOpacity));
          }
        } catch (error) {
          console.log('Ошибка загрузки настроек:', error);
        } finally {
          setSettingsLoaded(true);
        }
      };
      loadSettings();
    }, [])
  );

  // Создание panResponder для дискретных свайпов
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        startXRef.current = gestureState.x0;
        startYRef.current = gestureState.y0;
      },
      onPanResponderRelease: (event, gestureState) => {
        const dx = gestureState.dx;
        const dy = gestureState.dy;
        const threshold = 100; // пороговое значение в пикселях

        // Если движение слишком маленькое – игнорируем свайп
        if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) {
          return;
        }
        // Если горизонтальное движение больше вертикального – меняем цвет
        if (Math.abs(dx) >= Math.abs(dy) && Math.abs(dx) >= threshold) {
          if (dx > 0) {
            setColorIndex(prev => (prev + 1) % COLORS.length);
          } else {
            setColorIndex(prev => (prev - 1 + COLORS.length) % COLORS.length);
          }
        } else if (Math.abs(dy) >= threshold) {
          // Вертикальный свайп – изменяем яркость на фиксированный шаг 5%
          if (dy > 0) {
            setClockOpacity(prev => Math.max(prev - 0.05, 0));
          } else {
            setClockOpacity(prev => Math.min(prev + 0.05, 1));
          }
        }
      },
    })
  ).current;

  // Форматируем время
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  // Форматируем дату (замена точек на пробел, точка, пробел)
  const formattedDate = currentTime.toLocaleDateString().replace(/\./g, ' . ');

  // Сохранение текущего индекса цвета при изменении
  useEffect(() => {
    const saveColorIndex = async () => {
      try {
        await AsyncStorage.setItem('clock_color_index', colorIndex.toString());
      } catch (error) {
        console.log('Ошибка сохранения индекса цвета:', error);
      }
    };
    saveColorIndex();
  }, [colorIndex]);

  // Сохранение яркости (clockOpacity) — только после загрузки настроек
  useEffect(() => {
    if (!settingsLoaded) return;

    const saveClockOpacity = async () => {
      try {
        await AsyncStorage.setItem('clock_opacity', clockOpacity.toString());
        console.log("Saved clock opacity:", clockOpacity.toString());
      } catch (error) {
        console.log('Ошибка сохранения яркости часов:', error);
      }
    };
    saveClockOpacity();
  }, [clockOpacity, settingsLoaded]);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {!fontsLoaded ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      ) : (
        <>
          <View style={styles.topContainer}>
            <Text style={[styles.timeText, { fontSize: dynamicFontSize, opacity: clockOpacity, color: currentColor }]}>
              {formattedHours}
              <Text style={{ color: colonVisible ? currentColor : 'transparent' }}>:</Text>
              {formattedMinutes}
            </Text>
          </View>
          {showDate && (
            <View style={styles.bottomContainer}>
              <Text style={[styles.dateText, { fontSize: dynamicDateFontSize, opacity: dateOpacity, color: currentColor }]}>
                {formattedDate}
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  timeText: {
    color: '#00FF00',
    fontFamily: 'DSEG7Classic-Bold',
    textAlign: 'center',
  },
  dateText: {
    color: '#00FF00',
    fontFamily: 'DSEG7Classic-Bold',
    textAlign: 'center',
  },
});

export default DigitalClock;