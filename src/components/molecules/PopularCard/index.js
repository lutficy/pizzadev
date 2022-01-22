import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Gap } from '../..'
import { IconCrown, IconPlus } from '../../../assets'

const PopularCard = ({title, pic, onPress}) => {
    return (
        <View style={styles.wrapper}>
            <View style={{ paddingLeft: 22, paddingTop: 24 }}>
                <View style={styles.containertitle}>
                    <IconCrown />
                    <Gap width={8} />
                    <Text style={styles.title}>Top of the week</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                <Gap height={5} />
                <Text style={styles.subtitle}>Weight 540 gr</Text>
            </View>
            <Image source={pic} style={styles.image} />
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.wrapperplus}><IconPlus /></TouchableOpacity>
        </View>
    )
}

export default PopularCard
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: HEIGHT * 0.28,
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 7,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden'  
    },
    containertitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20
    },
    title: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        backgroundColor: 'red'
    },
    wrapperplus: {
        backgroundColor: '#F5CA48',
        width: 90,
        height: 53,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 25,
        position: 'absolute',
        bottom: 0
    },
    image: {
        width: '73%',
        height: '70%',
        position: 'absolute',
        right: 0,
        // marginRight: -50,
        marginTop: 40,
        marginRight: -60
    },
    title: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color: '#313234'
    },
    subtitle: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    }
})
