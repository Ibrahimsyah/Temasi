import React, { useMemo, useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Input';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardsGender from '../../components/CardsGender';
import ImageChooserModal from '../../components/ImageChooserModal';
import { isEmpty } from '../../utils/validation';
import { absoluteUrl } from '../../utils/asset';
import profilePlaceholder from '../../assets/images/profilePlaceholder.png';
import { Color } from '../../config/style';
import { setUploadResult, uploadImage } from '../../store/main.action';
import { registerUser } from '../../store/auth.action';

import style from './style';
import { toastError } from '../../utils/error';

export default () => {
  const [photo, setPhoto] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isMale, setIsMale] = useState(-1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const { account, loading, main, error } = useSelector(state => state);
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

  const onRegister = () => {
    if (password !== confirmPassword) {
      toastError('Pastikan Kata Sandi Konfirmasi Sama');
      return;
    }
    const data = {
      email,
      password,
      fullName,
      phoneNumber: phone,
      isMale,
      photo,
    };

    dispatch(registerUser(data));
  };

  const onLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const onImageReceived = data => {
    const { assets, didCancel } = data;
    if (!didCancel) {
      dispatch(uploadImage(assets[0]));
    }
  };

  useEffect(() => {
    if (account.userId) {
      navigation.dispatch(
        CommonActions.reset({
          routes: [{ name: 'HomeScreen' }],
        }),
      );
    }
  }, [account, navigation]);

  useEffect(() => {
    if (main?.uploadResult) {
      setPhoto(main.uploadResult.document_url);
      dispatch(setUploadResult(null));
    }
  }, [main, dispatch]);

  return (
    <>
      <ImageChooserModal
        visible={modalVisible}
        setVisible={setModalVisible}
        onImageReceived={onImageReceived}
      />
      <StatusBar backgroundColor={Color.LIGHT_GRAY} barStyle="dark-content" />
      <ScrollView
        style={style.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}>
        <View style={style.title}>
          <Text style={style.title1}>Daftar</Text>
          <Text style={style.title2}> Akun Baru</Text>
        </View>
        <Pressable
          style={style.profilePicHolder}
          onPress={() => setModalVisible(true)}>
          <Image
            source={photo ? { uri: absoluteUrl(photo) } : profilePlaceholder}
            style={style.profilePic}
          />
          {loading.uploadImage && <ActivityIndicator size="small" />}
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
          disabled={!isFormFilled || loading.register}
          onClick={onRegister}>
          {loading.register ? 'Mohon Tunggu' : 'Daftar'}
        </ButtonPrimary>
        <View style={style.footer}>
          <Text style={style.footer1}>Sudah Memiliki Akun? </Text>
          <TouchableOpacity onPress={onLogin}>
            <Text style={style.footer2}>Login Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
