import React, { useEffect, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/core';
import { Text, ScrollView, View, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Header from '../../components/Header';
import PermohonanDetail from '../../components/PermohonanDetail';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Color } from '../../config/style';

import style from './style';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getDonaturPermohonanDetail } from '../../store/permohonan.action';
import { absoluteUrl } from '../../utils/asset';
import ConfirmModal from '../../components/ConfirmModal';
import { confirmDonasiReceived } from '../../store/donasi.action';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';
import { showToast } from '../../utils/error';
import { clearStatus } from '../../store/status.action';

export default () => {
  const [visible, setVisible] = useState(false);
  const router = useRoute();
  const { permohonan, status } = useSelector(state => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { time, ...permohonanDetailData } = router.params;
  const id = useMemo(() => permohonanDetailData.id, [permohonanDetailData]);

  const onConfirmBantuan = () => {
    dispatch(
      confirmDonasiReceived({
        donasiId: permohonan.donaturDetail.donation_id,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      getDonaturPermohonanDetail({
        permohonanId: id,
      }),
    );
  }, [id, dispatch]);

  useEffect(() => {
    if (status.confirmDonasiReceived === STATUS_REQUEST_SUCCESS) {
      showToast('Bantuan berhasil dikonfirmasi');
      navigation.goBack();
      dispatch(clearStatus('confirmDonasiReceived'));
    }
  }, [status, dispatch, navigation]);
  return (
    <>
      <ConfirmModal
        visible={visible}
        setVisible={setVisible}
        message="Apakah anda yakin ingin mengonfirmasi bantuan? Pastikan bantuan sesuai dengan apa yang anda butuhkan?"
        acceptText="Konfirmasi"
        onAccept={onConfirmBantuan}
      />
      <StatusBar backgroundColor={Color.WHITE} />
      <ScrollView style={styles.container}>
        <Header title="Detail Penyaluran" isDark />
        <PermohonanDetail {...permohonanDetailData} />
        <Text style={style.titleMed}>Detail Donatur</Text>
        <View style={style.donaturProfile}>
          <Image
            source={{ uri: absoluteUrl(permohonan.donaturDetail?.photo) }}
            style={style.donaturPic}
          />
          <Text style={style.donaturName}>
            {permohonan.donaturDetail?.full_name}
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
        <ButtonPrimary style={style.btnAction} onClick={() => setVisible(true)}>
          Konfirmasi Bantuan
        </ButtonPrimary>
      </ScrollView>
    </>
  );
};
