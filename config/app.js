require('../model/Animal');
const PORT = process.env.PORT;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes/routes');

app.set('port', PORT);

app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;


//fluxo de request: Usuário tenta acessar (GET) no endereço '/' da minha aplicação.
//client (Chrome) --> server (app)

//client --> express --> ()=>{} --> next() --> ()=>{} --> express --> client