import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed2 from '../view/Main/Home/Feed2/Feed2Screen';
import Feed1 from '../view/Main/Home/Feed1/Feed1Screen';
import config from './index.config';
const Stack = createNativeStackNavigator();

export const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="feed1"
      screenOptions={config.screenOptions}>
      <Stack.Screen name="feed1" component={Feed1} />
      <Stack.Screen name="feed2" component={Feed2} />
    </Stack.Navigator>
  );
};
