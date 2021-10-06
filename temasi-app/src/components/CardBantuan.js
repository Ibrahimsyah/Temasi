import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
} from '../configs/ItemTypes';
import { Color, FontStyle } from '../configs/style';

const style = StyleSheet.create({
  cardContainer: {
    width: 150,
    marginRight: 9,
    borderRadius: 8,
    backgroundColor: Color.WHITE,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 3,
  },
  iconContainer: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 12,
  },
  category: {
    ...FontStyle.LABEL_CATEGORY,
    marginTop: 9,
  },
  itemTitle: {
    ...FontStyle.ITEM_TITLE,
    marginTop: 2,
  },
  cardFooter: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: 12,
  },
  location: {
    ...FontStyle.LABEL_SMALL,
    marginLeft: 3,
  },
  time: {
    ...FontStyle.LABEL_SMALL,
    color: Color.DARKER_GRAY,
  },
});

const renderCategoryAndIcon = itemType => {
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
  return (
    <>
      <>
        <View style={{ ...style.iconContainer, backgroundColor: iconBgColor }}>
          {icon}
        </View>
        <Text style={{ ...style.category, color: color }}>{category}</Text>
      </>
    </>
  );
};

export default props => {
  const { onClick, type, title, distance, time } = props;

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
      <TouchableOpacity style={style.cardContainer} onPress={onClickHandler}>
        {renderCategoryAndIcon(type)}
        <Text style={style.itemTitle}>{title}</Text>
        <View style={style.cardFooter}>
          <View style={style.footerLeft}>
            <MaterialIcon name="location-on" style={style.locationIcon} />
            <Text style={style.location}>{distance}</Text>
          </View>
          <Text style={style.time}>{time}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
