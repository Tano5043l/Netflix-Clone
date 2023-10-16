import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'


import { generalstyles } from '../style'
import { Ionicons } from '@expo/vector-icons'

const Signup = () => {
  return (
    <ScrollView>
    <View style={generalstyles.container}>
        <View style={styles.container1}>
            <TouchableOpacity>
                <Ionicons name='arrow-back' size={30} color={'white'} style={{paddingTop: 20}}/>
            </TouchableOpacity>
            <Image
            source={require('../../assets/img6.png')}
            style={{width: 150, height: 80, marginLeft: 20}}
            />
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={25} style={{padding:20, paddingLeft: 150}} color={'grey'}/>
              </TouchableOpacity>
        </View>
        <View style={styles.container2}>
        <TextInput
            style={styles.input}
            placeholder="Email or phone number"
            placeholderTextColor={'white'}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'white'}
        />
        <TouchableOpacity style={styles.pressable}>
                <Text style={styles.presstxt}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Need help?</Text>
        <Text style={styles.text1}>New to Netflix? Sign up now.</Text>
        <Text style={styles.text2}>Sign-in is protected by Google reCAPTHA to ensure you're not a bot. Learn more.</Text>
        </View>
    </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({
container1: {
    flexDirection: 'row',
    paddingTop: 40,

},
container2: {
    marginTop: 150,
    marginBottom: 140,

},
input: {
    height: 60,
    marginBottom: 20,
    padding: 10,
    color: 'white',
    fontSize: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,

  },
  presstxt: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,

  },
  pressable: {
    width: 370,
    height: 50,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  text1: {
    color: 'grey',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 17,

  },
  text2: {
    color: 'grey',
    textAlign: 'center',
    paddingTop: 20,

  },
})