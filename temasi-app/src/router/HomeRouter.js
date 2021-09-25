import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed2 from '../views/Main/Home/Feed2/Feed2Screen';
import HomeFragment from '../views/Main/Home/HomeFragment/HomeFragment';
import config from './index.config';
const Stack = createNativeStackNavigator();

export const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeFragment"
      screenOptions={config.screenOptions}>
      <Stack.Screen name="HomeFragment" component={HomeFragment} />
      <Stack.Screen name="feed2" component={Feed2} />
    </Stack.Navigator>
  );
};
