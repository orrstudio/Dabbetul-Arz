/**
 * DateDisplay
 * Компонент для отображения текущей даты.
 *
 * @param {Object} props
 * @param {number} [props.dateScale=0.05] - коэффициент для расчёта размера шрифта даты относительно ширины экрана.
 * @param {string} [props.textColor='#00FF00'] - цвет текста.
 * @param {Object} [props.style] - дополнительные стили для контейнера.
 * @returns {JSX.Element} Элемент даты.
 */
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { ClockSettingsContext } from '../contexts/ClockSettingsContext';

const DateDisplay = ({ dateScale = 0.05, style }) => {
  const { clockOpacity, clockColor } = useContext(ClockSettingsContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const [fontsLoaded] = useFonts({
    'DSEG7Classic-Bold': require('../../assets/fonts/DSEG7Classic-Bold.ttf'),
  });
  
  useEffect(() => {
    // Обновляем дату каждый раз (хотя практически она меняется раз в сутки)
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const { width } = useWindowDimensions();
  const fontSize = width * dateScale;
  
  // Форматируем дату (замена точек на " . ")
  const formattedDate = currentTime.toLocaleDateString().replace(/\./g, ' . ');
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.dateText, { fontSize, color: clockColor, opacity: clockOpacity, textAlign: 'center' }]}>
        {formattedDate}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Центрирование по умолчанию
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'DSEG7Classic-Bold',
  },
});

export default DateDisplay; 