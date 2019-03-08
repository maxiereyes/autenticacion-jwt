process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

let dbURI

if ( process.env.NODE_ENV === 'dev' ) {
    dbURI = 'mongodb://localhost/autenticacion'
} else {
    dbURI = 'mongodb://localhost/autenticacion'
}

process.env.MONGODB_URI = dbURI

process.env.SECRET_KEY = process.env.SECRET_KEY || 'seed-maxi-reyes'

process.env.EXPIRES_KEY = process.env.EXPIRES_KEY || 60 * 60 * 60

