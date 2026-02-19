import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import CadastroScreen from './src/screens/CadastroScreen'

export default function App() {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LoginScreen />
    </View>
  )
}