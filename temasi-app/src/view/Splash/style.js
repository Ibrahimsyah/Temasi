import {StyleSheet} from 'react-native';
import {Color} from '../../config/style';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Color.RED_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appLogo: {
    width: 110,
    height: 110,
  },

  title: {
    textAlign: 'center',
    color: Color.TEXT_WHITE,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
