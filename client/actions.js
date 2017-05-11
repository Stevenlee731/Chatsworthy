const CHAT_OPENED = 'CHAT_OPENED'
const chatOpened = () => ({ type: CHAT_OPENED })

const CHAT_CLOSED = 'CHAT_CLOSED'
const chatClosed = () => ({ type: CHAT_CLOSED })

const MESSAGE_SENT = 'MESSAGE_SENT'
const messageSent = payload => ({ type: MESSAGE_SENT, text: payload })

const INPUT_CHANGED = 'INPUT_CHANGED'
const inputChanged = event => ({ type: INPUT_CHANGED, text: event.target.value })

const sendMessage = (dispatch, getState, socket) => {
  const text = getState().messageInput
  socket.emit('message', text)
  dispatch(messageSent(text))
}

const Actions = {
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
