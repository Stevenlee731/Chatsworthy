const { MESSAGE_SENT } = require('../actions')

const userMessages = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_SENT:
      return state.concat(action.text)
    default:
      return state
  }
}

module.exports = userMessages
