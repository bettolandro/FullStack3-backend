
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Producto } from '../../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // URL base del microservicio (definida en environment.ts)
  private apiUrl = environment.apiProductos;

  constructor(private http: HttpClient) {}

  // ─── LISTAR TODOS ────────────────────────────────────────
  // GET /api/productos → retorna lista de productos
  listarTodos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // ─── BUSCAR POR ID ───────────────────────────────────────
  // GET /api/productos/{id} → retorna un producto
  buscarPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // ─── CREAR PRODUCTO ──────────────────────────────────────
  // POST /api/productos → crea y retorna el nuevo producto
  guardar(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  // ─── ACTUALIZAR PRODUCTO ─────────────────────────────────
  // PUT /api/productos/{id} → actualiza y retorna el producto
  actualizar(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  // ─── ELIMINAR PRODUCTO ───────────────────────────────────
  // DELETE /api/productos/{id} → retorna mensaje de confirmación
  eliminar(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
