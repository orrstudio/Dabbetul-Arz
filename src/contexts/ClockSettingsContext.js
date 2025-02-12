import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Контекст настроек для часов и даты.
 * Хранит значения яркости (opacity) и цвета, которые применяются ко всем компонентам часов и даты.
 */
export const ClockSettingsContext = createContext({
  clockOpacity: 1,
  setClockOpacity: () => {},
  clockColor: '#00FF00',
  setClockColor: () => {},
});

export const ClockSettingsProvider = ({ children }) => {
  const [clockOpacity, setClockOpacity] = useState(1);
  const [clockColor, setClockColor] = useState('#00FF00');

  // Загрузка настроек из AsyncStorage
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedOpacity = await AsyncStorage.getItem('clock_opacity');
        const storedColor = await AsyncStorage.getItem('clock_color');
        if (storedOpacity !== null) setClockOpacity(parseFloat(storedOpacity));
        if (storedColor !== null) setClockColor(storedColor);
      } catch (e) {
        console.log('Ошибка загрузки настроек часов:', e);
      }
    };
    loadSettings();
  }, []);

  // Сохранение настроек при изменении
  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem('clock_opacity', clockOpacity.toString());
        await AsyncStorage.setItem('clock_color', clockColor);
      } catch (e) {
        console.log('Ошибка сохранения настроек часов:', e);
      }
    };
    saveSettings();
  }, [clockOpacity, clockColor]);

  return (
    <ClockSettingsContext.Provider value={{ clockOpacity, setClockOpacity, clockColor, setClockColor }}>
      {children}
    </ClockSettingsContext.Provider>
  );
}; 