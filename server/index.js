const dotenv = require('dotenv')
dotenv.load()

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const path = require('path')
const Twilio = require('twilio')

const accountSid = process.env.TW_SID
const authToken = process.env.TW_TOKEN
let client = new Twilio(accountSid, authToken)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.emit('welcome', { type: 'connected to socket' })
  socket.on('message', text => {
    console.log(text)
    client.messages.create({
      body: text,
      to: process.env.STAFF_NUM,
      from: process.env.TW_NUM,
      FromCountry: 'united states',
      FromCity: 'Cerritos'
    })
    .then((message) => console.log(message.sid))
  })
  socket.emit('reply', text => {

  })
})

const port = process.env.PORT || 3000

server.listen(port, function() {
  console.log('listening on *:', port)
})
