import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Color, FontStyle} from '../configs/style';

const style = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
  },

  newsImage:{
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    overflow: 'hidden',
  },

  rightSection: {
    padding: 16,
    justifyContent: 'space-between',
    flex: 1,
  },

  title: {
      ...FontStyle.H4,
  },

  timestamp: {
    ...FontStyle.CAPTION,
    fontStyle: 'italic',
  },
});

export default props => {
  const {title, image = 'https://covid19.go.id/storage/app/uploads/public/615/2f1/ea5/6152f1ea505f0930846588.jpeg', timestamp} = props;

  return (
    <>
      <TouchableOpacity style={style.container}>
        <Image source={{uri: image}} style={style.newsImage}/>
        <View style={style.rightSection}>
          <Text style={style.title}>Analisis Data COVID-19 Indonesia (Update Per 19 September 2021)</Text>
          <Text style={style.timestamp}>Rab, 22 Sep 2021 20:07:17 +0700</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
