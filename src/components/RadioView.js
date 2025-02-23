import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

/**
 * RadioView - компонент для отображения радио с картинкой OnAir
 * 
 * @param {Object} props
 * @param {number} props.width - ширина контейнера
 * @param {number} props.height - высота контейнера
 */
const RadioView = ({ width, height }) => {
  return (
    <View style={[styles.container, { width, height }]}>
      <Image 
        source={require('../../assets/images/OnAir.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default RadioView;
