import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Color, FontStyle } from '../configs/style';

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

  cardText: active => ({
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
  const { selected, value, onChange } = props;

  return (
    <Pressable onPress={onChange} style={styles.cardContainer(selected)}>
      <Text style={styles.cardText(selected)}>{value}</Text>
    </Pressable>
  );
};

export default props => {
  const { style, value, onChange } = props;

  return (
    <View style={{ ...styles.container, ...style }}>
      <Card value="A" selected={value === 'A'} onChange={() => onChange('A')} />
      <Card value="B" selected={value === 'B'} onChange={() => onChange('B')} />
      <Card
        value="AB"
        selected={value === 'AB'}
        onChange={() => onChange('AB')}
      />
      <Card value="O" selected={value === 'O'} onChange={() => onChange('O')} />
    </View>
  );
};
