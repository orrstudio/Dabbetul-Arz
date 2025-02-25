import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Linking, Modal } from 'react-native';

/**
 * SosialScreen
 * Экран для социальных функций приложения.
 * 
 * @param {object} props - Свойства компонента
 * @param {object} props.navigation - Объект навигации React Navigation
 * @returns {JSX.Element}
 */
const SosialScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentPlatform, setCurrentPlatform] = useState('');

  const handleSocialPress = (url, platform) => {
    setCurrentUrl(url);
    setCurrentPlatform(platform);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setModalVisible(false);
    Linking.openURL(currentUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sosial Screen</Text>
      <Pressable 
        style={[styles.button, { backgroundColor: '#FF0000' }]}
        onPress={() => handleSocialPress('https://www.youtube.com/@HeranKuranHeranMutluluk', 'YouTube')}
      >
        <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
      </Pressable>
      <Pressable 
        style={[styles.button, { backgroundColor: '#E1306C' }]}
        onPress={() => handleSocialPress('https://www.instagram.com/herankuranheranmutluluk', 'Instagram')}
      >
        <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
      </Pressable>
      <Pressable 
        style={[styles.button, { backgroundColor: '#1877F2' }]}
        onPress={() => handleSocialPress('https://www.facebook.com/hkuranhmutluluk', 'Facebook')}
      >
        <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
      </Pressable>
      <Pressable 
        style={[styles.button, { backgroundColor: '#00F2EA' }]}
        onPress={() => handleSocialPress('https://www.tiktok.com/@herankuranheranmutluluk', 'TikTok')}
      >
        <Text style={[styles.buttonText, { color: '#000000' }]}>İBRAHİM TV TÜRKÇE</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>İBRAHİM TV TÜRKÇE</Text>
            <Text style={styles.modalText}>
              Открыть İBRAHİM TV TÜRKÇE на {currentPlatform}?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable 
                style={[styles.modalButton, { backgroundColor: '#FF3B30' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>✕</Text>
              </Pressable>
              <Pressable 
                style={[styles.modalButton, { backgroundColor: '#34C759' }]}
                onPress={handleConfirm}
              >
                <Text style={styles.modalButtonText}>✓</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SosialScreen;
