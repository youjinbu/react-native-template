import React from 'react'
import {Platform, TouchableNativeFeedback} from 'react-native'
import {BoxProps} from '@shopify/restyle'
import {Theme} from 'shared/theme'
import {Text, Box, TouchableBox} from './restyle-components'

type ButtonProps = BoxProps<Theme> & {
  label: string
  disabled?: boolean
  accessibilityLabel?: string
  touchSoundDisabled?: boolean
  onPress?: () => void
  testID?: string
}

const ButtonIOS: React.FC<ButtonProps> = React.memo(
  ({
    label,
    onPress,
    testID,
    accessibilityLabel,
    disabled = false,
    touchSoundDisabled = true,
    ...rest
  }) => {
    return (
      <TouchableBox
        testID={testID}
        onPress={onPress}
        disabled={disabled}
        touchSoundDisabled={touchSoundDisabled}
        accessibilityRole='button'
        accessibilityLabel={accessibilityLabel}
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

const ButtonAndroid: React.FC<ButtonProps> = React.memo(
  ({
    label,
    onPress,
    testID,
    bg,
    accessibilityLabel,
    disabled = false,
    touchSoundDisabled = true,
    ...rest
  }) => {
    return (
      <Box overflow='hidden' {...rest}>
        <TouchableNativeFeedback
          testID={testID}
          onPress={onPress}
          disabled={disabled}
          touchSoundDisabled={touchSoundDisabled}
          accessibilityRole='button'
          accessibilityLabel={accessibilityLabel}
          accessibilityState={{disabled}}
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
  Platform.OS === 'android' ? ButtonAndroid : ButtonIOS

Button.defaultProps = {
  bg: 'primary',
  height: 50,
  borderRadius: 10,
}
