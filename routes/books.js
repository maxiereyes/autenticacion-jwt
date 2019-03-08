const express = require('express')
const routes = express.Router()
const BooksController = require('../controllers/books')
const VerificarToken = require('../middlewares/authenticate')

routes.get('/', VerificarToken, BooksController.getBooks)
routes.post('/', VerificarToken, BooksController.createBook)
routes.put('/:id', VerificarToken, BooksController.updateBooks)
routes.delete('/:id', VerificarToken, BooksController.deleteBooks)


module.exports = routes
