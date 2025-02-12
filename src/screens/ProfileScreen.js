import React from 'react';
import { View } from 'react-native';
import DigitalClock from '../components/DigitalClock';

/**
 * ProfileScreen
 * Экран профиля, на котором отображаются анимированные часы.
 *
 * @returns {JSX.Element}
 */
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' }}>
      <DigitalClock />
    </View>
  );
};

export default ProfileScreen; 