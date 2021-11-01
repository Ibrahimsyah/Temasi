import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import { useNavigation, useRoute } from '@react-navigation/core';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';

import {
  OKSIGEN,
  PANGAN_SUPLEMEN,
  PLASMA,
  TYPE_OKSIGEN,
  TYPE_PANGAN_SUPLEMEN,
  TYPE_PLASMA,
} from '../../configs/ItemTypes';
import { Color } from '../../configs/style';
import ButtonPrimary from '../../components/ButtonPrimary';
import Header from '../../components/Header';
import CheckBox from '../../components/CheckBox';
import { Map } from '../../components/Map';

import config from './index.config';
import style from './style';

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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(config.initState);
  const [screeningData1, setScreeningData1] = useState(false);
  const [screeningData2, setScreeningData2] = useState(false);
  const [screeningData3, setScreeningData3] = useState(false);
  const [screeningData4, setScreeningData4] = useState(false);
  const [screeningData5, setScreeningData5] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [imageFull, setImageFull] = useState(false);
  const navigation = useNavigation();
  const router = useRoute();
  const { type, title, distance, time } = router.params;

  const { iconBgColor, icon, category, color } = useMemo(
    () => generateCategoryStyle(type),
    [type],
  );

  const isCheckBoxFilled = useMemo(() => {
    let result;
    result = agreement;

    if (type === TYPE_PLASMA) {
      result =
        result &&
        screeningData1 &&
        screeningData2 &&
        screeningData3 &&
        screeningData4 &&
        screeningData5;
    }

    return result;
  }, [
    type,
    screeningData1,
    screeningData2,
    screeningData3,
    screeningData4,
    screeningData5,
    agreement,
  ]);

  const onSalurkanBantuan = () => {
    navigation.navigate('PenyaluranDonasi', {
      isAfterAccept: true,
    });
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData({
        user_name: 'John Doe',
        user_profile:
          'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        document:
          'https://p4.wallpaperbetter.com/wallpaper/956/82/396/earth-ocean-california-coast-wallpaper-preview.jpg',
        story:
          'Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas',
        latitude: -7.86730328266399,
        longitude: 112.68009106292808,
        note: 'Beban administrasi dan biaya akan saya tanggung. Donatur tidak perlu mengeluarkan biaya apapun',
      });
      setLoading(false);
    }, 10);
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={type === TYPE_PLASMA ? Color.MED_RED : Color.PRIMARY}
        barStyle="light-content"
      />
      <ScrollView
        style={style.container(type)}
        contentContainerStyle={style.contentContainer}>
        <Header withPadding title="Detail" />

        <View style={style.mainContainer}>
          <View style={style.header}>
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
              <Text style={style.title}>{title}</Text>
              <View style={style.itemFooter}>
                <View style={style.footerLeft}>
                  <MaterialIcon name="location-on" style={style.locationIcon} />
                  <Text style={style.location}>{distance}</Text>
                </View>
                <Text style={style.time}>{time}</Text>
              </View>
            </View>
          </View>

          {loading ? (
            <ActivityIndicator color={color} />
          ) : (
            <>
              {data.story && <Text style={style.story}>{data.story}</Text>}
              <View style={style.profile}>
                {data.user_profile && (
                  <Image
                    style={style.profilePhoto}
                    source={{ uri: data.user_profile }}
                  />
                )}
                <View style={style.profileDesc}>
                  <Text style={style.profileLabel}>Pemohon</Text>
                  <Text style={style.profileName}>{data.user_name}</Text>
                </View>
              </View>
              <Text style={style.titleBig}>Dokumen Pendukung</Text>

              {data.document && (
                <>
                  <Pressable onPress={() => setImageFull(true)}>
                    <Image
                      style={style.image}
                      source={{ uri: data.document }}
                    />
                  </Pressable>
                  <ImageView
                    images={[{ uri: data.document }]}
                    swipeToCloseEnabled={false}
                    imageIndex={0}
                    visible={imageFull}
                    onRequestClose={() => setImageFull(false)}
                  />
                </>
              )}
              <Text style={style.imageCaption}>
                Tekan Gambar Untuk Memperbesar
              </Text>

              <Text style={style.titleMed}>Lokasi Pemohon</Text>
              <Map
                position={{
                  latitude: data.latitude,
                  longitude: data.longitude,
                }}
              />
              {type === TYPE_PLASMA && (
                <>
                  <Text style={style.titleBig}>
                    Informasi Penanggung Administrasi
                  </Text>
                  <Text style={style.description}>{data.note}</Text>
                  <CheckBox value={screeningData1} onChange={setScreeningData1}>
                    <Text>Saya benar benar memiliki darah AB+</Text>
                  </CheckBox>
                  <CheckBox value={screeningData2} onChange={setScreeningData2}>
                    <Text>Saya berusia 18 - 60 Tahun</Text>
                  </CheckBox>
                  <CheckBox value={screeningData3} onChange={setScreeningData3}>
                    <Text>Saya memiliki berat badan {'>'}= 50 Kg</Text>
                  </CheckBox>
                  <CheckBox value={screeningData4} onChange={setScreeningData4}>
                    <Text>
                      Saya pernah terkena COVID-19 dalam 3 bulan terakhir dan
                      telah dinyatakan sembuh (memiliki surat keterangan sembuh)
                    </Text>
                  </CheckBox>
                  <CheckBox value={screeningData5} onChange={setScreeningData5}>
                    <Text>
                      Saya dulu mengalami gejala sedang - berat saat melakukan
                      isolasi COVID-19
                    </Text>
                  </CheckBox>
                </>
              )}

              <CheckBox
                value={agreement}
                onChange={setAgreement}
                style={style.agreement}>
                <Text>
                  Saya menyatakan bahwa saya bersedia menyalurkan bantuan kepada{' '}
                  {data.user_name}
                </Text>
              </CheckBox>
              <ButtonPrimary
                style={style.buttonSubmit}
                onClick={onSalurkanBantuan}
                disabled={!isCheckBoxFilled}>
                Salurkan Bantuan
              </ButtonPrimary>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};
