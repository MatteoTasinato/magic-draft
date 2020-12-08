const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  fetch('https://api.scryfall.com/sets/aer').then(response => {
      console.log(response)
      response.json()}).then(data => console.log(data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})