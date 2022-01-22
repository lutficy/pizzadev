import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Activity, DetailFood, Home } from '../pages';


const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator initialRouteName="Activity">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="DetailFood" component={DetailFood} options={{headerShown: false}} />
            <Stack.Screen name="Actvity" component={Activity} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Route

             