import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import config from './index.config';

const Stack = createNativeStackNavigator();

export const GlobalRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={config.defaultRouteName}
        screenOptions={config.screenOptions}>
        {config.routes.map((screen, index) => (
          <Stack.Screen
            name={screen.name}
            component={screen.screen}
            key={index}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
