import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import TabNavigator from './TabNavigator'
import Login from '../Screens/Login'
// Context Provider
import UserContext from '../Context/UserContext'


const Stack = createStackNavigator()


export default function MainNavigation() {
  
  const [user, setUser] = useState({})
  const [firebase, setFirebase] = useState(()=>{})

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Stack.Navigator initialRouteName='Login' screenOptions={()=>{
        return {
          headerShown : false,
          animationEnabled : true
        }
      }}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='TabNavigator' component={TabNavigator}/>
      </Stack.Navigator>
    </UserContext.Provider>
  )
}

const styles = StyleSheet.create({})