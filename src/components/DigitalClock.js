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
 * Двоеточие мигает, переключаясь каждые 500 мс между цветом текста и черным,
 * имитируя мигание секундомера.
 *
 * @returns {JSX.Element} Элемент цифровых часов.
 */
const DigitalClock = () => {
  // Загружаем шрифт (хук вызывается всегда первым)
  const [fontsLoaded] = useFonts({
    'DSEG7Classic-Bold': require('../../assets/fonts/DSEG7Classic-Bold.ttf'),
  });
  
  // Инициализируем остальные состояния
  const [currentTime, setCurrentTime] = useState(new Date());
  const [colonVisible, setColonVisible] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const currentColor = COLORS[colorIndex];

  // Получаем ширину и высоту экрана, вычисляем динамический размер шрифта (21% от ширины)
  const { width, height } = useWindowDimensions();
  const dynamicFontSize = width * 0.21;

  // Состояние для яркости часов (прозрачность)
  const [clockOpacity, setClockOpacity] = useState(1.0);
  // Флаг, показывающий, что сохранённые настройки успешно загружены
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  // Прозрачность даты – 70% от яркости часов
  const dateOpacity = clockOpacity * 0.7;

  // Обновляем время каждую секунду
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  // Переключаем видимость двоеточия каждые 500 мс
  useEffect(() => {
    const colonInterval = setInterval(() => {
      setColonVisible(prev => !prev);
    }, 500);
    return () => clearInterval(colonInterval);
  }, []);

  // Загружаем сохранённые настройки при каждом фокусе экрана
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
          // Устанавливаем флаг, что загрузка завершена
          setSettingsLoaded(true);
        }
      };
      loadSettings();
    }, [])
  );

  // Создаем panResponder для дискретных свайпов:
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
        const threshold = 100; // увеличен порог, чтобы избежать ложных свайпов при обычном касании

        // Если движение меньше порога по обеим осям, считаем это обычным прикосновением и игнорируем
        if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) {
          return;
        }

        if (Math.abs(dx) >= Math.abs(dy) && Math.abs(dx) >= threshold) {
          // Горизонтальный свайп: меняем цвет
          if (dx > 0) {
            // свайп вправо
            setColorIndex(prev => (prev + 1) % COLORS.length);
          } else {
            // свайп влево
            setColorIndex(prev => (prev - 1 + COLORS.length) % COLORS.length);
          }
        } else if (Math.abs(dy) >= threshold) {
          // Вертикальный свайп: изменяем яркость (не зависит от расстояния)
          if (dy > 0) {
            // свайп вниз: уменьшаем яркость на 5%
            setClockOpacity(prev => Math.max(prev - 0.05, 0));
          } else {
            // свайп вверх: увеличиваем яркость на 5%
            setClockOpacity(prev => Math.min(prev + 0.05, 1));
          }
        }
      },
    })
  ).current;

  // Форматируем часы и минуты с ведущим нулем
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
  // Форматируем дату: заменяем точки на " . " и вычисляем её динамический размер (5% от ширины)
  const formattedDate = currentTime.toLocaleDateString().replace(/\./g, ' . ');
  const dynamicDateFontSize = width * 0.05;

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
  
  useEffect(() => {
    // Сохраняем значение яркости только если настройки уже загружены
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
          <View style={styles.bottomContainer}>
            <Text style={[styles.dateText, { fontSize: dynamicDateFontSize, opacity: dateOpacity, color: currentColor }]}>
              {formattedDate}
            </Text>
          </View>
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