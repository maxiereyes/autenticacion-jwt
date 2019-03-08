const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')


const UserSchema = new Schema({
    nombre: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true,
        minlength: [8, 'Password should be eight characters']
    }
})

UserSchema.plugin(uniqueValidator, {
    message: '{PATH} must be unique!'
})

module.exports = mongoose.model('User', UserSchema)
