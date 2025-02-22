import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeByName } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';

/**
 * Props для компонента InfoScreen
 * @typedef {Object} InfoScreenProps
 * @property {object} navigation - Объект навигации, предоставляемый React Navigation
 */

/**
 * InfoScreen - экран информации о приложении
 *
 * @param {InfoScreenProps} props - Свойства компонента
 * @returns {JSX.Element} Элемент экрана информации
 */
const InfoScreen = ({ navigation }) => {
  const theme = getThemeByName('dark');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Ionicons name="information-circle" size={24} color={theme.text} />
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>
          О приложении
        </Text>
        
        <View style={styles.section}>
          <Text style={[styles.text, { color: theme.text }]}>
            Dabbetul Arz - это приложение для просмотра и воспроизведения медиаконтента.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Возможности
          </Text>
          <Text style={[styles.text, { color: theme.text }]}>
            • Просмотр видео{'\n'}
            • Воспроизведение аудио{'\n'}
            • Настройка параметров воспроизведения{'\n'}
            • Поддержка различных форматов медиафайлов
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Версия
          </Text>
          <Text style={[styles.text, { color: theme.text }]}>
            1.0.0
          </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default InfoScreen;
