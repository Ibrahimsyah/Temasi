import React, { useMemo } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import {
  OKSIGEN,
  PANGAN_SUPLEMEN,
  PLASMA,
  TYPE_OKSIGEN,
  TYPE_PANGAN_SUPLEMEN,
} from '../configs/ItemTypes';
import { Color, FontStyle } from '../configs/style';

const generateCategoryStyle = itemType => {
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
          style={{ ...style.icon, color: Color.MED_BLUE }}
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
          style={{ ...style.icon, color: Color.PRIMARY }}
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
          style={{ ...style.icon, color: Color.MED_RED }}
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

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  rightSection: {
    flex: 3,
    marginLeft: 14,
  },
  leftSection: {
    flex: 1,
  },
  statusContainer: pending => ({
    padding: 5,
    backgroundColor: pending ? Color.MED_RED : Color.LIGHT_GREEN,
    marginBottom: 5,
    borderRadius: 5,
  }),
  status: pending => ({
    color: pending ? Color.WHITE : Color.BLACK,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  }),
  category: {
    ...FontStyle.LABEL_CATEGORY,
  },
  title: {
    ...FontStyle.ITEM_TITLE,
    marginTop: 2,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: 10,
  },
  location: {
    ...FontStyle.LABEL_SMALL,
    marginLeft: 4,
  },
  time: {
    ...FontStyle.LABEL_SMALL,
    color: Color.DARKER_GRAY,
  },
});

export default props => {
  const { onClick, type, title, distance, time, isPending, status } = props;

  const { iconBgColor, icon, color, category } = useMemo(
    () => generateCategoryStyle(type),
    [type],
  );

  const navigation = useNavigation();
  const account = useSelector(state => state.account);

  const onClickHandler = () => {
    const data = {
      type,
      title,
      distance,
      time,
    };

    if (account.id) {
      navigation.navigate('DetailPermohonan', data);
    } else {
      navigation.navigate('Profil');
    }
  };
  return (
    <>
      <Pressable style={style.container} onPress={onClick || onClickHandler}>
        <View>
          <View
            style={{ ...style.iconBackground, backgroundColor: iconBgColor }}>
            {icon}
          </View>
        </View>
        <View style={style.rightSection}>
          {status && (
            <View style={style.statusContainer(isPending)}>
              <Text style={style.status(isPending)}>{status}</Text>
            </View>
          )}
          <Text style={{ ...style.category, color: color }}>{category}</Text>
          <Text style={style.title}>{title}</Text>
          <View style={style.itemFooter}>
            {distance && (
              <View style={style.footerLeft}>
                <MaterialIcon name="location-on" style={style.locationIcon} />
                <Text style={style.location}>{distance}</Text>
              </View>
            )}
            {time && <Text style={style.time}>{time}</Text>}
          </View>
        </View>
      </Pressable>
    </>
  );
};
