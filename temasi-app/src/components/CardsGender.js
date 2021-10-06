import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Color, FontStyle } from '../configs/style';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cardContainer: active => ({
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'center',
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: !active ? Color.PRIMARY : Color.WHITE,
    backgroundColor: active ? Color.PRIMARY : Color.WHITE,
  }),

  cardLabel: active => ({
    ...FontStyle.LABEL_SMALL,
    color: active ? Color.WHITE : Color.PRIMARY,
    textAlign: 'center',
    marginTop: 5,
  }),

  icon: active => ({
    color: active ? Color.WHITE : Color.PRIMARY,
    fontSize: 16,
  }),
});

const Card = props => {
  const { selected, value, onChange } = props;

  const iconName = value === 1 ? 'male' : 'female';
  const label = value === 1 ? 'Pria' : 'Wanita';
  return (
    <Pressable onPress={onChange} style={styles.cardContainer(selected)}>
      <Icon style={styles.icon(selected)} name={iconName} />
      <Text style={styles.cardLabel(selected)}>{label}</Text>
    </Pressable>
  );
};

export default props => {
  const { value, onChange, style } = props;

  return (
    <>
      <View style={{ ...styles.container, ...style }}>
        <Card selected={value === 1} value={1} onChange={() => onChange(1)} />
        <Card selected={value === 0} value={0} onChange={() => onChange(0)} />
      </View>
    </>
  );
};
