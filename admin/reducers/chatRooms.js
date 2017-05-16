const { ADDED_ROOM } = require('../actions')

const chatRooms = (state = [], action) => {
  switch (action.type) {
    case ADDED_ROOM:
      return state.concat(action.rooms)
    default:
      return state
  }
}

module.exports = chatRooms
