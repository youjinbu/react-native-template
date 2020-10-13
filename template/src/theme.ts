import {createTheme} from '@shopify/restyle'

const palette = {
  primary: '#da372a',
}

const textVariants = {
  defaults: {
    color: 'primary',
  },
}

export const theme = createTheme({
  colors: {
    primary: palette.primary,
  },

  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textVariants,
})

export type Theme = typeof theme
