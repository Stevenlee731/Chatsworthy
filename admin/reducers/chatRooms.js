const { ADDED_ROOM, CLEARED_ROOM } = require('../actions')

const chatRooms = (state = [], action) => {
  switch (action.type) {
    case ADDED_ROOM:
      if (!state.includes(action.rooms)) {
        return state.concat(action.rooms)
      }
      else {
        return state
      }
    case CLEARED_ROOM:
      return []
    default:
      return state
  }
}

module.exports = chatRooms
