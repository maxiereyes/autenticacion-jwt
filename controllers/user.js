const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    getUser: async (req, res, next) => {
        try {
            const response = await User.find({}, {nombre: 1, email: 1, _id: 1})
            res.status(200).json(response);   
        } catch (error) {
            next(error)
        }
    },
    createUser: async (req, res, next) => {
        let body = req.body
        if ( !body.password ) {
            res.status(500).json({message: 'Password is required'})
        } else {
            let passBcrypt = await bcrypt.hash(body.password, 10)    
            const user = new User({
                nombre: body.nombre,
                email: body.email,
                password: passBcrypt
            })
            try {
                await user.save()
                res.status(200).json({message: 'User saved'})
            } catch (error) {
                next(error)   
            }
        }
    },
    updateUser: async (req, res, next) => {
        let id = req.params.id
        const newUser = {
            nombre: req.body.nombre,
            email: req.body.email
        }
        try {
            const response = await User.findByIdAndUpdate(id, newUser, {new: true})    
            if ( !response ) {
                res.status(500).json({message: 'Not updated user!'})
            } else {
                res.status(200).json({message: 'user updated!'})
            }   
        } catch (error) {
            next(error)
        }
    },
    deleteUser: async (req, res, next) => {
        let id = req.params.id
        try {
            const response = await User.findByIdAndRemove(id)
            if ( !response ) {
                res.status(500).json({message: 'Not delete user!'})
            } else {
                res.status(200).json({message: 'user deleted!'})    
            }            
        } catch (error) {
            next(error)
        }
    }
}