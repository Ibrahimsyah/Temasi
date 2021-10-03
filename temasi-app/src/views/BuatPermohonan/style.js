import {StyleSheet} from 'react-native';
import {Color, FontStyle} from '../../configs/style';

export default StyleSheet.create({
  titleBig: {
    ...FontStyle.H3,
    fontWeight: 'bold',
    color: Color.PRIMARY,
    marginTop: 20,
  },

  titleMed: {
    ...FontStyle.H4,
    fontWeight: 'bold',
    color: Color.PRIMARY,
    marginTop: 16,
  },

  kategori: {
    marginVertical: 14,
  },

  input: {
    marginTop: 10,
  },

  description: {
    ...FontStyle.CAPTION,
    color: Color.DARKER_GRAY,
    marginTop: 6,
  },

  container: {
    flex: 1,
    backgroundColor: Color.LIGHT_GRAY,
    paddingHorizontal: 20,
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
    height: '100%',
    backgroundColor: Color.MED_RED,
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
