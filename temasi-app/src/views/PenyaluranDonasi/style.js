import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../configs/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY,
  },

  mainContainer: {
    flex: 1,
    marginTop: 15,
    backgroundColor: Color.WHITE,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },

  checkLogo: {
    marginTop: 20,
    alignSelf: 'center',
  },

  checkDescription: {
    textAlign: 'center',
    ...FontStyle.BODY,
    marginTop: 16,
    marginHorizontal: 20,
  },

  permohonanDescription: {
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  contentContainer: {
    flexGrow: 1,
  },

  titleBig: {
    ...FontStyle.H3,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginTop: 20,
    marginBottom: 10,
  },

  titleMed: {
    ...FontStyle.H4,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginTop: 16,
  },

  body: {
    ...FontStyle.body,
    color: Color.DARKER_GRAY,
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

  description: {
    ...FontStyle.CAPTION,
    color: Color.DARKER_GRAY,
    marginTop: 6,
  },

  buttonAction: {
    marginVertical: 5,
  },

  tutorialContainer: {
    backgroundColor: Color.LIGHT_GREEN,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
