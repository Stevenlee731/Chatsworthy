const ADDED_ROOM = 'ADDED_ROOM'

const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = payload => ({ type: MESSAGE_RECEIVED, payload })

const Actions = {
  ADDED_ROOM,
  messageReceived,
  MESSAGE_RECEIVED
}

module.exports = Actions
