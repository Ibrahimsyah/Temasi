import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {Color, FontStyle} from '../configs/style';

const styles = StyleSheet.create({
  cardContainer: active => ({
    justifyContent: 'center',
    height: 56,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: !active ? Color.PRIMARY : Color.WHITE,
    backgroundColor: active ? Color.PRIMARY : Color.WHITE,
  }),

  cardLabel: (active) => ({
    ...FontStyle.LABEL_SMALL,
    color: active ? Color.WHITE : Color.PRIMARY,
    textAlign: 'center',
  }),

  cardText: (active) => ({
    ...FontStyle.H2,
    fontWeight: 'bold',
    color: active ? Color.WHITE : Color.PRIMARY,
    textAlign: 'center',
  }),

  container: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

const Card = props => {
  const {selected, value, label, onChange} = props;

  return (
    <Pressable onPress={onChange} style={styles.cardContainer(selected)}>
      <Text style={styles.cardText(selected)}>{value}</Text>
      <Text style={styles.cardLabel(selected)}>{label}</Text>
    </Pressable>
  );
};

export default props => {
  const {style, value, onChange} = props;

  return (
    <View style={{...styles.container, ...style}}>
      <Card value="+" label="Positif" selected={value === '+'} onChange={() => onChange('+')} />
      <Card value="-" label="Negatif" selected={value === '-'} onChange={() => onChange('-')} />
    </View>
  );
};
