import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../../../configs/style';

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
