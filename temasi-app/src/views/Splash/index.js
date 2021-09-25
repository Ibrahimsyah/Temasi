import React, { useEffect } from 'react';
import { Text, StatusBar, View, Image } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import FadeInComponent from '../../components/animation/FadeInComponent';
import { AppConfig } from '../../configs/app';
import { Color } from '../../configs/style';
import style from './style';
import { useDispatch } from 'react-redux';
import storage from '../../providers/storage';
import { ACCOUNT_STORAGE_KEY, APP_FIRST_USE } from '../../configs/storage';
import { setAccount } from '../../stores/account.action';

const AppLogo = require('../../assets/app_logo.png');

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      const account = await storage.getData(ACCOUNT_STORAGE_KEY);
      if (account) {
        dispatch(setAccount(account));
      }

      const isFirstTime = await storage.getData(APP_FIRST_USE);
      const nextScreen = isFirstTime === null || isFirstTime ? 'LandingScreen' : 'HomeScreen';

      setTimeout(() => {
        const navAction = StackActions.replace(nextScreen);
        navigation.dispatch(navAction);
      }, 2000);
    };

    init();
  }, [navigation, dispatch]);
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
