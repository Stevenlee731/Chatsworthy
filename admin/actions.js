const ADDED_ROOM = 'ADDED_ROOM'
const LEAVE_ROOM = 'LEAVE_ROOM'

const roomJoined = room => ({
  type: JOIN_ROOM,
  text: room
})

const JOIN_ROOM = 'JOIN_ROOM'
function joinRoom(room) {
  return function(dispatch, getState, {socket, appStorage}) {
    console.log('this is the current room', room)
    dispatch(roomJoined(room))
    const { currentRoom } = getState()
    socket.emit('join room', {
      customerID: currentRoom
    })
  }
}

const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = payload => ({
  type: MESSAGE_RECEIVED,
  text: payload.text,
  date: payload.date,
  customerID: payload.customerID
})

const Actions = {
  joinRoom,
  LEAVE_ROOM,
  JOIN_ROOM,
  ADDED_ROOM,
  messageReceived,
  MESSAGE_RECEIVED
}

module.exports = Actions
