import React from 'react';
import {Text, StatusBar, View, Image} from 'react-native';
import FadeInComponent from '../../component/animation/FadeInComponent';
import {AppConfig} from '../../config/app';
import {Color} from '../../config/style';
import style from './style';
const AppLogo = require('../../assets/app_logo.png');

export default () => {
  return (
    <>
      <StatusBar backgroundColor={Color.RED_PRIMARY} />
      <View style={style.body}>
        <FadeInComponent>
          <Image style={style.appLogo} source={AppLogo} />
          <Text style={style.title}>{AppConfig.APP_NAME}</Text>
        </FadeInComponent>
      </View>
    </>
  );
};
