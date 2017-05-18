const { JOIN_ROOM, LEAVE_ROOM } = require('../actions')

const currentRoom = (state = 'main', action) => {
  switch (action.type) {
    case JOIN_ROOM:
      return action.text
    case LEAVE_ROOM:
      return ''
    default:
      return state
  }
}

module.exports = currentRoom
