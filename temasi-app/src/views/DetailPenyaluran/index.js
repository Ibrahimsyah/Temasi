import React, { useEffect, useMemo } from 'react';
import { useRoute } from '@react-navigation/core';
import { Text, ScrollView, View, StatusBar, Image } from 'react-native';

import Header from '../../components/Header';
import PermohonanDetail from '../../components/PermohonanDetail';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Color } from '../../config/style';

import style from './style';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getDonaturPermohonanDetail } from '../../store/permohonan.action';
import { absoluteUrl } from '../../utils/asset';

export default () => {
  const router = useRoute();
  const { permohonan } = useSelector(state => state);
  const dispatch = useDispatch();

  const { time, ...permohonanDetailData } = router.params;
  const id = useMemo(() => permohonanDetailData.id, [permohonanDetailData]);

  useEffect(() => {
    dispatch(
      getDonaturPermohonanDetail({
        permohonanId: id,
      }),
    );
  }, [id, dispatch]);

  useEffect(() => {
    console.log(permohonan.donaturDetail);
  }, [permohonan]);

  return (
    <>
      <StatusBar backgroundColor={Color.WHITE} />
      <ScrollView style={styles.container}>
        <Header title="Detail Penyaluran" isDark />
        <PermohonanDetail {...permohonanDetailData} />
        <Text style={style.titleMed}>Detail Donatur</Text>
        <View style={style.donaturProfile}>
          <Image
            source={{ uri: absoluteUrl(permohonan.donaturDetail.photo) }}
            style={style.donaturPic}
          />
          <Text style={style.donaturName}>
            {permohonan.donaturDetail.full_name}
          </Text>
        </View>
        <View style={style.tutorialContainer}>
          <Text>
            {
              '\u2022 Patuhi protokol kesehatan ketika menerima bantuan dengan menggunakan masker dan berinteraksi tanpa menyentuh \n\n'
            }
            {
              '\u2022 Ucapkan terima kasih atas bantuan yang telah disalurkan donatur \n\n'
            }
            {
              '\u2022 Beri konfirmasi bahwa bantuan telah diterima dengan menekan tombol di bawah ini'
            }
          </Text>
        </View>
        <ButtonPrimary style={style.btnAction}>
          Konfirmasi Bantuan
        </ButtonPrimary>
      </ScrollView>
    </>
  );
};
