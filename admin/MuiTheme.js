const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const AppBar = require('material-ui/AppBar').default
const colors = require('material-ui/styles/colors')
const store = require('./store')
const { RESET_LOGIN } = require('./actions')

const muiTheme = getMuiTheme({
  appBar: {
    height: 40,
    color: colors.blue,
    textColor: colors.white
  }
})

const handleClick = () => {
  store.dispatch({
    type: RESET_LOGIN
  })
}

const Theme = () => (
  <MuiThemeProvider muiTheme={ muiTheme }>
    <AppBar onClick={handleClick} style={{position: 'fixed'}} title="Chatsworthy" />
  </MuiThemeProvider>
)

module.exports = Theme
