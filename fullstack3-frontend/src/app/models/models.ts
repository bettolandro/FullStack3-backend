
export interface Usuario {
  idUsuario?: number;      // Opcional porque no existe al crear
  nombre: string;          // Nombre completo del usuario
  correo: string;          // Email único - se usa como username
  password: string;        // Contraseña (en texto plano según el ms)
  rol: string;             // 'ADMIN' o 'USER'
  activo?: number;         // 1 = activo, 0 = inactivo
}

// Interfaz para la respuesta del login
export interface LoginRequest {
  correo: string;
  password: string;
}

// Respuesta que devuelve el backend al hacer login exitoso
export interface LoginResponse {
  mensaje: string;
  idUsuario: number;
  nombre: string;
  rol: string;
}


export interface Producto {
  idProducto?: number;     // Opcional porque no existe al crear
  nombre: string;          // Nombre del producto (máx 120 chars)
  descripcion?: string;    // Descripción opcional (máx 250 chars)
  precio: number;          // Precio (debe ser > 0)
  stock: number;           // Stock disponible (debe ser >= 0)
  categoria?: string;      // Categoría (máx 80 chars)
  activo?: number;         // 1 = activo, 0 = inactivo
}
