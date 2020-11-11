import React from 'react'
import {TextInput, ImageProps, TextInputProps} from 'react-native'
import {Image} from './restyle-components'
import {Card} from './card'

type TextInputPropsFlatten =
  | 'placeholderTextColor'
  | 'placeholder'
  | 'onChangeText'
type InputProps = React.ComponentProps<typeof Card> &
  Pick<TextInputProps, TextInputPropsFlatten> & {
    options?: Omit<TextInputProps, TextInputPropsFlatten>
    icon?: ImageProps['source']
  }

export const Input: React.FC<InputProps> = React.memo(
  ({options, placeholderTextColor, placeholder, icon, ...rest}) => {
    return (
      <Card variant='textinput' {...rest}>
        {icon && <Image mx='m' width={20} height={20} source={icon} />}
        <TextInput
          style={{height: '100%', flexGrow: 1}}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid='transparent'
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize='none'
          {...options}
        />
      </Card>
    )
  }
)

Input.defaultProps = {
  placeholderTextColor: '#8c8c8c',
}
