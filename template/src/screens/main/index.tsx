import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'
import {useNavigation} from 'navigation'
import {Text} from 'components'

export default function MainScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.wrap}>
      <Pressable onPress={() => navigation.navigate('profile')}>
        <Text fontSize={28}>main</Text>
      </Pressable>
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
