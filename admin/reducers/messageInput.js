const { INPUT_CHANGED, MESSAGE_SENT } = require('../actions')

const messageInput = (state = '', action) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return action.text
    case MESSAGE_SENT:
      return ''
    default:
      return state
  }
}

module.exports = messageInput
