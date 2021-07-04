import type {
  ImageProps,
  PressableProps,
  TouchableOpacityProps,
} from 'react-native'
import {Image as RNImage, Pressable, TouchableOpacity} from 'react-native'
import type {
  BorderlessButtonProperties,
  RectButtonProperties,
} from 'react-native-gesture-handler'
import {
  BorderlessButton as RNGHBorderlessButton,
  RectButton as RNGHRectButton,
} from 'react-native-gesture-handler'
import type {BoxProps as ReBoxProps} from '@shopify/restyle'
import {createBox, createText} from '@shopify/restyle'
import type {Theme} from 'shared/theme'

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
