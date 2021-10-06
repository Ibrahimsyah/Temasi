import React, { useEffect, useState } from 'react';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Pressable, ScrollView, FlatList } from 'react-native';
import style from './style';
import { Color } from '../../../../configs/style';
import { generateGreeting } from '../../../../utils/time';
import CardBantuan from '../../../../components/CardBantuan';
import CardPermohonan from '../../../../components/CardPermohonan';
import config from './index.config';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

const HomeFragment = () => {
  const [data, setData] = useState(config.initState);
  const navigation = useNavigation();
  const account = useSelector(state => state.account);

  const greeting = generateGreeting();

  const onPermohonanClick = item => {
    if (account.id) {
      navigation.navigate('DetailPermohonan', item);
    } else {
      navigation.navigate('Profil');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setData(config.dummyState);
    }, 100);
  }, []);
  return (
    <>
      <ScrollView style={style.container}>
        <Text style={style.greeting}>{greeting}</Text>
        <Text style={style.userName}>Ibrahimsyah Zairussalam</Text>

        <Pressable style={style.searchBar}>
          <View style={style.searchContainer}>
            <FontAwesomeIcon name="search" style={style.searchIcon} />
            <Text style={style.searchHint}>Coba cari "Tabung Oksigen"</Text>
          </View>
        </Pressable>

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
          renderItem={({ item }) => (
            <CardBantuan {...item} onClick={onPermohonanClick} key={item.id} />
          )}
        />

        <View style={style.sectionHeader}>
          <Text style={style.sectionTitle}>Permohonan Baru</Text>
          <Pressable>
            <Text style={style.showMore}>Lihat Semua</Text>
          </Pressable>
        </View>
        <View style={style.list}>
          {data.permohonanLatest.map(item => (
            <CardPermohonan
              {...item}
              onClick={onPermohonanClick}
              key={item.id}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default HomeFragment;
