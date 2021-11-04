import React from 'react';
import { StyleSheet } from 'react-native';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';

import {
  OKSIGEN,
  PANGAN_SUPLEMEN,
  PLASMA,
  TYPE_OKSIGEN,
  TYPE_PANGAN_SUPLEMEN,
} from '../config/ItemTypes';
import { Color } from '../config/style';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

export const generateCategoryStyle = itemType => {
  let iconBgColor;
  let color;
  let icon;
  let category;
  switch (itemType) {
    case TYPE_PANGAN_SUPLEMEN: {
      iconBgColor = Color.LIGHT_BLUE;
      color = Color.MED_BLUE;
      icon = (
        <MaterialIcon
          name="local-hospital"
          style={{ ...styles.icon, color: Color.MED_BLUE }}
        />
      );
      category = PANGAN_SUPLEMEN;
      break;
    }
    case TYPE_OKSIGEN: {
      iconBgColor = Color.LIGHT_GREEN;
      color = Color.PRIMARY;
      icon = (
        <MaterialCommunityIcon
          name="diving-scuba-tank"
          style={{ ...styles.icon, color: Color.PRIMARY }}
        />
      );
      category = OKSIGEN;
      break;
    }
    default: {
      iconBgColor = Color.LIGHT_RED;
      color = Color.MED_RED;
      icon = (
        <FontAwesome5Icon
          name="tint"
          style={{ ...styles.icon, color: Color.MED_RED }}
        />
      );
      category = PLASMA;
      break;
    }
  }
  return {
    iconBgColor,
    icon,
    color,
    category,
  };
};
