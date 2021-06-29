const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// create PhoneCheck
app.post('/api/register', async (req, res) => {})

// get PhoneCheck response

app.get('/api/register', async (req, res) => {})

// setup server
app.listen(4000, () => {
  console.log('listening on PORT 4000')
})
