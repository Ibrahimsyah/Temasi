import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Color } from '../../configs/style';
import { isEmpty } from '../../utils/validation';
import style from './style';
import { setAccount } from '../../stores/account.action';
import { useEffect } from 'react';
import CardsGender from '../../components/CardsGender';
import profilePlaceholder from '../../assets/images/profilePlaceholder.png';

export default () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isMale, setIsMale] = useState(-1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const isFormFilled = useMemo(() => {
    return (
      !isEmpty(email) &&
      !isEmpty(password) &&
      !isEmpty(confirmPassword) &&
      !isEmpty(fullName) &&
      !isEmpty(phone) &&
      isMale !== -1
    );
  }, [email, password, confirmPassword, fullName, phone, isMale]);

  const onRegisterClick = () => {
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

  const onLoginClick = () => {
    navigation.navigate('LoginScreen');
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
        style={style.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}>
        <View style={style.title}>
          <Text style={style.title1}>Daftar</Text>
          <Text style={style.title2}> Akun Baru</Text>
        </View>
        <Pressable style={style.profilePicHolder}>
          <Image source={profilePlaceholder} style={style.profilePic} />
        </Pressable>
        <Input
          style={style.input}
          value={fullName}
          onChange={setFullName}
          placeholder="Nama Lengkap"
        />
        <Input
          style={style.input}
          value={phone}
          onChange={setPhone}
          placeholder="Nomor Telepon (WhatsApp)"
        />
        <CardsGender
          value={isMale}
          onChange={setIsMale}
          style={style.genderChooser}
        />
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
        <Input
          secureTextEntry
          style={style.input}
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Ulangi Kata Sandi"
        />
        <ButtonPrimary
          disabled={!isFormFilled || loading}
          onClick={onRegisterClick}>
          {loading ? 'Mohon Tunggu' : 'Daftar'}
        </ButtonPrimary>
        <View style={style.footer}>
          <Text style={style.footer1}>Sudah Memiliki Akun? </Text>
          <TouchableOpacity onPress={onLoginClick}>
            <Text style={style.footer2}>Login Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
