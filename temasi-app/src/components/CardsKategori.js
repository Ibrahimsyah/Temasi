import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
import {
  OKSIGEN,
  PANGAN_SUPLEMEN,
  PLASMA,
  TYPE_OKSIGEN,
  TYPE_PANGAN_SUPLEMEN,
  TYPE_PLASMA,
} from '../config/ItemTypes';
import { Color, FontStyle } from '../config/style';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  card: active => ({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 80,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 3,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: !active ? Color.PRIMARY : Color.WHITE,
    backgroundColor: active ? Color.PRIMARY : Color.WHITE,
  }),

  icon: active => ({
    fontSize: 30,
    color: active ? Color.WHITE : Color.PRIMARY,
  }),

  text: active => ({
    ...FontStyle.LABEL_SMALL,
    color: active ? Color.WHITE : Color.PRIMARY,
    textAlign: 'center',
  }),
});

const Card = props => {
  const { kategori, selected, onClick } = props;

  const renderIcon = active => {
    switch (kategori) {
      case TYPE_OKSIGEN: {
        return (
          <MaterialCommunityIcon
            name="diving-scuba-tank"
            style={styles.icon(active)}
          />
        );
      }
      case TYPE_PANGAN_SUPLEMEN: {
        return (
          <MaterialIcon name="local-hospital" style={styles.icon(active)} />
        );
      }
      default: {
        return <FontAwesome5Icon name="tint" style={styles.icon(active)} />;
      }
    }
  };

  const renderText = () => {
    switch (kategori) {
      case TYPE_OKSIGEN: {
        return OKSIGEN;
      }
      case TYPE_PANGAN_SUPLEMEN: {
        return PANGAN_SUPLEMEN;
      }
      default: {
        return PLASMA;
      }
    }
  };
  return (
    <>
      <Pressable style={styles.card(selected)} onPress={onClick}>
        {renderIcon(selected)}
        <Text style={styles.text(selected)}>{renderText()}</Text>
      </Pressable>
    </>
  );
};

export default props => {
  const { onChange, value, style } = props;

  return (
    <View style={{ ...styles.container, ...style }}>
      <Card
        onClick={() => onChange(TYPE_PANGAN_SUPLEMEN)}
        kategori={TYPE_PANGAN_SUPLEMEN}
        selected={value === TYPE_PANGAN_SUPLEMEN}
      />
      <Card
        onClick={() => onChange(TYPE_OKSIGEN)}
        kategori={TYPE_OKSIGEN}
        selected={value === TYPE_OKSIGEN}
      />
      <Card
        onClick={() => onChange(TYPE_PLASMA)}
        kategori={TYPE_PLASMA}
        selected={value === TYPE_PLASMA}
      />
    </View>
  );
};
