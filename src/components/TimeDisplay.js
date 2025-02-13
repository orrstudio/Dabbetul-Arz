/**
 * TimeDisplay
 * Компонент для отображения времени в формате HH:MM с мигающим двоеточием.
 *
 * @param {Object} props
 * @param {number} [props.timeScale=0.21] - коэффициент для расчёта размера шрифта времени относительно ширины экрана.
 * @param {number} [props.blinkInterval=500] - интервал мигания двоеточия в миллисекундах.
 * @param {string} [props.textColor='#00FF00'] - цвет текста.
 * @param {Object} [props.style] - дополнительные стили для контейнера.
 * @returns {JSX.Element} Элемент времени.
 */
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { ClockSettingsContext } from '../contexts/ClockSettingsContext';

const TimeDisplay = ({ timeScale = 0.21, blinkInterval = 500, style }) => {
  const { clockOpacity, clockColor } = useContext(ClockSettingsContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [colonVisible, setColonVisible] = useState(true);

  const [fontsLoaded] = useFonts({
    'DSEG7Classic-Bold': require('../../assets/fonts/DSEG7Classic-Bold.ttf'),
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setColonVisible(prev => !prev);
    }, blinkInterval);
    return () => clearInterval(blinkTimer);
  }, [blinkInterval]);
  
  const { width } = useWindowDimensions();
  const fontSize = width * timeScale;
  const minWidth = fontSize * 5; // обеспечиваем, что в одной строке поместится формат HH:MM (5 символов)
  
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.container, style, { minWidth, flexDirection: 'row', alignItems: 'center' }]}>
      <Text
        numberOfLines={1}
        style={[styles.timeText, { fontSize, color: clockColor, opacity: clockOpacity, textAlign: 'left' }]}
      >
        {formattedHours}
        <Text style={{ color: colonVisible ? clockColor : 'transparent' }}>:</Text>
        {formattedMinutes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // По умолчанию выравнивание оставляем левым
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  timeText: {
    fontFamily: 'DSEG7Classic-Bold',
    textAlign: 'left',
  },
});

export default TimeDisplay; 