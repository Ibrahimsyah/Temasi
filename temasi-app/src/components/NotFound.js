import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import NotFoundImage from '../assets/images/notFound.png';
import { Color, FontStyle } from '../config/style';

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundImage: {
    width: '100%',
    height: 250,
    marginHorizontal: 20,
    resizeMode: 'contain',
  },
  notFoundText: {
    ...FontStyle.CAPTION,
    color: Color.DARKER_GRAY,
    textAlign: 'center',
    marginTop: 24,
  },
});

export default ({ message }) => {
  return (
    <>
      <View style={styles.notFoundContainer}>
        <Image source={NotFoundImage} style={styles.notFoundImage} />
        <Text style={styles.notFoundText}>{message}</Text>
      </View>
    </>
  );
};
