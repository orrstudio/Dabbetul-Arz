import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';

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
      <Pressable 
        style={styles.button}
        onPress={() => Linking.openURL('https://www.youtube.com/@HeranKuranHeranMutluluk')}
      >
        <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
      </Pressable>
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SosialScreen;
