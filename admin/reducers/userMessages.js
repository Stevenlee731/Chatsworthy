const { MESSAGE_RECEIVED, MESSAGE_LOGGED } = require('../actions')

const initialState = {}

const userMessages = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return Object.assign({}, state, {
        [action.customerID]: [...state[action.customerID], {
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
