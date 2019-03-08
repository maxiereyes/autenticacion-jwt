const express = require('express')
const routes = express.Router()
const UserController = require('../controllers/user')

routes.get('/', UserController.getUser)
routes.post('/', UserController.createUser)
routes.put('/:id', UserController.updateUser)
routes.delete('/:id', UserController.deleteUser)


module.exports = routes