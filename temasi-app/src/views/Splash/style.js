import { StyleSheet } from 'react-native';
import { Color } from '../../config/style';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appLogo: {
    width: 110,
    height: 110,
  },

  title: {
    textAlign: 'center',
    color: Color.PRIMARY,
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});
