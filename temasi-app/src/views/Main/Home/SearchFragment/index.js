import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';

import NotFound from '../../../../components/NotFound';

import styles from './style';
import config from './index.config';
import CardPermohonan from '../../../../components/CardPermohonan';

export default () => {
  const [data, setData] = useState(null);

  const onSearchSubmit = ({ nativeEvent: { text } }) => {
    setData([]);
  };
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
        {data &&
          (data.length === 0 ? (
            <NotFound message="Permohonan yang anda cari tidak ditemukan, silahkan gunakan kata kunci lain" />
          ) : (
            data.map((item, index) => <CardPermohonan key={index} {...item} />)
          ))}
      </ScrollView>
    </View>
  );
};
