const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const {MONGO_URI, MONGODB_OPTIONS, PORT} = require('./config');
const routes = require('../api/routes');

const server = (app) => {
  mongoose.connect(MONGO_URI, MONGODB_OPTIONS, (error) => {
      if(error) return console.log('Error al conectar a la BD')
      return console.log('Conexión exitosa');
  })
  app.set('port', PORT);
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/', routes);
}

module.exports = server;
