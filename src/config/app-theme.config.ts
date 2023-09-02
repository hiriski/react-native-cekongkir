/**
 * --------------------
 * App Theme Config.
 * Inspired by @mui/material
 * --------------------
 */

// interfaces.
import {
  IThemePalette,
  IThemeShape,
  IThemeTypographyVariant,
  ThemeSpacing,
} from '@/interfaces'

// libs
import { grey } from '@/libs'

/**  Base palette */
export const theme_paletteBase: Omit<
  IThemePalette,
  'background' | 'text' | 'mode' | 'divider'
> = {
  primary: {
    main: '#3393FF',
    dark: '#1955B7',
    light: '#EEF9FE',
    contrastText: '#fbfbfb',
  },
  secondary: {
    main: '#FF4564',
    dark: '#F10930',
    light: '#FEF2EF',
    contrastText: '#fbfbfb',
  },
  success: {
    main: '#0CB954',
    dark: '#089F56',
    light: '#e2ffe2',
    contrastText: '#fbfbfb',
  },
  info: {
    main: '#069efe',
    dark: '#047ADA',
    light: '#EEFCFE',
    contrastText: '#fbfbfb',
  },
  warning: {
    main: '#ffa50b',
    dark: '#DB8508',
    light: '#FFF9E6',
    contrastText: '#fff',
  },
  error: {
    main: '#ff3517',
    dark: '#B70B10',
    light: '#FFEFE3',
    contrastText: '#fff',
  },
  common: {
    white: '#fff',
    black: '#000000',
  },
}

/** Palette light */
export const theme_paletteLight: Pick<
  IThemePalette,
  'text' | 'background' | 'mode' | 'divider'
> = {
  mode: 'light',
  text: {
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[500],
  },
  background: {
    default: '#f9f9f9',
    paper: '#fff',
  },
  divider: 'rgba(0, 0, 0, 0.05)',
}

/** Palette dark */
export const theme_paletteDark: Pick<
  IThemePalette,
  'text' | 'background' | 'mode' | 'divider'
> = {
  mode: 'dark',
  text: {
    primary: '#fbfbfb',
    secondary: 'rgba(255, 255, 255, 0.75)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    default: grey[900],
    paper: '#0e0e0e',
  },
  divider: 'rgba(255, 255, 255, 0.5)',
}

/** Typography */
export const theme_typography: IThemeTypographyVariant = {
  h1: 26,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14.2,
  body: 13.5,
  body2: 13,
  subtitle: 12,
  subtitle2: 11.3,
}

/** Shape */
export const theme_shape: IThemeShape = {
  borderRadius: 4,
}

/** Theme spacing */
export const theme_spacing: ThemeSpacing = 4

export const appThemeConfig = {
  theme_paletteBase,
  theme_paletteLight,
  theme_paletteDark,
  theme_typography,
  theme_shape,
  theme_spacing,
}
