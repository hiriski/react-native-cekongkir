import React, { FC, ReactNode, useMemo } from 'react'

// context
import { themeContext as ThemeContext } from '@/context'

// interfaces.
import { ITheme, PaletteMode } from '@/interfaces'

// app theme config.
import {
  theme_shape,
  theme_spacing,
  theme_typography,
  theme_paletteBase,
  theme_paletteDark,
  theme_paletteLight,
} from '@/config'
import { useAppTheme } from '@/hooks'

interface Props {
  children: ReactNode
}

const AppThemeProvider: FC<Props> = ({ children }) => {
  // prettier-ignore
  const createTheme = (mode: PaletteMode): ITheme => {
    return {
      palette: { ...theme_paletteBase, ...(mode !== 'dark' ? { ...theme_paletteLight } : { ...theme_paletteDark }) },
      typography: theme_typography,
      shape: theme_shape,
      spacing: theme_spacing,
    }
  }

  const { appTheme_paletteMode } = useAppTheme()
  /**
   * NOTES:
   * This component should be wrapped inside Redux Context Provider.
   */

  const theme = useMemo<ITheme>(
    () => createTheme(appTheme_paletteMode),
    [appTheme_paletteMode]
  )

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default AppThemeProvider
