const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = text => ({ type: MESSAGE_RECEIVED, text })

const MESSAGES_CLEARED = 'MESSAGES_CLEARED'
const messagesCleared = () => ({ type: MESSAGES_CLEARED })

const CHAT_OPENED = 'CHAT_OPENED'
const chatOpened = () => ({ type: CHAT_OPENED })

const CHAT_CLOSED = 'CHAT_CLOSED'
const chatClosed = () => ({ type: CHAT_CLOSED })

const Actions = {
  messageReceived,
  messagesCleared,
  chatClosed,
  chatOpened,
  CHAT_OPENED,
  CHAT_CLOSED,
  MESSAGES_CLEARED,
  MESSAGE_RECEIVED
}

module.exports = Actions
