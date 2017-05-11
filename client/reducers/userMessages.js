const { MESSAGES_CLEARED, MESSAGE_SENT } = require('../actions')

const userMessages = (state = [], action) => {
  switch (action.type) {
    case MESSAGES_CLEARED:
      return ''
    case MESSAGE_SENT:
      return state.concat(action.text)
    default:
      return state
  }
}

module.exports = userMessages
