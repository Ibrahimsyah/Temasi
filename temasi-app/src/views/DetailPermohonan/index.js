import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, StatusBar, ActivityIndicator, Pressable} from 'react-native';
import ImageView from 'react-native-image-viewing';
import MapView, {Marker} from 'react-native-maps';
import CheckBox from '@react-native-community/checkbox';
import style from './style';
import ButtonPrimary from '../../components/ButtonPrimary';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/core';
import {OKSIGEN, PANGAN_SUPLEMEN, PLASMA, TYPE_OKSIGEN, TYPE_PANGAN_SUPLEMEN, TYPE_PLASMA} from '../../configs/ItemTypes';
import {Color} from '../../configs/style';
import {default as FontAwesome5Icon} from 'react-native-vector-icons/FontAwesome5';
import {default as MaterialCommunityIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as MaterialIcon} from 'react-native-vector-icons/MaterialIcons';

const generateCategoryStyle = itemType => {
  let iconBgColor;
  let color;
  let icon;
  let category;
  switch (itemType) {
    case TYPE_PANGAN_SUPLEMEN: {
      iconBgColor = Color.LIGHT_BLUE;
      color = Color.MED_BLUE;
      icon = <MaterialIcon name="local-hospital" style={{...style.icon, color: Color.MED_BLUE}} />;
      category = PANGAN_SUPLEMEN;
      break;
    }
    case TYPE_OKSIGEN: {
      iconBgColor = Color.LIGHT_GREEN;
      color = Color.PRIMARY;
      icon = <MaterialCommunityIcon name="diving-scuba-tank" style={{...style.icon, color: Color.PRIMARY}} />;
      category = OKSIGEN;
      break;
    }
    default: {
      iconBgColor = Color.LIGHT_RED;
      color = Color.MED_RED;
      icon = <FontAwesome5Icon name="tint" style={{...style.icon, color: Color.MED_RED}} />;
      category = PLASMA;
      break;
    }
  }
  return {
    iconBgColor, icon, color, category,
  };
};

const initState = {
  user_name: '',
  user_profile: null,
  document: null,
  story: '',
  latitude: null,
  longitude: null,
  note: '',
};

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initState);
  const [agreement, setAgreement] = useState(false);
  const [imageFull, setImageFull] = useState(false);
  const navigation = useNavigation();

  const tipe = TYPE_OKSIGEN;
  const title = 'Dibutuhkan tabung oksigen dan perlengkapan';
  const distance = '3 KM';
  const time = '3 hari Lagi';
  const {iconBgColor, icon, category, color} = useMemo(() => generateCategoryStyle(tipe), [tipe]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData({
        user_name: 'John Doe',
        user_profile: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        document: 'https://s3-alpha-sig.figma.com/img/4b84/c7bf/816e9b2a58591842d4ef5cc68d38be69?Expires=1633910400&Signature=MWkmg6g~gPiOlLAyqQVKi~U9e5so382lp65AUGtj5QoaNPkU05g2fJnjvnu-atixTZSpKiCSI7s~pajVDdMHbjwptpErSJXQGpuMrlmx2e1ov9cq1c0Wzvox1yyHFN8qDvwWgDyJX7eld6gKGgIdepY3PNYKvBuLvaIn6HOAJrL2hfPYcdpK4xMoqVjmdtXtEyUevMw5-js-xfclXdER3fUWMzCJG2TbI26vtI3E2CcFwzuy2AeKchR6e8XiX9xU23m7nztjsFKdUKMxNP9zeOOimzzqcxgZewDKIghNjw9gNsHh0vNBn7wGv3BRv-AOfGjonjnZgPXI6KfhHgdj9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        story: 'Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas',
        latitude: -7.86730328266399,
        longitude: 112.68009106292808,
        note: 'Beban administrasi dan biaya akan saya tanggung. Donatur tidak perlu mengeluarkan biaya apapun',
      });
      setLoading(false);
    }, 3000);

  }, []);

  return (
    <>
      <StatusBar backgroundColor={tipe === TYPE_PLASMA ? Color.MED_RED : Color.PRIMARY} />
      <ScrollView style={style.container(tipe)} contentContainerStyle={style.contentContainer}>
        <Header navigator={navigation} withPadding title="Detail" />

        <View style={style.mainContainer}>
          <View style={style.header}>
            <View style={style.leftSection}>
              <View style={{...style.iconBackground, backgroundColor: iconBgColor}}>
                {icon}
              </View>
            </View>
            <View style={style.rightSection}>
              <Text style={{...style.category, color: color}}>{category}</Text>
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

          {loading ? (<ActivityIndicator color={color} />) :
            <>
              <Text style={style.story}>
                {data.story}
              </Text>

              <View style={style.profile}>
                {data.user_profile && <Image style={style.profilePhoto} source={{uri: data.user_profile}} />}
              </View>
              <Text style={style.titleBig}>Dokumen Pendukung</Text>

              {data.document && (
                <>
                  <Pressable onPress={() => setImageFull(true)}>
                    <Image style={style.image} source={{uri: data.document}} />
                  </Pressable>
                  <ImageView
                    images={[{uri: data.document}]}
                    swipeToCloseEnabled={false}
                    imageIndex={0}
                    visible={imageFull}
                    onRequestClose={() => setImageFull(false)}
                  />
                </>
              )}
              <Text style={style.imageCaption}>Tekan Gambar Untuk Memperbesar</Text>

              <Text style={style.titleMed}>Lokasi Pemohon</Text>
              {data.longitude && data.latitude && <View
                pointerEvents="none"
                style={style.mapContainer}>
                <MapView
                  style={style.map}
                  initialRegion={{
                    latitude: data.latitude,
                    longitude: data.longitude,
                    longitudeDelta: 0.003,
                    latitudeDelta: 0.003,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: data.latitude,
                      longitude: data.longitude,
                    }}
                  />
                </MapView>
              </View>}
              {tipe === TYPE_PLASMA && (
                <>
                  <Text style={style.titleBig}>Informasi Penanggung Administrasi</Text>
                  <Text style={style.description}>{data.note}</Text>
                </>
              )}

              <View style={style.checkboxContainer}>
                <CheckBox value={agreement} onValueChange={setAgreement} />
                <Text style={style.agreementText}>Saya menyatakan bahwa saya bersedia menyalurkan bantuan kepada {data.user_name}</Text>
              </View>
              <ButtonPrimary style={style.buttonSubmit} disabled={!agreement}>Salurkan Bantuan</ButtonPrimary>
            </>
          }
        </View>
      </ScrollView>
    </>
  );
};
