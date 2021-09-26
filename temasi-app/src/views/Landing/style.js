import { StyleSheet } from 'react-native';
import { Color, FontStyle } from '../../configs/style';

export default StyleSheet.create({
    landingView: {
        backgroundColor: Color.WHITE,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },

    landingItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    landingImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    landingTitle: {
        ...FontStyle.H2,
    },
    landingDesc: {
        ...FontStyle.CAPTION,
        textAlign: 'center',
        marginTop: 13,
    },
});
