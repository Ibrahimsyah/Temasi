import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../view/SplashScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
