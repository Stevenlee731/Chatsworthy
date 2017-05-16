const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const userMessages = require('./reducers/userMessages')
const isChatOpen = require('./reducers/isChatOpen')
const messageInput = require('./reducers/messageInput')
const createID = require('./reducers/createID')
const io = require('socket.io-client')
const socket = io('/')
const appStorage = localStorage

const reducer = combineReducers({
  isChatOpen,
  userMessages,
  messageInput,
  createID
})

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({socket, appStorage}))
)

module.exports = store
