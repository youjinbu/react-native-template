import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'
import {Constants} from 'react-native-unimodules'
import {useNavigation} from 'navigation'
import {Text} from 'components'

export default function MainScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={() => navigation.navigate('profile')}
        style={{
          backgroundColor: 'rgba(0,0,0,0.15)',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text fontSize={18}>device: {Constants.deviceName}</Text>
        <Text fontSize={12} mt='s'>
          id: {Constants.deviceId}
        </Text>
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
