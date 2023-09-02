export type PaletteMode = 'light' | 'dark'
export type ThemeSize = 'small' | 'medium' | 'large'
export type ThemeSpacing = number

export interface IThemeTypographyVariant {
  h1: number
  h2: number
  h3: number
  h4: number
  h5: number
  h6: number
  body: number
  body2: number
  subtitle: number
  subtitle2: number
}

export interface IThemeShape {
  borderRadius: number
}

export interface IThemeTextPalette {
  primary: string
  secondary: string
  disabled: string
}

export interface IThemePaletteOptions {
  main: string
  light: string
  dark: string
  contrastText: string
}

export interface IThemeBackgroundPalette {
  default: string
  paper: string
}

export interface IThemeCommonPalette {
  white: string
  black: string
}

export interface IThemePalette {
  mode: PaletteMode
  primary: IThemePaletteOptions
  secondary: IThemePaletteOptions
  success: IThemePaletteOptions
  info: IThemePaletteOptions
  warning: IThemePaletteOptions
  error: IThemePaletteOptions
  common: IThemeCommonPalette
  text: IThemeTextPalette
  background: IThemeBackgroundPalette
  divider: string
}

export interface ITheme {
  palette: IThemePalette
  typography: IThemeTypographyVariant
  shape: IThemeShape
  spacing: ThemeSpacing
}
