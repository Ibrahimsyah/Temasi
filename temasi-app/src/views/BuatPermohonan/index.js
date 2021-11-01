import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import CheckBox from '@react-native-community/checkbox';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { useNavigation } from '@react-navigation/core';

import ButtonPrimary from '../../components/ButtonPrimary';
import Header from '../../components/Header';
import CardsKategori from '../../components/CardsKategori';
import Input from '../../components/Input';
import CardsJangkaWaktu from '../../components/CardsJangkaWaktu';
import CardsGolonganDarah from '../../components/CardsGolonganDarah';
import CardsRhesusDarah from '../../components/CardsRhesusDarah';
import { TYPE_PLASMA } from '../../configs/ItemTypes';

import config from './index.config';
import style from './style';
import { Map } from '../../components/Map';

export default () => {
  const [image, setImage] = useState(null);
  const [tipe, setTipe] = useState(-1);
  const [judul, setJudul] = useState('');
  const [golonganDarah, setGolonganDarah] = useState(null);
  const [rhesus, setRhesus] = useState(null);
  const [jangkaWaktu, setJangkaWaktu] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');
  const [administration, setAdministration] = useState('');
  const [description, setDescription] = useState('');
  const [agreement, setAgreement] = useState(false);
  const navigation = useNavigation();

  const handleSetImage = () => {
    setModalVisible(true);
  };

  const onPhotoReceived = data => {
    const { assets, didCancel } = data;
    if (!didCancel) {
      setImage(assets[0].uri);
    }
  };

  const capturePhoto = () => {
    launchCamera(config.imagePickerConfig, onPhotoReceived);
    setModalVisible(false);
  };

  const getPhotoFromGallery = () => {
    launchImageLibrary(config.imagePickerConfig, onPhotoReceived);
    setModalVisible(false);
  };

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
    }).then(data => {
      getCurrentLocation();
    });
  }, []);

  return (
    <>
      <ScrollView style={style.container}>
        <Header navigator={navigation} isDark title="Buat Permohonan" />

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
          dokter
        </Text>
        <TouchableOpacity style={style.holder} onPress={handleSetImage}>
          {image ? (
            <Image style={style.image} source={{ uri: image }} />
          ) : (
            <View style={style.imagePlaceholderContainer}>
              <Icon name="assignment" style={style.placeholderIcon} />
              <Text style={style.placeholderText}>
                Lampirkan foto dokumen pendukung{' '}
              </Text>
            </View>
          )}
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
              value={administration}
              onChange={setAdministration}
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
        <ButtonPrimary style={style.buttonSubmit} disabled={!agreement}>
          Buat Permohonan
        </ButtonPrimary>
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent
        onDismiss={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade">
        <View style={style.modal}>
          <View style={style.modalContent}>
            <Text style={style.modalTitle}>Pilih Gambar</Text>
            <ButtonPrimary style={style.modalButton} onClick={capturePhoto}>
              Ambil Gambar
            </ButtonPrimary>
            <ButtonPrimary
              style={style.modalButton}
              onClick={getPhotoFromGallery}>
              Pilih dari Galeri
            </ButtonPrimary>
          </View>
        </View>
      </Modal>
    </>
  );
};
