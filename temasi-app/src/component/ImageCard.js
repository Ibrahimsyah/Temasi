import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default () => {
  const onCardClick = () => {
    console.log('Heheh');
  };

  return (
    <>
      <TouchableOpacity onPress={onCardClick}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdns.klimg.com/merdeka.com/i/w/news/2020/01/06/1138425/540x270/cara-membuat-nasi-goreng-kampung-yang-mudah-dan-tips-lezatnya.jpg',
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 150,
    overflow: 'hidden',
    borderRadius: 10,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
