import { useContext } from 'react'
import { themeContext } from '@/context'
import { useAppSelector } from '@/redux'
import { appTheme_selectState } from '@/redux/app/app-theme.slice'

const useAppTheme = () => {
  const appThemeState = useAppSelector(appTheme_selectState)
  const context = useContext(themeContext)

  return {
    ...appThemeState,
    ...context,
  }
}

export { useAppTheme }
