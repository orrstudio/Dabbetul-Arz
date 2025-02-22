import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * SosialScreen
 * Экран для социальных функций приложения.
 * 
 * @param {object} props - Свойства компонента
 * @param {object} props.navigation - Объект навигации React Navigation
 * @returns {JSX.Element}
 */
const SosialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sosial Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111112',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default SosialScreen;
