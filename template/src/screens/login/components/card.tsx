import React from 'react'
import {ImageProps} from 'react-native'
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
    <ReCard mx='s' mt='s' p='xxxl' alignItems='center' flexDirection='column'>
      {source && (
        <Image
          source={source}
          mb='m'
          width={180}
          height={180}
          resizeMode='contain'
        />
      )}

      <Text variant='title'>{title}</Text>
      {subtitle && (
        <Text variant='tiny' mt='s'>
          {subtitle}
        </Text>
      )}

      {children}
    </ReCard>
  )
}
