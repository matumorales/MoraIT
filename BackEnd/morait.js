//Importo Express para crear el servidor    
import express from 'express';
 
//Importamos handlebars para crear plantillas de correo html
import handlebars from 'handlebars';
//Importamos nodemailer para enviar correos
import nodemailer from 'nodemailer';
import morgan from 'morgan';
import passport from 'passport';
import fs from 'fs';
//import { configurarPassport} from './config/passport.js';
//Importo fileURLToPath para manejar la ruta en formato URL a mi Index.js
import { fileURLToPath } from 'url';
// Importo readFile para leer archivos de forma asíncrona
import { readFile } from 'fs/promises';
//Importo path que me permite manejar rutas de archivos y directorios en dstintos sistemas operativos
import path from 'path';

import { mensajesRouter } from './rutas/v1/mensajesRutas.js';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
//const cors = require('cors');


//Creo una instancia de Express
const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173', // habilita solo tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // ajustá según lo que uses
  credentials: true // si necesitás enviar cookies o headers de autenticación
}));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API MoraIT',
      version: '1.0.0',
      description: 'Documentación de la API de MoraIT',
    },
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
    },
    servers: [{ url: `http://localhost:${process.env.PUERTO || 3000}` }],
  },
  apis: ['./rutas/**/*.js'], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Todo lo que este en el body de la peticion lo voy a recibir en formato JSON
app.use(express.json());


//Configuro passport

// configurarPassport(passport);
// app.use(passport.initialize());

//morgan
let log = fs.createWriteStream('./access.log', { flags: 'a' })
app.use(morgan('combined')) 
app.use(morgan('combined', { stream: log })) 



app.get('/estado', (req, res) => {
    res.json({'ok' : true });
});    


// //Defino la ruta para recibir mensajes del Formulario
app.use("/api/v1/mensajes", mensajesRouter);

// //Login
// app.use("/api/v1/auth", authRouter); 

// // Defino la ruta base para el router de servicios
// app.use("/api/v1/servicios", serviciosRouter);

// //Creo una Ruta para enviar las notificaciones al administrador y al usuario
// app.post('/notificacion', async(req, res) => {
//     console.log(req.body)
//     if(!req.body.fecha || !req.body.salon || !req.body.turno || !req.body.correoDestino) {
//         res.status(400).json({'ok' : false, 'mensaje': 'Faltan datos en el body'});
//     }
//     try {
//     transporter.sendMail(opciones, (error, info) => {
//         if(error) {
//             console.log(error);
//             res.json({'ok':false, 'mensaje': 'Error al enviar el correo'});
//         }
//         console.log(info);
//         res.json({'ok':true, 'mensaje': 'Correo enviado'});
//     }); 
//     }catch(error) {
//         console.log(error);
//     }    
//     res.json({'ok' : true});
// });

// Pongo a escuchar el servidor en el puerto 3000
process.loadEnvFile();
app.listen(process.env.PUERTO, () => {
    console.log(`El servidor esta corriendo en el puerto ${process.env.PUERTO} `);
});