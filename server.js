const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const apiRoutes = require('./routes/api')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
