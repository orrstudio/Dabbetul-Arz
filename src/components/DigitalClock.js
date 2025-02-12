import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';

const TEXT_COLOR = '#00FF00';

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

  // Получаем ширину экрана и вычисляем динамический размер шрифта (80% от ширины)
  const { width } = useWindowDimensions();
  const dynamicFontSize = width * 0.21;

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

  // Если шрифт ещё не загружен, возвращаем простой контейнер (это не нарушает порядок хуков)
  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  // Форматируем часы и минуты с ведущим нулем
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
  // Форматируем дату: заменяем точки на " / " и вычисляем её динамический размер (5% от ширины)
  const formattedDate = currentTime.toLocaleDateString().replace(/\./g, '-');
  const dynamicDateFontSize = width * 0.05;
  const dateOpacity = 0.5;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={[styles.timeText, { fontSize: dynamicFontSize }]}>
          {formattedHours}
          <Text style={{ color: colonVisible ? TEXT_COLOR : 'transparent' }}>:</Text>
          {formattedMinutes}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[styles.dateText, { fontSize: dynamicDateFontSize, opacity: dateOpacity }]}>
          {formattedDate}
        </Text>
      </View>
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
    color: TEXT_COLOR,
    fontFamily: 'DSEG7Classic-Bold',
    textAlign: 'center',
  },
  dateText: {
    color: TEXT_COLOR,
    fontFamily: 'DSEG7Classic-Bold',
    textAlign: 'center',
  },
});

export default DigitalClock;