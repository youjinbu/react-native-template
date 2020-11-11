import React from 'react'
import {Text, TouchableBox} from './restyle-components'

type ButtonProps = React.ComponentProps<typeof TouchableBox> & {label: string}

export const Button: React.FC<ButtonProps> = ({onPress, label, ...rest}) => {
  return (
    <TouchableBox
      height={50}
      bg='primary'
      borderRadius={10}
      alignItems='center'
      justifyContent='center'
      onPress={onPress}
      {...rest}
    >
      <Text color='white'>{label}</Text>
    </TouchableBox>
  )
}
