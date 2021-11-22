import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { searchPermohonan } from '../../../../store/permohonan.action';
import CardPermohonan from '../../../../components/CardPermohonan';

import style from './style';

export default () => {
  const router = useRoute();
  const dispatch = useDispatch();
  const {
    permohonan: { searchResult },
    loading,
  } = useSelector(state => state);

  const { type } = router.params;

  useEffect(() => {
    dispatch(
      searchPermohonan({
        type,
      }),
    );
  }, [type, dispatch]);

  return (
    <View style={style.container}>
      {loading.searchPermohonan && <ActivityIndicator size={'small'} />}
      {searchResult.map(item => (
        <CardPermohonan {...item} key={item.id} />
      ))}
    </View>
  );
};
