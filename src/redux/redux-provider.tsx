import React, { FC, ReactNode } from 'react'
import { ActivityIndicator, View, Dimensions } from 'react-native'

// Redux & Redux Persist
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Store
import { persistor, store } from '@/redux'

const dimen = Dimensions.get('window')

const Loading = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: dimen.height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size='large' />
    </View>
  )
}
interface ReduxProviderProps {
  children: ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
