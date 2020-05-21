const express = require('express');
const server = require('./app/config/server.js');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const app = new express();
server(app);

const options = {
    swaggerDefinition:{
        info: {
            title: 'Api students', // Title (required)
            version: '0.0.1', // Version (required)
            description: 'Tarea para ingeniería web - Universidad de Antioquia', // Description (optional)
          },
          servers: ["http://localhost:8081"]
    },
    apis: ['app/api/routes/*.js'],
}

const swaggerSpec = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




app.listen(app.get('port'), () => {
    console.log('La app ha sido desplegada en el puerto ' + app.get('port'));
});