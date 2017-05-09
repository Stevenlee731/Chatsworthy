const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const MessagesButton = require('./components/MessagesButton')
const MessagesViewer = require('./components/MessagesViewer')

window.store = store

const App = props => {
  const { messages, isChatOpen } = props
  return (
    <div className='app'>
      { isChatOpen || <MessagesButton messages={messages} isChatOpen={isChatOpen}/> }
      { isChatOpen && <MessagesViewer isChatOpen={isChatOpen}/>
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
