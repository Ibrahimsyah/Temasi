import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Color, FontStyle} from '../configs/style';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  backIcon: (isDark) => ({
    fontSize: 20,
    color: !isDark ? Color.WHITE : Color.BLACK,
  }),

  title: (isDark) => ({
    ...FontStyle.H2,
    color: !isDark ? Color.WHITE : Color.BLACK,

    marginLeft: 16,
  }),
});

export default props => {
  const {navigator, title, isDark = true} = props;

  const onBack = () => {
    navigator?.goBack();
  };

  return (
    <View style={styles.container}>
      <Icon name="arrow-left" style={styles.backIcon(isDark)} onPress={onBack}/>
      <Text style={styles.title(isDark)}>{title}</Text>
    </View>
  );
};
