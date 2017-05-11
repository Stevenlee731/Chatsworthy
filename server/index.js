const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.emit('welcome', { type: 'connected to socket' })
  socket.on('message', text => {
    console.log(text)
  })
})

server.listen(3000, function() {
  console.log('listening on *:3000')
})
