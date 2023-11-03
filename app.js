const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Pagina inicial')
})

app.get('/saludo', (req, res) => {
    res.send('Hola')
  })

  app.get('+', (req, res) => {
    res.send('404 | page not found')
  })

app.listen(8080)