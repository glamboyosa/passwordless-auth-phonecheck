import React, { useContext, useState } from 'react'

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import { AuthContext } from './Context'

const Screens = () => {
  // server ngrok url
  const base_url = 'https://serverngrokurl.ngrok.io'
  const { screen } = useContext(AuthContext)

  const registerHandler = () => {}

  return (
    <LinearGradient
      colors={['rgba(25, 85, 255, 40)', 'rgba(10, 10, 50, 66)']}
      useAngle={true}
      angle={0}
      style={{
        flex: 1,
      }}
    >
      {screen === 'register' ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.box}>
            <Image
              style={styles.logo}
              source={require('./images/tru-logo.png')}
            />
            <Text style={styles.heading}>Register</Text>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.heading}>Home 🏡</Text>
          </View>
        </SafeAreaView>
      )}
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    borderRadius: 3,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 0.7 * Dimensions.get('window').height,
    padding: 15,
  },
  logo: {
    marginTop: 10,
    width: 0.5 * Dimensions.get('window').width,
    height: 200,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    padding: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderColor: '#858585',
    borderWidth: 0.4,
    elevation: 7,
    shadowColor: '#858585',
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    color: '#000',
    width: 0.7 * Dimensions.get('window').width,
  },
  spinner: {
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1955ff',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#1955ff',
    marginTop: 17,
    width: '40%',
  },
  buttonText: {
    color: '#fff',
  },
})

export default Screens
