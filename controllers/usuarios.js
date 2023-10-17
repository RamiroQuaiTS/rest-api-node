const {request, response} = require('express')

const usuariosGet = (req = request, res = response)=>{
    const {id,nombre,apikey} = req.query
    res.json({
        msje: 'get Api - Controlador',
        id,
        nombre,
        apikey
    });
};

const usuariosPut = (req, res = response)=>{
    const {id} = req.params;
    res.json({
        msj: 'get put - Controlador',
        id
    });
};

const usuariosPost = (req, res = response)=>{
    const {nombre, edad} = req.body
    res.json({
        msj: 'get Post - Controlador',
        nombre: nombre,
        edad: edad,
    });
};

const usuariosDelete = (req, res = response)=>{
    res.json({
        msj: 'get Delete - Controlador',
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}
