const express = require('express')

const app = express()

const hello = require('./hello')

app.use('/', function (req, res) {
   res.send('Hello World')
})

app.use('/hello', hello)

app.set('view engine', 'hbs')
  
app.listen(3000, () => console.log("Its Running on port 3000"))