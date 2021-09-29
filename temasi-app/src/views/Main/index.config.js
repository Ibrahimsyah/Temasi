import React from 'react';
import {default as MaterialCommunityIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as MaterialIcon} from 'react-native-vector-icons/MaterialIcons';
import {default as FontAwesomeIcon} from 'react-native-vector-icons/FontAwesome';
import {Color} from '../../configs/style';
import HomeScreen from './Home';
import Informasi from './Informasi';
import Permohonan from './Permohonan';
import Profil from './Profil';

export default {
    navigatorConfig: {
        initialRouteName: 'Home',
        screenOptions: {
            tabBarActiveTintColor: Color.PRIMARY,
            tabBarStyle: {
                height: 56,
                shadowColor: '#00000000',
            },
            tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 10,
                marginBottom: 6,
            },
            tabBarIcon: {
                size: 16,
            },
            headerShown: false,
        },
    },
    tabs: [
        {
            name: 'Home',
            component: HomeScreen,
            options: {
                tabBarLabel: 'Donasi',
                tabBarIcon: ({color, size}) => (
                    <FontAwesomeIcon name="home" size={size} color={color} />
                ),
            },
        },
        {
            name: 'Permohonan',
            component: Permohonan,
            options: {
                tabBarLabel: 'Permohonan',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcon name="heart" size={size} color={color} />
                ),
            },
        },
        {
            name: 'Informasi',
            component: Informasi,
            options: {
                tabBarLabel: 'Informasi',
                tabBarIcon: ({color, size}) => (
                    <MaterialIcon name="explore" size={size} color={color} />
                ),
            },
        },
        {
            name: 'Profil',
            component: Profil,
            options: {
                tabBarLabel: 'Profil',
                tabBarIcon: ({color, size}) => (
                    <FontAwesomeIcon name="user" size={size} color={color} />
                ),
            },
        },
    ],
};
