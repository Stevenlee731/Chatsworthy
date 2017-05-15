const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const userMessages = require('./reducers/userMessages')
const io = require('socket.io-client')
const socket = io('/')
const appStorage = localStorage

const reducer = combineReducers({
  userMessages
})

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({socket, appStorage}))
)

module.exports = store
