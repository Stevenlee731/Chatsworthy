const { createStore, combineReducers } = require('redux')
const messages = require('./reducers/messages')
const isChatOpen = require('./reducers/isChatOpen')

const reducer = combineReducers({
  isChatOpen,
  messages
})

const store = createStore(reducer)

module.exports = store
