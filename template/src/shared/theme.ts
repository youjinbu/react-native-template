import {createTheme, useTheme as useRestyledTheme} from '@shopify/restyle'

const palette = {
  bg: '#f8f8f8',
  white: '#ffffff',
  text: '#262626',
  grey: '#565656',
  greytext: '#8c8c8c',
  primary: '#da372a',
  transparent: 'transparent',
}

const textVariants = {
  defaults: {
    color: 'text',
    fontSize: 16,
  },

  primary: {
    color: 'primary',
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
  },

  tiny: {
    color: 'greytext',
    fontSize: 12,
  },

  tinyLink: {
    color: 'greylink',
    fontSize: 12,
  },
}

const cardVariants = {
  defaults: {
    bg: 'white',
    borderRadius: 10,
  },

  textinput: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    bg: 'bg',
    ps: 's',
  },
}

export const theme = createTheme({
  colors: {
    ...palette,
    greybg: palette.bg,
    greylink: palette.grey,
  },

  spacing: {
    xs: 8,
    s: 12,
    m: 16,
    l: 20,
    xl: 24,
    xxxl: 40,
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textVariants,
  cardVariants,
})

export type Theme = typeof theme

export function useTheme() {
  return useRestyledTheme<Theme>()
}
