const React = require('react')
const Avatar = require('material-ui/Avatar').default
const List = require('material-ui/List').default
const ListItem = require('material-ui/List/ListItem.js').default
const Subheader = require('material-ui/Subheader').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const Paper = require('material-ui/Paper/Paper').default
const Divider = require('material-ui/Divider/Divider').default
const CustomerList = require('./CustomerList')

const style = {
  height: '100vh',
  minWidth: '300px',
  paddingTop: 50,
  position: 'fixed'
}

const avatarStyle = {
  paddingLeft: '5px',
  paddingRight: '5px'
}

const MessageList = props => {
  return (
    <MuiThemeProvider>
      <Paper style={style} zDepth={3}>
        <List>
          <Subheader>Username</Subheader>
          <ListItem
            style={avatarStyle}
            primaryText="Brendan Lim"
            leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
            />
        </List>
        <Divider inset={true} />
        <List>
          <Subheader>Chats</Subheader>
          <CustomerList {...props} />
        </List>
      </Paper>
    </MuiThemeProvider>
  )
}

module.exports = MessageList
