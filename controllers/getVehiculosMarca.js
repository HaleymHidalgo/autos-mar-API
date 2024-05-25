const { vehiculos } = require("../vehiculos")
const { request , response } = require("express")

const getVehiculosMarca = (req = request , res = response) => {
    let marca = req.params.marca

    let vehFiltrados = vehiculos.filter( vehiculo => vehiculo.marca === marca)

    if(vehFiltrados.length > 0){
        return res.json({
            ok:true,
            statusCode:200,
            vehFiltrados
        })
    }else{
        return res.json({
            ok:false,
            statusCode:404,
            msg:"No hay vehiculos con esa marca"
        })
    }
}

module.exports = {
    getVehiculosMarca
}