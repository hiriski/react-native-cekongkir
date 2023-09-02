/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/app.tsx'
import { name as appName } from './src/app.json'

import 'react-native-gesture-handler'

// React Native Screens.
import { enableScreens } from 'react-native-screens'

enableScreens()

AppRegistry.registerComponent(appName, () => App)
