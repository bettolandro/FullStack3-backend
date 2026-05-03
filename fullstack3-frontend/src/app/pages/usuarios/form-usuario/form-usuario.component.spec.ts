import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { FormUsuarioComponent } from './form-usuario.component';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../models/usuario.model';

// ─── MODO CREACIÓN ───────────────────────────────────────────────────────────
describe('FormUsuarioComponent - Modo Creación', () => {
  let component: FormUsuarioComponent;
  let fixture: ComponentFixture<FormUsuarioComponent>;
  let usuarioServiceSpy: jasmine.SpyObj<UsuarioService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const activatedRouteStub = {
    snapshot: { paramMap: convertToParamMap({}) }
  };

  beforeEach(async () => {
    usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['guardar', 'actualizar', 'buscarPorId']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));

    await TestBed.configureTestingModule({
      imports: [FormUsuarioComponent, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        { provide: UsuarioService, useValue: usuarioServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente en modo creación', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar en modo creación (esEdicion = false)', () => {
    expect(component.esEdicion).toBeFalse();
  });

  it('debería inicializar el formulario con valores por defecto', () => {
    expect(component.usuarioForm).toBeDefined();
    expect(component.rol.value).toBe('USER');
    expect(component.activo.value).toBe(1);
  });

  it('debería invalidar nombre con menos de 3 caracteres', () => {
    component.nombre.setValue('AB');
    expect(component.nombre.invalid).toBeTrue();
  });

  it('debería validar nombre con 3 o más caracteres', () => {
    component.nombre.setValue('Ana');
    expect(component.nombre.valid).toBeTrue();
  });

  it('debería requerir un correo con formato válido', () => {
    component.correo.setValue('no-es-email');
    expect(component.correo.invalid).toBeTrue();
  });

  it('debería validar correo con formato correcto', () => {
    component.correo.setValue('valid@email.com');
    expect(component.correo.valid).toBeTrue();
  });

  it('debería requerir password en modo creación', () => {
    component.password.setValue('');
    expect(component.password.invalid).toBeTrue();
  });

  it('debería tener todos los getters funcionando', () => {
    expect(component.nombre).toBeDefined();
    expect(component.correo).toBeDefined();
    expect(component.password).toBeDefined();
    expect(component.rol).toBeDefined();
    expect(component.activo).toBeDefined();
  });

  it('no debería llamar al servicio si el formulario es inválido', () => {
    component.onSubmit();
    expect(usuarioServiceSpy.guardar).not.toHaveBeenCalled();
  });

  it('debería marcar todos los campos como touched al enviar formulario inválido', () => {
    component.onSubmit();
    expect(component.nombre.touched).toBeTrue();
    expect(component.correo.touched).toBeTrue();
  });

  it('debería llamar a guardar con los datos del formulario', fakeAsync(() => {
    const mockUsuario: Usuario = {
      idUsuario: 1, nombre: 'Test', correo: 'test@test.com',
      password: 'test123', rol: 'USER', activo: 1
    };
    usuarioServiceSpy.guardar.and.returnValue(of(mockUsuario));
    component.nombre.setValue('Test');
    component.correo.setValue('test@test.com');
    component.password.setValue('test123');
    component.rol.setValue('USER');
    component.activo.setValue(1);
    component.onSubmit();
    tick(500);
    expect(usuarioServiceSpy.guardar).toHaveBeenCalled();
  }));

  it('debería manejar error al crear usuario', fakeAsync(() => {
    usuarioServiceSpy.guardar.and.returnValue(
      throwError(() => ({ error: { mensaje: 'Correo ya existe' } }))
    );
    component.nombre.setValue('Test');
    component.correo.setValue('test@test.com');
    component.password.setValue('test123');
    component.rol.setValue('USER');
    component.activo.setValue(1);
    component.onSubmit();
    tick();
    expect(component.enviando).toBeFalse();
  }));
});

// ─── MODO EDICIÓN ────────────────────────────────────────────────────────────
describe('FormUsuarioComponent - Modo Edición', () => {
  let component: FormUsuarioComponent;
  let fixture: ComponentFixture<FormUsuarioComponent>;
  let usuarioServiceSpy: jasmine.SpyObj<UsuarioService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockUsuario: Usuario = {
    idUsuario: 5, nombre: 'Usuario Editar', correo: 'editar@test.com',
    password: 'pass123', rol: 'USER', activo: 1
  };

  const activatedRouteStubEdicion = {
    snapshot: { paramMap: convertToParamMap({ id: '5' }) }
  };

  beforeEach(async () => {
    usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['guardar', 'actualizar', 'buscarPorId']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    usuarioServiceSpy.buscarPorId.and.returnValue(of(mockUsuario));

    await TestBed.configureTestingModule({
      imports: [FormUsuarioComponent, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        { provide: UsuarioService, useValue: usuarioServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStubEdicion }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería iniciar en modo edición cuando hay un ID en la URL', () => {
    expect(component.esEdicion).toBeTrue();
    expect(component.usuarioId).toBe(5);
  });

  it('debería cargar el usuario al inicializar en modo edición', () => {
    expect(usuarioServiceSpy.buscarPorId).toHaveBeenCalledWith(5);
    expect(component.nombre.value).toBe('Usuario Editar');
    expect(component.correo.value).toBe('editar@test.com');
  });

  it('debería advertir si se intenta guardar sin password en modo edición', fakeAsync(() => {
    component.nombre.setValue('Test Edit');
    component.correo.setValue('editar@test.com');
    component.password.setValue('');
    component.rol.setValue('USER');
    component.activo.setValue(1);
    component.onSubmit();
    tick();
    expect(component.enviando).toBeFalse();
    expect(usuarioServiceSpy.actualizar).not.toHaveBeenCalled();
  }));

  it('debería llamar a actualizar con formulario válido en modo edición', fakeAsync(() => {
    usuarioServiceSpy.actualizar.and.returnValue(of(mockUsuario));
    component.nombre.setValue('Usuario Actualizado');
    component.correo.setValue('editar@test.com');
    component.password.setValue('newpass123');
    component.rol.setValue('USER');
    component.activo.setValue(1);
    component.onSubmit();
    tick(500);
    expect(usuarioServiceSpy.actualizar).toHaveBeenCalledWith(5, jasmine.any(Object));
  }));

  it('debería manejar error al buscar el usuario en modo edición (error observable)', () => {
    usuarioServiceSpy.buscarPorId.and.returnValue(
      throwError(() => new Error('No encontrado'))
    );
    // Llamar directamente al método de carga
    component.cargarUsuario(5);
    expect(usuarioServiceSpy.buscarPorId).toHaveBeenCalledWith(5);
  });
});
