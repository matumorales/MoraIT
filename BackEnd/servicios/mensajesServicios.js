import MensajesDB from "../db/mensajesDB.js";
//import NotificacionServicios from "../servicios/notificacionServicios.js";

export default class MensajesServicios {
    constructor() {
        this.mensajesDB = new MensajesDB();
//        this.notificacionServicios = new NotificacionServicios();
    }

    buscarPorId = async (id_mensaje) => {
        const mensaje = await this.mensajesDB.buscarPorId(id_mensaje);
        if (!mensaje) return null;
        return mensaje;
    }

    crear = async (mensajeparam) => {
        
        const {nombre_apellido, correo, mensaje } = mensajeparam;
        const nuevoMensaje = {nombre_apellido, correo, mensaje };    
       
        const result = await this.mensajesDB.crear(nuevoMensaje);

        if (!result) return null;

        // Notificación por correo 
        try {
            const fila = await this.mensajesDB.datosParaNotificacion(result.mensaje_id);
            // Normalizar campos esperados por el servicio de notificaciones
            const datosCorreo = {
                fecha: fila?.fecha || fila?.fecha_reserva || null,
                salon: fila?.salon || fila?.titulo || fila?.salon_titulo || null,
                turno: fila?.turno || fila?.turno_nombre || String(fila?.turno_id ?? ''),
                // email del cliente
                correoCliente: (usuarioAuth?.nombre_usuario) || fila?.correoCliente || fila?.correoElectronico || fila?.email || fila?.nombre_usuario || null,
                // opcional: admins por ENV si no se provee desde la DB
                correosAdmin: []
            };
            await this.notificacionesServicios.enviarCorreo(datosCorreo);
        } catch (notificationError) {
            console.log('Advertencia: No se pudo enviar el correo.');
            console.error('[MAIL] Error en envío tras crear reserva:', notificationError?.message);
            if (notificationError?.stack) {
                console.error(notificationError.stack);
            }
        }

        return this.mensajesDB.buscarPorId(result.mensaje_id);
    }

};