import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Platform
} from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

const dummyData = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const VideoScreen = () => {
  const { width, height } = useWindowDimensions();
  const orientation = width < height ? 'portrait' : 'landscape';

  const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  const player = useVideoPlayer(videoUrl, (playerInstance) => {
    playerInstance.loop = true;
    playerInstance.play();
  });

  if (orientation === 'portrait') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.portraitVideoContainer}>
          <VideoView
            style={[styles.video, { width, height: (width * 9) / 16 }]}
            player={player}
            nativeControls
            allowsPictureInPicture
          />
        </View>
        <Text style={styles.channelName}>Channel Name</Text>
        <FlatList
          data={dummyData}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.title}</Text>}
          keyExtractor={(item) => item.id}
          style={styles.listContainer}
        />
      </SafeAreaView>
    );
  } else {
    const isIOS = Platform.OS === 'ios';
    const videoWidth = width * 0.7;
    const videoHeight = (videoWidth * 9) / 16;
    const listWidth = isIOS ? width * 0.2 : width * 0.3;

    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.landscapeContainer, { height: videoHeight }]}>
          <View style={[styles.landscapeVideoContainer, { width: videoWidth, height: videoHeight }]}>
            <VideoView
              style={{ width: '100%', height: '100%' }}
              player={player}
              nativeControls
              allowsPictureInPicture
            />
          </View>
          <View style={[styles.listContainerLandscape, { width: listWidth, height: videoHeight }]}>
            <FlatList
              data={dummyData}
              renderItem={({ item }) => <Text style={styles.listItem}>{item.title}</Text>}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  portraitVideoContainer: {
    alignItems: 'center',
  },
  video: {
    // Размеры задаются динамически через inline-стили
  },
  channelName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  landscapeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landscapeVideoContainer: {
    padding: 10,
  },
  listContainerLandscape: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default VideoScreen; 