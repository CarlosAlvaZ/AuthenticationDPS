import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
// Context consumer
import useUser from '../Hooks/useUser'

export default function Usuario({navigation}) {

  const [user, setUser] = useUser()

  const logout = async () => {
    setUser({})
    console.log('Logged out')
    navigation.navigate('Login')
  }

  return (
    <View style={styles.main}>
      <Text>Usuario Loggeado: </Text>
      <TouchableOpacity style={styles.logout} onPress={()=>{logout()}}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    height : '100%'
  },
  logout : {
    width : '100%',
    marginVertical : 10,
    paddingVertical : 20,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#10454F',
    borderRadius : 10,
    elevation : 4
  },
  logoutText : {
    color : 'white',
    fontSize : 16,
    fontWeight : "400"
  }
})