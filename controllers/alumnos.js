const {request, response} = require('express')

const alumnosGet = (req = request, res = response)=>{
    const {id,nombre,apikey} = req.query
    res.json({
        msje: 'get Api - Controlador alumnos',
        id,
        nombre,
        apikey
    });
};

const alumnosPut = (req, res = response)=>{
    const {id} = req.params;
    res.json({
        msj: 'get put - Controlador alumnos',
        id
    });
};

const alumnosPost = (req, res = response)=>{
    const {nombre, edad} = req.body
    res.json({
        msj: 'get Post - Controlador alumnos',
        nombre: nombre,
        edad: edad,
    });
};

const alumnosDelete = (req, res = response)=>{
    res.json({
        msj: 'get Delete - Controlador alumnos',
    });
};

module.exports = {
    alumnosGet,
    alumnosPost,
    alumnosPut,
    alumnosDelete,
}
