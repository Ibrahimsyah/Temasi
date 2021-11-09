import React, { useEffect, useState } from 'react';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Pressable, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import CardBantuan from '../../../../components/CardBantuan';
import CardPermohonan from '../../../../components/CardPermohonan';
import { Notification } from '../../../../components/Notification';
import { generateGreeting } from '../../../../utils/time';
import { Color } from '../../../../config/style';

import style from './style';
import config from './index.config';

const greeting = generateGreeting();
export default () => {
  const [data, setData] = useState(config.initState);
  const navigation = useNavigation();
  const account = useSelector(state => state.account);

  const onSearchClick = () => {
    navigation.navigate('SearchFragment');
  };

  const onNotificationClick = () => {
    navigation.navigate('DonasiFragment');
  };

  useEffect(() => {
    setTimeout(() => {
      setData(config.dummyState);
    }, 100);
  }, []);
  return (
    <>
      <ScrollView style={style.container}>
        {account.userId && (
          <>
            <Text style={style.greeting}>{greeting}</Text>
            <Text style={style.userName}>{account.fullName}</Text>
          </>
        )}

        <Pressable style={style.searchBar} onPress={onSearchClick}>
          <View style={style.searchContainer}>
            <FontAwesomeIcon name="search" style={style.searchIcon} />
            <Text style={style.searchHint}>Coba cari "Tabung Oksigen"</Text>
          </View>
        </Pressable>

        <Notification onClick={onNotificationClick}>
          Lihat Status Donasi Anda
        </Notification>

        <View style={style.mainPanel}>
          <Text style={style.panelTitle}>Yuk Bantu Mereka</Text>
          <View style={style.panelGrid}>
            <Pressable style={style.panelItem}>
              <View style={style.iconBackground}>
                <MaterialIcon
                  name="local-hospital"
                  style={{ ...style.icon, color: Color.MED_BLUE }}
                />
              </View>
              <Text style={style.panelItemTitle}>Bahan Pangan & Suplemen</Text>
            </Pressable>
            <Pressable style={style.panelItem}>
              <View style={style.iconBackground}>
                <MaterialCommunityIcon
                  name="diving-scuba-tank"
                  style={{ ...style.icon, color: Color.PRIMARY }}
                />
              </View>
              <Text style={style.panelItemTitle}>Tabung Oksigen</Text>
            </Pressable>
            <Pressable style={style.panelItem}>
              <View style={style.iconBackground}>
                <FontAwesome5Icon
                  name="tint"
                  style={{ ...style.icon, color: Color.MED_RED }}
                />
              </View>
              <Text style={style.panelItemTitle}>Plasma Konvalesen</Text>
            </Pressable>
          </View>
        </View>

        <View style={style.sectionHeader}>
          <Text style={style.sectionTitle}>Dibutuhkan Segera</Text>
          <Pressable>
            <Text style={style.showMore}>Lihat Semua</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal={true}
          style={style.list}
          showsHorizontalScrollIndicator={false}
          data={data.permohonanUrgent}
          renderItem={({ item }) => <CardBantuan {...item} key={item.id} />}
        />

        <View style={style.sectionHeader}>
          <Text style={style.sectionTitle}>Permohonan Baru</Text>
          <Pressable>
            <Text style={style.showMore}>Lihat Semua</Text>
          </Pressable>
        </View>
        <View style={style.list}>
          {data.permohonanLatest.map(item => (
            <CardPermohonan {...item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
