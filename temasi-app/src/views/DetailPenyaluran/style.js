import { StyleSheet } from 'react-native';

import { Color, FontStyle } from '../../configs/style';
export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    padding: 20,
  },
  titleMed: {
    ...FontStyle.H4,
    fontWeight: 'bold',
    color: Color.BLACK,
  },
  donaturProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  donaturPic: {
    width: 100,
    height: 100,
    marginVertical: 20,
    backgroundColor: Color.BLACK,
    borderRadius: 100,
  },
  donaturName: {
    ...FontStyle.H2,
  },
  tutorialContainer: {
    backgroundColor: Color.LIGHT_GREEN,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  btnAction: {
    marginTop: 20,
  },
});
