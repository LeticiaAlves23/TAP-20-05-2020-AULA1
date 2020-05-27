const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async function(req, res) {

    let titulo = req.query.titulo;

    let articles = await Article.findAll().paginate({titulo: titulo}).exec();

    res.render('index', {
        articles: articles
    });
});

let server = app.listen(8080, function() {
    console.log('titulo')
});