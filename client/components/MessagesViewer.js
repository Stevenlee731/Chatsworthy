const React = require('react')
const Card = require('material-ui/Card/Card').default
const CardActions = require('material-ui/Card/CardActions').default
const CardHeader = require('material-ui/Card/CardHeader').default
const CardText = require('material-ui/Card/CardText').default
const FlatButton = require('material-ui/FlatButton').default
const TextField = require('material-ui/TextField').default
const moment = require('moment')
const { chatClosed, chatOpened, INPUT_CHANGED, sendMessage } = require('../actions')
const store = require('../store')

const Divider = require('material-ui/Divider/Divider').default

const style = {
  minWidth: '375px',
  height: '100vh',
  right: 0,
  position: 'absolute',
  borderRight: '1px solid #E0E0E0'
}
//
// function User(id) {
//   return {
//     id: uniqueId(),
//   }
// }
// const uniqueId = () => {
//   return 'id-' + Math.random().toString(36).substr(2, 16)
// }

const Message = props => {
  return (
      <div style={{paddingTop: '5px'}}>
        <div style={{paddingLeft: '60px'}}>
          <div>
            <div>{moment().fromNow()}</div>
          </div>
          <div className="client-message" style={{backgroundColor: '#00B1E1'}}>
          { props.text }
        </div>
        </div>
      </div>
  )
}

const Messages = props => {
  const { userMessages } = props
  return (
    <div>
    { userMessages.map((message, i) => {
      return <Message key={ i } text={ message } />
    }) }
  </div>
  )
}

const MessagesViewer = props => {
  const { isChatOpen, messageInput, userMessages } = props
  const handleChange = event => {
    store.dispatch({
      type: INPUT_CHANGED,
      text: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    // const message = {
    //   date: moment().fromNow(),
    //   text: messageInput
    // }
    // console.log(message)
    store.dispatch(sendMessage)
  }
  const handleClick = () => {
    if (props.isChatOpen) {
      store.dispatch(chatClosed())
    }
    else {
      store.dispatch(chatOpened())
    }
  }

  if (!isChatOpen) return null
  return (
      <Card style={style}>
        <CardHeader
          style={{
            width: '100%',
            minHeight: '60px',
            borderBottom: '1px solid #E0E0E0',
            borderTop: '1px solid #E0E0E0'
          }}
          title="Scott Pilgrim"
          subtitle="Online"
          closeIcon='true'
          avatar="http://www.material-ui.com/images/ok-128.jpg"
        />
        <Divider />
        <CardText style={{overflowY: 'auto', maxHeight: '65vh'}}>
            <Messages messageInput={messageInput} userMessages={userMessages} isChatOpen={isChatOpen}/>
        </CardText>
        <CardActions style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', position: 'absolute', display: 'inline-block', bottom: '0', width: '100%', textAlign: 'right' }}>
          <form onSubmit={ handleSubmit }>
            <TextField value={ messageInput } onChange={ handleChange } style={{paddingLeft: '10px', paddingRight: '10px'}}
              hintText="Talk to us!"
              fullWidth={true}
            />
          <FlatButton onClick={handleClick} label="Close" />
          <FlatButton type='submit' label="Send" />
          </form>
        </CardActions>
      </Card>
  )
}

module.exports = MessagesViewer
