import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Color } from '../../configs/style';
import { isEmpty } from '../../utils/validation';
import style from './style';
import { setAccount } from '../../stores/account.action';
import { useEffect } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const isFormFilled = useMemo(() => {
    return !isEmpty(email) && !isEmpty(password);
  }, [email, password]);

  const onRegisterClick = () => {
    console.log('goto register');
  };

  const onLoginClick = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(
        setAccount({
          id: 'id1',
          token: 'token1',
        }),
      );
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (account.id) {
      navigation.dispatch(
        CommonActions.reset({
          routes: [{ name: 'HomeScreen' }],
        }),
      );
    }
  }, [account, navigation]);
  return (
    <>
      <StatusBar backgroundColor={Color.LIGHT_GRAY} barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={style.title}>
          <Text style={style.title1}>Masuk</Text>
          <Text style={style.title2}> ke Akun Anda</Text>
        </View>
        <Input
          style={style.input}
          textContentType="emailAddress"
          value={email}
          onChange={setEmail}
          placeholder="Alamat Email"
        />
        <Input
          secureTextEntry
          style={style.input}
          value={password}
          onChange={setPassword}
          placeholder="Kata Sandi"
        />
        <ButtonPrimary
          disabled={!isFormFilled || loading}
          onClick={onLoginClick}>
          {loading ? 'Mohon Tunggu' : 'Masuk'}
        </ButtonPrimary>
        <View style={style.footer}>
          <Text style={style.footer1}>Belum Memiliki Akun? </Text>
          <TouchableOpacity onPress={onRegisterClick}>
            <Text style={style.footer2}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};