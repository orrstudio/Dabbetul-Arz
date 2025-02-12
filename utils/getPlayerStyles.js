import { StyleSheet, Dimensions } from 'react-native';

export const getPlayerStyles = (theme, isPortrait, videoHeight) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    videoContainer: {
      width: isPortrait ? Dimensions.get('window').width : Dimensions.get('window').width * 0.7,
      height: videoHeight,
      alignSelf: 'flex-start',
      backgroundColor: "#000",
      margin: 0,
      padding: 0,
    },
    controls: {
      alignItems: 'flex-start',
      marginVertical: 0,
      padding: 0,
    },
    currentChannelText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.text,
      textAlign: 'center',
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 5,
      padding: 0,
      flexWrap: 'wrap',
    },
    channelList: {
      paddingVertical: 0,
      paddingHorizontal: 5,
      marginHorizontal: 5,
    },
    channelItem: {
      padding: 0,
      marginBottom: 5,
      backgroundColor: theme.channelBackground,
      borderRadius: 20,
    },
    channelRow: {
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
    rightFlagContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: 50,
    },
    channelText: {
      fontSize: 16,
      color: theme.channelText,
      textAlign: 'left',
    },
    activeChannelItem: {
      backgroundColor: theme.activeChannelBackground,
    },
    activeChannelText: {
      fontSize: 20,
      color: theme.activeChannelText,
      fontWeight: 'bold',
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
    landscapeContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    landscapeVideoContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 0,
      margin: 0,
    },
    landscapeChannelList: {
      width: '100%',
      paddingVertical: 0,
      paddingHorizontal: 0,
      marginVertical: 0,
      marginHorizontal: 0,
    },
    landscapeChannelListContainer: {
      justifyContent: 'flex-start',
    },
    leftColumn: {
      flexDirection: 'column',
      padding: 0,
    },
    rightColumn: {
      padding: 0,
    },
  }); 