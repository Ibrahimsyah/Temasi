import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';

import { Color, FontStyle } from '../config/style';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const style = StyleSheet.create({
  modalWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  modal: {
    width: '80%',
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  modalTitle: {
    ...FontStyle.H4,
    marginBottom: 16,
  },
  modalButton: {
    marginTop: 8,
  },
});

const ConfirmModal = ({
  message,
  onAccept,
  acceptText,
  visible,
  setVisible,
}) => {
  return (
    <Modal
      transparent
      onDismiss={() => setVisible(false)}
      onRequestClose={() => setVisible(false)}
      visible={visible}
      animationType="fade">
      <View style={style.modalWrapper}>
        <View style={style.modal}>
          <Text style={style.modalTitle}>{message}</Text>
          <ButtonPrimary onClick={onAccept} style={style.modalButton}>
            {acceptText}
          </ButtonPrimary>
          <ButtonSecondary
            onClick={() => setVisible(false)}
            style={style.modalButton}>
            Batal
          </ButtonSecondary>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
