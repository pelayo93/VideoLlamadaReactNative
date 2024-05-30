import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreens from './screens/HomeScreens';
import VideoCallScreens from './screens/VideoCallScreens';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreens} />
        <Stack.Screen name="VideoCallScreen" component={VideoCallScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
