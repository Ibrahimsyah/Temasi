import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Color, FontStyle } from '../configs/style';

const styles = StyleSheet.create({
  checkboxContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },

  label: {
    paddingRight: 40,
    width: '100%',
    ...FontStyle.CAPTION,
    color: Color.BLACK,
  },
});

export default props => {
  const { children, value, onChange, style } = props;

  return (
    <>
      <View style={{ ...styles.checkboxContainer, ...style }}>
        <CheckBox value={value} onValueChange={onChange} />
        <Text style={styles.label}>{children}</Text>
      </View>
    </>
  );
};
