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
  const $app = document.querySelector('#app')
  ReactDOM.render(<App {...state} />, $app)
}

store.subscribe(render)
render()

socket.on('join', () => {
  if (!localStorage.userID) {
    const customerID = uniqueId()
    localStorage.userID = customerID
  }
  const customerID = localStorage.userID
  socket.emit('sign on', {
    customerID: customerID
  })
  socket.emit('join room', {
    customerID: customerID
  })
})

socket.on('message', payload => {
  console.log('message from support', payload)
})
