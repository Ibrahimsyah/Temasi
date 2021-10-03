import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Color} from '../configs/style';

const styles = StyleSheet.create({
  input: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    borderRadius: 20,
    backgroundColor: Color.MED_GRAY,
  },
});

export default props => {
  const {style, placeholder, value, onChange} = props;

  return (
    <TextInput
      multiline
      textAlignVertical="top"
      style={{...styles.input, ...style}}
      placeholder={placeholder}
      placeholderTextColor={Color.DARK_GRAY}
      autoCorrect={false}
      onChangeText={onChange}
      value={value} />
  );
};
