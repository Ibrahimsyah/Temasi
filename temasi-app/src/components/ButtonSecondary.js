import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Color, FontStyle } from '../config/style';

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    paddingVertical: 8,
  },
  text: {
    ...FontStyle.H3,
    textAlign: 'center',
    color: Color.PRIMARY,
    fontWeight: 'bold',
  },
});

export default props => {
  const { children, onClick, style } = props;

  return (
    <>
      <TouchableOpacity
        onPress={onClick}
        style={{ ...styles.button, ...style }}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </>
  );
};
