const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
// const twilio = require('twilio')
const path = require('path')

// const accountSid = 'AC830cbd5840e45f4e3ab704be6455dfdb' // Your Account SID from www.twilio.com/console
// const authToken = '{{ cebc8850befcb2110fcfda91946d52d2 }}' // Your Auth Token from www.twilio.com/console
// let client = new twilio(accountSid, authToken)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.emit('welcome', { type: 'connected to socket' })
  socket.on('message', text => {
    console.log(text)
  })
  // socket.on('message', () => {
  //   //forward to twilio
  // })
})
//
// client.messages.create({
//   body: 'Hello from Node',
//   to: '+15625223897',  // Text this number
//   from: '+15622030149' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid))

server.listen(3000, function() {
  console.log('listening on *:3000')
})
