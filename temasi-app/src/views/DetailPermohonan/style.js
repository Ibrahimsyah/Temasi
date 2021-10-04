import { StyleSheet } from 'react-native';
import { TYPE_PLASMA } from '../../configs/ItemTypes';
import { Color, FontStyle } from '../../configs/style';

export default StyleSheet.create({
  container: type => ({
    flex: 1,
    backgroundColor: type === TYPE_PLASMA ? Color.MED_RED : Color.PRIMARY,
  }),

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

  header: {
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBackground: {
    padding: 10,
    width: 72,
    height: 72,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 30,
  },

  rightSection: {
    flex: 1,
    marginLeft: 14,
  },

  category: {
    ...FontStyle.LABEL_CATEGORY,
  },

  title: {
    ...FontStyle.H3,
    fontSize: 16,
    marginTop: 2,
  },

  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIcon: {
    fontSize: 10,
  },

  location: {
    ...FontStyle.LABEL_SMALL,
    marginLeft: 4,
  },

  time: {
    ...FontStyle.LABEL_SMALL,
    color: Color.DARKER_GRAY,
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
