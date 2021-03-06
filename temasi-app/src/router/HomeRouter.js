import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeFragment from '../views/Main/Home/HomeFragment/HomeFragment';
import SearchFragment from '../views/Main/Home/SearchFragment';
import DonasiFragment from '../views/Main/Home/DonasiFragment';

import config from './index.config';
import KategoriFragment from '../views/Main/Home/KategoriFragment';

const Stack = createNativeStackNavigator();
export const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeFragment"
      screenOptions={config.screenOptions}>
      <Stack.Screen name="HomeFragment" component={HomeFragment} />
      <Stack.Screen name="SearchFragment" component={SearchFragment} />
      <Stack.Screen name="DonasiFragment" component={DonasiFragment} />
      <Stack.Screen name="KategoriFragment" component={KategoriFragment} />
    </Stack.Navigator>
  );
};
