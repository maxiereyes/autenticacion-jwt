const Books = require('../models/books')

module.exports = {
    getBooks: async (req, res, next) => {
        try {
            const books = await Books.find().populate('usuario', 'nombre email')
            res.status(200).json(books)    
        } catch (error) {
            next(error)
        }
    },
    createBook: async (req, res, next) => {
        let userid = req.usuario
        let book = new Books({
            titulo: req.body.titulo,
            autor: req.body.autor,
            genero: req.body.genero,
            puntaje: req.body.puntaje,
            usuario: userid
        })

        try {
            await book.save()
            res.status(200).json({message: 'Book saved!'})
        } catch (error) {
            next(error)
        }
    },
    updateBooks: async (req, res, next) => {
        let id = req.params.id
        try {
            const response = await Books.findByIdAndUpdate(id, req.body, {new: true})
            if (!response) {
                res.status(404).json({message: 'Book not exist!'})       
            } else {
                res.status(200).json({message: 'Books updated!'})   
            }
        } catch (error) {
            next(error)
        }
    },
    deleteBooks: async (req, res, next) => {
        let id = req.params.id
        try {
            const response = await Books.findByIdAndRemove(id)
            if (!response) {
                res.status(404).json({message: 'Book not exist'})
            } else { 
                res.status(200).json({message: 'Book deleted!'})
            }
        } catch (error) {
            next(error)
        }
    }
}