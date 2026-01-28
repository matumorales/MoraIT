import MensajesServicios from "../servicios/mensajesServicios.js";

export default class MensajesControlador {
     constructor () { 
         this.mensajesServicio = new MensajesServicios();
     }        
crear = async (req, res) => {
        try {
            
            const {
                nombre_apellido,
                correo,
                mensaje } = req.body;

            const mensaje1 = {
                nombre_apellido,
                correo,
                mensaje };
            
            const nuevoMensaje = await this.mensajesServicio.crear(mensaje1)
            
            if (!nuevoMensaje) {
                return res.status(404).json({
                    estado: false,
                    mensaje: 'Mensaje no agregado'
                })
            }

            res.json({
                estado: true, 
                mensaje: 'Mensaje guardado con exito!',
                datos: nuevoMensaje
            });
    
        } catch (err) {
            console.log('Error en POST /mensajes/', err);
            res.status(500).json({
                estado: false,
                mensaje: 'Error interno del servidor.'
            });
        }
    }
 
    buscarPorId = async (req, res) => {
        try {
            const id_mensaje = req.params.id_mensaje;
            const mensaje = await this.mensajesServicio.buscarPorId(id_mensaje);

            if (!mensaje) {
                return res.status(404).json({
                    estado: false,
                    mensaje: 'Mensaje no encontrado.'
                })
            }

            res.json({
                estado: true, 
                reserva: mensaje
            });
    
        } catch (err) {
            console.log('Error en GET /mensajes/id_mensajes', err);
            res.status(500).json({
                estado: false,
                mensaje: 'Error interno del servidor.'
            });
        }
    }
 
}