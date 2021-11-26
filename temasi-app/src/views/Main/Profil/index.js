import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonSecondary from '../../../components/ButtonSecondary';
import NoAccountImage from '../../../assets/images/noLogin.png';
import GridInfo from '../../../components/GridInfo';
import { deleteAccount } from '../../../store/account.action';
import style from './style';
import { absoluteUrl } from '../../../utils/asset';
import { setDonasi } from '../../../store/donasi.action';
import {
  getLatestPermohonan,
  getUrgentPermohonan,
} from '../../../store/permohonan.action';

const AccountNotFound = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(deleteAccount());
    navigation.navigate('LoginScreen');
  };

  const onRegister = () => {
    dispatch(deleteAccount());
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={style.noAccountContainer}>
      <Image source={NoAccountImage} />
      <Text style={style.noAccountDescription}>
        Tampaknya sistem belum dapat mengenali anda. Silahkan masuk atau daftar
        akun terlebih dahulu untuk menggunakan fitur aplikasi
      </Text>
      <View style={style.buttonContainer}>
        <ButtonPrimary style={style.buttonFirst} onClick={onLogin}>
          Masuk
        </ButtonPrimary>
        <ButtonSecondary style={style.buttonSecond} onClick={onRegister}>
          Daftar
        </ButtonSecondary>
      </View>
    </View>
  );
};

export default () => {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    account: { summary },
  } = useSelector(state => state);

  const onLogout = () => {
    dispatch(deleteAccount());
    dispatch(setDonasi([]));
    dispatch(getLatestPermohonan());
    dispatch(getUrgentPermohonan());
  };

  const onChangePassword = () => {
    navigation.push('UbahPassword');
  };

  return !account.userId || account.status === false ? (
    <AccountNotFound />
  ) : (
    <ScrollView style={style.mainContainer}>
      <Text style={style.mainTitle}>Informasi Akun</Text>
      <View style={style.profileInfo}>
        <Image
          source={{ uri: absoluteUrl(account.photo) }}
          style={style.profilePic}
        />
        <Text style={style.profileName}>{account.fullName}</Text>
        <Text style={style.profileNumber}>{account.phoneNumber}</Text>
      </View>
      <View style={style.statisticGrid}>
        <GridInfo label="Permohonan" value={summary?.permohonan_count || 0} />
        <GridInfo label="Donasi" value={summary?.donasi_count || 0} />
      </View>
      <Text style={style.profileLabel}>Alamat Email</Text>
      <Text style={style.profileValue}>{account.email}</Text>
      <Text style={style.profileLabel}>Jenis Kelamin</Text>
      <Text style={style.profileValue}>
        {account.is_male ? 'Pria' : 'Wanita'}
      </Text>
      <View style={style.buttonContainer}>
        <ButtonPrimary style={style.buttonFirst} onClick={onChangePassword}>
          Ubah Password
        </ButtonPrimary>
        <ButtonSecondary style={style.buttonSecond} onClick={onLogout}>
          Keluar
        </ButtonSecondary>
      </View>
    </ScrollView>
  );
};
