import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Color } from '../../config/style';
import { isEmpty } from '../../utils/validation';
import style from './style';
import { useEffect } from 'react';
import { confirmAccount } from '../../store/auth.action';

export default () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();
  const { account, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  const isFormFilled = useMemo(() => {
    return !isEmpty(code);
  }, [code]);

  const onConfirm = () => {
    dispatch(
      confirmAccount({
        confirmationCode: code,
      }),
    );
  };

  useEffect(() => {
    if (account.status === 1) {
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
          <Text style={style.title1}>Konfirmasi</Text>
          <Text style={style.title2}> Akun Anda</Text>
        </View>
        <Text style={style.body}>
          Masukkan kode yang telah kami kirim ke email {account.email}
        </Text>
        <Input
          style={style.input}
          value={code}
          onChange={setCode}
          keyboardType="number-pad"
          placeholder="Kode Konfirmasi"
        />
        <ButtonPrimary
          disabled={!isFormFilled || loading.confirmAccount}
          onClick={onConfirm}>
          {loading.login ? 'Mohon Tunggu' : 'Konfirmasi'}
        </ButtonPrimary>
      </ScrollView>
    </>
  );
};
