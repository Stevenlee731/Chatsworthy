const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

// app.post('', (req, res) {

// })

// app.delete('', (req, res) {

// })

// app.get('', (req, res) {

// })

app.listen(3000, () => {
  console.log('listening on 3000')
})
