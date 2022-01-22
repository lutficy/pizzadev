import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBack } from '../../../assets'

const Back = ({ onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}>
            <View style={styles.wrapperback}>
                <IconBack />
            </View>
        </TouchableOpacity>
    )
}

export default Back
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapperback: {
        width: WIDTH * 0.1,
        height: HEIGHT * 0.06,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})
