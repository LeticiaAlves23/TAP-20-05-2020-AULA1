const url = require('url');
const querystring = require('querystring');

let rawUrl = 'https://BuscarCurso.com/?titulo=JavaScript';
let rawUrl = 'https://BuscarCurso.com/?titulo=Kotlin';
let rawUrl = 'https://BuscarCurso.com/?titulo=Java';

let parsedUrl = url.parse(rawUrl);
let parsedQs = querystring.parse(parsedUrl.query);
let server = app.listen(8080, function() {
    console.log('titulo')
});
