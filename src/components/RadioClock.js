/**
 * RadioClock
 * Компонент для отображения времени в формате HH:MM для радио.
 * Использует настройки цвета и яркости из ClockSettingsContext.
 * Остальная логика независима от часов в сплаш скрине.
 *
 * @returns {JSX.Element} Элемент часов для радио.
 */
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ClockSettingsContext } from '../contexts/ClockSettingsContext';
import { useNavigation } from '@react-navigation/native';

const RadioClock = () => {
  const { clockOpacity, clockColor } = useContext(ClockSettingsContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigation = useNavigation();

  // Обновляем время каждую секунду
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 500);
    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  // Добавляем состояние для мигания символов (две черточки)
  const [dashVisible, setDashVisible] = useState(true);
  useEffect(() => {
    const dashTimer = setInterval(() => setDashVisible(prev => !prev), 500);
    return () => clearInterval(dashTimer);
  }, []);

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate('SplashScreen', { nextScreen: 'Radio' })}
    >
      <Text style={[styles.text, { color: clockColor, opacity: clockOpacity }]}>
        {formattedHours}
      </Text>
      <Text style={[styles.text_dash, { color: dashVisible ? clockColor : 'transparent', opacity: clockOpacity }]}>
      ⬤     ⬤
      </Text>
      <Text style={[styles.text, { color: clockColor, opacity: clockOpacity }]}>
        {formattedMinutes}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
  },
  text_dash: {
    fontSize: 4,
    marginHorizontal: 5,
    marginTop: -10,
  },
});

export default RadioClock;
