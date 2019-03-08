require('./config/config');
require('./database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const rutas = require('./routes/routes')


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(rutas)

app.use((err, req, res, next) => {
    res.json(err.message)
})

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
})

