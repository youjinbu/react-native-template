import React from 'react'
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native'
import {BoxProps} from '@shopify/restyle'
import {Theme} from 'shared/theme'
import {Text, Box} from './restyle-components'

type ButtonProps = BoxProps<Theme> & {
  label: string
  disabled?: boolean
  accessibilityLabel?: string
  touchSoundDisabled?: boolean
  onPress?: () => void
  testID?: string
}

const Touchable = ((Platform.OS === 'android'
  ? TouchableNativeFeedback
  : TouchableOpacity) as unknown) as React.FC<TouchableWithoutFeedbackProps>

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  accessibilityLabel,
  disabled = false,
  touchSoundDisabled = true,
  testID,
  bg = 'primary',
  height = 50,
  borderRadius = 10,
  ...rest
}) => {
  return (
    <Box
      overflow='hidden'
      borderRadius={borderRadius}
      height={height}
      {...rest}
    >
      <Touchable
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
          borderRadius={borderRadius}
          elevation={disabled ? 0 : 2}
        >
          <Text color='white'>{label}</Text>
        </Box>
      </Touchable>
    </Box>
  )
}
