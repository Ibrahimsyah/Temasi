import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../configs/style';
import style from '../views/Main/Home/HomeFragment/style';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: Color.MED_GREEN,
  },
  icon: {
    color: Color.WHITE,
  },
  text: {
    marginLeft: 10,
    color: Color.WHITE,
  },
});
export const Notification = ({ children, onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Icon name="information-outline" style={styles.icon} size={16} />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
