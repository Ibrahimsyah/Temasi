import React, { useState, useMemo } from 'react';
import { View, ScrollView, StatusBar, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';

import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Header from '../../components/Header';
import {
  OKSIGEN,
  PANGAN_SUPLEMEN,
  PLASMA,
  TYPE_OKSIGEN,
  TYPE_PANGAN_SUPLEMEN,
  TYPE_PLASMA,
} from '../../configs/ItemTypes';
import { Color } from '../../configs/style';

import style from './style';
import { Map } from '../../components/Map';

const generateCategoryStyle = itemType => {
  let iconBgColor;
  let color;
  let icon;
  let category;
  switch (itemType) {
    case TYPE_PANGAN_SUPLEMEN: {
      iconBgColor = Color.LIGHT_BLUE;
      color = Color.MED_BLUE;
      icon = (
        <MaterialIcon
          name="local-hospital"
          style={{ ...style.icon, color: Color.MED_BLUE }}
        />
      );
      category = PANGAN_SUPLEMEN;
      break;
    }
    case TYPE_OKSIGEN: {
      iconBgColor = Color.LIGHT_GREEN;
      color = Color.PRIMARY;
      icon = (
        <MaterialCommunityIcon
          name="diving-scuba-tank"
          style={{ ...style.icon, color: Color.PRIMARY }}
        />
      );
      category = OKSIGEN;
      break;
    }
    default: {
      iconBgColor = Color.LIGHT_RED;
      color = Color.MED_RED;
      icon = (
        <FontAwesome5Icon
          name="tint"
          style={{ ...style.icon, color: Color.MED_RED }}
        />
      );
      category = PLASMA;
      break;
    }
  }
  return {
    iconBgColor,
    icon,
    color,
    category,
  };
};

export default () => {
  const [type] = useState(TYPE_OKSIGEN);
  const navigation = useNavigation();
  const route = useRoute();

  const { isAfterAccept } = route.params || {};

  const position = {
    latitude: -7.867439569730554,
    longitude: 112.68013360023379,
  };

  const detailLokasi =
    'Lorem Ipsum Dolor Site AmetLorem Ipsum Dolor Site AmetLorem Ipsum Dolor Site AmetLorem Ipsum Dolor Site Amet ';

  const catatan = 'Lorem Ipsum Dolor Sit Amet Amet Amet';

  const { iconBgColor, icon, category, color } = useMemo(
    () => generateCategoryStyle(type),
    [type],
  );

  return (
    <>
      <StatusBar backgroundColor={Color.PRIMARY} barStyle="light-content" />
      <ScrollView
        style={style.container}
        contentContainerStyle={style.contentContainer}>
        <Header navigator={navigation} withPadding title="Penyaluran Donasi" />

        <View style={style.mainContainer}>
          {isAfterAccept && (
            <>
              <FontAwesome5Icon
                name="check-circle"
                color={Color.PRIMARY}
                size={60}
                style={style.checkLogo}
              />
              <Text style={style.checkDescription}>
                Terima kasih telah bersedia membantu, silahkan salurkan bantuan
                anda ke alamat pemohon bantuan
              </Text>
            </>
          )}

          <Text style={style.titleMed}>Detail Permohonan</Text>
          <View style={style.permohonanDescription}>
            <View
              style={{
                ...style.iconBackground,
                backgroundColor: iconBgColor,
              }}>
              {icon}
            </View>
            <View style={style.rightSection}>
              <Text style={{ ...style.category, color: color }}>
                {category}
              </Text>
              <Text style={style.title}>
                Dibutuhkan tabung oksigen dan perlengkapan
              </Text>
            </View>
          </View>
          <Text style={style.titleMed}>Lokasi Pemohon</Text>
          <Map position={position} />
          <Text style={style.titleMed}>Detail Lokasi</Text>
          <Text style={style.body}>{detailLokasi}</Text>
          <Text style={style.titleMed}>Catatan Pemohon</Text>
          <Text style={style.body}>{catatan}</Text>
          <Text style={style.titleBig}>Hubungi Pemohon</Text>
          <ButtonPrimary style={style.buttonAction}>Telepon</ButtonPrimary>
          <ButtonSecondary style={style.buttonAction}>WhatsApp</ButtonSecondary>
        </View>
      </ScrollView>
    </>
  );
};
