import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../..'
import { IconContinue, ILLogoCola, ILLogoPizza, ILLogoShrimp } from '../../../assets'

const CategoriesCard = ({ title }) => {

    const Icon = () => {
        if (title === 'Pizza') {
            return <ILLogoPizza />
        }
        if (title === 'Shrimp') {
            return <ILLogoShrimp />
        }
        if (title === 'Soft Drink') {
            return <ILLogoCola />
        }
        return <ILLogoPizza />
    }

    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.wrapper}>
                <Icon />
                <Gap height={10} />
                <View>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                </View>
                <Gap height={20} />
                <View style={styles.wrappercontinue}>
                    <IconContinue />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategoriesCard
const WIDHT = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        width: WIDHT * 0.4,
        height: HEIGHT * 0.3,
        backgroundColor: '#F5CA48',
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 23,
        paddingTop: 24,
        paddingBottom: 20,
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 19,
        },
        shadowOpacity: 10000,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color: '#313234',
    },
    wrappercontinue: {
        width: WIDHT * 0.07,
        height: HEIGHT * 0.04,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
