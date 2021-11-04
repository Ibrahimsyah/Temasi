import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../../../config/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.LIGHT_GRAY,
  },
  title: {
    ...FontStyle.H2,
  },
});
