const React = require('react')
const store = require('../store')
const MessageList = require('./MessageList')
const MessageView = require('./MessageView')
const Paper = require('material-ui/Paper/Paper').default
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const List = require('material-ui/List').default
const Subheader = require('material-ui/Subheader').default
const IconMenu = require('material-ui/IconMenu').default
const MenuItem = require('material-ui/MenuItem').default
const IconButton = require('material-ui/IconButton').default
const FingerPrint = require('material-ui/svg-icons/action/fingerprint').default
const { staffLogged } = require('../actions')
const Staff = require('./Staff')

const style = {
  maxHeight: 100,
  backgroundColor: 'rgb(0, 188, 212)',
  maxWidth: 300,
  textAlign: 'center',
  display: 'inline-block',
  position: 'absolute',
  margin: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

const handleChange = (event, value) => {
  store.dispatch(staffLogged(Staff[value]))
}

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <FingerPrint color='white' />
  </IconButton>
)

const ChatBox = props => {
  const { staffLogin } = props
  return (
    <div>
      { staffLogin.logged ||
        <MuiThemeProvider>
          <Paper style={style} zDepth={2}>
            <List>
              <Subheader style={{color: 'white'}}>Login to Chatsworthy!</Subheader>
                <IconMenu onChange={ handleChange } iconButtonElement={iconButtonElement}>
                  <MenuItem value={0}>Login as Anna Chang</MenuItem>
                  <MenuItem value={1}>Login as Brendan Lim</MenuItem>
                  <MenuItem value={2}>Login as James Johnson</MenuItem>
                </IconMenu>
            </List>
          </Paper>
        </MuiThemeProvider> }
      { staffLogin.logged &&
      <div>
        <MessageList staffLogin={props.staffLogin} chatRooms={props.chatRooms} userMessages={props.userMessages}></MessageList>
        <MessageView {...props}/>
      </div> }
    </div>
  )
}

module.exports = ChatBox
