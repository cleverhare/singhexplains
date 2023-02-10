const express = require('express')
const app = express()
const port = 3000
const path = require('path')
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('public')) // For serving static files
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname) + '/public/index.html')
})

app.listen(port, () => {
  console.log(`singhexplains app listening on port http://localhost:${port}`)
})