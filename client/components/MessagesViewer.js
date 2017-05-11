const React = require('react')
const store = require('../store')
const { chatClosed, chatOpened, INPUT_CHANGED, sendMessage } = require('../actions')
const { Comment, Card, Form, TextArea, Button, Icon, Grid, Image } = require('semantic-ui-react')
const moment = require('moment')

const Message = props => {
  return (
      <Comment.Content>
        <div style={{paddingLeft: '60px'}}>
          <Comment.Metadata>
            <div>{moment().fromNow()}</div>
          </Comment.Metadata>
          <Comment.Text className="client-message" style={{backgroundColor: '#00B1E1'}}>
          { props.text }
          </Comment.Text>
        </div>
      </Comment.Content>
  )
}

const Messages = props => {
  const { userMessages } = props
  return (
    <Comment>
    { userMessages.map((message, i) => {
      return <Message key={ i } text={ message } />
    }) }
    </Comment>
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
    <Card className='messages-viewer'>
      <Card.Content>
        <Card.Header className="messages-header">
          <Grid>
            <Grid.Column width={11}>
              <Grid>
                <Grid.Column width={4} className="avatar">
                  <div className="avatar-image">
                    <Image shape='circular' centered src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' fluid />
                  </div>
                </Grid.Column>
                <Grid.Column width={12} className="description">
                  <div className="avatar-name">Steven Lee</div>
                  <span><Icon color='green' name='circle' />online</span>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={5}>
              <Button.Group onClick={handleClick} icon floated='right'>
                <Button>
                  <Icon name='window close' />
                </Button>
                <Button>
                  <Icon name='window close' />
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Card.Header>
      </Card.Content>
      <Card.Content className='messages-background'>
        <Comment.Group>
          <Messages messageInput={messageInput} userMessages={userMessages} isChatOpen={isChatOpen}/>
        </Comment.Group>
      </Card.Content>
      <Card.Content className='messages-footer' extra>
        <Form onSubmit={ handleSubmit }>
          <TextArea value={ messageInput } onChange={ handleChange } placeholder='Talk to us!' autoHeight style={{maxHeight: '41px'}} />
            <div style={{marginTop: '5px'}}>
              <Button color='teal' type='submit' content='Send' icon='send outline' labelPosition='right' floated='right'/>
            </div>
        </Form>
      </Card.Content>
    </Card>
  )
}

module.exports = MessagesViewer
