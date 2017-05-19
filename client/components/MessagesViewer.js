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
const { Grid, Image } = require('semantic-ui-react')

const Divider = require('material-ui/Divider/Divider').default

const style = {
  maxWidth: '375px',
  minWidth: '375px',
  height: '100vh',
  right: 0,
  position: 'absolute',
  borderRight: '1px solid #E0E0E0'
}

const StaffMessage = props => {
  return (
    <Grid>
      <Grid.Row className={'message-content'} style={{margintop: '10px'}}>
        <Grid.Column width={3}>
          <Image style={{bottom: '0', position: 'absolute'}} src={ props.profileImg } avatar shape='circular' />
        </Grid.Column>
        <Grid.Column className="staff-message" style={{backgroundColor: '#e8e8e8'}} width={12}>
          { props.text }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className={'message-footer'} style={{marginBotton: '10px'}}>
        <Grid.Column style={{textAlign: 'left'}} width={6}>
          { props.name }
        </Grid.Column>
        <Grid.Column style={{textAlign: 'right', paddingRight: '23px'}} width={10}>
          { props.date }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const ClientMessage = props => {
  return (
      <div style={{paddingTop: '5px', paddingBottom: '13px'}}>
        <div style={{paddingLeft: '30px'}}>
          <div>
            <div>{ props.date }</div>
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
      if (message.staffID) {
        return <StaffMessage key={ i } profileImg={message.profileImg} staffID={message.staffID} name={message.name} customerID={message.customerID} date={ message.date } text={ message.text } />
      }
      else {
        return <ClientMessage key={ i } customerID={message.customerID} date={ message.date } text={ message.text } />
      }
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
    const message = {
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      customerID: localStorage.userID,
      client: 'Bankjoy',
      text: messageInput
    }
    store.dispatch(sendMessage(message))
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
          title="Bankjoy Customer Service"
          subtitle="How can we help you today?"
          closeIcon='true'
          avatar="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAfJAAAAJGM1NWE4OWM2LTI2NDktNDFhNC05Y2VjLWMxYzM1NjRlYzFmMQ.png"
        />
        <Divider />
        <CardText style={{overflowY: 'auto', maxHeight: '78vh', paddingBottom: '20px'}}>
            <Messages userMessages={userMessages} />
        </CardText>
        <CardActions style={{ backgroundColor: 'white', borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', position: 'absolute', display: 'inline-block', bottom: '0', width: '100%', textAlign: 'right' }}>
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
