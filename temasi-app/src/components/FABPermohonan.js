import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Color, FontStyle } from '../config/style';

const style = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Color.PRIMARY,
    borderRadius: 20,
  },
  fabIcon: {
    fontSize: 18,
    color: Color.WHITE,
  },
  fabText: {
    ...FontStyle.CAPTION,
    marginLeft: 8,
    color: Color.WHITE,
  },
});

export default props => {
  const { onClick } = props;
  return (
    <>
      <TouchableOpacity style={style.fab} onPress={onClick}>
        <Icon name="hand-holding-heart" style={style.fabIcon} />
        <Text style={style.fabText}>Permohonan Baru</Text>
      </TouchableOpacity>
    </>
  );
};
