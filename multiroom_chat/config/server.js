/* Importar o módulo do framework express */
var express = require('express');

/* Importar o módulo do consign */
var consign = require( 'consign');

/*Importar o módulo body-parser */
var bodyParser = require('body-parser');

/* Importar o módulo do express-validator*/
var expressValidator = require('express-validator');

/*Iniciar o objeto do express */
var app = express();

/*Setar as variávei 'view engine' e views do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o midleware express.static */
app.use(express.static('./app/public'))

/* configurar o midleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o midleware express-validator */
app.use(expressValidator());

/*Efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/*exportar o objeto criado */
module.exports = app;