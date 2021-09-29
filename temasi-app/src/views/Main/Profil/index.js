import React from 'react';
import {Text, Image, View} from 'react-native';
import style from './style';
import noAccountImage from '../../../assets/images/noLogin.png';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonSecondary from '../../../components/ButtonSecondary';

export default () => {
    return (
        <View style={style.container}>
            <Image source={noAccountImage} />
            <Text style={style.noAccountDescription}>Tampaknya sistem belum dapat mengenali anda. Silahkan masuk atau daftar akun terlebih dahulu untuk menggunakan fitur aplikasi</Text>
            <View style={style.buttonContainer}>
                <ButtonPrimary style={style.buttonLogin}>Masuk</ButtonPrimary>
                <ButtonSecondary style={style.buttonRegister}>Daftar</ButtonSecondary>
            </View>
        </View>
    );
};
