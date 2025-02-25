import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Linking, Modal, ScrollView, Image } from 'react-native';

const socialLogos = {
  "youtube": require("../../assets/images/logos/social-youtube.png"),
  "instagram": require("../../assets/images/logos/social-instagram.png"),
  "facebook": require("../../assets/images/logos/social-facebook.png"),
  "tiktok": require("../../assets/images/logos/social-tiktok.png"),
};

const flagIcons = {
  "tr": require("../../assets/images/logos/flags/flag-tr.png"),
};

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
      <ScrollView style={styles.buttonList}>
        <Pressable 
          style={[styles.button, { backgroundColor: '#333' }]}
          onPress={() => handleSocialPress('https://www.youtube.com/@HeranKuranHeranMutluluk', 'YouTube')}
        >
          <View style={styles.buttonRow}>
            <View style={styles.leftIconContainer}>
              <Image
                source={socialLogos.youtube}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </View>
            <View style={styles.middleTextContainer}>
              <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
            </View>
            <View style={styles.rightIconContainer}>
              <Image
                source={flagIcons.tr}
                style={styles.flagIconStyle}
                resizeMode="contain"
              />
            </View>
          </View>
        </Pressable>
        <Pressable 
          style={[styles.button, { backgroundColor: '#333' }]}
          onPress={() => handleSocialPress('https://www.instagram.com/herankuranheranmutluluk', 'Instagram')}
        >
          <View style={styles.buttonRow}>
            <View style={styles.leftIconContainer}>
              <Image
                source={socialLogos.instagram}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </View>
            <View style={styles.middleTextContainer}>
              <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
            </View>
            <View style={styles.rightIconContainer}>
              <Image
                source={flagIcons.tr}
                style={styles.flagIconStyle}
                resizeMode="contain"
              />
            </View>
          </View>
        </Pressable>
        <Pressable 
          style={[styles.button, { backgroundColor: '#333' }]}
          onPress={() => handleSocialPress('https://www.facebook.com/hkuranhmutluluk', 'Facebook')}
        >
          <View style={styles.buttonRow}>
            <View style={styles.leftIconContainer}>
              <Image
                source={socialLogos.facebook}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </View>
            <View style={styles.middleTextContainer}>
              <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
            </View>
            <View style={styles.rightIconContainer}>
              <Image
                source={flagIcons.tr}
                style={styles.flagIconStyle}
                resizeMode="contain"
              />
            </View>
          </View>
        </Pressable>
        <Pressable 
          style={[styles.button, { backgroundColor: '#333' }]}
          onPress={() => handleSocialPress('https://www.tiktok.com/@herankuranheranmutluluk', 'TikTok')}
        >
          <View style={styles.buttonRow}>
            <View style={styles.leftIconContainer}>
              <Image
                source={socialLogos.tiktok}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </View>
            <View style={styles.middleTextContainer}>
              <Text style={styles.buttonText}>İBRAHİM TV TÜRKÇE</Text>
            </View>
            <View style={styles.rightIconContainer}>
              <Image
                source={flagIcons.tr}
                style={styles.flagIconStyle}
                resizeMode="contain"
              />
            </View>
          </View>
        </Pressable>
      </ScrollView>

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
    backgroundColor: '#111112',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonList: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  button: {
    padding: 0,
    marginBottom: 5,
    backgroundColor: '#333',
    borderRadius: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  middleTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 50,
  },
  buttonText: {
    color: '#ffd700',
    fontSize: 16,
  },
  iconStyle: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  flagIconStyle: {
    width: 40,
    height: 40,
    marginRight: 4,
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
