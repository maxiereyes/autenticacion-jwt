const express = require('express')
const app = express()

app.use('/users', require('./user'))
app.use('/login', require('./login'))
app.use('/books', require('./books'))

module.exports = app