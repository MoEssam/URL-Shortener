const express = require('express')
require('./db/mongoose')
const shorten = require('./routers/shorten')
const redirect = require('./routers/redirect')
const bodyParser = require('body-parser')
const home = require('./routers/home')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.json())
app.use(shorten)
app.use(redirect)
app.use(home)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})