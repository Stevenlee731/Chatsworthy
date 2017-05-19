const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const Paper = require('material-ui/Paper/Paper').default
const Avatar = require('material-ui/Avatar').default
const TextField = require('material-ui/TextField').default
const { Comment } = require('semantic-ui-react')
const Card = require('material-ui/Card/Card').default
const FlatButton = require('material-ui/FlatButton').default
const moment = require('moment')
const store = require('../store')
const { INPUT_CHANGED, sendMessage } = require('../actions')

const style = {
  width: '100%',
  height: '100vh',
  paddingLeft: 300
}

const StaffMessage = props => {
  return (
    <Comment>
      <Comment.Avatar as='a' src={props.profileImg} />
      <Comment.Content>
        <Comment.Author>{ props.name } - Customer Support</Comment.Author>
        <Comment.Metadata>
          <div>{ props.date }</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>{ props.text }</p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

const ClientMessage = props => {
  return (
    <Comment>
      <Comment.Avatar as='a' src='https://twibbon.com/content/images/system/default-image.jpg' />
      <Comment.Content>
        <Comment.Author>{ props.customerID }</Comment.Author>
        <Comment.Metadata>
          <div>{ props.date }</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>{ props.text }</p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

const Messages = props => {
  const { userMessages, currentRoom, messageInput, staffLogin } = props
  const handleChange = event => {
    store.dispatch({
      type: INPUT_CHANGED,
      text: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    const message = {
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      customerID: currentRoom,
      text: messageInput,
      staffID: staffLogin.staffID,
      profileImg: staffLogin.profileImg,
      name: staffLogin.name
    }
    store.dispatch(sendMessage(message))
  }
  return (
  <div style={{width: '100%', position: 'relative'}}>
    <Card style={{width: '100%', height: '100vh'}}>
      <Comment.Group style={{height: '86vh', overflowY: 'auto', paddingLeft: '50px', paddingTop: '50px', paddingBottom: '50px'}}>
        { userMessages.map((message, i) => {
          if (message.staffID) {
            return <StaffMessage key={ i } profileImg={message.profileImg} staffID={message.staffID} name={message.name} customerID={message.customerID} date={ message.date } text={ message.text } />
          }
          else {
            return <ClientMessage key={ i } customerID={message.customerID} date={ message.date } text={ message.text } />
          }
        })
        }
      </Comment.Group>
    </Card>
    <form onSubmit={ handleSubmit } style={{ backgroundColor: 'white', zIndex: '1', borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', position: 'absolute', bottom: 0, display: 'inline-block', width: '100%', textAlign: 'right' }}>
      <TextField onChange={ handleChange } style={{paddingLeft: '30px', paddingRight: '30px'}}
        hintText="Reply"
        fullWidth={true}
      />
    <FlatButton style={{marginRight: '10%'}} type='submit' label="Send" />
    </form>
  </div>
  )
}

const SwitchView = props => {
  const { currentRoom, userMessages, messageInput, staffLogin } = props
  if (currentRoom === 'main') {
    return (
      <div style={{margin: 'auto', width: '300px', height: '100%', position: 'relative', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
        <div style={{position: 'absolute', top: '50%', height: '160px', marginTop: '-80px'}}>
          <div style={{margin: 'auto', width: '100px'}}>
            <Avatar
            src={staffLogin.profileImg}
            size={100}
            />
          </div>
          <h1 style={{textAlign: 'center'}}>Welcome back {staffLogin.name}!</h1>
        </div>
      </div>
    )
  }
  return (
    <div style={{height: '100vh', width: '100%'}}>
      <Messages style={{position: 'absolute'}} staffLogin={staffLogin} messageInput={ messageInput } userMessages={ userMessages } currentRoom={ currentRoom }/>
    </div>
  )
}

const MessageView = props => {
  console.log('messageview', props)
  return (
    <MuiThemeProvider>
      <Paper style={style} >
        { SwitchView(props) }
      </Paper>
    </MuiThemeProvider>
  )
}

module.exports = MessageView
