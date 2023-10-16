import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { generalstyles } from '../style'


const HomeScreen = () => {
  return (
    <View style= {generalstyles.container}>
      <Text style={styles.texthome}>HomeScreen</Text>
      <Text style={styles.texthome}>HomeScreen</Text>
      <Text style={styles.texthome}>HomeScreen</Text>
      <Text style={styles.texthome}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  texthome: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
})