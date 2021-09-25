import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { Color } from '../configs/style'

const style = StyleSheet.create({
    button: {
        borderRadius: 20,
        width: '100%',
        backgroundColor: Color.PRIMARY,
        paddingVertical: 11
    },
    text: {
        textAlign: "center",
        color: Color.WHITE,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 20,
    }
})

export default (props) => {
    const { children, onClick } = props

    return <>
        <TouchableOpacity onPress={onClick} style={style.button}>
            <Text style={style.text}>{children}</Text>
        </TouchableOpacity>
    </>
}