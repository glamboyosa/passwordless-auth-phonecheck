const express = require('express')
const cors = require('cors')
const { createAccessToken } = require('./helpers/createAccessToken')
const { createPhoneCheck } = require('./helpers/createPhoneCheck')
const { getPhoneCheck } = require('./helpers/getPhoneCheckResult')

const app = express()

app.use(express.json())
app.use(cors())

// global access token variable
let AccessToken
// create PhoneCheck
app.post('/api/register', async (req, res) => {})

// get PhoneCheck response

app.get('/api/register', async (req, res) => {})

// setup server
app.listen(4000, () => {
  console.log('listening on PORT 4000')
})
