import React from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CardPermohonan from '../../../components/CardPermohonan';
import FABPermohonan from '../../../components/FABPermohonan';

import style from './style';
import NotFound from '../../../components/NotFound';
import { STATUS_MATCHED } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const { permohonan, loading } = useSelector(state => state);
  const navigation = useNavigation();

  const onPermohonanClick = item => {
    if (item.status === STATUS_MATCHED) {
      navigation.navigate('DetailPenyaluran', item);
    }
  };

  const onCreatePermohonan = () => {
    navigation.navigate('BuatPermohonanScreen');
  };

  return (
    <>
      {loading.createPermohonan ? (
        <ActivityIndicator size="small" />
      ) : (
        <ScrollView
          style={style.container}
          contentContainerStyle={style.contentContainer}>
          <Text style={style.title}>Permohonan Anda</Text>
          {!permohonan.self.length ? (
            <NotFound message="Anda atau kerabat anda membutuhkan bantuan isolasi mandiri? Segera buat permohonan dan temukan orang baik yang akan membantu anda" />
          ) : (
            permohonan.self.map((item, index) => (
              <CardPermohonan
                {...item}
                key={index}
                onClick={onPermohonanClick}
              />
            ))
          )}
        </ScrollView>
      )}
      <FABPermohonan onClick={onCreatePermohonan} />
    </>
  );
};
