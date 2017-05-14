const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const messageReceived = payload => ({ type: MESSAGE_RECEIVED, text: payload })

const Actions = {
  messageReceived,
  MESSAGE_RECEIVED
}

module.exports = Actions
