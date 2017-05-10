const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const userMessages = require('./reducers/userMessages')
const isChatOpen = require('./reducers/isChatOpen')
const messageInput = require('./reducers/messageInput')

const reducer = combineReducers({
  isChatOpen,
  userMessages,
  messageInput
})

const store = createStore(reducer, applyMiddleware(thunk))

module.exports = store
