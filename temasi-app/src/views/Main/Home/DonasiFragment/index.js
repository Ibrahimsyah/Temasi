import React, { useCallback } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../../../components/Header';
import CardPermohonan from '../../../../components/CardPermohonan';

import styles from './style';
import { STATUS_NOT_DELIVERED } from '../../../../config';
import { getDonasi } from '../../../../store/donasi.action';
import { SET_LOADING } from '../../../../store/ActionTypes';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { donasi, loading } = useSelector(state => state);

  const onDonasiClick = data => {
    if (data.status === STATUS_NOT_DELIVERED) {
      navigation.navigate('PenyaluranDonasi', {
        isAfterAccept: false,
        donasiId: data.id,
      });
    }
  };

  const getDonasiData = useCallback(() => {
    dispatch(getDonasi());
  }, [dispatch]);

  return (
    <>
      <View style={styles.container}>
        <Header title="Donasi Anda" isDark />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={loading.getAllDonasi}
              onRefresh={getDonasiData}
            />
          }>
          {donasi.list.map((item, index) => (
            <CardPermohonan key={index} {...item} onClick={onDonasiClick} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
