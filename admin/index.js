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
  const $app = document.querySelector('#app')
  ReactDOM.render(<App {...state} />, $app)
}

store.subscribe(render)
render()

socket.on('join', () => {
  socket.emit('sign on', {
    staffID: 'staff'
  })
})

socket.on('client message', payload => {
  socket.emit('fetch chat', payload.customerID)
  socket.on('parsed chat', payload => {
    console.log('parsed', payload)
    if (Array.isArray(payload)) {
      store.dispatch(messageReceived(payload))
    }
    else {
      store.dispatch(messageReceived([payload]))
    }
  })
})

socket.on('rooms list', rooms => {
  store.dispatch({
    type: ADDED_ROOM,
    rooms
  })
})
