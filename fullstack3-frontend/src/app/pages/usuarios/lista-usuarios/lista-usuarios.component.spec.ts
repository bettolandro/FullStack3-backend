import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ListaUsuariosComponent } from './lista-usuarios.component';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../models/usuario.model';

describe('ListaUsuariosComponent', () => {
  let component: ListaUsuariosComponent;
  let fixture: ComponentFixture<ListaUsuariosComponent>;
  let usuarioServiceSpy: jasmine.SpyObj<UsuarioService>;

  const mockUsuarios: Usuario[] = [
    { idUsuario: 1, nombre: 'Juan Pérez', correo: 'juan@test.com', password: 'p1', rol: 'ADMIN', activo: 1 },
    { idUsuario: 2, nombre: 'María González', correo: 'maria@test.com', password: 'p2', rol: 'USER', activo: 1 },
    { idUsuario: 3, nombre: 'Pedro López', correo: 'pedro@test.com', password: 'p3', rol: 'USER', activo: 0 }
  ];

  beforeEach(async () => {
    usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', [
      'listarTodos', 'eliminar', 'actualizar'
    ]);
    usuarioServiceSpy.listarTodos.and.returnValue(of(mockUsuarios));

    await TestBed.configureTestingModule({
      imports: [ListaUsuariosComponent, RouterTestingModule, FormsModule],
      providers: [
        { provide: UsuarioService, useValue: usuarioServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ─── CREACIÓN ────────────────────────────────────────────────────────────
  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar usuarios al inicializar', () => {
    expect(usuarioServiceSpy.listarTodos).toHaveBeenCalled();
    expect(component.usuarios.length).toBe(3);
  });

  it('debería poner cargando en false después de cargar usuarios', () => {
    expect(component.cargando).toBeFalse();
  });

  // ─── ESTADÍSTICAS ─────────────────────────────────────────────────────────
  it('debería calcular correctamente el total de usuarios activos', () => {
    expect(component.totalActivos).toBe(2);
  });

  it('debería calcular correctamente el total de usuarios inactivos', () => {
    expect(component.totalInactivos).toBe(1);
  });

  // ─── FILTRAR ─────────────────────────────────────────────────────────────
  it('debería filtrar por nombre correctamente', () => {
    component.textoBusqueda = 'juan';
    component.filtrar();
    expect(component.usuariosFiltrados.length).toBe(1);
    expect(component.usuariosFiltrados[0].nombre).toBe('Juan Pérez');
  });

  it('debería filtrar por correo correctamente', () => {
    component.textoBusqueda = 'maria@';
    component.filtrar();
    expect(component.usuariosFiltrados.length).toBe(1);
  });

  it('debería filtrar por rol correctamente', () => {
    component.textoBusqueda = 'admin';
    component.filtrar();
    expect(component.usuariosFiltrados.length).toBe(1);
    expect(component.usuariosFiltrados[0].rol).toBe('ADMIN');
  });

  it('debería mostrar todos los usuarios si el texto de búsqueda está vacío', () => {
    component.textoBusqueda = '';
    component.filtrar();
    expect(component.usuariosFiltrados.length).toBe(3);
  });

  it('debería retornar lista vacía si no hay coincidencias en el filtro', () => {
    component.textoBusqueda = 'zzz_no_existe';
    component.filtrar();
    expect(component.usuariosFiltrados.length).toBe(0);
  });

  // ─── CARGAR CON ERROR ────────────────────────────────────────────────────
  it('debería manejar error al cargar usuarios', () => {
    usuarioServiceSpy.listarTodos.and.returnValue(
      throwError(() => new Error('Error de red'))
    );

    component.cargarUsuarios();

    expect(component.cargando).toBeFalse();
  });

  // ─── ELIMINAR ────────────────────────────────────────────────────────────
  it('debería existir el método eliminar', () => {
    expect(component.eliminar).toBeDefined();
  });

  // ─── TOGGLE ACTIVO ────────────────────────────────────────────────────────
  it('debería existir el método toggleActivo', () => {
    expect(component.toggleActivo).toBeDefined();
  });
});
