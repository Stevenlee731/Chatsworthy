const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const ChatBox = require('./components/ChatBox')
const MuiTheme = require('./MuiTheme')
const injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

window.store = store

const App = props => {
  const { userMessages } = props
  return (
      <div>
        <MuiTheme/>
        <div className='app'>
          <ChatBox userMessages={userMessages}/>
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
