import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useUser from '../Hooks/useUser'

export default function Home() {
  const [user, setUser] = useUser()
  return (
    <View style={styles.main}>
      <Text>Usuario Loggeado: </Text>
      <Text>{user.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    height : '100%'
  }
})