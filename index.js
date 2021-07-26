require('dotenv').config();

const express   = require('express');
const cors      = require('cors');
const morgan    = require('morgan');

const path      = require('path');

//Rutas
/*

TODO *declarar las rutas

*/

const app = express();

app.use( express.static( 'public') );

app.use( cors() );

app.use( express.json() );

app.use( morgan('dev') );

//Rutas
/*

TODO *usar las rutas

*/

/*Manejar todas las demas rutas*/
app.get( '*', ( req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html') )
})

const puerto = process.env.PORT || 3000;

app.listen( puerto, () => {
    console.log( `Servidor corriendo en puerto: ${ puerto }`)
})