const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const Paper = require('material-ui/Paper/Paper').default

const style = {
  height: '100vh',
  Width: '100%',
  paddingLeft: 300
}

const MessageView = props => {
  const { userMessages } = props
  return (
    <MuiThemeProvider>
      <Paper style={style} >
        <div style={{paddingLeft: '50px', paddingRight: '50px'}}>

        </div>
        </Paper>
    </MuiThemeProvider>
  )
}

module.exports = MessageView
