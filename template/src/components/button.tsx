import React from 'react'
import {
  ViewProps,
  Platform,
  AccessibilityRole,
  TouchableNativeFeedback,
} from 'react-native'
import {BoxProps} from '@shopify/restyle'
import {Theme} from 'shared/theme'
import {Text, Box, TouchableBox} from './restyle-components'

export type ButtonProps = ViewProps &
  BoxProps<Theme> & {
    label: string
    disabled?: boolean
    accessibilityLabel?: string
    accessibilityRole?: AccessibilityRole
    touchSoundDisabled?: boolean
    onPress?: () => void
    testID?: string
  }

const ButtonIOS: React.FC<ButtonProps> = React.forwardRef(
  (
    {label, onPress, disabled = false, touchSoundDisabled = true, ...rest},
    ref
  ) => {
    return (
      <TouchableBox
        ref={ref}
        onPress={onPress}
        disabled={disabled}
        touchSoundDisabled={touchSoundDisabled}
        accessibilityState={{disabled}}
        alignItems='center'
        justifyContent='center'
        activeOpacity={0.75}
        {...rest}
      >
        <Text color='white'>{label}</Text>
      </TouchableBox>
    )
  }
)

const ButtonAndroid: React.FC<ButtonProps> = React.forwardRef(
  (
    {label, onPress, bg, disabled = false, touchSoundDisabled = true, ...rest},
    ref
  ) => {
    return (
      <Box
        ref={ref}
        overflow='hidden'
        accessibilityState={{disabled}}
        {...rest}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          disabled={disabled}
          touchSoundDisabled={touchSoundDisabled}
        >
          <Box
            flex={1}
            bg={bg}
            alignItems='center'
            justifyContent='center'
            borderRadius={rest.borderRadius}
            elevation={disabled ? 0 : 2}
          >
            <Text color='white'>{label}</Text>
          </Box>
        </TouchableNativeFeedback>
      </Box>
    )
  }
)

export const Button: React.FC<ButtonProps> =
  Platform.OS === 'android' ? React.memo(ButtonAndroid) : React.memo(ButtonIOS)

Button.defaultProps = {
  bg: 'primary',
  height: 50,
  borderRadius: 10,
  accessibilityRole: 'button',
}
