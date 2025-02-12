import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeByName } from '../utils/theme';

/**
 * Props для компонента SettingsScreen.
 * @typedef {Object} SettingsScreenProps
 * @property {object} navigation - Объект навигации, предоставляемый React Navigation.
 */

/**
 * SettingsScreen - экран настроек приложения.
 *
 * @param {SettingsScreenProps} props - Свойства компонента.
 * @returns {JSX.Element} Элемент экрана настроек.
 */
const SettingsScreen = (props) => {
  const { navigation } = props;
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Получаем тему в зависимости от выбранного режима.
  const theme = getThemeByName(isDarkMode ? 'dark' : 'light');

  // Переключатель темы
  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Настройки</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={[styles.itemText, { color: theme.text }]}>Темная тема</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleSwitch}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 18,
  },
});

export default SettingsScreen; 