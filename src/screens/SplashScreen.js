/**
 * SplashScreen
 * Экран заставки, на котором отображаются анимированные часы и дата.
 * Глобальные настройки (цвет и яркость) изменяются посредством свайпов.
 *
 * Горизонтальный свайп -> смена цвета.
 * Вертикальный свайп -> пропорциональное изменение яркости.
 *
 * @returns {JSX.Element}
 */
import React, { useLayoutEffect, useContext, useRef, useEffect } from 'react';
import { View, PanResponder, Dimensions, Text } from 'react-native';
import TimeDisplay from '../components/TimeDisplay';
import DateDisplay from '../components/DateDisplay';
import { ClockSettingsContext } from '../contexts/ClockSettingsContext';

const SplashScreen = ({ navigation }) => {
  const { clockOpacity, setClockOpacity, clockColor, setClockColor } = useContext(ClockSettingsContext);

  // Создаем ref для актуального значения цвета, чтобы использовать его внутри обработчика
  const clockColorRef = useRef(clockColor);
  useEffect(() => {
    clockColorRef.current = clockColor;
  }, [clockColor]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Splash',
    });
  }, [navigation]);

  /**
   * Функция для расчёта направления и величины свайпа.
   *
   * @param {number} dx - горизонтальное смещение.
   * @param {number} dy - вертикальное смещение.
   * @param {number} threshold - минимальное смещение для активации свайпа.
   * @param {number} ratio - пороговое соотношение смещений,
   *        при котором свайп считается чисто горизонтальным (dx >= ratio * dy) или чисто вертикальным (dy >= ratio * dx).
   *
   * @returns {Object} { type: 'horizontal' | 'vertical' | 'none', delta: number }
   */
  const calculateSwipe = (dx, dy, threshold = 30, ratio = 1.5) => {
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx < threshold && absDy < threshold) {
      return { type: 'none', delta: 0 };
    }
    if (absDx >= ratio * absDy) {
      return { type: 'horizontal', delta: dx };
    }
    if (absDy >= ratio * absDx) {
      return { type: 'vertical', delta: dy };
    }
    // В нечетких ситуациях выбираем вертикальное действие
    return { type: 'vertical', delta: dy };
  };

  // Создаем panResponder с использованием функции calculateSwipe
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true, // Захватываем жесты с начала
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        const { dx, dy } = gestureState;
        const swipe = calculateSwipe(dx, dy, 30, 1.5);
        if (swipe.type === 'horizontal') {
          // Горизонтальный свайп — изменение цвета
          const colors = ['#00FF00', '#FF0000', '#FFFF00', '#00FFFF', '#FF00FF', '#FFFFFF'];
          const currentIndex = colors.indexOf(clockColorRef.current);
          if (swipe.delta > 0) {
            setClockColor(colors[(currentIndex + 1) % colors.length]);
          } else {
            setClockColor(colors[(currentIndex - 1 + colors.length) % colors.length]);
          }
        } else if (swipe.type === 'vertical') {
          // Вертикальный свайп — пропорциональное изменение яркости.
          // При свайпе вверх (swipe.delta отрицательный) яркость увеличивается,
          // а при свайпе вниз (swipe.delta положительный) — уменьшается.
          setClockOpacity(prev => {
            // Инвертируем swipe.delta, чтобы изменить направление эффекта.
            const adjustment = (-swipe.delta / 100) * 0.05;
            let newOpacity = prev + adjustment;
            if (newOpacity > 1) newOpacity = 1;
            if (newOpacity < 0) newOpacity = 0;
            return newOpacity;
          });
        }
      },
    })
  ).current;

  return (
    <View
      style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' }}
      {...panResponder.panHandlers}
    >
      <View style={{ position: 'relative', alignItems: 'center' }}>
        <TimeDisplay timeScale={0.21} />
      </View>
      <View style={{ marginTop: 30 }}>
        <DateDisplay dateScale={0.05} />
      </View>
    </View>
  );
};

export default SplashScreen; 