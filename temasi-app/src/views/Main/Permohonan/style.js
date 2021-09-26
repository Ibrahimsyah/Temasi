import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../../configs/style';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: Color.LIGHT_GRAY,
    },
    contentContainer: { flexGrow: 1 },
    title: {
        marginTop: 20,
        ...FontStyle.H2,
        marginBottom: 27,
    },
    notFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundImage: {
        width: '100%',
        height: 250,
        marginHorizontal: 20,
        resizeMode: 'contain',
    },
    notFoundText: {
        ...FontStyle.CAPTION,
        color: Color.DARKER_GRAY,
        textAlign: 'center',
        marginTop: 24,
    },
});
