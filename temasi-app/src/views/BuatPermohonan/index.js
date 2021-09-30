import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Modal} from 'react-native';
import {Color, FontStyle} from '../../configs/style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ButtonPrimary from '../../components/ButtonPrimary';
import config from './index.config';
import style from './style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.LIGHT_GRAY,
    padding: 20,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    width: '70%',
    borderRadius: 8,
    padding: 20,
    backgroundColor: Color.WHITE,
  },
  modalTitle: {
    ...FontStyle.H3,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    width: '100%',
    marginTop: 8,
  },
  holder: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: Color.MED_GRAY,
  },
});

export default () => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSetImage = () => {
    setModalVisible(true);
  };

  const onPhotoReceived = data => {
    const {assets, didCancel} = data;
    if (!didCancel){
      console.log(assets);
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
      <View style={styles.container}>
        <TouchableOpacity style={styles.holder} onPress={handleSetImage}>
          <Text>Hehe</Text>
          <Image source={{uri: image}} width={100} height={100} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        transparent
        onDismiss={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Pilih Gambar</Text>
            <ButtonPrimary style={styles.modalButton} onClick={capturePhoto}>Ambil Gambar</ButtonPrimary>
            <ButtonPrimary style={styles.modalButton} onClick={getPhotoFromGallery}>Pilih dari Galeri</ButtonPrimary>
          </View>
        </View>
      </Modal>
    </>
  );
};
