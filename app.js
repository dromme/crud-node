const express = require('express');
const server = require('./config/server.js');
const app = new express();
server(app);
app.listen(app.get('port'), () => {
    console.log('La app ha sido desplegada en el puerto ' + app.get('port'));
});