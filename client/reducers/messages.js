const { MESSAGE_RECEIVED, MESSAGES_CLEARED, MESSAGE_SENT } = require('../actions')

const messages = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state.concat(action.text)
    case MESSAGES_CLEARED:
      return ''
    case MESSAGE_SENT:
      return state.concat(action.text)
    default:
      return state
  }
}

module.exports = messages
