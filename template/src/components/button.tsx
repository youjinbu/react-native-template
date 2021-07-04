import React from 'react'
import type {ViewProps} from 'react-native'
import {Platform} from 'react-native'
import type {BoxProps, ColorProps} from 'shared/theme'
import {Text, Box, RectButton, TouchableBox} from './restyle-components'

type ButtonType = 'primary' | 'secondary' | undefined

export type ButtonProps = ViewProps &
  BoxProps & {
    label: string
    labelColor?: ColorProps['color']
    type?: ButtonType
    disabled?: boolean
    icon?: React.ReactNode
    touchSoundDisabled?: boolean
    onPress?: () => void
  }

function getButtonProps(
  type: ButtonType,
  props: Partial<ButtonProps>
): Partial<ButtonProps> {
  if (type === 'secondary') {
    return {...props, labelColor: 'text', bg: 'bg'}
  }

  if (type === 'primary') {
    return {...props, labelColor: 'white', bg: 'primary'}
  }

  // fallback to primary
  return {labelColor: 'white', bg: 'primary', ...props}
}

export const ButtonIOS: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      icon,
      label,
      type,
      onPress,
      disabled = false,
      touchSoundDisabled,
      height = 50,
      borderRadius = 10,
      ...props
    },
    ref
  ) => {
    const {bg, labelColor, ...rest} = getButtonProps(type, props)
    return (
      <TouchableBox
        ref={ref}
        onPress={onPress}
        disabled={disabled}
        accessibilityState={{disabled}}
        accessibilityRole='button'
        alignItems='center'
        justifyContent='center'
        flexDirection='row'
        activeOpacity={0.75}
        bg={bg}
        height={height}
        borderRadius={borderRadius}
        {...rest}
      >
        {icon}
        <Text color={labelColor}>{label}</Text>
      </TouchableBox>
    )
  }
)

export const ButtonAndroid: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      label,
      type,
      onPress,
      disabled = false,
      touchSoundDisabled = true,
      height = 50,
      borderRadius = 10,
      icon,
      ...props
    },
    ref
  ) => {
    const {bg, labelColor, ...rest} = getButtonProps(type, props)
    return (
      <RectButton
        ref={ref}
        bg={bg}
        height={height}
        borderRadius={borderRadius}
        overflow='hidden'
        onPress={disabled ? undefined : onPress}
        {...rest}
      >
        <Box
          accessible
          height='100%'
          alignItems='center'
          justifyContent='center'
          flexDirection='row'
          accessibilityState={{disabled}}
          accessibilityRole='button'
        >
          {icon}
          <Text color={labelColor}>{label}</Text>
        </Box>
      </RectButton>
    )
  }
)

export const Button: React.FC<ButtonProps> =
  Platform.OS === 'android' ? React.memo(ButtonAndroid) : React.memo(ButtonIOS)
