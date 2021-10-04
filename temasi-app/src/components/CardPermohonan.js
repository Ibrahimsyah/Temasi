import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
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
    flex: 1,
    marginLeft: 14,
  },
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
  const { onClick, type, title, distance, time } = props;

  const { iconBgColor, icon, color, category } = generateCategoryStyle(type);

  const onClickHandler = () => {
    const data = {
      type,
      title,
      distance,
      time,
    };

    onClick(data);
  };
  return (
    <>
      <TouchableOpacity style={style.container} onPress={onClickHandler}>
        <View>
          <View
            style={{ ...style.iconBackground, backgroundColor: iconBgColor }}>
            {icon}
          </View>
        </View>
        <View style={style.rightSection}>
          <Text style={{ ...style.category, color: color }}>{category}</Text>
          <Text style={style.title}>{title}</Text>
          <View style={style.itemFooter}>
            <View style={style.footerLeft}>
              <MaterialIcon name="location-on" style={style.locationIcon} />
              <Text style={style.location}>{distance}</Text>
            </View>
            <Text style={style.time}>{time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
