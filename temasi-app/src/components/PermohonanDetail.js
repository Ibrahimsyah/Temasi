import React from 'react';
import { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons';

import { Color, FontStyle } from '../configs/style';
import { generateCategoryStyle } from '../utils/style';

const style = StyleSheet.create({
  header: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    padding: 10,
    width: 72,
    height: 72,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
    ...FontStyle.H3,
    fontSize: 16,
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

export default ({ type, title, distance, time }) => {
  const { iconBgColor, icon, category, color } = useMemo(
    () => generateCategoryStyle(type),
    [type],
  );
  return (
    <View style={style.header}>
      <View
        style={{
          ...style.iconBackground,
          backgroundColor: iconBgColor,
        }}>
        {icon}
      </View>
      <View style={style.rightSection}>
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
    </View>
  );
};
