import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeByName } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';

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
  const theme = getThemeByName('dark');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="checkmark" size={24} color={theme.text} />
        </TouchableOpacity>
        <Ionicons name="settings" size={24} color={theme.text} />
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* Здесь будет содержимое настроек */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  headerButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default SettingsScreen;