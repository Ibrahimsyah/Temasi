import React, { useMemo } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import { Color, FontStyle } from '../configs/style';
import { STATUS_DELIVERED, STATUS_MATCHED, STATUS_MESSAGE } from '../configs';
import { generateCategoryStyle } from '../utils/style';

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
  statusContainer: status => {
    let color;
    if (status === STATUS_DELIVERED || status === STATUS_MATCHED) {
      color = Color.LIGHT_GREEN;
    } else {
      color = Color.MED_RED;
    }
    return {
      padding: 5,
      backgroundColor: color,
      marginBottom: 5,
      borderRadius: 5,
    };
  },
  status: status => {
    let color;
    if (status === STATUS_DELIVERED || status === STATUS_MATCHED) {
      color = Color.BLACK;
    } else {
      color = Color.WHITE;
    }
    return {
      color: color,
      fontWeight: 'bold',
      fontSize: 12,
      textAlign: 'center',
    };
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
  const { onClick, type, title, distance, time, status } = props;

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
      status,
    };

    if (onClick) {
      return onClick(data);
    }

    if (account.id) {
      navigation.navigate('DetailPermohonan', data);
    } else {
      navigation.navigate('Profil');
    }
  };
  return (
    <>
      <Pressable style={style.container} onPress={onClickHandler}>
        <View>
          <View
            style={{ ...style.iconBackground, backgroundColor: iconBgColor }}>
            {icon}
          </View>
        </View>
        <View style={style.rightSection}>
          {status && (
            <View style={style.statusContainer(status)}>
              <Text style={style.status(status)}>{STATUS_MESSAGE[status]}</Text>
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
