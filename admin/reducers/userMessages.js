const { MESSAGE_RECEIVED, MESSAGE_LOGGED, MESSAGE_SENT } = require('../actions')

const initialState = []

const userMessages = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_SENT:
      return action.payload
    case MESSAGE_RECEIVED:
      return action.payload
    case MESSAGE_LOGGED:
      return []
    default:
      return state
  }
}

module.exports = userMessages
