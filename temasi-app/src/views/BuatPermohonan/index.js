import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal, ScrollView} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ButtonPrimary from '../../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/MaterialIcons';
import config from './index.config';
import style from './style';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/core';
import CardsKategori from '../../components/CardsKategori';
import Input from '../../components/Input';

export default () => {
  const [image, setImage] = useState(null);
  const [tipe, setTipe] = useState(-1);
  const [judul, setJudul] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSetImage = () => {
    setModalVisible(true);
  };

  const onPhotoReceived = data => {
    const {assets, didCancel} = data;
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

  return (
    <>
      <ScrollView style={style.container}>
        <Header navigator={navigation} isDark title="Buat Permohonan" />
        <Text style={style.titleBig}>Jenis bantuan apa yang anda butuhkan?</Text>
        <CardsKategori style={style.kategori} onChange={setTipe} value={tipe} />
        <Text style={style.titleMed}>Judul Permohonan</Text>
        <Input
          style={style.input}
          placeholder="Contoh: Vitamin dan Suplemen pasca COVID-19"
          value={judul}
          onChange={setJudul}
        />
        <Text style={style.titleBig}>Dokumen Pendukung</Text>
        <Text style={style.description}>
          Beri pendukung berupa foto agar para donatur mudah memverifikasi. Foto dapat berupa surat keterangan terkena COVID-19 atau surat keterangan dokter
        </Text>


        <TouchableOpacity style={style.holder} onPress={handleSetImage}>
          {image ? <Image style={style.image} source={{uri: image}} /> :
            <View style={style.imagePlaceholderContainer}>
              <Icon name="assignment" style={style.placeholderIcon} />
              <Text style={style.placeholderText}>Lampirkan foto dokumen pendukung </Text>
            </View>
          }
        </TouchableOpacity>
        <Text style={style.titleMed}>Jangka Waktu Permohonan</Text>
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
            <ButtonPrimary style={style.modalButton} onClick={capturePhoto}>Ambil Gambar</ButtonPrimary>
            <ButtonPrimary style={style.modalButton} onClick={getPhotoFromGallery}>Pilih dari Galeri</ButtonPrimary>
          </View>
        </View>
      </Modal>
    </>
  );
};
