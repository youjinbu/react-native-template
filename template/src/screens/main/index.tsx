import React from 'react'
import {Button, View, StyleSheet, Pressable} from 'react-native'
import {Constants} from 'react-native-unimodules'
import Config from 'react-native-config'
import * as Updates from 'expo-updates'
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
          marginBottom: 12,
          borderRadius: 5,
        }}
      >
        <Text fontSize={18}>device: {Constants.deviceName}</Text>
        <Text fontSize={12} mt='s'>
          Device ID: {Constants.deviceId}
        </Text>
        <Text fontSize={12} mt='s'>
          API_URL: {Config.API_URL}
        </Text>
        <Text fontSize={12} mt='s'>
          EXPO_UPDATE_URL: {Config.EXPO_UPDATE_URL}
        </Text>
      </Pressable>

      <Button
        title='Check Update'
        onPress={() => {
          Updates.checkForUpdateAsync()
            .then((rs) => console.log(rs))
            .catch((error) => console.log(error))
        }}
      />
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
