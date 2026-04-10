
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root' // Disponible en toda la aplicación (singleton)
})
export class AuthService {

  // Clave usada para guardar la sesión en localStorage
  private readonly SESSION_KEY = 'fullstack3_session';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // ─── LOGIN ───────────────────────────────────────────────
  // Llama al endpoint POST /api/usuarios/login
  // Si es exitoso, guarda la respuesta en localStorage
  login(credenciales: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.apiUsuarios}/login`,
      credenciales
    ).pipe(
      // tap() ejecuta un efecto secundario sin modificar el stream
      tap(response => this.guardarSesion(response))
    );
  }

  // ─── LOGOUT ──────────────────────────────────────────────
  // Limpia la sesión y redirige al login
  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    this.router.navigate(['/login']);
  }

  // ─── VERIFICAR AUTENTICACIÓN ─────────────────────────────
  // Retorna true si hay una sesión activa en localStorage
  isLoggedIn(): boolean {
    return localStorage.getItem(this.SESSION_KEY) !== null;
  }

  // ─── OBTENER SESIÓN ──────────────────────────────────────
  // Retorna el objeto LoginResponse guardado, o null si no hay sesión
  getSesion(): LoginResponse | null {
    const data = localStorage.getItem(this.SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }

  // ─── VERIFICAR ROL ADMIN ──────────────────────────────────
  isAdmin(): boolean {
    const sesion = this.getSesion();
    return sesion?.rol === 'ADMIN';
  }

  // ─── MÉTODO PRIVADO: GUARDAR SESIÓN ──────────────────────
  private guardarSesion(response: LoginResponse): void {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(response));
  }
}
