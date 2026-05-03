
export interface Producto {
  idProducto?: number;    // Opcional: no existe al crear uno nuevo
  nombre: string;         // Requerido, máx 120 chars
  descripcion?: string;   // Opcional, máx 250 chars
  precio: number;         // Requerido, debe ser > 0 (validado en backend)
  stock: number;          // Requerido, debe ser >= 0
  categoria?: string;     // Opcional, máx 80 chars
  activo?: number;        // 1 = activo, 0 = inactivo (default 1 en backend)
}
