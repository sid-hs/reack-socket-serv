const Server = require('./models/server');
require('dotenv').config();


const server = new Server();

server.execute();





//Server de exoress
//Se realiza una constante en express
//const express = require('express');
// para dezplegar con directorio pulico se requiere 
//const app = express();

// const app = require('express')(); //Línea borrada
//Server sockets
//const server = require('http').createServer(app);
//Config Socket Server
//const io = require('socket.io')(server);

//Desplegar Directorio publico - Es un middleware para llamar el directorio
//app.use( express.static( __dirname + '/public' ) );


//io.on('connection', ( socket ) => {  //el socket es el termino que se utiliza para el cliente conectado
    //la documentación menciona que es socket, por lo que se coloca así
   // console.log(socket.id); //el socket es el cliente, que arriba se colocó y el id es el identificador de cada una de las conexiones
   //el metodo para enviar mensaje directo a un cliente
 //  socket.emit('mensaje-bienvenida',{
 //      msg: 'Bienvenido al server',
 //      fecha: new Date()
 //  } );   //Entre llaves se coloca la data para mandar comunicación, un objeto literal

 //los eventos son instrucciones que se disparan // Los mensajesn
   // es un mensaje que se debe configurar la recepción en el lado del cliente, directo en el HTML
    // ON es para escuchar y emit es para emitir
/*  //codigo comentado para reciir el nuevo mensaje 
    socket.on('mensaje-cliente', ( data ) => {
       console.log(data);
   })
*/
 //   socket.on('mensaje-to-server', ( data ) => {
    //console.log(data);
    //en el mensaje que envia es con socket solo el que lo envia lo puede ver
    //para que lo vean todos es en lugar de socket debe ser IO        
 //   io.emit('mensaje-from-server', data ); //se emite el mensaje desde el servidor replicando el mismo que se recibió
 //   });

//});
// despues del puerto se coloca un "callback"
//server.listen(3000, () => {
//    console.log('Server running port :3000');
//});
/*
Se debe revisar que este la misma versión en backencd  que cliente
*/