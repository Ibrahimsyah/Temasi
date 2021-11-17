import React, { useState, useMemo, useEffect } from 'react';
import { View, ScrollView, StatusBar, Text } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/core';

import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Header from '../../components/Header';
import { TYPE_OKSIGEN } from '../../config/ItemTypes';
import { Map } from '../../components/Map';
import { generateCategoryStyle } from '../../utils/style';
import { Color } from '../../config/style';

import style from './style';
import { getDonasiDetail } from '../../store/donasi.action';

export default () => {
  const [type] = useState(TYPE_OKSIGEN);
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { donasi } = useSelector(state => state);
  const { isAfterAccept, donasiId } = route.params || {};

  const handleBack = () => {
    if (isAfterAccept) {
      navigation.dispatch(StackActions.pop(2));
    } else {
      navigation.goBack();
    }
  };
  useEffect(() => {
    dispatch(
      getDonasiDetail({
        donasiId: donasiId,
      }),
    );
  }, [dispatch, donasiId]);

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
        <Header
          withPadding
          title="Penyaluran Donasi"
          onBackPressed={handleBack}
        />

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
              <Text style={style.title}>{donasi.detail?.title}</Text>
            </View>
          </View>
          <Text style={style.titleMed}>Lokasi Pemohon</Text>
          <Map
            position={{
              longitude: donasi.detail?.longitude,
              latitude: donasi.detail?.latitude,
            }}
          />
          <Text style={style.titleMed}>Detail Lokasi</Text>
          <Text style={style.body}>{donasi.detail?.address}</Text>
          <Text style={style.titleMed}>Catatan Pemohon</Text>
          <Text style={style.body}>{donasi.detail?.note}</Text>
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
