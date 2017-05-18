const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const Paper = require('material-ui/Paper/Paper').default
const Avatar = require('material-ui/Avatar').default
const TextField = require('material-ui/TextField').default
const { Comment } = require('semantic-ui-react')
const Card = require('material-ui/Card/Card').default
const CardActions = require('material-ui/Card/CardActions').default
const FlatButton = require('material-ui/FlatButton').default
const moment = require('moment')
const store = require('../store')
const { INPUT_CHANGED, sendMessage } = require('../actions')

const style = {
  width: '100%',
  paddingLeft: 300
}

const Message = props => {
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
  const { userMessages, currentRoom, messageInput } = props
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
      text: messageInput
    }
    store.dispatch(sendMessage(message))
  }
  return (
    <Card style={{width: '100%'}}>
      <Comment.Group style={{height: '75vh', overflowY: 'auto', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
        { userMessages.map((message, i) => {
          return <Message key={ i } customerID={message.customerID} date={ message.date } text={ message.text } />
        })
        }
      </Comment.Group>
      <CardActions style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', position: 'relative', display: 'inline-block', bottom: '0', width: '100%', textAlign: 'right' }}>
        <form onSubmit={ handleSubmit } style={{width: '100%'}}>
          <TextField onChange={ handleChange } style={{paddingLeft: '10px', paddingRight: '10px'}}
            hintText="Talk to us!"
            fullWidth={true}
          />
        <FlatButton type='submit' label="Send" />
        </form>
      </CardActions>
    </Card>
  )
}

const SwitchView = props => {
  const { currentRoom, userMessages } = props
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
  return (
    <div style={{height: '100vh', width: '100%'}}>
      <Messages style={{position: 'absolute'}} userMessages={ userMessages } currentRoom={ currentRoom }/>
    </div>
  )
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

// <Card style={style}>
//   <Comment.Group style={{height: '100%', overflowY: 'auto', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', paddingBottom: '50px'}}>
//     { userMessages.map((message, i) => {
//       return <Message key={ i } customerID={message.customerID} date={ message.date } text={ message.text } />
//     })
//     }
//   </Comment.Group>
//   <CardActions style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', position: 'absolute', display: 'inline-block', bottom: '0', width: '100%', textAlign: 'right' }}>
//     <form onSubmit={ handleSubmit }>
//       <TextField value={ messageInput } onChange={ handleChange } style={{paddingLeft: '10px', paddingRight: '10px'}}
//         hintText="Talk to us!"
//         fullWidth={true}
//       />
//     <FlatButton onClick={handleClick} label="Close" />
//     <FlatButton type='submit' label="Send" />
//     </form>
//   </CardActions>
// </Card>

// <div style={{position: 'absolute', botton: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '61%', height: '20vh'}}>
//   <form style={{width: '100%'}}>
//     <TextField
//       style={{paddingRight: '20px', paddingLeft: '20px', position: 'relative'}}
//       fullWidth={true}
//      hintText="reply"
//    />
//   </form>
// </div>
