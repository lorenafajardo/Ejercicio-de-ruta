/**
 * Tarea: Cree una nueva ruta en /routes/users.js que mostrará el texto "Eres genial"
 *  en la URL /users/cool/. Pruébelo ejecutando el servidor y visitando 
 * http://localhost:3000/users/cool/ en su navegador.
 * 
 * @author Lorena Fajardo Díaz
 * @version 1.0.0
 */

/**Llamado de la libreria express para crear aplicacion */
const express = require('express')
const app = express();

/*Definicion de ruta /users/cool/, mediante la peticion GET, utilizado para mostrar el mensaje solicitado*/
app.get('/users/cool/', (req, res) => {
  res.send('Eres genial!')
});

/* Definicion y creacion el servidor, escuchando el puerto 3000 e impresion de un comentario en la consola.*/
app.listen(3000, () => {
  console.log('Verifica en la siguiente ruta localhost:3000/users/cool/!')
})


