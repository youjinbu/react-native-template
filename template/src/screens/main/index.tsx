import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from 'navigation'

export default function ProfileScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <Text style={styles.text}>main</Text>
      </TouchableOpacity>
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
