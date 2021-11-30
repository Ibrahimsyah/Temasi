import React, { useCallback, useEffect } from 'react';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  Platform,
  RefreshControl,
  PermissionsAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import CardBantuan from '../../../../components/CardBantuan';
import CardPermohonan from '../../../../components/CardPermohonan';
import { Notification } from '../../../../components/Notification';
import { generateGreeting } from '../../../../utils/time';
import { Color } from '../../../../config/style';

import style from './style';
import {
  getLatestPermohonan,
  getSelfPermohonan,
  getUrgentPermohonan,
} from '../../../../store/permohonan.action';
import { getDonasi } from '../../../../store/donasi.action';
import {
  getAccountSummary,
  setPosition,
} from '../../../../store/account.action';

const greeting = generateGreeting();

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { account, permohonan, loading, donasi } = useSelector(state => state);

  const onSearchClick = () => {
    navigation.navigate('SearchFragment');
  };

  const onNotificationClick = () => {
    navigation.navigate('DonasiFragment');
  };

  const onKategoriClick = type => {
    navigation.navigate('KategoriFragment', {
      type,
    });
  };

  const getAllData = useCallback(() => {
    if (account.userId && account.status) {
      dispatch(getDonasi());
      dispatch(getAccountSummary());
      dispatch(getSelfPermohonan());
    }

    if (account.position) {
      dispatch(getLatestPermohonan());
      dispatch(getUrgentPermohonan());
    }
  }, [account.userId, account.status, dispatch, account.position]);

  useEffect(() => {
    getAllData();
  }, [dispatch, getAllData]);

  useEffect(() => {
    const getCurrentLocation = async () => {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      const options =
        Platform.OS === 'android'
          ? { enableHighAccuracy: false, timeout: 5000 }
          : { enableHighAccuracy: true, timeout: 5000, maximumAge: 2000 };
      Geolocation.getCurrentPosition(
        info => {
          dispatch(
            setPosition({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            }),
          );
        },
        error => {
          console.log(error);
        },
        options,
      );
    };
    getCurrentLocation();
  }, [dispatch]);

  return (
    <>
      <ScrollView
        style={style.container}
        refreshControl={
          <RefreshControl
            refreshing={
              loading.getLatestPermohonan ||
              loading.getDonasi ||
              loading.getUrgentPermohonan
            }
            onRefresh={getAllData}
          />
        }>
        {account.userId && account.status && (
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

        {donasi.list.length > 0 && (
          <Notification onClick={onNotificationClick}>
            Lihat Status Donasi Anda
          </Notification>
        )}

        <View style={style.mainPanel}>
          <Text style={style.panelTitle}>Yuk Bantu Mereka</Text>
          <View style={style.panelGrid}>
            <Pressable
              style={style.panelItem}
              onPress={() => onKategoriClick(1)}>
              <View style={style.iconBackground}>
                <MaterialIcon
                  name="local-hospital"
                  style={{ ...style.icon, color: Color.MED_BLUE }}
                />
              </View>
              <Text style={style.panelItemTitle}>Bahan Pangan & Suplemen</Text>
            </Pressable>
            <Pressable
              style={style.panelItem}
              onPress={() => onKategoriClick(2)}>
              <View style={style.iconBackground}>
                <MaterialCommunityIcon
                  name="diving-scuba-tank"
                  style={{ ...style.icon, color: Color.PRIMARY }}
                />
              </View>
              <Text style={style.panelItemTitle}>Tabung Oksigen</Text>
            </Pressable>
            <Pressable
              style={style.panelItem}
              onPress={() => onKategoriClick(3)}>
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
          data={permohonan.mostUrgent}
          renderItem={({ item }) => <CardBantuan {...item} key={item.id} />}
        />

        <View style={style.sectionHeader}>
          <Text style={style.sectionTitle}>Permohonan Baru</Text>
          <Pressable>
            <Text style={style.showMore}>Lihat Semua</Text>
          </Pressable>
        </View>
        <View style={style.list}>
          {permohonan.latest.map(item => (
            <CardPermohonan {...item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
