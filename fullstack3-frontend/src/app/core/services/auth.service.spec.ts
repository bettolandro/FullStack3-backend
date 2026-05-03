import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginRequest, LoginResponse } from '../../models/usuario.model';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockLoginResponse: LoginResponse = {
    mensaje: 'Inicio de sesion correcto',
    idUsuario: 1,
    nombre: 'Admin Test',
    rol: 'ADMIN'
  };

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy }
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);

    // Limpiar localStorage antes de cada test
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  // ─── CREACIÓN ────────────────────────────────────────────────────────────
  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  // ─── LOGIN ───────────────────────────────────────────────────────────────
  it('debería llamar al endpoint de login con las credenciales correctas', () => {
    const credenciales: LoginRequest = { correo: 'admin@test.com', password: '123' };

    service.login(credenciales).subscribe(response => {
      expect(response).toEqual(mockLoginResponse);
    });

    const req = httpMock.expectOne('http://localhost:8081/api/usuarios/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(credenciales);
    req.flush(mockLoginResponse);
  });

  it('debería guardar la sesión en localStorage tras un login exitoso', () => {
    const credenciales: LoginRequest = { correo: 'admin@test.com', password: '123' };

    service.login(credenciales).subscribe();

    const req = httpMock.expectOne('http://localhost:8081/api/usuarios/login');
    req.flush(mockLoginResponse);

    const stored = localStorage.getItem('fullstack3_session');
    expect(stored).not.toBeNull();
    expect(JSON.parse(stored!)).toEqual(mockLoginResponse);
  });

  // ─── LOGOUT ──────────────────────────────────────────────────────────────
  it('debería eliminar la sesión de localStorage al hacer logout', () => {
    localStorage.setItem('fullstack3_session', JSON.stringify(mockLoginResponse));

    service.logout();

    expect(localStorage.getItem('fullstack3_session')).toBeNull();
  });

  it('debería navegar a /login al hacer logout', () => {
    service.logout();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  // ─── IS LOGGED IN ────────────────────────────────────────────────────────
  it('debería retornar true si hay sesión activa', () => {
    localStorage.setItem('fullstack3_session', JSON.stringify(mockLoginResponse));
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('debería retornar false si no hay sesión activa', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });

  // ─── GET SESION ──────────────────────────────────────────────────────────
  it('debería retornar el objeto de sesión si existe en localStorage', () => {
    localStorage.setItem('fullstack3_session', JSON.stringify(mockLoginResponse));
    const sesion = service.getSesion();
    expect(sesion).toEqual(mockLoginResponse);
  });

  it('debería retornar null si no hay sesión guardada', () => {
    expect(service.getSesion()).toBeNull();
  });

  // ─── IS ADMIN ────────────────────────────────────────────────────────────
  it('debería retornar true si el rol es ADMIN', () => {
    localStorage.setItem('fullstack3_session', JSON.stringify(mockLoginResponse));
    expect(service.isAdmin()).toBeTrue();
  });

  it('debería retornar false si el rol es USER', () => {
    const sesionUser: LoginResponse = { ...mockLoginResponse, rol: 'USER' };
    localStorage.setItem('fullstack3_session', JSON.stringify(sesionUser));
    expect(service.isAdmin()).toBeFalse();
  });

  it('debería retornar false si no hay sesión activa al verificar isAdmin', () => {
    expect(service.isAdmin()).toBeFalse();
  });
});
