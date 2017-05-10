const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const MessagesButton = require('./components/MessagesButton')
const MessagesViewer = require('./components/MessagesViewer')
const io = require('socket.io-client')

const socket = io('/')

socket.on('welcome', (payload) => {
  console.log(payload)
})

window.store = store

const App = props => {
  const { messageInput, userMessages, isChatOpen } = props
  return (
    <div className='app'>
      { isChatOpen || <MessagesButton messageInput={messageInput} userMessages={userMessages} isChatOpen={isChatOpen}/> }
      { isChatOpen && <MessagesViewer messageInput={messageInput} userMessages={userMessages} isChatOpen={isChatOpen}/>
    }
    </div>
  )
}

const render = () => {
  const state = store.getState()
  const $app = document.querySelector('#app')
  console.log('state', state)
  ReactDOM.render(<App {...state} />, $app)
}

store.subscribe(render)
render()
