const { MESSAGE_RECEIVED } = require('../actions')

const userMessages = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state.concat(action.payload)
    default:
      return state
  }
}

module.exports = userMessages
