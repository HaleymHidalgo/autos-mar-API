'use strict';

const express = require('express');
const app = express();
const port = 3002;
const vehControllers = require('./vehConstrollers');

app.get('/', vehControllers.getVehiculos)

app.get('/byId/:id', vehControllers.getVehiculoID)

app.get('/byMarca/:marca', vehControllers.getVehiculosMarca)

app.listen(port, () => {
    console.log('Server running on port', port);
})