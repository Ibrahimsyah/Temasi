import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CardPermohonan from '../../../components/CardPermohonan';
import FABPermohonan from '../../../components/FABPermohonan';
import NotFoundImage from '../../../assets/images/notFound.png';

import style from './style';
import config from './index.config';

const NotFound = () => {
  return (
    <>
      <View style={style.notFoundContainer}>
        <Image source={NotFoundImage} style={style.notFoundImage} />
        <Text style={style.notFoundText}>
          Anda atau kerabat anda membutuhkan bantuan isolasi mandiri? Segera
          buat permohonan dan temukan orang baik yang akan membantu anda
        </Text>
      </View>
    </>
  );
};

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
          <NotFound />
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
