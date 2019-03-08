require('../config/config')
const jwt = require('jsonwebtoken')

let verificarToken = async (req, res, next) => {
    let token = req.get('token')
    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)    
        req.usuario = decoded.response._id
        next()
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    

}   

module.exports = verificarToken