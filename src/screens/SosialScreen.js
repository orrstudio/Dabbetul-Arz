import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Linking, Modal, ScrollView, Image } from 'react-native';

const socialLogos = {
  "youtube": require("../../assets/images/logos/social-youtube.png"),
  "instagram": require("../../assets/images/logos/social-instagram.png"),
  "facebook": require("../../assets/images/logos/social-facebook.png"),
  "tiktok": require("../../assets/images/logos/social-tiktok.png"),
  "web": require("../../assets/images/logos/social-web.png"),
  "mihrVakfi": require("../../assets/images/logos/mihr-vakfi.png"),
};

const flagIcons = {
  "tr": require("../../assets/images/logos/flags/flag-tr.png"),
  "en": require("../../assets/images/logos/flags/flag-en.png"),
  "es": require("../../assets/images/logos/flags/flag-es.png"),
  "de": require("../../assets/images/logos/flags/flag-de.png"),
  "fr": require("../../assets/images/logos/flags/flag-fr.png"),
  "ru": require("../../assets/images/logos/flags/flag-ru.png"),
  "ar": require("../../assets/images/logos/flags/flag-ar.png"),
  "ku": require("../../assets/images/logos/flags/flag-ku.png"),
  "zh": require("../../assets/images/logos/flags/flag-zh.png"),
  "nl": require("../../assets/images/logos/flags/flag-nl.png"),
  "fa": require("../../assets/images/logos/flags/flag-fa.png"),
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
  const [currentChannelName, setCurrentChannelName] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('');

  const handleSocialPress = (url, platform, channelName, language) => {
    setCurrentUrl(url);
    setCurrentPlatform(platform);
    setCurrentChannelName(channelName);
    setCurrentLanguage(language);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setModalVisible(false);
    Linking.openURL(currentUrl);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.buttonList}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>IBRAHIMLIVE</Text>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@HeranKuranHeranMutluluk', 'youtube', 'İBRAHİM TV TÜRKÇE', 'tr')}
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
            onPress={() => handleSocialPress('https://www.instagram.com/herankuranheranmutluluk', 'instagram', 'İBRAHİM TV TÜRKÇE', 'tr')}
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
            onPress={() => handleSocialPress('https://www.facebook.com/hkuranhmutluluk', 'facebook', 'İBRAHİM TV TÜRKÇE', 'tr')}
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
            onPress={() => handleSocialPress('https://www.tiktok.com/@herankuranheranmutluluk', 'tiktok', 'İBRAHİM TV TÜRKÇE', 'tr')}
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
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://herankuranheranmutluluk.com/', 'web', 'İBRAHİM TV TÜRKÇE', 'tr')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.web}
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
            onPress={() => handleSocialPress('https://www.youtube.com/@ibrahimsTVofficial', 'youtube', 'IBRAHIM TV ENGLISH', 'en')}
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
                <Text style={styles.buttonText}>IBRAHIM TV ENGLISH</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.en}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/ibrahimsTVofficial', 'instagram', 'IBRAHIM TV ENGLISH', 'en')}
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
                <Text style={styles.buttonText}>IBRAHIM TV ENGLISH</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.en}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/ibrahimstvofficial/', 'facebook', 'IBRAHIM TV ENGLISH', 'en')}
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
                <Text style={styles.buttonText}>IBRAHIM TV ENGLISH</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.en}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@abrahamtv.espanyol', 'youtube', 'IBRAHIM TV ESPAÑOL', 'es')}
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
                <Text style={styles.buttonText}>IBRAHIM TV ESPAÑOL</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.es}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/abrahamtv.espanyol', 'instagram', 'IBRAHIM TV ESPAÑOL', 'es')}
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
                <Text style={styles.buttonText}>IBRAHIM TV ESPAÑOL</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.es}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/abrahamtv.espanyol', 'facebook', 'IBRAHIM TV ESPAÑOL', 'es')}
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
                <Text style={styles.buttonText}>IBRAHIM TV ESPAÑOL</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.es}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@HeranKuranHeranMutluluk', 'youtube', 'IBRAHIM TV DEUTSCH', 'de')}
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
                <Text style={styles.buttonText}>IBRAHIM TV DEUTSCH</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.de}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/herankuranheranmutluluk', 'instagram', 'IBRAHIM TV DEUTSCH', 'de')}
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
                <Text style={styles.buttonText}>IBRAHIM TV DEUTSCH</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.de}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/hkuranhmutluluk', 'facebook', 'IBRAHIM TV DEUTSCH', 'de')}
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
                <Text style={styles.buttonText}>IBRAHIM TV DEUTSCH</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.de}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@abrahamTVofficial', 'youtube', 'IBRAHIM TV FRANÇAISE', 'fr')}
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
                <Text style={styles.buttonText}>IBRAHIM TV FRANÇAISE</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.fr}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/abrahamTVofficial', 'instagram', 'IBRAHIM TV FRANÇAISE', 'fr')}
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
                <Text style={styles.buttonText}>IBRAHIM TV FRANÇAISE</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.fr}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/abrahamtvofficial/', 'facebook', 'IBRAHIM TV FRANÇAISE', 'fr')}
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
                <Text style={styles.buttonText}>IBRAHIM TV FRANÇAISE</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.fr}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@avraamTB', 'youtube', 'ИБРАГИМ ТВ НА РУССКОМ', 'ru')}
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
                <Text style={styles.buttonText}>ИБРАГИМ ТВ НА РУССКОМ</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ru}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/avraamTB', 'instagram', 'ИБРАГИМ ТВ НА РУССКОМ', 'ru')}
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
                <Text style={styles.buttonText}>ИБРАГИМ ТВ НА РУССКОМ</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ru}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/avraamTB', 'facebook', 'ИБРАГИМ ТВ НА РУССКОМ', 'ru')}
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
                <Text style={styles.buttonText}>ИБРАГИМ ТВ НА РУССКОМ</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ru}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@ibrahimuTVofficial', 'youtube', 'قناة إبراهيم العربية', 'ar')}
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
                <Text style={styles.buttonText}>قناة إبراهيم العربية</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ar}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/ibrahimuTVofficial', 'instagram', 'قناة إبراهيم العربية', 'ar')}
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
                <Text style={styles.buttonText}>قناة إبراهيم العربية</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ar}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/ibrahimuTVofficial', 'facebook', 'قناة إبراهيم العربية', 'ar')}
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
                <Text style={styles.buttonText}>قناة إبراهيم العربية</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ar}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@ibrahimTVofficial', 'youtube', 'İBRAHİM TV KURDİ', 'ku')}
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
                <Text style={styles.buttonText}>İBRAHİM TV KURDİ</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ku}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/ibrahimTVofficial', 'instagram', 'İBRAHİM TV KURDİ', 'ku')}
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
                <Text style={styles.buttonText}>İBRAHİM TV KURDİ</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ku}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/ibrahimtvofficial/', 'facebook', 'İBRAHİM TV KURDİ', 'ku')}
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
                <Text style={styles.buttonText}>İBRAHİM TV KURDİ</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.ku}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@ibrahimlive.Chinese', 'youtube', '易卜拉欣電視中文', 'zh')}
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
                <Text style={styles.buttonText}>易卜拉欣電視中文</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.zh}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/ibrahimlive.chinese/', 'instagram', '易卜拉欣電視中文', 'zh')}
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
                <Text style={styles.buttonText}>易卜拉欣電視中文</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.zh}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/ibrahimlive.Chinese', 'facebook', '易卜拉欣電視中文', 'zh')}
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
                <Text style={styles.buttonText}>易卜拉欣電視中文</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.zh}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@ibrahimlive_Nederlands', 'youtube', 'IBRAHIM TV NEDERLANDS', 'nl')}
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
                <Text style={styles.buttonText}>IBRAHIM TV NEDERLANDS</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.nl}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/ibrahimlive_Nederlands', 'instagram', 'IBRAHIM TV NEDERLANDS', 'nl')}
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
                <Text style={styles.buttonText}>IBRAHIM TV NEDERLANDS</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.nl}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/ibrahimlive.Nederlands', 'facebook', 'IBRAHIM TV NEDERLANDS', 'nl')}
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
                <Text style={styles.buttonText}>IBRAHIM TV NEDERLANDS</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.nl}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@ibrahimTV.farsca', 'youtube', 'ابراهیم تی وی فارسی', 'fa')}
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
                <Text style={styles.buttonText}>ابراهیم تی وی فارسی</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.fa}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.instagram.com/ibrahimTV.farsca', 'instagram', 'ابراهیم تی وی فارسی', 'fa')}
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
                <Text style={styles.buttonText}>ابراهیم تی وی فارسی</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.fa}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.facebook.com/ibrahimTV.farsca', 'facebook', 'ابراهیم تی وی فارسی', 'fa')}
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
                <Text style={styles.buttonText}>ابراهیم تی وی فارسی</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.fa}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>MIHR VAKFI</Text>
          </View>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@mihrfoundation', 'youtube', 'MIHR FOUNDATION', 'tr')}
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
                <Text style={styles.buttonText}>MIHR FOUNDATION</Text>
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
            onPress={() => handleSocialPress('https://www.mihr.com/', 'web', 'MİHR VAKFI')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>MİHR VAKFI</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/sohbetler', 'web', 'SOHBETLER')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>SOHBETLER</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/sorucevap', 'web', 'SORULAR')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>SORULAR</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/yazilieserler/100/hacet-namazi-ve-tovbe-6-language', 'web', 'YAZILI ESERLER')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>YAZILI ESERLER</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/sohbetler/27/0/konferanslar', 'web', 'KONFERANSLAR')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>KONFERANSLAR</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/sohbetler/5/0/goruntu-kalitesi-yuksek-sohbetler', 'web', 'GORUNTU KALITESI YUKSEK SOHBETLER')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>GORUNTU KALITESI YUKSEK SOHBETLER</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/sohbetler/200/0/altyazili-sohbetler', 'web', 'ALTYAZILI SOHBETLER')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>ALTYAZILI SOHBETLER</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/Kuran/Meal', 'web', "KUR'ÂN-I KERIM LAFZI VE RUHU (TEFSIR)")}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>KUR'ÂN-I KERIM LAFZI VE RUHU (TEFSIR)</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/Home/Takvim', 'web', 'TAKVIM (ÖZEL GÜNLER VE GECELER)')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>TAKVIM (ÖZEL GÜNLER VE GECELER)</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/Home/Publishment/0', 'web', 'MIHR VAKFI YAZILI ESERLER')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>MIHR VAKFI YAZILI ESERLER</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://mihrdergisi.com', 'web', 'MİHR DERGİSİ')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>MİHR DERGİSİ</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/home/AbrahamDocuments', 'web', 'İBRAHIMLIVE DÖKÜMANLAR')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>İBRAHIMLIVE DÖKÜMANLAR</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/yazilieserler/1/kitaplar', 'web', 'MIHR VAKFI KITAPLAR')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>MIHR VAKFI KITAPLAR</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.mihr.com/yazilieserler/7/ihtarlar', 'web', 'MIHR VAKFI İHTARLAR')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.mihrVakfi}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>MIHR VAKFI İHTARLAR</Text>
              </View>
            </View>
          </Pressable>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>NUR TV & MPL TV</Text>
          </View>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@mpl_tv', 'youtube', 'MPL TV', 'tr')}
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
                <Text style={styles.buttonText}>MPL TV</Text>
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
            onPress={() => handleSocialPress('https://mpltv.tv/', 'web', 'MPL TV')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.web}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>MPL TV</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.youtube.com/@nurtv_yayin', 'youtube', 'NUR TV', 'tr')}
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
                <Text style={styles.buttonText}>NUR TV</Text>
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
            onPress={() => handleSocialPress('https://instagram.com/nurtv.tv', 'instagram', 'NUR TV')}
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
                <Text style={styles.buttonText}>NUR TV</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://facebook.com/nurtv.tv', 'facebook', 'NUR TV')}
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
                <Text style={styles.buttonText}>NUR TV</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://nurtv.tv/', 'web', 'NUR TV')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.web}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>NUR TV</Text>
              </View>
            </View>
          </Pressable>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>WWW</Text>
          </View>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('https://www.ibrahimlive.com/', 'web', 'IBRAHIM LIVE')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.web}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>IBRAHIM LIVE</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.button, { backgroundColor: '#333' }]}
            onPress={() => handleSocialPress('http://www.zwwa.de/', 'web', 'ZWWA', 'de')}
          >
            <View style={styles.buttonRow}>
              <View style={styles.leftIconContainer}>
                <Image
                  source={socialLogos.web}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.middleTextContainer}>
                <Text style={styles.buttonText}>ZWWA</Text>
              </View>
              <View style={styles.rightIconContainer}>
                <Image
                  source={flagIcons.de}
                  style={styles.flagIconStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Image
                source={socialLogos[currentPlatform]}
                style={styles.modalIcon}
                resizeMode="contain"
              />
              {currentPlatform === 'youtube' && (
                <Image
                  source={flagIcons[currentLanguage]}
                  style={styles.modalFlag}
                  resizeMode="contain"
                />
              )}
            </View>
            <Text style={styles.modalText}>
              {currentChannelName}
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
  buttonList: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  sectionContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionHeaderText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
    fontSize: 16,
    color: '#ffd700',
    textAlign: 'left',
  },
  iconStyle: {
    width: 50,
    height: 50,
    marginRight: 8,
    resizeMode: 'contain',
  },
  flagIconStyle: {
    width: 40,
    height: 40,
    marginRight: 4,
    resizeMode: 'contain',
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
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'center',
  },
  modalIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  modalFlag: {
    width: 40,
    height: 40,
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
