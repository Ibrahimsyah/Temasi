import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CardPermohonan from '../../../components/CardPermohonan';
import FABPermohonan from '../../../components/FABPermohonan';

import style from './style';
import NotFound from '../../../components/NotFound';
import { STATUS_MATCHED } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../../utils/error';
import { getSelfPermohonan } from '../../../store/permohonan.action';

export default () => {
  const {
    permohonan,
    loading,
    account: { userId, status },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPermohonanClick = item => {
    if (item.status === STATUS_MATCHED) {
      navigation.navigate('DetailPenyaluran', item);
    }
  };

  const onCreatePermohonan = () => {
    if (userId && status) {
      navigation.navigate('BuatPermohonanScreen');
    } else {
      showToast('Silahkan Masuk Terlebih Dahulu');
    }
  };

  const getAllSelfPermohonan = useCallback(() => {
    dispatch(getSelfPermohonan());
  }, [dispatch]);

  return (
    <>
      <ScrollView
        style={style.container}
        contentContainerStyle={style.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={loading.getSelfPermohonan}
            onRefresh={getAllSelfPermohonan}
          />
        }>
        <Text style={style.title}>Permohonan Anda</Text>
        {!permohonan.self.length ? (
          <NotFound message="Anda atau kerabat anda membutuhkan bantuan isolasi mandiri? Segera buat permohonan dan temukan orang baik yang akan membantu anda" />
        ) : (
          permohonan.self.map((item, index) => (
            <CardPermohonan {...item} key={index} onClick={onPermohonanClick} />
          ))
        )}
      </ScrollView>
      <FABPermohonan onClick={onCreatePermohonan} />
    </>
  );
};
