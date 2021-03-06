const CREATE_ID = 'CREATE_ID'

const CHAT_OPENED = 'CHAT_OPENED'
const chatOpened = () => ({ type: CHAT_OPENED })

const CHAT_CLOSED = 'CHAT_CLOSED'
const chatClosed = () => ({ type: CHAT_CLOSED })

const MESSAGE_SENT = 'MESSAGE_SENT'
const messageSent = message => ({
  type: MESSAGE_SENT,
  message
})

const INPUT_CHANGED = 'INPUT_CHANGED'
const inputChanged = event => ({
  type: INPUT_CHANGED,
  text: event.target.value
})

function sendMessage(message) {
  return function(dispatch, getState, {socket, appStorage}) {
    socket.emit('client message', message)
    dispatch(messageSent(message))
  }
}

const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = payload => ({
  type: MESSAGE_RECEIVED,
  payload
})

const Actions = {
  messageReceived,
  MESSAGE_RECEIVED,
  CREATE_ID,
  inputChanged,
  INPUT_CHANGED,
  chatClosed,
  chatOpened,
  CHAT_OPENED,
  CHAT_CLOSED,
  sendMessage,
  messageSent,
  MESSAGE_SENT
}

module.exports = Actions
