const { MESSAGE_RECEIVED, MESSAGE_LOGGED } = require('../actions')

const initialState = {}

const userMessages = (state = initialState, action) => {
  const currentUserMessages = state[action.customerID] || []
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return Object.assign({}, state, {
        [action.customerID]: [...currentUserMessages, {
          text: action.text,
          date: action.date,
          customerID: action.customerID
        }]
      })
    case MESSAGE_LOGGED:
      return []
    default:
      return state
  }
}

module.exports = userMessages
