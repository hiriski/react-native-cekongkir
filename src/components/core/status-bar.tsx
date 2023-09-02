import { useAppTheme } from '@/hooks'
import React, { FC } from 'react'
import { StatusBar as ReactNativeStatusBar, StatusBarProps } from 'react-native'

const StatusBar: FC<StatusBarProps> = (props): JSX.Element => {
  const { palette } = useAppTheme()
  return (
    <ReactNativeStatusBar
      barStyle={
        props.barStyle ?? palette.mode === 'dark'
          ? 'light-content'
          : 'dark-content'
      }
      {...props}
    />
  )
}

export default StatusBar
