import {
  Image as RNImage,
  ImageProps,
  Pressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import {
  BorderlessButton as RNGHBorderlessButton,
  BorderlessButtonProperties,
  RectButton as RNGHRectButton,
  RectButtonProperties,
} from 'react-native-gesture-handler'
import {createBox, createText, BoxProps as ReBoxProps} from '@shopify/restyle'
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

export const RectButton = createBox<
  Theme,
  RectButtonProperties & {children?: React.ReactNode}
>(RNGHRectButton)

export const BorderlessButton = createBox<
  Theme,
  BorderlessButtonProperties & {children?: React.ReactNode}
>(RNGHBorderlessButton)

export type BoxProps = ReBoxProps<Theme>
