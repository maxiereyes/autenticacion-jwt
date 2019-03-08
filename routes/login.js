const express = require('express')
const routes = express.Router()
const LoginController = require('../controllers/login')

routes.post('/', LoginController.loggedIn)


module.exports = routes
