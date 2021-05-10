import React, {useRef, useState, useCallback, useImperativeHandle} from 'react'
import {
  Easing,
  Animated,
  ViewStyle,
  StyleSheet,
  LayoutChangeEvent,
  useWindowDimensions,
} from 'react-native'
import {
  State,
  PanGestureHandler,
  TapGestureHandler,
  PanGestureHandlerStateChangeEvent,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {Box, Text} from './restyle-components'

const MIN_VELOCITY_TO_FLING = -350
const BOUNCE_OFFSET = 150
const HIDE_DURATION = 350
const NAVBAR_OFFSET = 56

const easing = Easing.bezier(0.53, 0.67, 0.19, 1.1)

export type PromptHandle = {
  show: (text: string) => void
  hide: () => void
}

interface PromptProps {
  duration?: number
  autohide?: boolean
  onPress?: () => void
  style?: ViewStyle
}

const PromptComponent: React.RefForwardingComponent<PromptHandle, PromptProps> =
  ({duration, autohide, onPress, style}, ref) => {
    const timerRef = useRef(0)
    const viewHeight = useRef(0)
    const [text, setText] = useState('')
    const {width} = useWindowDimensions()
    const [translateY] = useState(() => new Animated.Value(-250))
    const insets = useSafeAreaInsets()
    const offset = insets.top + 0 // TODO

    const hide = useCallback(() => {
      Animated.timing(translateY, {
        easing,
        toValue: (viewHeight.current + NAVBAR_OFFSET + offset * 2) * -1,
        duration: HIDE_DURATION,
        useNativeDriver: true,
      }).start()
    }, [translateY, offset])

    const hideLater = useCallback(() => {
      clearTimeout(timerRef.current)
      timerRef.current = 0
      if (autohide) {
        timerRef.current = setTimeout(hide, duration) as any
      }
    }, [hide, duration, autohide])

    const show = useCallback(
      (t: string) => {
        setText(t)
        hideLater()

        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start()
      },
      [hideLater, translateY]
    )

    useImperativeHandle(ref, () => ({show, hide}))

    const onTapHandlerStateChange = useCallback(
      ({nativeEvent: {state}}: TapGestureHandlerStateChangeEvent) => {
        if (state === State.BEGAN) {
          clearTimeout(timerRef.current)
        } else if (state === State.ACTIVE) {
          hide()
          if (onPress) {
            onPress()
          }
        }
      },
      [onPress, hide]
    )

    const onGestureEvent = useCallback(
      (event) => {
        const {translationY} = event.nativeEvent
        const value = translationY > 0 ? translationY / 9 : translationY / 1
        translateY.setValue(value)
      },
      [translateY]
    )

    function onLayout(e: LayoutChangeEvent) {
      viewHeight.current = e.nativeEvent.layout.height || 0
    }

    const onHandlerStateChange = ({
      nativeEvent,
    }: PanGestureHandlerStateChangeEvent) => {
      if (nativeEvent.state !== State.END) {
        return
      }

      const {velocityY, translationY, numberOfPointers} = nativeEvent
      if (velocityY < MIN_VELOCITY_TO_FLING && numberOfPointers === 1) {
        Animated.spring(translateY, {
          toValue: (viewHeight.current + BOUNCE_OFFSET + offset * 2) * -1,
          useNativeDriver: true,
          velocity: velocityY,
        }).start()
        return
      }

      if (translationY > (viewHeight.current / 2) * -1) {
        show(text)
      } else {
        hide()
      }
    }

    return (
      <PanGestureHandler
        onHandlerStateChange={onHandlerStateChange}
        onGestureEvent={onGestureEvent}
      >
        <Animated.View
          onLayout={onLayout}
          style={[
            styles.prompt,
            {width: width - 40},
            style,
            {top: offset, transform: [{translateY}]},
          ]}
        >
          <TapGestureHandler onHandlerStateChange={onTapHandlerStateChange}>
            <Box flex={1} justifyContent='center' alignItems='center'>
              <Text fontSize={17} my='m'>
                {text}
              </Text>
            </Box>
          </TapGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    )
  }

const styles = StyleSheet.create({
  prompt: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
  },
})

export const Prompt = React.forwardRef(PromptComponent)

Prompt.defaultProps = {
  duration: 2000,
  autohide: true,
}
