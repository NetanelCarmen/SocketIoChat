import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Themes from "./config";
import App from './components/App'

console.log(Themes.default)

document.body.style.padding = 0
document.body.style.margin = 0

ReactDOM.render(
  <ThemeProvider theme={Themes.default}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)