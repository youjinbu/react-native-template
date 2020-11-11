import React from 'react'
import {StyleSheet} from 'react-native'
import {useNavigation} from 'shared/navigation'
import {Box, Button} from 'components'

export default function MainScreen() {
  const navigation = useNavigation()

  return (
    <Box
      alignItems='center'
      justifyContent='center'
      style={StyleSheet.absoluteFill}
    >
      <Button
        label='Login'
        width='50%'
        onPress={() => navigation.navigate('login-stack')}
      />
    </Box>
  )
}
