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
import { Color } from '../../config/style';
import { isEmpty } from '../../utils/validation';
import style from './style';
import { useEffect } from 'react';
import { loginUser } from '../../store/auth.action';
import { deleteAccount } from '../../store/account.action';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { account, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  const isFormFilled = useMemo(() => {
    return !isEmpty(email) && !isEmpty(password);
  }, [email, password]);

  const onRegister = () => {
    dispatch(deleteAccount());
    navigation.navigate('RegisterScreen');
  };

  const onLogin = () => {
    dispatch(deleteAccount());
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
  };

  useEffect(() => {
    if (account.userId && account.status) {
      navigation.dispatch(
        CommonActions.reset({
          routes: [{ name: 'HomeScreen' }],
        }),
      );
    }
  }, [account, navigation]);

  useEffect(() => {
    if (account.status === false) {
      navigation.push('KonfirmasiScreen');
    }
  }, [account.status, navigation]);

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
          type="password"
          style={style.input}
          value={password}
          onChange={setPassword}
          placeholder="Kata Sandi"
        />
        <ButtonPrimary
          disabled={!isFormFilled || loading.login}
          onClick={onLogin}>
          {loading.login ? 'Mohon Tunggu' : 'Masuk'}
        </ButtonPrimary>
        <View style={style.footer}>
          <Text style={style.footer1}>Belum Memiliki Akun? </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={style.footer2}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
