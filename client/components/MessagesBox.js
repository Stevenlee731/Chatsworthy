const React = require('react')
const store = require('../store')
const { openChat, closeChat } = require('../actions')
const { Container, Header } = require('semantic-ui-react')

const MessagesBox = props => {
  const handleClick = () => {
    if (props.isChatOpen) {
      store.dispatch(closeChat)
    }
    else {
      store.dispatch(openChat)
    }
  }
  const messages = props.isChatOpen
    ? props.messages
    : []
  return (
    <div className='messages-container' onClick={handleClick}>
      <p className='messages-header'>assda
      </p>
    </div>
  )
}
module.exports = MessagesBox
