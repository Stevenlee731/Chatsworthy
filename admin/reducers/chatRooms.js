const { ADDED_ROOM } = require('../actions')

const chatRooms = (state = [], action) => {
  switch (action.type) {
    case ADDED_ROOM:
      if (!state.includes(action.rooms)) {
        return state.concat(action.rooms)
      }
      else {
        return state
      }
    default:
      return state
  }
}

module.exports = chatRooms
