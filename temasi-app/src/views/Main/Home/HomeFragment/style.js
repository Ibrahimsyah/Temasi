import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../../../config/style';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.LIGHT_GRAY,
    flex: 1,
    paddingHorizontal: 25,
  },
  greeting: {
    ...FontStyle.H4,
    marginTop: 32,
  },
  userName: {
    ...FontStyle.H3,
    fontWeight: 'bold',
    color: Color.PRIMARY,
  },
  searchBar: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.0,
    elevation: 4,
  },
  searchIcon: {
    height: 16,
    width: 16,
    fontWeight: 'bold',
    color: Color.DARK_GRAY,
  },
  searchHint: {
    marginLeft: 16,
    ...FontStyle.BODY,
    color: Color.DARK_GRAY,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainPanel: {
    borderRadius: 8,
    backgroundColor: Color.PRIMARY,
    paddingHorizontal: 23,
    marginTop: 10,
    paddingVertical: 18,
  },
  panelTitle: {
    ...FontStyle.H3,
    fontSize: 16,
    color: Color.WHITE,
    fontWeight: 'bold',
  },
  panelGrid: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  panelItem: {
    width: 58,
    alignItems: 'center',
    flex: 1,
  },
  iconBackground: {
    borderRadius: 100,
    width: 58,
    padding: 14,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  panelItemTitle: {
    ...FontStyle.LABEL_SMALL,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Color.WHITE,
    marginTop: 5,
  },
  sectionTitle: {
    ...FontStyle.SECTION_TITLE,
  },
  sectionHeader: {
    marginTop: 22,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  showMore: {
    ...FontStyle.BODY,
    fontWeight: 'bold',
    color: Color.PRIMARY,
  },
  list: {
    marginTop: 11,
  },
});
