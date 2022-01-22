import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconContinue } from '../../../assets'

const Button = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.wrapperbutton}>
            <Text style={styles.title}>Place an order</Text>
            <IconContinue />
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    wrapperbutton: {
      padding: 23,
        backgroundColor: '#F5CA48',
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        paddingRight: 8
    }
})
