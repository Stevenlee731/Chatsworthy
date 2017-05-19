const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const ChatBox = require('./components/ChatBox')
const MuiTheme = require('./MuiTheme')
const io = require('socket.io-client')
const socket = io('/')
const { messageReceived, ADDED_ROOM } = require('./actions')
const injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

window.store = store

const App = props => {
  return (
      <div>
        <MuiTheme/>
        <div className='app'>
          <ChatBox {...props} />
        </div>
      </div>
  )
}

const render = () => {
  const state = store.getState()
  console.log('state', state)
  const $app = document.querySelector('#app')
  ReactDOM.render(<App {...state} />, $app)
}

store.subscribe(render)
render()

socket.on('join', () => {
  console.log('staff connected to server')
  socket.emit('sign on', {
    staffID: 'staff'
  })
})

socket.on('client message', payload => {
  const oldChats = JSON.parse(localStorage.getItem(payload.customerID)) || []

  const newChat = {
    date: payload.date,
    text: payload.text,
    customerID: payload.customerID
  }
  oldChats.push(newChat)
  store.dispatch(messageReceived(oldChats))
  localStorage.setItem(payload.customerID, JSON.stringify(oldChats))
})

socket.on('rooms list', rooms => {
  console.log('rooms', rooms)
  store.dispatch({
    type: ADDED_ROOM,
    rooms
  })
})
