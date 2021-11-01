import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeFragment from '../views/Main/Home/HomeFragment/HomeFragment';
import SearchFragment from '../views/Main/Home/SearchFragment';

import config from './index.config';

const Stack = createNativeStackNavigator();
export const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeFragment"
      screenOptions={config.screenOptions}>
      <Stack.Screen name="HomeFragment" component={HomeFragment} />
      <Stack.Screen name="SearchFragment" component={SearchFragment} />
    </Stack.Navigator>
  );
};
