import './app/styles/main.scss'
import { AppRouter } from './app/AppRouter'
import { useContext, useEffect, useState } from 'react'
import { Theme, ThemeContext } from './app/styles/theme/ThemeContext'
import { useTheme } from './app/styles/theme/useTheme'
import { classNames } from './shared/helpers/classNames'

function App() {
  const {theme} = useTheme()

  return (
    <div
    className={classNames('app', {}, [theme])}
    >
      <AppRouter>
      </AppRouter>
    </div>
  )
}

export default App
