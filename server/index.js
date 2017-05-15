const dotenv = require('dotenv')
dotenv.load()

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.emit('hello', 'steve')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('message', data => {
    socket.broadcast.emit('message', {
      message: data
    })
  })
})

const port = process.env.PORT || 3000

server.listen(port, function() {
  console.log('listening on *:', port)
})
