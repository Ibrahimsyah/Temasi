import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import config from './index.config';
import { StatusBar } from 'react-native';
import { Color } from '../../configs/style';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <>
      <StatusBar backgroundColor={Color.LIGHT_GRAY} barStyle="dark-content" />
      <Tab.Navigator {...config.navigatorConfig}>
        {config.tabs.map((tab, index) =>
          <Tab.Screen key={index} {...tab} />
        )}
      </Tab.Navigator>
    </>
  );
};
