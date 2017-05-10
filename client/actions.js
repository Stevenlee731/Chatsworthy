const CHAT_OPENED = 'CHAT_OPENED'
const chatOpened = () => ({ type: CHAT_OPENED })

const CHAT_CLOSED = 'CHAT_CLOSED'
const chatClosed = () => ({ type: CHAT_CLOSED })

const Actions = {
  chatClosed,
  chatOpened,
  CHAT_OPENED,
  CHAT_CLOSED
}

module.exports = Actions
