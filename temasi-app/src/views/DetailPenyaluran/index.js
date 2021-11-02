import { useRoute } from '@react-navigation/core';
import React from 'react';
import { Text, ScrollView, View, StatusBar } from 'react-native';

import Header from '../../components/Header';
import PermohonanDetail from '../../components/PermohonanDetail';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Color } from '../../configs/style';

import style from './style';
import styles from './style';

export default () => {
  const router = useRoute();

  const { time, ...permohonanDetailData } = router.params;
  return (
    <>
      <StatusBar backgroundColor={Color.WHITE} />
      <ScrollView style={styles.container}>
        <Header title="Detail Penyaluran" isDark />
        <PermohonanDetail {...permohonanDetailData} />
        <Text style={style.titleMed}>Detail Donatur</Text>
        <View style={style.donaturProfile}>
          <View style={style.donaturPic} />
          <Text style={style.donaturName}>John Doe</Text>
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
          Konfirmasi bantuan
        </ButtonPrimary>
      </ScrollView>
    </>
  );
};
