
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // URL base del microservicio (definida en environment.ts)
  private apiUrl = environment.apiUsuarios;

  constructor(private http: HttpClient) {}

  // ─── LISTAR TODOS ────────────────────────────────────────
  // GET /api/usuarios → retorna lista de usuarios
  listarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // ─── BUSCAR POR ID ───────────────────────────────────────
  // GET /api/usuarios/{id} → retorna un usuario
  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  // ─── CREAR USUARIO ───────────────────────────────────────
  // POST /api/usuarios → crea y retorna el nuevo usuario
  guardar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // ─── ACTUALIZAR USUARIO ──────────────────────────────────
  // PUT /api/usuarios/{id} → actualiza y retorna el usuario
  actualizar(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  // ─── ELIMINAR USUARIO ────────────────────────────────────
  // DELETE /api/usuarios/{id} → retorna mensaje de confirmación
  eliminar(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
