const React = require('react')
const store = require('../store')
const { chatClosed, chatOpened, messageReceived } = require('../actions')
const FontIcon = require('material-ui/FontIcon').default
const FloatingActionButton = require('material-ui/FloatingActionButton').default
const blue500 = require('material-ui/styles/colors').default
const io = require('socket.io-client')
const socket = io('/')

const MessagesButton = props => {
  const handleClick = () => {
    if (props.isChatOpen) {
      store.dispatch(chatClosed())
    }
    else {
      socket.emit('fetch chat', localStorage.userID)
      socket.on('parsed chat', payload => {
        store.dispatch(messageReceived(payload))
      })
      store.dispatch(chatOpened())
    }
  }
  return (
    <FloatingActionButton className='chatsworthy' onClick={handleClick} >
      <FontIcon className="material-icons" color={ blue500 }>chat_bubble</FontIcon>
    </FloatingActionButton>
  )
}
module.exports = MessagesButton
