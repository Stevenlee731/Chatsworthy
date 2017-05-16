const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const ChatBox = require('./components/ChatBox')
const MuiTheme = require('./MuiTheme')
const io = require('socket.io-client')
const socket = io('/')
const { messageReceived } = require('./actions')
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
    staffID: 'id-123'
  })
})

socket.on('from client', data => {
  console.log('message', data)
  const message = data
  const customerID = message.userID
  if (localStorage.getItem(customerID) === null) {
    localStorage.setItem(customerID, message)
  }
  store.dispatch(messageReceived(message))
})
