import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import Header from '../../../../components/Header';
import CardPermohonan from '../../../../components/CardPermohonan';

import styles from './style';

export default () => {
  const navigation = useNavigation();
  const { donasi } = useSelector(state => state);

  const onPermohonanClick = () => {
    navigation.navigate('PenyaluranDonasi', {
      isAfterAccept: false,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Header title="Donasi Anda" isDark />
        <ScrollView showsVerticalScrollIndicator={false}>
          {donasi.donasi.map((item, index) => (
            <CardPermohonan key={index} {...item} onClick={onPermohonanClick} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
