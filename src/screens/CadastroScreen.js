import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web'

const CadastroScreen = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Cadastro</Text>

      <TextInput 
        placeholder='Digite seu nome'
        style = {styles.input}
        value = {nome}
        onChangeText={setNome}
      />

      <TextInput 
        placeholder='Digite seu email'
        style = {styles.input}
        value = {email}
        onChangeText={setEmail}
      />

      <TextInput 
        placeholder='Digite seu CPF'
        style = {styles.input}
        value = {cpf}
        onChangeText={setCpf}
      />

      <TextInput 
        placeholder='Digite sua senha'
        style = {styles.input}
        secureTextEntry
        value = {senha}
        onChangeText={setSenha}
      />

      <Button title = 'Cadastrar' />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20},  
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  input: {width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 8},
  orText: {marginVertical: 20, fontSize: 16, color: '#555'}
})

export default CadastroScreen