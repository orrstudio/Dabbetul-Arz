import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

/**
 * SmallDigitalClock
 * Упрощенная версия цифровых часов для отображения в кнопках
 * Показывает только время в формате HH:MM
 */
const SmallDigitalClock = ({ style }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [fontsLoaded] = useFonts({
    'DSEG7Classic-Bold': require('../../assets/fonts/DSEG7Classic-Bold.ttf'),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  return (
    <Text style={[styles.timeText, style]}>
      {timeString}
    </Text>
  );
};

const styles = StyleSheet.create({
  timeText: {
    color: '#fff',
    fontFamily: 'DSEG7Classic-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SmallDigitalClock;
