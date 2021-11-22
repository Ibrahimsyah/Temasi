import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';

import NotFound from '../../../../components/NotFound';

import styles from './style';
import CardPermohonan from '../../../../components/CardPermohonan';
import { useDispatch, useSelector } from 'react-redux';
import { searchPermohonan } from '../../../../store/permohonan.action';

export default () => {
  const dispatch = useDispatch();
  const { permohonan } = useSelector(state => state);

  const onSearchSubmit = ({ nativeEvent: { text } }) => {
    dispatch(
      searchPermohonan({
        query: text,
      }),
    );
  };

  useEffect(() => {
    console.log(permohonan);
  }, [permohonan]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cari Permohonan</Text>

      <View style={styles.searchBar}>
        <View style={styles.searchContainer}>
          <FontAwesomeIcon name="search" style={styles.searchIcon} />
          <TextInput
            onSubmitEditing={onSearchSubmit}
            autoFocus
            placeholder="Coba cari 'Tabung Oksigen'"
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        {permohonan.searchResult.length === 0 ? (
          <NotFound message="Permohonan yang anda cari tidak ditemukan, silahkan gunakan kata kunci lain" />
        ) : (
          permohonan.searchResult.map((item, index) => (
            <CardPermohonan key={index} {...item} />
          ))
        )}
      </ScrollView>
    </View>
  );
};
