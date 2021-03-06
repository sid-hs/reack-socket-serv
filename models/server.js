
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');

const cors = require('cors');

const Sockets = require('./sockets');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.server = http.createServer( this.app);

        this.io = socketio( this.server, { /**/ } );
    
    }

    middlewares() {
        this.app.use( express.static( path.resolve(__dirname, '../public')));

        //cors
        this.app.use( cors() );

    }

    configurarSockets(){
        new Sockets( this.io );
    }




    execute() {
        //iniciar middlewares
        this.middlewares();

        this.configurarSockets();

        //iniciar this server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}

module.exports = Server;