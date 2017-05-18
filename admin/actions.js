const ADDED_ROOM = 'ADDED_ROOM'
const LEAVE_ROOM = 'LEAVE_ROOM'

const roomJoined = room => ({
  type: JOIN_ROOM,
  text: room
})

const MESSAGE_SENT = 'MESSAGE_SENT'
const messageSent = message => ({
  type: MESSAGE_SENT,
  message
})

function sendMessage(message) {
  return function(dispatch, getState, {socket, appStorage}) {
    const { userMessages, currentRoom } = getState()
    socket.emit('message', message)
    console.log(message)
    // dispatch(messageSent(message))
    // appStorage.setItem(currentRoom, userMessages)
  }
}

const INPUT_CHANGED = 'INPUT_CHANGED'
const inputChanged = event => ({
  type: INPUT_CHANGED,
  text: event.target.value
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
  payload
})

const Actions = {
  messageSent,
  MESSAGE_SENT,
  sendMessage,
  inputChanged,
  INPUT_CHANGED,
  joinRoom,
  LEAVE_ROOM,
  JOIN_ROOM,
  ADDED_ROOM,
  messageReceived,
  MESSAGE_RECEIVED
}

module.exports = Actions
