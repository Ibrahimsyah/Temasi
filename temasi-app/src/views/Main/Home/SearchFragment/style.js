import { StyleSheet } from 'react-native';

import { Color, FontStyle } from '../../../../config/style';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.LIGHT_GRAY,
    flex: 1,
    padding: 20,
  },

  title: {
    ...FontStyle.H2,
    marginTop: 20,
  },

  searchBar: {
    paddingHorizontal: 16,
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.0,
    elevation: 4,
  },

  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {
    height: 16,
    width: 16,
    fontWeight: 'bold',
    color: Color.DARK_GRAY,
  },

  scrollViewContainer: {
    marginTop: 20,
    flexGrow: 1,
  },
});
