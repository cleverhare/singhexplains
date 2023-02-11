const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyparser = require('body-parser')
// EXPRESS SPECIFIC STUFF
app.use('/views', express.static('views')) // For serving static files
app.use(express.urlencoded())
// EJS SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`singhexplains app listening on port http://localhost:${port}`)
})