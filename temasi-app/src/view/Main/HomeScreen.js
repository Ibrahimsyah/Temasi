import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as IconFA} from 'react-native-vector-icons/FontAwesome';
import styles from './style';

function Feed() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(value => value + 1);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed! {count}</Text>
      <Pressable onPress={onButtonClick}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default props => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarIcon: {
          size: 16,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Donasi',
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Permohonan',
          tabBarIcon: ({color, size}) => (
            <Icon name="hand-heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <IconFA name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
