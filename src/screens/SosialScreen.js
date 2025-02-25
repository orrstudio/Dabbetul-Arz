import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Linking, Modal, ScrollView, Image } from 'react-native';

const socialLogos = {
  "youtube": require("../../assets/images/logos/social-youtube.png"),
  "instagram": require("../../assets/images/logos/social-instagram.png"),
  "facebook": require("../../assets/images/logos/social-facebook.png"),
  "tiktok": require("../../assets/images/logos/social-tiktok.png"),
  "web": require("../../assets/images/logos/social-web.png"),
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
              <Image
                source={flagIcons[currentLanguage]}
                style={styles.modalFlag}
                resizeMode="contain"
              />
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
