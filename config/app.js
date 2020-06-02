const express = require('express');
const app = express();
const router = require('../routes/routes');
const PORT = 3000;

app.set('port', PORT);

app.get('/', router);


module.exports = app;


//fluxo de request: Usuário tenta acessar (GET) no endereço '/' da minha aplicação.
//client (Chrome) --> server (app)

//client --> express --> ()=>{} --> next() --> ()=>{} --> express --> client