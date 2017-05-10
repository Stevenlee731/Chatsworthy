const { createStore, combineReducers } = require('redux')
const isChatOpen = require('./reducers/isChatOpen')

const reducer = combineReducers({
  isChatOpen
})

const store = createStore(reducer)

module.exports = store
