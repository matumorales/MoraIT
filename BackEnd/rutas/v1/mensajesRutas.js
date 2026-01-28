import {check} from 'express-validator';
import express from 'express';
import MensajesControlador from '../../controladores/mensajesControlador.js';
import { validarCampos } from '../../middlewares/validarCampos.js';
// import { autorizarUsuarios } from '../../middlewares/autorizarUsuarios.js';
const router = express.Router();

const mensajeControlador = new MensajesControlador();

  router.post('/',  
    //  [
    //       check('nombre_apellido', 'Debe ingresar un Nombre y un Apeliido.').notEmpty(),
    //       check('correo', 'El correo es necesario.').notEmpty(),
    //       check('mensaje', 'Debe ingresar un mensaje.').notEmpty(),  
    //       validarCampos
    //   ],
      mensajeControlador.crear);


export{router as mensajesRouter};