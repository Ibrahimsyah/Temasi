import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import config from './index.config';
import InformasiDetail from '../views/Main/Informasi/InformasiDetail';
import InformasiList from '../views/Main/Informasi/InformasiList';

const Stack = createNativeStackNavigator();

export const InformasiRouter = () => {
  return (
    <Stack.Navigator initialRouteName="InformasiList"
      screenOptions={config.screenOptions}>
      <Stack.Screen component={InformasiList} name="InformasiList" />
      <Stack.Screen component={InformasiDetail} name="InformasiDetail" />
    </Stack.Navigator>
  );
};
