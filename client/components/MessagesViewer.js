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
                  <Icon name='list layout' />
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
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      <div>Sample</div>
      </Card.Content>
      <Card.Content className='messages-footer' extra>
        <Grid>
          <Grid.Column width={13}>
            <Form>
              <TextArea placeholder='Talk to us!' autoHeight />
            </Form>
          </Grid.Column>
          <Grid.Column width={3}>
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
