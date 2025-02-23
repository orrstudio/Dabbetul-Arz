import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-audio';

const AudioWindow = ({ currentChannel, audioWidth, audioHeight }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return audio
      ? () => {
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  useEffect(() => {
    if (currentChannel?.uri) {
      loadAudio();
    }
    return () => {
      if (audio) {
        audio.unloadAsync();
      }
    };
  }, [currentChannel]);

  const loadAudio = async () => {
    if (audio) {
      await audio.unloadAsync();
    }
    try {
      const newAudio = await Audio.createAsync(
        { uri: currentChannel.uri },
        { shouldPlay: true, staysActiveInBackground: true }
      );
      setAudio(newAudio);
      setIsPlaying(true);
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  };

  const togglePlayback = async () => {
    if (!audio) return;

    if (isPlaying) {
      await audio.pauseAsync();
    } else {
      await audio.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={[styles.container, { width: audioWidth, height: audioHeight }]}>
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayback} style={styles.playButton}>
          <Text style={styles.playButtonText}>{isPlaying ? '⏸️' : '▶️'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    padding: 20,
  },
  playButtonText: {
    fontSize: 40,
    color: '#fff',
  },
});

export default AudioWindow;
