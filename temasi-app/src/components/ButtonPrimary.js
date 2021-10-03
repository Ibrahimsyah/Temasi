import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Color, FontStyle} from '../configs/style';

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        width: '100%',
        backgroundColor: Color.PRIMARY,
        paddingVertical: 8,
    },
    buttonDisabled: {
        borderRadius: 20,
        width: '100%',
        backgroundColor: Color.DARK_GRAY,

        paddingVertical: 8,
    },
    text: {
        ...FontStyle.H3,
        textAlign:'center',
        color: Color.WHITE,
        fontWeight: 'bold',
    },
});

export default (props) => {
    const {children, onClick, style, disabled = false} = props;

    const buttonStyle = disabled ? styles.buttonDisabled : styles.button;
    return <>
        <TouchableOpacity onPress={onClick} style={{...buttonStyle, ...style}} disabled={disabled}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    </>;
};
