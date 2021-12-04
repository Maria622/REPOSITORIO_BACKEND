
import { addSerpiente,
     getSerpiente,
    getSerpienteById,
    updateSerpiente,
    deleteSerpiente  } from "../controladores/serpienteController.js"
//crear una funcion para gestionar las rutas delproyecto necesitara
// el objeto express para crear las ruta endpoint
//endpoint rutas rest
const rutas = (app) => {
    app.route('/serpientes')
        .get(getSerpiente)
        .post(addSerpiente)


        app.route('/serpientes/:serpienteid')
          .get(getSerpienteById)
          .put(updateSerpiente)
          .delete(deleteSerpiente)

}

export default rutas