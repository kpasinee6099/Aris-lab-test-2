import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

import theme from './theme/theme'
import Routes from './routes'
import './App.css'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  )
}

export default App
