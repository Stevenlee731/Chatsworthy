const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const MessagesButton = require('./components/MessagesButton')
const MessagesViewer = require('./components/MessagesViewer')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const injectTapEventPlugin = require('react-tap-event-plugin')
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
