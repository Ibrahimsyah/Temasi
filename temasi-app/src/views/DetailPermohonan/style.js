import { StyleSheet } from 'react-native';
import { TYPE_OKSIGEN, TYPE_PLASMA } from '../../config/ItemTypes';
import { Color, FontStyle } from '../../config/style';

export default StyleSheet.create({
  container: type => {
    const color =
      type === TYPE_PLASMA
        ? Color.MED_RED
        : type === TYPE_OKSIGEN
        ? Color.PRIMARY
        : Color.MED_BLUE;
    return {
      flex: 1,
      backgroundColor: color,
    };
  },

  mainContainer: {
    flex: 1,
    marginTop: 15,
    backgroundColor: Color.WHITE,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 25,
  },

  contentContainer: {
    flexGrow: 1,
  },

  titleBig: {
    ...FontStyle.H3,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginTop: 20,
  },

  titleMed: {
    ...FontStyle.H4,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginTop: 16,
  },

  story: {
    ...FontStyle.CAPTION,
    color: Color.BLACK,
  },

  profile: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilePhoto: {
    width: 34,
    height: 34,
    borderRadius: 34,
  },

  profileDesc: {
    marginLeft: 10,
  },

  profileLabel: {
    ...FontStyle.LABEL_SMALL,
  },

  profileName: {
    ...FontStyle.BODY,
    fontWeight: 'bold',
  },

  description: {
    ...FontStyle.CAPTION,
    color: Color.DARKER_GRAY,
    marginTop: 6,
  },

  mapContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 8,
    height: 200,
    overflow: 'hidden',
    borderRadius: 8,
  },

  map: {
    height: '100%',
  },

  agreement: {
    marginTop: 30,
  },

  buttonSubmit: {
    marginVertical: 20,
  },

  holder: {
    marginTop: 18,
    borderRadius: 16,
    height: 150,
    backgroundColor: Color.MED_GRAY,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 174,
    borderRadius: 16,
    marginTop: 12,
    backgroundColor: Color.MED_RED,
  },

  imageCaption: {
    ...FontStyle.LABEL_SMALL,
    color: Color.DARKER_GRAY,
    textAlign: 'center',
    marginTop: 5,
  },
});
