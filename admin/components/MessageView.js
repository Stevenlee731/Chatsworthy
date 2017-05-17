const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const Paper = require('material-ui/Paper/Paper').default
const Avatar = require('material-ui/Avatar').default

const style = {
  height: '100vh',
  Width: '100%',
  paddingLeft: 300
}
//
// const MessageBox = props => {
//   const { userMessages, currentRoom } = props
// }

const SwitchView = props => {
  const { chatRooms, userMessages, currentRoom } = props
  if (currentRoom === 'main') {
    return (
      <div style={{margin: 'auto', width: '300px', height: '100%', position: 'relative', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
        <div style={{position: 'absolute', top: '50%', height: '160px', marginTop: '-80px'}}>
          <div style={{margin: 'auto', width: '100px'}}>
            <Avatar
            src="http://www.material-ui.com/images/ok-128.jpg"
            size={100}
            />
          </div>
          <h1>Welcome back!</h1>
        </div>
      </div>
    )
  }
  return console.log('message view')
}

const MessageView = props => {
  return (
    <MuiThemeProvider>
      <Paper style={style} >
        { SwitchView(props) }
      </Paper>
    </MuiThemeProvider>
  )
}

module.exports = MessageView
