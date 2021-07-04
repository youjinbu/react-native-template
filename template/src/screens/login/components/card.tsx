import React from 'react'
import type {ImageProps} from 'react-native'
import {Text, Image, Card as ReCard} from 'components'

interface CardProps {
  title: string
  source?: ImageProps['source']
  subtitle?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  source,
}) => {
  return (
    <ReCard mx='s' mt='s' p='xxxl' flexDirection='column'>
      {source && (
        <Image
          source={source}
          mb='m'
          width={180}
          height={180}
          alignSelf='center'
          resizeMode='contain'
        />
      )}

      <Text variant='title'>{title}</Text>
      {subtitle && (
        <Text variant='tiny' mt='s' textAlign='center'>
          {subtitle}
        </Text>
      )}

      {children}
    </ReCard>
  )
}
