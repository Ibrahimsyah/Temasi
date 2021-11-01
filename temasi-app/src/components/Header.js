import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';

import { Color, FontStyle } from '../configs/style';

const styles = StyleSheet.create({
  container: withPadding => ({
    marginHorizontal: withPadding ? 20 : 0,
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }),

  backIcon: isDark => ({
    fontSize: 20,
    color: !isDark ? Color.WHITE : Color.BLACK,
  }),

  title: isDark => ({
    ...FontStyle.H2,
    color: !isDark ? Color.WHITE : Color.BLACK,

    marginLeft: 16,
  }),
});

export default props => {
  const { title, isDark = false, withPadding = true } = props;

  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container(withPadding)}>
      <Icon
        name="arrow-left"
        style={styles.backIcon(isDark)}
        onPress={onBack}
      />
      <Text style={styles.title(isDark)}>{title}</Text>
    </View>
  );
};
