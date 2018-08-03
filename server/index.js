const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')

const app = express();

require('dotenv').config()

const {CONNECTION_STRING} = process.env
// console.log(CONNECTION_STRING)

app.use(bodyParser.json())

app.get('/api/house', controller.getHouses)
app.post('/api/house', controller.addHouse)
app.delete('/api/house/:id', controller.deleteHouse)
app.put('/api/house/:id', controller.updateHouse)

const PORT = 4000



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

app.listen(PORT, () => console.log('Listening on port:', PORT))