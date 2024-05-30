import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

import {
  APP_ID,
  APP_SING
} from '../config';

export default function VideoCallScreens({
  navigation, route
}) {

  // console.log('VideoCallScreens', route.params);
  
  const { userName } =  route.params

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={APP_ID}
                appSign={APP_SING}
                userID={`user-${Math.random().toString(36).substring(7)}`} // userID can be something like a phone number or the user id on your own user system. 
                userName={userName}
                callID={`user-${Math.random().toString(36).substring(7)}`} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { navigation.navigate('HomeScreen') },
                    onHangUp: () => { navigation.navigate('HomeScreen') },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
  },
});
