import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import config from './index.config';
import { StatusBar } from 'react-native';
import { Color } from '../../config/style';

const Tab = createBottomTabNavigator();

export default () => {
  useEffect(() => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    }).then(data => {
      //TODO: Save to State
    });
  }, []);
  return (
    <>
      <StatusBar backgroundColor={Color.LIGHT_GRAY} barStyle="dark-content" />
      <Tab.Navigator {...config.navigatorConfig}>
        {config.tabs.map((tab, index) => (
          <Tab.Screen key={index} {...tab} />
        ))}
      </Tab.Navigator>
    </>
  );
};
