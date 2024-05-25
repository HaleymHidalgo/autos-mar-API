'use strict';

const express = require('express');
const app = express();
const port = 3002;

//Funciones
const { getVehiculos } = require('./controllers/getVehiculos.js')
const { getVehiculoID } = require('./controllers/getVehiculoID.js')
const { getVehiculosMarca } = require('./controllers/getVehiculosMarca.js')

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', getVehiculos)

app.get('/byId/:id', getVehiculoID)

app.get('/byMarca/:marca', getVehiculosMarca)

app.listen(port, () => {
    console.log('Server running on port', port);
})