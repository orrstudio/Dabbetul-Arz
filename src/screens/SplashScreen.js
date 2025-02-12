// src/screens/SplashScreen.js
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import DigitalClock from '../components/DigitalClock';

/**
 * SplashScreen
 * Экран заставки, на котором отображаются анимированные часы.
 *
 * @returns {JSX.Element}
 */
const SplashScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Splash',
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' }}>
      <DigitalClock />
      {/* Кнопка "Proceed" удалена, переход осуществляется автоматически или другими методами */}
    </View>
  );
};

export default SplashScreen;