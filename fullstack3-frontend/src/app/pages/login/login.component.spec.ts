import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from '../../core/services/auth.service';
import { LoginResponse } from '../../models/usuario.model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockLoginResponse: LoginResponse = {
    mensaje: 'Inicio de sesion correcto',
    idUsuario: 1,
    nombre: 'Admin Test',
    rol: 'ADMIN'
  };

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login', 'isLoggedIn', 'getSesion']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate', 'createUrlTree', 'serializeUrl']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    authServiceSpy.isLoggedIn.and.returnValue(false);

    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el formulario con campos vacíos', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.correo.value).toBe('');
    expect(component.password.value).toBe('');
  });

  it('debería iniciar con cargando en false', () => {
    expect(component.cargando).toBeFalse();
  });

  it('debería iniciar con mostrarPassword en false', () => {
    expect(component.mostrarPassword).toBeFalse();
  });

  it('debería redirigir al dashboard si ya está logueado', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('debería marcar el formulario como inválido si está vacío', () => {
    expect(component.loginForm.invalid).toBeTrue();
  });

  it('debería marcar correo como inválido si no tiene formato email', () => {
    component.correo.setValue('no-es-un-email');
    expect(component.correo.invalid).toBeTrue();
  });

  it('debería marcar correo como válido con formato correcto', () => {
    component.correo.setValue('test@example.com');
    expect(component.correo.valid).toBeTrue();
  });

  it('debería marcar password como inválido si tiene menos de 3 caracteres', () => {
    component.password.setValue('ab');
    expect(component.password.invalid).toBeTrue();
  });

  it('debería marcar el formulario como válido con datos correctos', () => {
    component.correo.setValue('test@example.com');
    component.password.setValue('password123');
    expect(component.loginForm.valid).toBeTrue();
  });

  it('debería alternar la visibilidad de la contraseña', () => {
    expect(component.mostrarPassword).toBeFalse();
    component.togglePassword();
    expect(component.mostrarPassword).toBeTrue();
    component.togglePassword();
    expect(component.mostrarPassword).toBeFalse();
  });

  it('no debería llamar al servicio si el formulario es inválido', () => {
    component.onSubmit();
    expect(authServiceSpy.login).not.toHaveBeenCalled();
  });

  it('debería marcar todos los campos como touched si el formulario es inválido', () => {
    component.onSubmit();
    expect(component.correo.touched).toBeTrue();
    expect(component.password.touched).toBeTrue();
  });

  it('debería llamar al servicio login con las credenciales del formulario', () => {
    authServiceSpy.login.and.returnValue(of(mockLoginResponse));
    component.correo.setValue('admin@test.com');
    component.password.setValue('admin123');
    component.onSubmit();
    expect(authServiceSpy.login).toHaveBeenCalledWith({
      correo: 'admin@test.com',
      password: 'admin123'
    });
  });

  it('debería poner cargando en false al terminar login exitoso', fakeAsync(() => {
    authServiceSpy.login.and.returnValue(of(mockLoginResponse));
    component.correo.setValue('admin@test.com');
    component.password.setValue('admin123');
    component.onSubmit();
    tick(2000);
    expect(component.cargando).toBeFalse();
  }));

  it('debería manejar error en login y poner cargando en false', fakeAsync(() => {
    authServiceSpy.login.and.returnValue(
      throwError(() => ({ error: { mensaje: 'Credenciales incorrectas' } }))
    );
    component.correo.setValue('wrong@test.com');
    component.password.setValue('wrong123');
    component.onSubmit();
    tick();
    expect(component.cargando).toBeFalse();
  }));

  it('debería manejar error sin campo mensaje en la respuesta', fakeAsync(() => {
    authServiceSpy.login.and.returnValue(
      throwError(() => ({ error: null }))
    );
    component.correo.setValue('wrong@test.com');
    component.password.setValue('wrong123');
    expect(() => { component.onSubmit(); tick(); }).not.toThrow();
  }));
});
