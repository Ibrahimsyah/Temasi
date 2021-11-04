import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../config/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.LIGHT_GRAY,
    paddingHorizontal: 37,
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  profilePicHolder: {
    marginBottom: 27,
  },

  profilePic: {
    width: 100,
    height: 100,
  },

  title: {
    marginTop: 50,
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

  genderChooser: {
    paddingHorizontal: 20,
    marginBottom: 14,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
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
