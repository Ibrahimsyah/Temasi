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

  newsImage: {
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
  const {title, image, timestamp, onClick} = props;

  return (
    <>
      <TouchableOpacity style={style.container} onPress={onClick}>
        <Image source={{uri: image}} style={style.newsImage} />
        <View style={style.rightSection}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.timestamp}>{timestamp}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
