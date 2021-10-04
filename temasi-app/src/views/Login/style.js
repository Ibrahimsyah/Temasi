import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../configs/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.LIGHT_GRAY,
    paddingHorizontal: 37,
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 23,
  },

  title1: {
    ...FontStyle.H2,
    color: Color.PRIMARY,
  },

  title2: {
    ...FontStyle.H2,
    color: Color.BLACK,
  },

  input: {
    marginBottom: 14,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  footer1: {
    ...FontStyle.H4,
    color: Color.BLACK,
  },

  footer2: {
    ...FontStyle.H4,
    color: Color.PRIMARY,
    fontWeight: 'bold',
  },
});
