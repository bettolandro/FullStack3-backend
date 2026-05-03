import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../../core/services/auth.service';
import { UsuarioService } from '../../core/services/usuario.service';
import { ProductoService } from '../../core/services/producto.service';
import { Usuario, LoginResponse } from '../../models/usuario.model';
import { Producto } from '../../models/producto.model';

describe('DashboardComponent - Admin', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let usuarioServiceSpy: jasmine.SpyObj<UsuarioService>;
  let productoServiceSpy: jasmine.SpyObj<ProductoService>;

  const mockSesionAdmin: LoginResponse = {
    mensaje: 'OK', idUsuario: 1, nombre: 'Admin Test', rol: 'ADMIN'
  };

  const mockUsuarios: Usuario[] = [
    { idUsuario: 1, nombre: 'Admin', correo: 'a@a.com', password: 'p', rol: 'ADMIN', activo: 1 },
    { idUsuario: 2, nombre: 'User1', correo: 'u@u.com', password: 'p', rol: 'USER', activo: 1 },
    { idUsuario: 3, nombre: 'User2', correo: 'u2@u.com', password: 'p', rol: 'USER', activo: 0 }
  ];

  const mockProductos: Producto[] = [
    { idProducto: 1, nombre: 'Laptop', precio: 1000000, stock: 10, categoria: 'Electrónica', activo: 1 },
    { idProducto: 2, nombre: 'Mouse', precio: 20000, stock: 0, categoria: 'Electrónica', activo: 1 },
    { idProducto: 3, nombre: 'Polera', precio: 15000, stock: 30, categoria: 'Ropa', activo: 0 }
  ];

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAdmin', 'getSesion', 'isLoggedIn']);
    authServiceSpy.isAdmin.and.returnValue(true);
    authServiceSpy.getSesion.and.returnValue(mockSesionAdmin);

    usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['listarTodos']);
    usuarioServiceSpy.listarTodos.and.returnValue(of(mockUsuarios));

    productoServiceSpy = jasmine.createSpyObj('ProductoService', ['listarTodos']);
    productoServiceSpy.listarTodos.and.returnValue(of(mockProductos));

    await TestBed.configureTestingModule({
      imports: [DashboardComponent, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: UsuarioService, useValue: usuarioServiceSpy },
        { provide: ProductoService, useValue: productoServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ─── CREACIÓN ────────────────────────────────────────────────────────────
  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar la sesión del admin al inicializar', () => {
    expect(component.sesion).toEqual(mockSesionAdmin);
  });

  it('debería poner cargando en false después de cargar datos', fakeAsync(() => {
    tick(100);
    expect(component.cargando).toBeFalse();
  }));

  // ─── ESTADÍSTICAS USUARIOS ────────────────────────────────────────────────
  it('debería calcular el total de usuarios correctamente', fakeAsync(() => {
    tick(100);
    expect(component.totalUsuarios).toBe(3);
  }));

  it('debería calcular usuarios activos correctamente', fakeAsync(() => {
    tick(100);
    expect(component.usuariosActivos).toBe(2);
  }));

  it('debería calcular total de admins correctamente', fakeAsync(() => {
    tick(100);
    expect(component.totalAdmins).toBe(1);
  }));

  // ─── ESTADÍSTICAS PRODUCTOS ───────────────────────────────────────────────
  it('debería calcular el total de productos correctamente', fakeAsync(() => {
    tick(100);
    expect(component.totalProductos).toBe(3);
  }));

  it('debería calcular productos activos correctamente', fakeAsync(() => {
    tick(100);
    expect(component.productosActivos).toBe(2);
  }));

  it('debería calcular productos sin stock correctamente', fakeAsync(() => {
    tick(100);
    expect(component.sinStock).toBe(1);
  }));

  it('debería calcular el stock total correctamente', fakeAsync(() => {
    tick(100);
    expect(component.stockTotal).toBe(40);
  }));

  it('debería extraer categorías únicas', fakeAsync(() => {
    tick(100);
    expect(component.categorias).toContain('Electrónica');
    expect(component.categorias).toContain('Ropa');
  }));

  it('debería cargar los últimos 5 productos', fakeAsync(() => {
    tick(100);
    expect(component.ultimosProductos.length).toBeLessThanOrEqual(5);
  }));

  // ─── PORCENTAJE ──────────────────────────────────────────────────────────
  it('debería calcular el porcentaje de activos correctamente', fakeAsync(() => {
    tick(100);
    expect(component.porcentajeActivos).toBe(67);
  }));

  it('debería retornar 0 si no hay productos al calcular porcentaje', () => {
    component.totalProductos = 0;
    expect(component.porcentajeActivos).toBe(0);
  });

  // ─── SALUDO ──────────────────────────────────────────────────────────────
  it('debería retornar un saludo no vacío', () => {
    expect(component.saludo).toBeTruthy();
    expect(['Buenos días', 'Buenas tardes', 'Buenas noches']).toContain(component.saludo);
  });

  // ─── PRIMER NOMBRE ───────────────────────────────────────────────────────
  it('debería retornar el primer nombre de la sesión', () => {
    expect(component.primerNombre).toBe('Admin');
  });

  it('debería retornar cadena vacía si no hay sesión', () => {
    component.sesion = null;
    expect(component.primerNombre).toBe('');
  });

  // ─── ERRORES ─────────────────────────────────────────────────────────────
  it('debería manejar error en microservicio de usuarios con graceful degradation', fakeAsync(() => {
    usuarioServiceSpy.listarTodos.and.returnValue(
      throwError(() => new Error('Error usuarios'))
    );

    component.cargarEstadisticas();
    tick(9000);

    expect(component.cargando).toBeFalse();
  }));

  it('debería manejar error en microservicio de productos con graceful degradation', fakeAsync(() => {
    productoServiceSpy.listarTodos.and.returnValue(
      throwError(() => new Error('Error productos'))
    );

    component.cargarEstadisticas();
    tick(9000);

    expect(component.cargando).toBeFalse();
  }));
});

