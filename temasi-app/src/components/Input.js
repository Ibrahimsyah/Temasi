import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Color } from '../config/style';

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
  const { style, placeholder, value, onChange, ...rest } = props;

  return (
    <TextInput
      {...rest}
      textAlignVertical="top"
      style={{ ...styles.input, ...style }}
      placeholder={placeholder}
      placeholderTextColor={Color.DARK_GRAY}
      autoCorrect={false}
      onChangeText={onChange}
      value={value}
    />
  );
};
