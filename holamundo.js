//HOLA MUNDO - EXPLICACION//

//Lo primero será indicar que necesitamos el módulo "http"
//Para ello lo cargamos mediante el método require.
//Lo alojamos en la variable http para luego poder crear el server


//creamos el servidor usando el método .createServer()
//Donde dentro de ella escribimos una funcion que tendra dos objetos
//donde uno funciona para recibir los request y el otro las respuestas


//El contenido del método .createServer() es una función la cual
//suelta el contenido a la página web.
//El texto de Hola Mundo lo hacemos mediante el objeto response.

//al objeto response usamos el metodo .writeHead con la cual le indicamos
//a la cabecera con un código de retorno 200 de OK.
// y el tipo de contenido que estaremos enviando.
//Luego con el metodo .end enviamos el cuerpo donde ponemos un texto
//plano en este caso

//Al final solo usamos el método .listen() nos ayudará a indicar el
//puerto sobre el que se ejecute el servidor.

// Al final coloco un log en consola que me indica que mi server
//esta corriendo.

//Luego nos queda ejecutar el server utilizando el interprete
// node holamundo.js
// y acceder via navegador usando http://localhost:8080

// **************************************************************//



var http = require('http');


http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hola Mundo!');
}).listen(8080);


	console.log('Servidor ejecutandose en http://localhost:8080/');
