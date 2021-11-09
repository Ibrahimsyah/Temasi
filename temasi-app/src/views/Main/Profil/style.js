import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../../config/style';

export default StyleSheet.create({
  noAccountContainer: {
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

  buttonFirst: {
    marginTop: 40,
  },

  buttonSecond: {
    marginTop: 10,
  },

  mainContainer: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: Color.LIGHT_GRAY,
  },

  mainTitle: {
    ...FontStyle.H2,
    alignSelf: 'flex-start',
    marginTop: 27,
  },

  profileInfo: {
    alignItems: 'center',
    marginTop: 36,
  },

  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  profilePhoto: {
    width: 100,
    height: 100,
  },

  profileName: {
    ...FontStyle.H4,
    fontWeight: 'bold',
    marginTop: 16,
  },

  profileNumber: {
    ...FontStyle.H4,
    color: Color.DARKER_GRAY,
  },

  statisticGrid: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 32,
  },

  profileLabel: {
    ...FontStyle.LABEL_SMALL,
    marginTop: 24,
    fontWeight: 'bold',
    color: Color.DARKER_GRAY,
  },

  profileValue: {
    ...FontStyle.H4,
    color: Color.BLACK,
  },
});
