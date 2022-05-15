// Imports
const express = require('express')
const cors = require('cors')

// Env
require('dotenv').config()

//
const routes = require('./routes')

// App
const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

// PORT
app.listen(process.env.PORT)

console.log('Server running')