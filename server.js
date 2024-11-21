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

const url = `https://test1-swx6.onrender.com`
const interval = 30000

function reloadWebsite() {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log('Pinged backend successfully!!')
      } else {
        console.log('Failed to ping backend.')
      }
    })
    .catch((error) => {
      console.log("Can't ping backend!", error)
    })
}

setInterval(reloadWebsite, interval)
