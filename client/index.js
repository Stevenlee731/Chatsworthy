const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const MessagesButton = require('./components/MessagesButton')
const MessagesViewer = require('./components/MessagesViewer')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const injectTapEventPlugin = require('react-tap-event-plugin')
const io = require('socket.io-client')
const socket = io('/')
injectTapEventPlugin()

window.store = store

const uniqueId = () => {
  return 'id-' + Math.random().toString(36).substr(2, 16)
}

const App = props => {
  const { messageInput, userMessages, isChatOpen } = props
  return (
    <MuiThemeProvider>
      <div className='app'>
        { isChatOpen || <MessagesButton isChatOpen={isChatOpen}/> }
        { isChatOpen && <MessagesViewer messageInput={messageInput} userMessages={userMessages} isChatOpen={isChatOpen}/> }
      </div>
    </MuiThemeProvider>
  )
}

const render = () => {
  const state = store.getState()
  console.log(store.getState())
  const $app = document.querySelector('#app')
  ReactDOM.render(<App {...state} />, $app)
}

store.subscribe(render)
render()

socket.on('join', () => {
  console.log('customer connected to server')
  if (!localStorage.userID) {
    const customerID = uniqueId()
    localStorage.userID = customerID
  }
  const customerID = localStorage.userID
  console.log(customerID)
  socket.emit('sign on', {
    customerID: customerID
  })
})

socket.emit('from admin', 'string')
socket.on('from client', data => {
  console.log(data)
})

socket.on('message', payload => {
  console.log(payload)
})
