import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../../config/style';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Color.LIGHT_GRAY,
  },
  contentContainer: {
    flexGrow: 1,
  },
  title: {
    marginTop: 20,
    ...FontStyle.H2,
    marginBottom: 27,
  },
});
