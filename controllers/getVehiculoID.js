const { vehiculos } = require("../vehiculos.js")
const { request , response } = require("express")

const getVehiculoID = (req = request , res = response) => {
    let id = parseInt(req.params.id)

    let vehiculo = vehiculos.find((vehiculo) => {
        return vehiculo.id === id
    })

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
            msg:"No hay vehiculos con ese ID",
        })
    }
}

module.exports = {
    getVehiculoID
}