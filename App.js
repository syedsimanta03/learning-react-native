import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [state, setstate] = useState('Open app!')
  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <StatusBar style='auto' />
      <Button title = 'Change text' onPress={() => setstate('I am you')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
