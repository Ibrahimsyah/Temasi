import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { Color, FontStyle } from '../config/style';
import ButtonPrimary from './ButtonPrimary';

const style = StyleSheet.create({
  modalWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  modal: {
    width: '60%',
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  modalTitle: {
    ...FontStyle.H3,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalButton: {
    marginTop: 8,
  },
});

const imagePickerConfig = {
  mediaType: 'photo',
  maxWidth: 500,
  maxHeight: 1000,
  cameraType: 'back',
};

export default ({ visible, setVisible, onImageReceived }) => {
  const capturePhoto = () => {
    launchCamera(imagePickerConfig, onImageReceived);
    setVisible(false);
  };

  const getPhotoFromGallery = () => {
    launchImageLibrary(imagePickerConfig, onImageReceived);
    setVisible(false);
  };

  return (
    <Modal
      transparent
      onDismiss={() => setVisible(false)}
      onRequestClose={() => setVisible(false)}
      visible={visible}
      animationType="fade">
      <View style={style.modalWrapper}>
        <View style={style.modal}>
          <Text style={style.modalTitle}>Pilih Gambar</Text>
          <ButtonPrimary
            onClick={getPhotoFromGallery}
            style={style.modalButton}>
            Dari Galeri
          </ButtonPrimary>
          <ButtonPrimary onClick={capturePhoto} style={style.modalButton}>
            Dari Kamera
          </ButtonPrimary>
        </View>
      </View>
    </Modal>
  );
};
