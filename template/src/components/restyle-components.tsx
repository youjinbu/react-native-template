import {
  Image as RNImage,
  ImageProps,
  Pressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import {createBox, createText} from '@shopify/restyle'
import {Theme} from 'shared/theme'

export const Box = createBox<Theme>()
export const Text = createText<Theme>()

export const TouchableBox = createBox<
  Theme,
  TouchableOpacityProps & {children?: React.ReactNode}
>(TouchableOpacity)

export const PressableBox = createBox<
  Theme,
  PressableProps & {children?: React.ReactNode}
>(Pressable)

export const Image = createBox<Theme, ImageProps>(RNImage)
