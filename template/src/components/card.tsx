import React from 'react'
import {
  VariantProps,
  createVariant,
  createRestyleComponent,
} from '@shopify/restyle'
import {Theme} from 'shared/theme'
import {Box} from './restyle-components'

export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({themeKey: 'cardVariants'})], Box)
