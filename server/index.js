const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('dev'))

// create PhoneCheck
app.post('/api/register', async (req, res) => {})

// complete PhoneCheck
app.post('/api/exchange-code', async (req, res) => {})

// setup server
app.listen(4000, () => {
  console.log('listening on PORT 4000')
})
