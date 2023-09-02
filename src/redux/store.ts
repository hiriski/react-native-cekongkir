// prettier-ignore
import { configureStore, ThunkAction, Action, createListenerMiddleware } from '@reduxjs/toolkit'

// redux persist
// prettier-ignore
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

// async Storage
import AsyncStorage from '@react-native-async-storage/async-storage'

// reducers
import { rootReducer } from './reducers'

// slices
import { appThemeSlice } from './app/app-theme.slice'

// Config for Redux Persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: [appThemeSlice.name],
}

// listener middleware
export const listenerMiddleware = createListenerMiddleware()

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(listenerMiddleware.middleware),
})

// types
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>

const persistor = persistStore(store)

export { store, persistor }
