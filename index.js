import express from 'express'
import rutas from './rutas/rutas.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
//crear un objeto 
const app= express()
const PUERTO = 5000

//conexion a mongo
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/ANIMALES" ,
{
   
    useNewUrlParser : true,
    useUnifiedTopology : true

})
//configuracion de body parser
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

//rutas definidas
rutas(app)


//Crear servidor de aplicacion

app.listen(PUERTO , () => {

        console.log(`servidor ejecutado en puerto:${PUERTO}`)
    })

 