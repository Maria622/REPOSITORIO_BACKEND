import mongoose from "mongoose"

//definir 
const Schema = mongoose.Schema

const SerpienteSchema= new Schema({


       nombre:{
           type: String,
           required : "Ingrese nombre"


       },
       tipo :{
           type: String,
           required : "Ingrese tipo"
       },

       color:{
           type: String,
           required: "ingrese color"

       }

})

export default SerpienteSchema

