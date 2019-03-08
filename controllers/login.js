require('../config/config')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    loggedIn: async (req, res) => {
        const response = await User.findOne({email: req.body.email})
        if ( !response ) {
            res.status(500).json({message: 'Email not found!'})
        } else { 
            const match = await bcrypt.compare(req.body.password, response.password)
            if ( !match ) {
                res.status(500).json({message: 'Password incorrect!'})
            } else { 
                let token = await jwt.sign({response}, process.env.SECRET_KEY, {expiresIn: process.env.EXPIRES_KEY})
                res.status(200).json({message: 'Logged in correct!', token})
            }
        }
    }
}

