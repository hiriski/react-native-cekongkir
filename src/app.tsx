/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { StyleSheet } from 'react-native'

// gesture handler root view.
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// safe area provider
import { SafeAreaProvider } from 'react-native-safe-area-context'

// providers
import { ReduxProvider } from '@/redux'
import { AppThemeProvider } from '@/components'

// components
import { StatusBar } from '@/components/core'
import { HomeScreen } from '@/screens'

const App = () => {
  return (
    <ReduxProvider>
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaProvider>
          <AppThemeProvider>
            <StatusBar translucent backgroundColor='transparent' />
            <HomeScreen />
          </AppThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ReduxProvider>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1 },
})

export default App
