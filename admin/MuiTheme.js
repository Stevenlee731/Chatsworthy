const React = require('react')
const darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const AppBar = require('material-ui/AppBar').default
const colors = require('material-ui/styles/colors')

const muiTheme = getMuiTheme({
  appBar: {
    height: 40,
    color: colors.blue,
    textColor: colors.white
  }
})

const Theme = () => (
  <MuiThemeProvider muiTheme={ muiTheme }>
    <AppBar style={{position: 'fixed'}} title="Chatsworthy" />
  </MuiThemeProvider>
)

module.exports = Theme
