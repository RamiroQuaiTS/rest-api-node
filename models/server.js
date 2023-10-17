const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.alumnosPath = '/api/alumnos';

        //Middelware
        this.middlewares();

        //Rutas
        this.routes();
    };

    middlewares() {

        // CORS
        this.app.use( cors() );
        // Lectura y parseo
        this.app.use(express.json());
        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
        this.app.use( this.alumnosPath, require('../routes/alumnos'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

};

module.exports = Server;