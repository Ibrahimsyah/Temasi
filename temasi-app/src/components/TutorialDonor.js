import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';

import { Color, FontStyle } from '../config/style';
import ButtonPrimary from './ButtonPrimary';

const style = StyleSheet.create({
  buttonUDD: {
    backgroundColor: Color.MED_RED,
    marginTop: 16,
  },

  tutorialContainer: {
    backgroundColor: Color.LIGHT_RED,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  titleMed: {
    ...FontStyle.H4,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginTop: 16,
  },
});

export default () => {
  const onCall = () => {
    Linking.openURL('https://plasmakonvalesen.covid19.go.id/id/udd-pmi.html');
  };

  return (
    <>
      <Text style={style.titleMed}>Tata Cara Penyaluran Plasma</Text>
      <View style={style.tutorialContainer}>
        <Text>
          {
            '1. Hubungi Unit Donor Darah (UDD) PMI terdekat dengan lokasi anda \n\n'
          }
          {
            '2. Ikuti arahan yang diberikan oleh PMI terkait jadwal dan persyaratan \n\n'
          }
          {'3. Sampaikan informasi kepada pemohon/donatur'}
        </Text>
      </View>
      <ButtonPrimary style={style.buttonUDD} onClick={onCall}>
        Kontak UDD PMI
      </ButtonPrimary>
    </>
  );
};
