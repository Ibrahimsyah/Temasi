import React, { useEffect } from 'react';
import { Text, StatusBar, View, Image } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import FadeInComponent from '../../components/animation/FadeInComponent';
import { AppConfig } from '../../configs/app';
import { Color } from '../../configs/style';
import style from './style';

const AppLogo = require('../../assets/app_logo.png');

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      const navAction = StackActions.replace('LandingScreen');
      navigation.dispatch(navAction);
    }, 2000);
  }, [navigation]);
  return (
    <>
      <StatusBar backgroundColor={Color.WHITE} barStyle="dark-content" />
      <View style={style.body}>
        <FadeInComponent>
          <View>
            <Image style={style.appLogo} source={AppLogo} />
            <Text style={style.title}>{AppConfig.APP_NAME}</Text>
          </View>
        </FadeInComponent>
      </View>
    </>
  );
};
