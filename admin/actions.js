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

const INPUT_CHANGED = 'INPUT_CHANGED'
const inputChanged = event => ({
  type: INPUT_CHANGED,
  text: event.target.value
})

const STAFF_LOGIN = 'STAFF_LOGIN'
const staffLogged = staff => ({
  type: STAFF_LOGIN,
  name: staff.name,
  staffID: staff.staffID,
  profileImg: staff.profileImg
})

function sendMessage(message) {
  return function(dispatch, getState, {socket, appStorage}) {
    socket.emit('support message', message)
    dispatch(messageSent(message))
  }
}

const MESSAGE_SENT = 'MESSAGE_SENT'
const messageSent = payload => ({
  type: MESSAGE_SENT,
  payload
})

const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = payload => ({
  type: MESSAGE_RECEIVED,
  payload
})

const Actions = {
  staffLogged,
  STAFF_LOGIN,
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
