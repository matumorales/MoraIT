import { conexion } from "./conexion.js";

export default class Mensajes {

    buscarPorId = async(mensaje_id) => {
        const sql = 'SELECT nombre_apellido, correo, mensaje FROM `t_mensajes` WHERE activo = 1 AND mensaje_id = ?';
        
        const [mensaje] = await conexion.execute(sql, [mensaje_id]);
        if (mensaje.length  === 0) {
            return null;
        }
        return mensaje[0];
    }


    crear = async(mensajeParam) => {
        const {
                nombre_apellido,
                correo,
                mensaje
            } = mensajeParam;
        
        const sql = `INSERT INTO t_mensajes 
            (nombre_apellido, correo, mensaje) 
            VALUES (?,?,?)`;
        
        const [result] = await conexion.execute(sql, [nombre_apellido, correo, mensaje]);

        if (result.affectedRows === 0){
            return null;
        }
        return { mensaje_id: result.insertId };
    }

}

    datosParaNotificacion = async(mensaje_id) => {
        try {
            const sql = 'SELECT nombre_apellido, correo, mensaje, fecha_creacion FROM `t_mensajes` WHERE mensaje_id = ?;'
            const [result] = await conexion.execute(sql, [mensaje_id]);
            const fila = Array.isArray(result) ? (Array.isArray(result[0]) ? result[0][0] : result[0]) : result;
            if(!fila){
                return null;
            }
            return fila;
        } catch (error) {
            // if (error?.code === 'ER_SP_DOES_NOT_EXIST') {
            //     // Fallback: construir datos desde las tablas
            //     const fallbackSql = `
            //         SELECT 
            //             r.fecha_reserva AS fecha,
            //             s.titulo AS salon,
            //             CAST(t.turno_id AS CHAR) AS turno,
            //             u.nombre_usuario AS correoElectronico
            //         FROM reservas r
            //         INNER JOIN salones s ON s.salon_id = r.salon_id
            //         INNER JOIN turnos t ON t.turno_id = r.turno_id
            //         INNER JOIN usuarios u ON u.usuario_id = r.usuario_id
            //         WHERE r.reserva_id = ?
            //         LIMIT 1
            //     `;
            //     const [rows] = await conexion.query(fallbackSql, [reserva_id]);
            //     return rows && rows[0] ? rows[0] : null;
            // }
            throw error;
        }
    }