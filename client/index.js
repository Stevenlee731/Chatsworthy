const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const MessagesBox = require('./components/MessagesBox')

window.store = store

const App = props => {
  const { messages, isChatOpen } = props
  return (
    <div className='app'>
      <MessagesBox messages={messages} isChatOpen={isChatOpen}/>
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
