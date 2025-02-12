/**
 * SplashScreen
 * Экран заставки, на котором отображаются анимированные часы и дата.
 * Глобальные настройки (цвет и яркость) изменяются посредством свайпов.
 *
 * Горизонтальный свайп -> смена цвета.
 * Вертикальный свайп -> регулировка яркости.
 *
 * @returns {JSX.Element}
 */
import React, { useLayoutEffect, useContext, useRef, useEffect } from 'react';
import { View, PanResponder } from 'react-native';
import TimeDisplay from '../components/TimeDisplay';
import DateDisplay from '../components/DateDisplay';
import { ClockSettingsContext } from '../contexts/ClockSettingsContext';

const SplashScreen = ({ navigation }) => {
  const { clockOpacity, setClockOpacity, clockColor, setClockColor } = useContext(ClockSettingsContext);

  // Создаем ref для актуального значения цвета
  const clockColorRef = useRef(clockColor);
  useEffect(() => {
    clockColorRef.current = clockColor;
  }, [clockColor]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Splash',
    });
  }, [navigation]);

  // Создание panResponder для обработки свайпов с дополнительными Capture-обработчиками
  const threshold = 30;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true, // Захватываем жесты на старте
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,   // Захватываем жесты при перемещении
      onPanResponderRelease: (evt, gestureState) => {
        const { dx, dy } = gestureState;
        if (Math.abs(dx) >= threshold) {
          // Горизонтальный свайп — изменение цвета
          const colors = ['#00FF00', '#FF0000', '#FFFF00', '#00FFFF', '#FF00FF', '#FFFFFF'];
          const currentIndex = colors.indexOf(clockColorRef.current);
          if (dx > 0) {
            setClockColor(colors[(currentIndex + 1) % colors.length]);
          } else {
            setClockColor(colors[(currentIndex - 1 + colors.length) % colors.length]);
          }
        } else if (Math.abs(dy) >= threshold) {
          // Вертикальный свайп — изменение яркости
          if (dy < 0) { // свайп вверх увеличивает яркость
            setClockOpacity(prev => Math.min(prev + 0.05, 1));
          } else {       // свайп вниз уменьшает яркость
            setClockOpacity(prev => Math.max(prev - 0.05, 0));
          }
        }
      },
    })
  ).current;

  return (
    <View
      style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' }}
      {...panResponder.panHandlers}
    >
      <TimeDisplay timeScale={0.21} />
      <DateDisplay dateScale={0.05} />
    </View>
  );
};

export default SplashScreen; 