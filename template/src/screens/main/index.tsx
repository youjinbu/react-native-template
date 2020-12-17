import React from 'react'
import {StyleSheet} from 'react-native'
import {PanGestureHandler} from 'react-native-gesture-handler'
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated'
import {useNavigation} from 'shared/navigation'
import {Box, Button} from 'components'

const AnimatedButton = Animated.createAnimatedComponent(Button)

export default function MainScreen() {
  const navigation = useNavigation()

  const transX = useSharedValue(0)
  const transY = useSharedValue(0)

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({translationX, translationY}) => {
      transX.value = translationX
      transY.value = translationY
    },
    onEnd: () => {
      transX.value = withSpring(0)
      transY.value = withSpring(0)
    },
  })

  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: transX.value}, {translateY: transY.value}],
    }
  })

  return (
    <Box
      alignItems='center'
      justifyContent='center'
      style={StyleSheet.absoluteFill}
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedButton
          label='Login'
          width='50%'
          style={style}
          testID='login'
          onPress={() => navigation.navigate('login-stack')}
        />
      </PanGestureHandler>
    </Box>
  )
}
