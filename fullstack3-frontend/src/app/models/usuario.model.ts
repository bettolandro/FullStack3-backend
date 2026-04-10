
// Entidad principal - coincide con la clase Java Usuario.java
export interface Usuario {
  idUsuario?: number;    // Opcional: no existe al crear uno nuevo
  nombre: string;        // Requerido, máx 100 chars
  correo: string;        // Requerido, único, máx 120 chars
  password: string;      // Requerido, en texto plano (el ms no encripta)
  rol: string;           // 'ADMIN' o 'USER'
  activo?: number;       // 1 = activo, 0 = inactivo (default 1 en backend)
}

// Payload para el endpoint POST /api/usuarios/login
export interface LoginRequest {
  correo: string;
  password: string;
}

// Respuesta del endpoint POST /api/usuarios/login
// Coincide con LoginResponse.java del ms-usuarios
export interface LoginResponse {
  mensaje: string;      // "Inicio de sesion correcto"
  idUsuario: number;
  nombre: string;
  rol: string;
}
