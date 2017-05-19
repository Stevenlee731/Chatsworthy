const React = require('react')
const store = require('../store')
const Avatar = require('material-ui/Avatar').default
const List = require('material-ui/List').default
const ListItem = require('material-ui/List/ListItem.js').default
const Subheader = require('material-ui/Subheader').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const Paper = require('material-ui/Paper/Paper').default
const Divider = require('material-ui/Divider/Divider').default
const CustomerList = require('./CustomerList')
const IconMenu = require('material-ui/IconMenu').default
const MenuItem = require('material-ui/MenuItem').default
const IconButton = require('material-ui/IconButton').default
const MoreVertIcon = require('material-ui/svg-icons/navigation/more-vert').default
const Staff = require('./Staff')
const { staffLogged } = require('../actions')

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="Change User"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color='grey' />
  </IconButton>
)

const handleChange = (event, value) => {
  store.dispatch(staffLogged(Staff[value]))
}

const rightIconMenu = (
  <IconMenu onChange={ handleChange } iconButtonElement={iconButtonElement}>
    <MenuItem value={0}>Login as Anna Chang</MenuItem>
    <MenuItem value={1}>Login as Brendan Lim</MenuItem>
    <MenuItem value={2}>Login as James Johnson</MenuItem>
  </IconMenu>
)

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
  const { staffLogin } = props
  return (
    <MuiThemeProvider>
      <Paper style={style} zDepth={3}>
        <List>
          <Subheader>Username</Subheader>
          <ListItem
            style={avatarStyle}
            primaryText={staffLogin.name}
            rightIconButton={rightIconMenu}
            leftAvatar={<Avatar src={staffLogin.profileImg} />}
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
