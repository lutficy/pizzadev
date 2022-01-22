import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Route from './route'

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Route />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
