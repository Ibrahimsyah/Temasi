import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import Header from '../../../../components/Header';
import CardPermohonan from '../../../../components/CardPermohonan';

import styles from './style';
import { STATUS_NOT_DELIVERED } from '../../../../config';

export default () => {
  const navigation = useNavigation();
  const { donasi } = useSelector(state => state);

  const onDonasiClick = data => {
    if (data.status === STATUS_NOT_DELIVERED) {
      navigation.navigate('PenyaluranDonasi', {
        isAfterAccept: false,
        donasiId: data.id,
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header title="Donasi Anda" isDark />
        <ScrollView showsVerticalScrollIndicator={false}>
          {donasi.list.map((item, index) => (
            <CardPermohonan key={index} {...item} onClick={onDonasiClick} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
