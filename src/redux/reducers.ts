// redux toolkit
import { combineReducers } from '@reduxjs/toolkit'

// slices & apis
import { appThemeSlice } from './app/app-theme.slice'

const plainReducers = {
  [appThemeSlice.name]: appThemeSlice.reducer,
}

const rootReducer = combineReducers(plainReducers)

export { plainReducers, rootReducer }