describe('DashboardComponent - Usuario normal (USER)', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let usuarioServiceSpy: jasmine.SpyObj<UsuarioService>;
  let productoServiceSpy: jasmine.SpyObj<ProductoService>;

  const mockSesionUser: LoginResponse = {
    mensaje: 'OK', idUsuario: 2, nombre: 'Pedro User', rol: 'USER'
  };

  const mockProductos: Producto[] = [
    { idProducto: 1, nombre: 'Laptop', precio: 1000000, stock: 10, activo: 1 }
  ];

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAdmin', 'getSesion', 'isLoggedIn']);
    authServiceSpy.isAdmin.and.returnValue(false);
    authServiceSpy.getSesion.and.returnValue(mockSesionUser);

    usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['listarTodos']);
    productoServiceSpy = jasmine.createSpyObj('ProductoService', ['listarTodos']);
    productoServiceSpy.listarTodos.and.returnValue(of(mockProductos));

    await TestBed.configureTestingModule({
      imports: [DashboardComponent, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: UsuarioService, useValue: usuarioServiceSpy },
        { provide: ProductoService, useValue: productoServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente para un usuario normal', () => {
    expect(component).toBeTruthy();
  });

  it('NO debería llamar al servicio de usuarios si no es admin', fakeAsync(() => {
    tick(100);
    expect(usuarioServiceSpy.listarTodos).not.toHaveBeenCalled();
  }));

  it('debería cargar productos para usuarios normales', fakeAsync(() => {
    tick(100);
    expect(productoServiceSpy.listarTodos).toHaveBeenCalled();
    expect(component.totalProductos).toBe(1);
  }));

  it('debería retornar el primer nombre del usuario normal', () => {
    expect(component.primerNombre).toBe('Pedro');
  });
});
