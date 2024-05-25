'use strict';

const getVehiculos = require('./controllers/getVehiculos.js')
const getVehiculoID = require('./controllers/getVehiculoID.js')
const getVehiculosMarca = require('./controllers/getVehiculosMarcas.js')

module.exports = {
    getVehiculos,
    getVehiculoID,
    getVehiculosMarca
}
