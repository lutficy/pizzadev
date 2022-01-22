import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { DummyGarlic, DummyHam } from '../../../assets'

const IngredientsCard = ({ image }) => {
    return (
        <View style={styles.wrapper}>
            <Image source={image} style={styles.image} />
        </View>
    )
}

export default IngredientsCard
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        height: HEIGHT * 0.15,
        width: WIDTH * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        height: HEIGHT * 0.1,
        width: WIDTH * 0.25,
    },

})
