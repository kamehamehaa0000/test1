const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const apiRoutes = require('./routes/api')
const cors = require('cors')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(
  cors({
    origin: '*',
  })
)
app.use(bodyParser.json())
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

const url = `https://test1-swx6.onrender.com`
const interval = 30000

function reloadWebsite() {
  fetch(url)
    .then((response) => {
      console.log('Pinged backend!')
    })
    .catch((error) => {
      console.log("Can't ping backend!", error)
    })
}

setInterval(reloadWebsite, interval)
