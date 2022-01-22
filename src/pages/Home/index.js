import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { DummyProfile, IconFilter, ILPizza1, ILPizza2, ILPizza3 } from '../../assets'
import { CategoriesCard, Gap, Input, PopularCard } from '../../components'

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.containerheader}>
                    <Image source={DummyProfile} style={styles.image} />
                    <IconFilter />
                </View>
                <View style={styles.containertitle}>
                    <Text style={styles.food}>Food</Text>
                    <Text style={styles.delivery}>Delivery</Text>
                </View>
                <View style={styles.input}>
                    <Input />
                </View>
                <View style={styles.categoriescontainer}>
                    <Text style={styles.categories}>Categories</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', marginRight: -20 }}>
                        <CategoriesCard title="Pizza" />
                        <CategoriesCard title="Shrimp" />
                        <CategoriesCard title="Soft Drink" />
                    </ScrollView>
                </View>
                <View style={{paddingTop:20}}>
                    <Text style={styles.categories}>Popular</Text>
                    <PopularCard pic={ILPizza1} title="Primavera Pizza" onPress={() => navigation.navigate('DetailFood')} />
                    <Gap height={20} />
                    <PopularCard pic={ILPizza2} title="American Favorite" />
                    <Gap height={20} />
                    <PopularCard pic={ILPizza3} title="Supreme Pizza" />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        flex: 1
    },
    containerheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2
    },
    containertitle: {
        paddingTop: 30
    },
    food: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: 'black'
    },
    delivery: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        paddingTop: 5
    },
    input: {
        marginRight: 40,
        paddingTop: 30
    },
    categories: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        marginBottom: 15
    },
    categoriescontainer: {
        paddingTop: 30
    }
})
