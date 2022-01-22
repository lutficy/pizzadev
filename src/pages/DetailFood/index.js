import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { DummyCheese, DummyGarlic, DummyHam, DummyTomato, IconBack, IconStarActive, IconStarInactive, IconStarInActiveNew, ILPizza1 } from '../../assets'
import { Back, Button, Gap, IngredientsCard } from '../../components'

const DetailFood = ({ navigation, onPress }) => {

    const [Favorite, setFavorite] = useState(false);

    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.headercontainer}>
                    <Back onPress={() => navigation.goBack()} />
                    <TouchableOpacity 
                    onPress={onPress} 
                    activeOpacity={0.8}
                    onPress={() => setFavorite(!Favorite)}
                    >
                        <View style={styles.wrapperstar(Favorite)}>
                          {Favorite ? <IconStarInactive /> : <IconStarInActiveNew width={15} height={15} /> } 
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ paddingTop: 30 }}>
                    <Text style={styles.title}>Primavera Pizza</Text>
                    <Text style={styles.subtitle}>$5.99</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 30 }}>
                    <View>
                        <Text style={styles.details}>Size</Text>
                        <Text style={styles.value}>Medium 14”</Text>
                        <Gap height={20} />
                        <Text style={styles.details}>Crust</Text>
                        <Text style={styles.value}>Thin Crust</Text>
                        <Gap height={20} />
                        <Text style={styles.details}>Delivery in</Text>
                        <Text style={styles.value}>30 min</Text>
                    </View>
                    <ImageBackground source={ILPizza1} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.ingredients}>Ingredients</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.wrapperingredients}>
                            <IngredientsCard image={DummyHam} />
                            <Gap width={15} />
                            <IngredientsCard image={DummyCheese} />
                            <Gap width={15} />
                            <IngredientsCard image={DummyGarlic} />
                            <Gap width={15} />
                            <IngredientsCard image={DummyTomato} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.button}>
                    <Button />
                </View>
            </View>
        </ScrollView >
    )
}

export default DetailFood
const WIDTH = Dimensions.get('window').width;
const HEIGT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 30,
        
    },
    headercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapperstar: Favorite => ({
        width: WIDTH * 0.1,
        height: HEIGT * 0.06,
        backgroundColor: Favorite ? '#F5CA48' : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: Favorite ? 0 : 1,
        borderColor: '#CDCDCD'
    }),
    title: {
        fontSize: 32,
        color: 'black',
        fontFamily: 'Montserrat-Bold',
        maxWidth: 172
    },
    subtitle: {
        fontSize: 32,
        color: '#E4723C',
        fontFamily: 'Montserrat-SemiBold'
    },
    image: {
        width: 296,
        height: 176,
        // position: 'absolute',
        marginLeft: 60
    },
    details: {
        fontSize: 14,
        fontFamily: 'Monserrat-Medium',
        color: '#CDCDCD'
    },
    value: {
        fontSize: 16,
        fontFamily: 'Monserrat-SemiBold',
        color: 'black'
    },
    ingredients: {
        fontSize: 16,
        fontFamily: 'Monserrat-Bold',
        color: 'black',
        paddingTop: 60
    },
    wrapperingredients: {
        flexDirection: 'row'
    },
    button: {
        paddingTop: 60
    }
})
