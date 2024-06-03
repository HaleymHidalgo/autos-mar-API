const vehiculos = require("../vehiculos.js")
const { request , response } = require("express")

const getVehiculoModelo = (req = request , res = response) => {
    let modelo = req.params.modelo
    console.log(modelo);
    let vehiculo = vehiculos.find((vehiculo) => {
        return vehiculo.modelo === modelo
    })

    console.log(vehiculo);

    if(vehiculo){
        return res.json({
            ok:true,
            statusCode:200,
            vehiculo
            })
    }else{
        return res.json({
            ok:false,
            statusCode:404,
            msg:"No hay vehiculos con ese ID"
        })
    }
}

module.exports = {
    getVehiculoModelo
}