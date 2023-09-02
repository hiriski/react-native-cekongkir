import { createContext } from 'react'
import { ITheme } from '@/interfaces'

export const themeContext = createContext<ITheme>({} as ITheme)
