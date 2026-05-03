import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../../core/services/auth.service';
import { LoginResponse } from '../../../models/usuario.model';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  const mockSesionAdmin: LoginResponse = {
    mensaje: 'OK', idUsuario: 1, nombre: 'Admin Test', rol: 'ADMIN'
  };
  const mockSesionUser: LoginResponse = {
    mensaje: 'OK', idUsuario: 2, nombre: 'Pedro García', rol: 'USER'
  };

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', [
      'getSesion', 'logout', 'isAdmin', 'isLoggedIn'
    ]);
    authServiceSpy.getSesion.and.returnValue(mockSesionAdmin);

    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar la sesión al inicializar', () => {
    expect(authServiceSpy.getSesion).toHaveBeenCalled();
    expect(component.sesion).toEqual(mockSesionAdmin);
  });

  it('debería iniciar con menuAbierto en false', () => {
    expect(component.menuAbierto).toBeFalse();
  });

  it('debería retornar la inicial en mayúscula del nombre del usuario', () => {
    expect(component.inicialNombre).toBe('A');
  });

  it('debería retornar "?" si no hay sesión activa', () => {
    component.sesion = null;
    expect(component.inicialNombre).toBe('?');
  });

  it('debería retornar inicial en mayúscula si el nombre comienza en minúscula', () => {
    component.sesion = { ...mockSesionUser, nombre: 'pedro' };
    expect(component.inicialNombre).toBe('P');
  });

  it('debería retornar badge-purple para rol ADMIN', () => {
    const badge = component.rolBadge;
    expect(badge.texto).toBe('Admin');
    expect(badge.clase).toBe('badge-purple');
  });

  it('debería retornar badge-blue para rol USER', () => {
    component.sesion = mockSesionUser;
    const badge = component.rolBadge;
    expect(badge.texto).toBe('User');
    expect(badge.clase).toBe('badge-blue');
  });

  it('debería retornar badge-blue si no hay sesión', () => {
    component.sesion = null;
    expect(component.rolBadge.clase).toBe('badge-blue');
  });

  it('debería alternar el estado del menú al llamar toggleMenu', () => {
    expect(component.menuAbierto).toBeFalse();
    component.toggleMenu();
    expect(component.menuAbierto).toBeTrue();
    component.toggleMenu();
    expect(component.menuAbierto).toBeFalse();
  });

  it('debería cerrar el menú al llamar cerrarMenu', () => {
    component.menuAbierto = true;
    component.cerrarMenu();
    expect(component.menuAbierto).toBeFalse();
  });

  it('debería existir el método confirmarLogout', () => {
    expect(component.confirmarLogout).toBeDefined();
  });

  it('debería llamar a confirmarLogout sin lanzar error', () => {
    expect(() => component.confirmarLogout()).not.toThrow();
  });
});
