import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Screens
import Home from '../Screens/Home'
import Usuario from '../Screens/Usuario'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({route})=>{
      return {
        tabBarIcon : ({focused}) => {
          if (route.name == 'Home') {
            return <Image source={require('../../assets/homeIcon.png')} style={ { width : 20, height : 20, tintColor : focused ? 'blue' : 'gray' } }/>
          } else if (route.name == 'Usuario') {
            return <Image source={require('../../assets/userIcon.png')} style={ { width : 20, height : 20, tintColor : focused ? 'blue' : 'gray' } }/>
          }
        }
      }
    }}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Usuario' component={Usuario}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})