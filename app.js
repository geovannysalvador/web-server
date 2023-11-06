const express = require('express')
const app = express()
const port = 8080;

var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

//hacer publica la carpeta public
//servir contenido estatico.

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Geovanny',
        titulo: 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Geovanny',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Geovanny',
        titulo: 'Curso de node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})