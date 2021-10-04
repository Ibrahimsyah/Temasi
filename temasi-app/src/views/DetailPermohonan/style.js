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

  input: {
    marginTop: 10,
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

  buttonSubmit: {
    marginVertical: 20,
  },

  checkboxContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
  },

  agreementText: {
    paddingRight: 40,
    width: '100%',
    ...FontStyle.CAPTION,
    color: Color.BLACK,
  },

  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  modalContent: {
    width: '70%',
    borderRadius: 8,
    padding: 20,
    backgroundColor: Color.WHITE,
  },

  modalTitle: {
    ...FontStyle.H3,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalButton: {
    width: '100%',
    marginTop: 8,
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

  imagePlaceholderContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 3,
    borderColor: Color.DARK_GRAY,
    marginVertical: 13,
    marginHorizontal: 18,
    backgroundColor: Color.MED_GRAY,
  },

  placeholderIcon: {
    color: Color.PRIMARY,
    fontSize: 30,
  },

  placeholderText: {
    ...FontStyle.H4,
    fontWeight: 'bold',
    color: Color.PRIMARY,
  },

  jangkaWaktu: {
    marginTop: 10,
  },
});
