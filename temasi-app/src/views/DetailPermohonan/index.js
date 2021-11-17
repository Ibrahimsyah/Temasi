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

import ButtonPrimary from '../../components/ButtonPrimary';
import Header from '../../components/Header';
import CheckBox from '../../components/CheckBox';
import { Map } from '../../components/Map';
import { TYPE_PLASMA } from '../../config/ItemTypes';
import { generateCategoryStyle } from '../../utils/style';

import style from './style';
import PermohonanDetail from '../../components/PermohonanDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getPermohonanDetail } from '../../store/permohonan.action';
import { absoluteUrl } from '../../utils/asset';
import { clearStatus } from '../../store/status.action';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';
import { acceptDonasi } from '../../store/donasi.action';

export default () => {
  const [screeningData1, setScreeningData1] = useState(false);
  const [screeningData2, setScreeningData2] = useState(false);
  const [screeningData3, setScreeningData3] = useState(false);
  const [screeningData4, setScreeningData4] = useState(false);
  const [screeningData5, setScreeningData5] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [imageFull, setImageFull] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();
  const router = useRoute();
  const dispatch = useDispatch();
  const { permohonan, loading, status } = useSelector(state => state);
  const { color } = useMemo(() => generateCategoryStyle(type), [type]);

  const { id, type } = router.params;

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
    dispatch(
      acceptDonasi({
        permohonanId: permohonan.detail.id,
      }),
    );
  };

  const onDocumentClick = url => {
    setSelectedImage(absoluteUrl(url));
    setImageFull(true);
  };

  useEffect(() => {
    if (status.acceptDonasi === STATUS_REQUEST_SUCCESS) {
      dispatch(clearStatus('acceptDonasi'));
      navigation.navigate('PenyaluranDonasi', {
        isAfterAccept: true,
      });
    }
  }, [status.acceptDonasi, navigation, dispatch]);

  useEffect(() => {
    dispatch(getPermohonanDetail({ permohonanId: id }));
  }, [dispatch, id]);

  return (
    <>
      <StatusBar backgroundColor={color} barStyle="light-content" />
      <ScrollView
        style={style.container(type)}
        contentContainerStyle={style.contentContainer}>
        <Header withPadding title="Detail" />

        <View style={style.mainContainer}>
          <PermohonanDetail {...router.params} />

          {loading.getPermohonanDetail ? (
            <ActivityIndicator color={color} />
          ) : (
            <>
              {permohonan.detail?.note && (
                <Text style={style.story}>{permohonan.detail?.note}</Text>
              )}
              <View style={style.profile}>
                {permohonan.detail?.photo && (
                  <Image
                    style={style.profilePhoto}
                    source={{ uri: absoluteUrl(permohonan.detail.photo) }}
                  />
                )}
                <View style={style.profileDesc}>
                  <Text style={style.profileLabel}>Pemohon</Text>
                  <Text style={style.profileName}>
                    {permohonan.detail?.full_name}
                  </Text>
                </View>
              </View>
              <Text style={style.titleBig}>Dokumen Pendukung</Text>

              {permohonan.detail?.documents && (
                <>
                  {permohonan.detail.documents.map((document, idx) => (
                    <Pressable
                      key={idx}
                      onPress={() => onDocumentClick(document)}>
                      <Image
                        style={style.image}
                        source={{ uri: absoluteUrl(document) }}
                      />
                    </Pressable>
                  ))}
                  <ImageView
                    images={[{ uri: selectedImage }]}
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
                  latitude: permohonan.detail?.latitude || 0.0,
                  longitude: permohonan.detail?.longitude || 0.0,
                }}
              />
              {type === TYPE_PLASMA && (
                <>
                  <Text style={style.titleBig}>
                    Informasi Penanggung Administrasi
                  </Text>
                  <Text style={style.description}>
                    {permohonan.detail?.note}
                  </Text>
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
                  {permohonan.detail?.full_name}
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
