import mongoose from 'mongoose'

import SerpienteSchema from '../modelos/serpientemodel.js'

//crear objeto serpiente basada en el schema
const serpiente= mongoose.model('serpiente', SerpienteSchema)

//crear una accion para registrar nueva serpiente

 export const addSerpiente = (request, response) => {
    //creando nueva serpiente
    let s = new serpiente(request.body)
    //gravar el nuevo
    s.save((error, s) => {
        if (error) {
            response.send(error)
        } else {
            response.json(s)
        }
    })
}

export const getSerpiente = (request , response)=>{
    serpiente.find({  } , (error, serpiente) => {
      if(error){
          response.sed(error)

      }else{
          response.json(serpiente)
      } 
    
    })
}

export const getSerpienteById = (request, response)=>{
    serpiente.findById( request.params.serpienteid , (error,serpiente)=>{
        if(error){
            response.sed(error)
  
        }else{
            response.json(serpiente)
        } 
    })
}

//actualizar serpiente por ID
export const updateSerpiente =(request , response)=>{
    serpiente.findOneAndUpdate({   _id : request.params.serpienteid},
      request.body ,
      {
          new:true
      },
      (error , serpiente)=>{
        if(error){
            response.sed(error)
  
        }else{
            response.json(serpiente)
        } 
      })
}

export const deleteSerpiente =(request,response)=>{
    serpiente.deleteOne({     _id : request.params.serpienteid} ,
        (error , serpiente)=>{
            if(error){
                response.send(error)
            }else{
                response.json({ mensaje: "Borrado exitoso"})
            }
        }
        
        
        )
}