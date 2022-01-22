import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { IconSearch } from '../../../assets'

const Input = () => {
    return (
        <View style={styles.container}>
            <IconSearch width={25} height={30} />
            <View style={styles.wrapper}>
                <TextInput placeholder="Search..." style={styles.text} />
                <View style={{ borderBottomWidth: 1, marginTop: -5, borderColor: '#CDCDCD' }} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    wrapper: {
        marginLeft: 10,
        width: '100%'
    },
    text: {
        fontSize: 17
    }
})
