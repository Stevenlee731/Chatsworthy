const { MESSAGE_RECEIVED } = require('../actions')

// const initialState = {
//   loaded: false,
//   data: [],
//   fetchHistory: []
// }

const userMessages = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state.concat(action.text)
    default:
      return state
  }
}

module.exports = userMessages
