import React, { useState, useMemo } from 'react';
import { View, ScrollView, StatusBar, Text } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';

import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Header from '../../components/Header';
import { TYPE_OKSIGEN } from '../../config/ItemTypes';
import { Map } from '../../components/Map';
import { generateCategoryStyle } from '../../utils/style';
import { Color } from '../../config/style';

import style from './style';

export default () => {
  const [type] = useState(TYPE_OKSIGEN);
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
        <Header withPadding title="Penyaluran Donasi" />

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
          <View style={style.tutorialContainer}>
            <Text>
              {'\u2022 Pastikan bantuan sesuai dengan kebutuhan pemohon \n\n'}
              {
                '\u2022 Patuhi protokol kesehatan dengan memakai masker dan jaga jarak dengan penerima\n\n'
              }
              {
                '\u2022 Ingatkan penerima bantuan untuk mengonfirmasi bantuan telah diterima \n\n'
              }
              {'\u2022 Cuci tangan dan bersihkan diri setiba dirumah '}
            </Text>
          </View>
          <Text style={style.titleBig}>Hubungi Pemohon</Text>
          <ButtonPrimary style={style.buttonAction}>Telepon</ButtonPrimary>
          <ButtonSecondary style={style.buttonAction}>WhatsApp</ButtonSecondary>
        </View>
      </ScrollView>
    </>
  );
};
