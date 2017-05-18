const React = require('react')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const Paper = require('material-ui/Paper/Paper').default
const Avatar = require('material-ui/Avatar').default
const { Comment } = require('semantic-ui-react')

const style = {
  Width: '100%',
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
  const { userMessages } = props
  return (
    <Comment.Group style={{overflowY: 'auto', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
      { userMessages.map((message, i) => {
        return <Message key={ i } customerID={message.customerID} date={ message.date } text={ message.text } />
      })
      }
    </Comment.Group>
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
  return <Messages userMessages={ userMessages } currentRoom={ currentRoom }/>
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
