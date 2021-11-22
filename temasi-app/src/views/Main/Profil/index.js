import React, { useEffect } from 'react';
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

const AccountNotFound = () => {
  const navigation = useNavigation();

  const onLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const onRegister = () => {
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
  const {
    account: { summary },
  } = useSelector(state => state);

  const onLogout = () => {
    dispatch(deleteAccount());
  };

  return !account.userId ? (
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
        <GridInfo label="Permohonan" value={summary.permohonan_count || 0} />
        <GridInfo label="Donasi" value={summary.donasi_count || 0} />
      </View>
      <Text style={style.profileLabel}>Alamat Email</Text>
      <Text style={style.profileValue}>{account.email}</Text>
      <Text style={style.profileLabel}>Jenis Kelamin</Text>
      <Text style={style.profileValue}>Pria</Text>
      <View style={style.buttonContainer}>
        <ButtonPrimary style={style.buttonFirst}>Ubah Password</ButtonPrimary>
        <ButtonSecondary style={style.buttonSecond} onClick={onLogout}>
          Keluar
        </ButtonSecondary>
      </View>
    </ScrollView>
  );
};
