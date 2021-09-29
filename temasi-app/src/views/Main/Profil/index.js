import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import style from './style';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonSecondary from '../../../components/ButtonSecondary';
import NoAccountImage from '../../../assets/images/noLogin.png';
import UserPhotoNull from '../../../assets/images/userPhotoNull.png';
import GridInfo from '../../../components/GridInfo';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAccount, setAccount} from '../../../stores/account.action';

const AccountNotFound = () => {
    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(setAccount({
            id: 'hehe',
            token: 'boss',
        }));
    };
    return (
        <View style={style.noAccountContainer}>
            <Image source={NoAccountImage} />
            <Text style={style.noAccountDescription}>Tampaknya sistem belum dapat mengenali anda. Silahkan masuk atau daftar akun terlebih dahulu untuk menggunakan fitur aplikasi</Text>
            <View style={style.buttonContainer}>
                <ButtonPrimary style={style.buttonFirst} onClick={onLogin}>Masuk</ButtonPrimary>
                <ButtonSecondary style={style.buttonSecond}>Daftar</ButtonSecondary>
            </View>
        </View>
    );
};

export default () => {
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(deleteAccount());
    };

    return !account.id ? <AccountNotFound /> : <ScrollView style={style.mainContainer}>
        <Text style={style.mainTitle}>Informasi Akun</Text>
        <View style={style.profileInfo}>
            <Image source={UserPhotoNull} />
            <Text style={style.profileName}>Ibrahimsyah Zairussalam</Text>
            <Text style={style.profileNumber}>+6281230408862</Text>
        </View>
        <View style={style.statisticGrid}>
            <GridInfo label="Permohonan" value="1" />
            <GridInfo label="Donasi" value="2" />
        </View>
        <Text style={style.profileLabel}>Alamat Email</Text>
        <Text style={style.profileValue}>Ibrahimsyah@student.ub.ac.id</Text>
        <Text style={style.profileLabel}>Jenis Kelamin</Text>
        <Text style={style.profileValue}>Pria</Text>
        <View style={style.buttonContainer}>
            <ButtonPrimary style={style.buttonFirst}>Ubah Password</ButtonPrimary>
            <ButtonSecondary style={style.buttonSecond} onClick={onLogout}>Keluar</ButtonSecondary>
        </View>
    </ScrollView>;
};
