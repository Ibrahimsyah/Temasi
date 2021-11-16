import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import CheckBox from '@react-native-community/checkbox';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import ButtonPrimary from '../../components/ButtonPrimary';
import Header from '../../components/Header';
import ImageChooserModal from '../../components/ImageChooserModal';
import CardsKategori from '../../components/CardsKategori';
import Input from '../../components/Input';
import CardsJangkaWaktu from '../../components/CardsJangkaWaktu';
import CardsGolonganDarah from '../../components/CardsGolonganDarah';
import CardsRhesusDarah from '../../components/CardsRhesusDarah';
import { Map } from '../../components/Map';

import { absoluteUrl } from '../../utils/asset';
import { PLASMA, TYPE_PLASMA } from '../../config/ItemTypes';

import style from './style';
import { setUploadResult, uploadImage } from '../../store/main.action';
import { generatePlasmaTitle } from '../../utils/text';
import { submitPermohonan } from '../../store/permohonan.action';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';
import { showToast } from '../../utils/error';
import { clearStatus, setStatus } from '../../store/status.action';

export default () => {
  const [documents, setDocuments] = useState([]);
  const [tipe, setTipe] = useState(-1);
  const [judul, setJudul] = useState('');
  const [golonganDarah, setGolonganDarah] = useState(null);
  const [rhesus, setRhesus] = useState(null);
  const [jangkaWaktu, setJangkaWaktu] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [agreement, setAgreement] = useState(false);

  const { loading, main, status } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const disabled =
    !tipe ||
    documents.length <= 0 ||
    (tipe !== TYPE_PLASMA && !judul) ||
    (tipe === TYPE_PLASMA && (!golonganDarah || !rhesus || !description)) ||
    !address ||
    !jangkaWaktu ||
    !agreement;

  const onImageReceived = data => {
    const { assets, didCancel } = data;
    if (!didCancel) {
      dispatch(uploadImage(assets[0]));
    }
  };

  const onBuatPermohonan = () => {
    const title =
      tipe !== TYPE_PLASMA ? judul : generatePlasmaTitle(golonganDarah, rhesus);
    const data = {
      documents,
      type: tipe,
      title,
      timeout: jangkaWaktu,
      longitude: position.longitude,
      latitude: position.latitude,
      address,
      note: description,
    };

    dispatch(submitPermohonan(data));
  };

  useEffect(() => {
    if (main?.uploadResult) {
      setDocuments(prev => [...prev, main.uploadResult.document_url]);
      dispatch(setUploadResult(null));
    }
  }, [main, dispatch]);

  useEffect(() => {
    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        info => {
          setPosition({
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
          });
        },
        error => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    };

    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    }).then(() => {
      getCurrentLocation();
    });
  }, []);

  useEffect(() => {
    if (status.createPermohonan === STATUS_REQUEST_SUCCESS) {
      navigation.goBack();
      showToast('Permohonan Berhasil Dibuat');
      dispatch(clearStatus('createPermohonan'));
    }
  }, [dispatch, status, navigation]);
  return (
    <>
      <ImageChooserModal
        visible={modalVisible}
        setVisible={setModalVisible}
        onImageReceived={onImageReceived}
      />
      <ScrollView style={style.container}>
        <Header isDark title="Buat Permohonan" />
        <Text style={style.titleBig}>
          Jenis bantuan apa yang anda butuhkan?
        </Text>
        <CardsKategori style={style.kategori} onChange={setTipe} value={tipe} />

        {tipe !== TYPE_PLASMA ? (
          <>
            <Text style={style.titleMed}>Judul Permohonan</Text>
            <Input
              style={style.input}
              placeholder="Contoh: Vitamin dan Suplemen pasca COVID-19"
              value={judul}
              onChange={setJudul}
            />
          </>
        ) : (
          <>
            <Text style={style.titleBig}>Golongan Darah Anda</Text>
            <CardsGolonganDarah
              value={golonganDarah}
              onChange={setGolonganDarah}
            />

            <Text style={style.titleBig}>Rhesus Darah Anda</Text>
            <CardsRhesusDarah value={rhesus} onChange={setRhesus} />
          </>
        )}

        <Text style={style.titleBig}>Dokumen Pendukung</Text>
        <Text style={style.description}>
          Beri pendukung berupa foto agar para donatur mudah memverifikasi. Foto
          dapat berupa surat keterangan terkena COVID-19 atau surat keterangan
          dokter (Dapat lebih dari 1 dokumen)
        </Text>
        {documents.map((document, index) => (
          <Image
            key={index}
            style={style.image}
            source={{ uri: absoluteUrl(document) }}
          />
        ))}
        {loading.uploadPhoto && <ActivityIndicator size="small" />}
        <TouchableOpacity
          style={style.holder}
          onPress={() => setModalVisible(true)}>
          <View style={style.imagePlaceholderContainer}>
            <Icon name="assignment" style={style.placeholderIcon} />
            <Text style={style.placeholderText}>
              Lampirkan foto dokumen pendukung
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={style.titleMed}>Jangka Waktu Permohonan</Text>
        <CardsJangkaWaktu
          style={style.jangkaWaktu}
          value={jangkaWaktu}
          onChange={setJangkaWaktu}
        />

        <Text style={style.titleMed}>Beri Informasi Tempat Tinggal Anda</Text>
        <Map position={position} />
        <Text style={style.description}>
          Beri informasi detail lokasi sebagai penanda tempat tinggal anda
        </Text>
        <Input
          style={style.input}
          placeholder="Contoh: Blok CC3, Rumah dengan banyak tanaman"
          value={address}
          onChange={setAddress}
        />

        {tipe === TYPE_PLASMA ? (
          <>
            <Text style={style.titleBig}>
              Informasi Penanggung Administrasi
            </Text>
            <Text style={style.description}>
              Deskripsikan informasi mengenai siapa yang akan menanggung
              administrasi dan biaya dalam transfusi darah
            </Text>
            <Input
              style={style.input}
              placeholder="Contoh: Biaya dan urusan administrasi saya tanggung dengan keluarga, donatur tidak perlu mengeluarkan uang"
              value={description}
              onChange={setDescription}
            />
          </>
        ) : (
          <>
            <Text style={style.titleBig}>
              Deskripsi Tentang Anda (Opsional)
            </Text>
            <Text style={style.description}>
              Beri deskripsi mengenai apa yang anda butuhkan atau kondisi anda
              saat ini (Jika ada)
            </Text>
            <Input
              style={style.input}
              placeholder="Contoh: Saya sudah menjalani isolasi selama 5 hari dan merasa sesak nafas"
              value={description}
              onChange={setDescription}
            />
          </>
        )}

        <View style={style.checkboxContainer}>
          <CheckBox value={agreement} onValueChange={setAgreement} />
          <Text style={style.agreementText}>
            Saya menyatakan bahwa data yang saya masukkan adalah data yang benar
          </Text>
        </View>
        <ButtonPrimary
          style={style.buttonSubmit}
          disabled={disabled || loading.createPermohonan}
          onClick={onBuatPermohonan}>
          {loading.createPermohonan ? 'Mohon Tunggu' : 'Buat Permohonan'}
        </ButtonPrimary>
      </ScrollView>
    </>
  );
};
