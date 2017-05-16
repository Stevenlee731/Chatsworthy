const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const MessagesButton = require('./components/MessagesButton')
const MessagesViewer = require('./components/MessagesViewer')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const injectTapEventPlugin = require('react-tap-event-plugin')
const io = require('socket.io-client')
const { createID } = require('./actions')
const socket = io('/')
injectTapEventPlugin()

window.store = store

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
  console.log('customer connected to server')
  if (!localStorage.userID) {
    store.dispatch(createID)
  }
  const customerID = localStorage.userID
  socket.emit('sign on', {
    customerID: customerID
  })
})

socket.emit('from admin', 'string')
socket.on('from client', data => {
  console.log(data)
})
