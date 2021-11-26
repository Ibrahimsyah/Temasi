import { useNavigation } from '@react-navigation/core';
import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Input';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Color } from '../../config/style';
import { isEmpty } from '../../utils/validation';
import { changePassword } from '../../store/auth.action';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';
import { showToast } from '../../utils/error';
import { clearStatus } from '../../store/status.action';

import style from './style';

export default () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const { loading, status } = useSelector(state => state);
  const dispatch = useDispatch();

  const isFormFilled = useMemo(() => {
    return (
      !isEmpty(oldPassword) &&
      !isEmpty(newPassword) &&
      !isEmpty(confirmPassword)
    );
  }, [oldPassword, newPassword, confirmPassword]);

  const onChangePassword = () => {
    dispatch(
      changePassword({
        oldPassword,
        newPassword,
      }),
    );
  };

  useEffect(() => {
    if (status.changePassword === STATUS_REQUEST_SUCCESS) {
      navigation.goBack();
      showToast('Kata Sandi Berhasil Diubah');
      dispatch(clearStatus('changePassword'));
    }
  }, [dispatch, status, navigation]);

  return (
    <>
      <StatusBar backgroundColor={Color.LIGHT_GRAY} barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={style.title}>
          <Text style={style.title1}>Ubah</Text>
          <Text style={style.title2}> Kata Sandi</Text>
        </View>
        <Input
          type="password"
          style={style.input}
          value={oldPassword}
          onChange={setOldPassword}
          placeholder="Kata Sandi Lama"
        />
        <Input
          type="password"
          style={style.input}
          value={newPassword}
          onChange={setNewPassword}
          placeholder="Kata Sandi Baru"
        />
        <Input
          type="password"
          style={style.input}
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Konfirmasi kata Sandi Baru"
        />
        <ButtonPrimary
          disabled={
            (!isFormFilled && confirmPassword === newPassword) ||
            loading.changePassword
          }
          onClick={onChangePassword}>
          {loading.changePassword ? 'Mohon Tunggu' : 'Kirim'}
        </ButtonPrimary>
      </ScrollView>
    </>
  );
};
