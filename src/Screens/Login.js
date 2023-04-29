import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, {useState, useContext} from 'react'
// Autenticación
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase_config'
// Context Provider
import useUser from '../Hooks/useUser'

const {width, height} = Dimensions.get('screen')

export default function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  
  const [user, setUser] = useUser()

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Account Created')
        const newUser = userCredential.user
        flush()
        setUser(newUser)
        navigation.navigate('TabNavigator', {screen:'Home'})
      }).catch(err => {
        console.log(err)
        Alert.alert(err.message)
      })
  }
  
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Signed In')
        const newUser = userCredential.user
        flush()
        setUser(newUser)
        navigation.navigate('TabNavigator', {screen:'Home'})
      }).catch(err=>{
        console.log(err)
        Alert.alert(err.message)
      })
  }

  const flush = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <View style={styles.main}>
      <View style={styles.loginCard}>
        <View style={styles.iconCircle}>
            <Image source={require('../../assets/userIcon.png')} style={styles.icon}/>
        </View>
        <View style={styles.tag}>
            <Text style={styles.tagText}> E-mail:</Text>
            <TextInput style={styles.tagInput} value={email} onChangeText={text=>setEmail(text)} placeholder="direccion.correo@ejemplo.com" autoCapitalize='none' autoCorrect={false}/>
        </View>
        <View style={styles.tag}>
            <Text style={styles.tagText}> Contraseña:</Text>
            <TextInput style={styles.tagInput} value={password} onChangeText={text=>setPassword(text)} placeholder="contraseña" secureTextEntry/>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.login} onPress={()=>{
            if(email!=''&&password!=''){
              handleSignIn()
            } else {
              Alert.alert("Los campos no pueden estar vacíos")
            }
          }}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registrar} onPress={()=>{
            if(email!=''&&password!=''){
              handleCreateAccount()
            } else {
              Alert.alert("Los campos no pueden estar vacíos")
            }
          }}>
            <Text style={styles.registrarText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main : {
    width : width,
    height : height,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#10454F'
  },
  loginCard : {
    display : 'flex',
    backgroundColor : 'white',
    padding : 30,
    borderRadius : 10,
    width : '80%',
    elevation : 20
  },
  iconCircle : {
    backgroundColor : '#506266',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 50,
    width : 70,
    height : 70,
    alignSelf : 'center'
  },
  icon : {
    width : '50%',
    height : '50%',
    tintColor : 'white'
  },
  tag : {
    marginVertical : 15
  },
  tagText : {
    fontSize : 16,
    marginBottom : 10
  },
  tagInput : {
    borderColor : '#506266',
    borderWidth : 2,
    borderRadius : 5,
    padding : 10
  },
  login : {
    width : '100%',
    marginVertical : 10,
    paddingVertical : 20,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#506266',
    borderRadius : 10,
    elevation : 2
  },
  registrar : {
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
  loginText : {
    color : 'white',
    fontSize : 16,
    fontWeight : "400"
  },
  registrarText : {
    color : 'white',
    fontSize : 16,
    fontWeight : "400"
  }
})