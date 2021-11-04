import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, FontStyle } from '../config/style';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    borderColor: Color.PRIMARY,
    width: 130,
  },

  value: {
    ...FontStyle.H1,
    color: Color.PRIMARY,
  },

  label: {
    ...FontStyle.H4,
    color: Color.PRIMARY,
  },
});

export default props => {
  const { style, value, label } = props;

  return (
    <>
      <View style={{ ...style, ...styles.container }}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </>
  );
};
