import {StyleSheet} from 'react-native';
import {Color, FontStyle} from '../../../configs/style';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.LIGHT_GRAY,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  noAccountDescription: {
    ...FontStyle.CAPTION,
    color: Color.DARKER_GRAY,
    textAlign: 'center',
  },

  buttonContainer: {
    width: '100%',
  },

  buttonLogin: {
    marginTop: 50,
  },

  buttonRegister: {
    marginTop: 10,
  },

});
