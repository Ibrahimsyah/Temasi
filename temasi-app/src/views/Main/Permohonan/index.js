import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CardPermohonan from '../../../components/CardPermohonan';
import FABPermohonan from '../../../components/FABPermohonan';

import style from './style';
import config from './index.config';
import NotFound from '../../../components/NotFound';

export default () => {
  const [data] = useState(config.permohonanLatest);
  const navigation = useNavigation();

  const onPermohonanClick = item => {};

  const onCreatePermohonan = () => {
    navigation.navigate('BuatPermohonanScreen');
  };

  return (
    <>
      <ScrollView
        style={style.container}
        contentContainerStyle={style.contentContainer}>
        <Text style={style.title}>Permohonan Anda</Text>
        {!data.length ? (
          <NotFound message="Anda atau kerabat anda membutuhkan bantuan isolasi mandiri? Segera buat permohonan dan temukan orang baik yang akan membantu anda" />
        ) : (
          data.map((item, index) => (
            <CardPermohonan {...item} key={index} onClick={onPermohonanClick} />
          ))
        )}
      </ScrollView>
      <FABPermohonan onClick={onCreatePermohonan} />
    </>
  );
};
