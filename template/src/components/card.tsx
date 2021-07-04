import type React from 'react'
import type {VariantProps} from '@shopify/restyle'
import {createVariant, createRestyleComponent} from '@shopify/restyle'
import type {Theme} from 'shared/theme'
import {Box} from './restyle-components'

export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({themeKey: 'cardVariants'})], Box)
