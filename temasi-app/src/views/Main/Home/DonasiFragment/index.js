import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Header from '../../../../components/Header';
import CardPermohonan from '../../../../components/CardPermohonan';

import styles from './style';
import config from './index.config';

export default () => {
  const [data] = useState(config.data);
  const navigation = useNavigation();

  const onPermohonanClick = () => {
    navigation.navigate('PenyaluranDonasi', {
      isAfterAccept: false,
    });
  };
  return (
    <>
      <Header title="Donasi Anda" isDark />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <CardPermohonan key={index} {...item} onClick={onPermohonanClick} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
