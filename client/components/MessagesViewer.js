const React = require('react')
const store = require('../store')
const { chatClosed, chatOpened } = require('../actions')
const { Card, Form, TextArea, Button, Icon, Grid, Image } = require('semantic-ui-react')

const MessagesViewer = props => {
  const { isChatOpen } = props
  const handleClick = () => {
    if (props.isChatOpen) {
      store.dispatch(chatClosed())
    }
    else {
      store.dispatch(chatOpened())
    }
  }
  console.log('isChatOpen', isChatOpen)
  if (!isChatOpen) return null
  return (
    <Card className='messages-viewer'>
      <Card.Content>
        <Card.Header className="messages-header">
          <Grid>
            <Grid.Column width={12}>
              <Grid>
                <Grid.Column width={6} className="avatar">
                  <div className="avatar-image">
                    <Image shape='circular' centered src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                  </div>
                </Grid.Column>
                <Grid.Column width={10} className="description">
                  <div className="avatar-name">Steven Lee</div>
                  <div>offline</div>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4}>
              <span onClick={handleClick} className="back-button">
                <Button icon>
                  <Icon name='window close' />
                </Button>
              </span>
            </Grid.Column>
          </Grid>
        </Card.Header>
      </Card.Content>
      <Card.Content className='messages-background'>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      </Card.Content>
      <Card.Content className='messages-footer' extra>
        <Grid>
          <Grid.Column width={12}>
            <Form>
              <TextArea placeholder='Talk to us!' autoHeight />
            </Form>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button icon>
              <Icon name='send outline' />
            </Button>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

module.exports = MessagesViewer
