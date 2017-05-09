const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = text => ({ type: 'MESSAGE_RECEIVED', text })

const MESSAGES_CLEARED = 'MESSAGES_CLEARED'
const messageCleared = () => ({ type: 'MESSAGE_CLEARED' })

const CHAT_OPENED = 'CHAT_OPENED'
const closeChat = () => ({ type: 'CHAT_OPENED' })

const CHAT_CLOSED = 'CHAT_CLOSED'
const openChat = () => ({ type: 'CHAT_CLOSED' })

module.exports = {
  messageReceived,
  messageCleared,
  closeChat,
  openChat
}
