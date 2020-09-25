import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})

  return (
    <View style={styles.form}>
      <Text>Nome</Text>
      <TextInput
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informa o Nome"
        value={user.name}
        style={styles.input}
      />

      <Text>Email</Text>
      <TextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informa o E-mail"
        value={user.email}
        style={styles.input}
      />

      <Text>URL do Avatar</Text>
      <TextInput
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Informa a URL do Avatar"
        value={user.avatarUrl}
        style={styles.input}
      />
      <Button title="Salvar" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
})
