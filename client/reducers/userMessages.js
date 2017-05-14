const { MESSAGE_RECEIVED, MESSAGE_SENT } = require('../actions')

// const initialState = [
//   {
//     date: 'steve',
//     text: 'hello'
//   }
// ]

const userMessages = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state.concat(action.text)
    case MESSAGE_SENT:
      return state.concat({ text: action.message })
    default:
      return state
  }
}

module.exports = userMessages
