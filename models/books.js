const mongoose = require('mongoose')
const Schema = mongoose.Schema

const booksSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'Title is required']
    },
    autor: {
        type: String,
        required: [true, 'Author is required']
    },
    genero: {
        type: String,
        required: [true, 'Genere is required'],
        enum: ['Drama', 'Biografia', 'Suspenso', 'Autoayuda']
    },
    puntaje: {
        type: Number,
        required: [true, 'Rating is required'],
        min: 1,
        max: 10
    },
    usuario: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, 'Id User is required']
    },
    fecha: {
        type: Date,
        default: Date.now()
    } 

})

module.exports = mongoose.model('Books', booksSchema)