import { createSlice } from '@reduxjs/toolkit'

// Interfaces
import { RootState } from '@/redux'
import { PaletteMode } from '@/interfaces'

// type for our state
type AppThemeState = {
  appTheme_paletteMode: PaletteMode
}

// initial state
const initialState: AppThemeState = {
  appTheme_paletteMode: 'dark',
}

// actual slice
export const appThemeSlice = createSlice({
  name: 'appTheme',
  initialState,
  reducers: {
    appTheme_setPaletteMode(state, action) {
      state.appTheme_paletteMode = action.payload
    },
    appTheme_togglePaletteMode(state) {
      state.appTheme_paletteMode =
        state.appTheme_paletteMode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const appTheme_reducerActions = appThemeSlice.actions

export const appTheme_selectState = (state: RootState): AppThemeState =>
  state.appTheme
