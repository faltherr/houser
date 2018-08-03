const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')

const app = express();

require('dotenv').config()

const {CONNECTION_STRING} = process.env
// console.log(CONNECTION_STRING)

const PORT = 4000

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

app.listen(PORT, () => console.log('Listening on port:', PORT))