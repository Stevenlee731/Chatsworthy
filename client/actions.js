const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = text => ({ type: MESSAGE_RECEIVED, text })

const MESSAGES_CLEARED = 'MESSAGES_CLEARED'
const messagesCleared = () => ({ type: MESSAGES_CLEARED })

const CHAT_OPENED = 'CHAT_OPENED'
const chatOpened = () => ({ type: CHAT_OPENED })

const CHAT_CLOSED = 'CHAT_CLOSED'
const chatClosed = () => ({ type: CHAT_CLOSED })

const MESSAGE_SENT = 'MESSAGE_SENT'
const messageSent = payload => ({ type: MESSAGE_SENT, text: payload })

const INPUT_CHANGED = 'INPUT_CHANGED'
const inputChanged = event => ({ type: INPUT_CHANGED, text: event.target.value })

const sendMessage = (dispatch, getState, socket) => {
  const state = getState()
  const text = state.messageInput.text
  // socket.emit('User Message', { text: text })
  dispatch(messageSent('test'))
}

const Actions = {
  inputChanged,
  INPUT_CHANGED,
  messageReceived,
  messagesCleared,
  chatClosed,
  chatOpened,
  CHAT_OPENED,
  CHAT_CLOSED,
  MESSAGES_CLEARED,
  MESSAGE_RECEIVED,
  sendMessage,
  messageSent
}

module.exports = Actions
