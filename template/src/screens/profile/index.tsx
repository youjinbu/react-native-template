import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function ProfileScreen() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 28,
  },
})
