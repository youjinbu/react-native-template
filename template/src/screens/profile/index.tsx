import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'components'

export default function ProfileScreen() {
  return (
    <View style={styles.wrap}>
      <Text fontSize={38}>profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
