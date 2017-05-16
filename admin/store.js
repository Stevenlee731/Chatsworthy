const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const userMessages = require('./reducers/userMessages')
const chatRooms = require('./reducers/chatRooms')
const io = require('socket.io-client')
const socket = io('/')
const appStorage = localStorage

const reducer = combineReducers({
  userMessages,
  chatRooms
})

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({socket, appStorage}))
)

module.exports = store
