const express = require('express')
const app = express()
const port = 8080;

//hacer publica la carpeta public
//servir contenido estatico.

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Pagina inicial')
});

app.get('/saludo', (req, res) => {
    res.send('Hola')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})