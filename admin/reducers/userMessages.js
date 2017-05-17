const { MESSAGE_RECEIVED, MESSAGE_SENT, MESSAGE_LOGGED } = require('../actions')

const initialState = []

const userMessages = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_SENT:
      return [...state, {
        text: action.text,
        date: action.date,
        staffID: action.customerID
      }]
    case MESSAGE_RECEIVED:
      return action.payload
    case MESSAGE_LOGGED:
      return []
    default:
      return state
  }
}

module.exports = userMessages
