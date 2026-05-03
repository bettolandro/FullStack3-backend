import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ListaProductosComponent } from './lista-productos.component';
import { ProductoService } from '../../../core/services/producto.service';
import { AuthService } from '../../../core/services/auth.service';
import { Producto } from '../../../models/producto.model';
import { LoginResponse } from '../../../models/usuario.model';

describe('ListaProductosComponent', () => {
  let component: ListaProductosComponent;
  let fixture: ComponentFixture<ListaProductosComponent>;
  let productoServiceSpy: jasmine.SpyObj<ProductoService>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  const mockSesion: LoginResponse = {
    mensaje: 'OK', idUsuario: 1, nombre: 'Admin', rol: 'ADMIN'
  };

  const mockProductos: Producto[] = [
    { idProducto: 1, nombre: 'Laptop Gamer', descripcion: 'Laptop top', precio: 1500000, stock: 10, categoria: 'Electrónica', activo: 1 },
    { idProducto: 2, nombre: 'Mouse Inalámbrico', descripcion: 'Mouse err.', precio: 25000, stock: 0,  categoria: 'Electrónica', activo: 1 },
    { idProducto: 3, nombre: 'Polera Deportiva', descripcion: 'Ropa cómoda', precio: 15000, stock: 30, categoria: 'Ropa', activo: 0 },
    { idProducto: 4, nombre: 'Teclado Mecánico', precio: 80000, stock: 5, activo: 1 }
  ];

  beforeEach(async () => {
    productoServiceSpy = jasmine.createSpyObj('ProductoService', ['listarTodos', 'eliminar']);
    productoServiceSpy.listarTodos.and.returnValue(of(mockProductos));

    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAdmin', 'getSesion', 'isLoggedIn']);
    authServiceSpy.isAdmin.and.returnValue(true);
    authServiceSpy.getSesion.and.returnValue(mockSesion);

    await TestBed.configureTestingModule({
      imports: [ListaProductosComponent, RouterTestingModule, FormsModule],
      providers: [
        { provide: ProductoService, useValue: productoServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ─── CREACIÓN ────────────────────────────────────────────────────────────
  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar productos al inicializar', () => {
    expect(productoServiceSpy.listarTodos).toHaveBeenCalled();
    expect(component.productos.length).toBe(4);
  });

  it('debería poner cargando en false después de cargar', () => {
    expect(component.cargando).toBeFalse();
  });

  it('debería extraer categorías únicas de los productos', () => {
    expect(component.categorias).toContain('Electrónica');
    expect(component.categorias).toContain('Ropa');
    expect(component.categorias.length).toBe(2);
  });

  // ─── ESTADÍSTICAS ────────────────────────────────────────────────────────
  it('debería calcular correctamente el total de productos activos', () => {
    expect(component.totalActivos).toBe(3);
  });

  it('debería calcular correctamente los productos sin stock', () => {
    expect(component.sinStock).toBe(1);
  });

  // ─── FILTROS ─────────────────────────────────────────────────────────────
  it('debería filtrar por nombre correctamente', () => {
    component.textoBusqueda = 'laptop';
    component.filtrar();
    expect(component.productosFiltrados.length).toBe(1);
    expect(component.productosFiltrados[0].nombre).toBe('Laptop Gamer');
  });

  it('debería filtrar por descripción correctamente', () => {
    component.textoBusqueda = 'Laptop top';
    component.filtrar();
    expect(component.productosFiltrados.length).toBe(1);
  });

  it('debería filtrar por categoría con el select', () => {
    component.categoriaSeleccionada = 'Ropa';
    component.filtrar();
    expect(component.productosFiltrados.length).toBe(1);
    expect(component.productosFiltrados[0].nombre).toBe('Polera Deportiva');
  });

  it('debería filtrar por estado activo', () => {
    component.soloActivos = true;
    component.filtrar();
    expect(component.productosFiltrados.every(p => p.activo === 1)).toBeTrue();
  });

  it('debería limpiar todos los filtros correctamente', () => {
    component.textoBusqueda = 'test';
    component.categoriaSeleccionada = 'Ropa';
    component.soloActivos = true;

    component.limpiarFiltros();

    expect(component.textoBusqueda).toBe('');
    expect(component.categoriaSeleccionada).toBe('');
    expect(component.soloActivos).toBeFalse();
    expect(component.productosFiltrados.length).toBe(4);
  });

  it('debería reportar hayFiltrosActivos = true cuando hay filtros', () => {
    component.textoBusqueda = 'test';
    expect(component.hayFiltrosActivos).toBeTrue();
  });

  it('debería reportar hayFiltrosActivos = false sin filtros', () => {
    component.textoBusqueda = '';
    component.categoriaSeleccionada = '';
    component.soloActivos = false;
    expect(component.hayFiltrosActivos).toBeFalse();
  });

  // ─── STOCK CLASS ─────────────────────────────────────────────────────────
  it('debería retornar badge-danger para stock 0', () => {
    expect(component.getStockClass(0)).toBe('badge-danger');
  });

  it('debería retornar badge-orange para stock menor a 5', () => {
    expect(component.getStockClass(3)).toBe('badge-orange');
  });

  it('debería retornar badge-success para stock normal', () => {
    expect(component.getStockClass(10)).toBe('badge-success');
  });

  // ─── ERROR AL CARGAR ──────────────────────────────────────────────────────
  it('debería manejar error al cargar productos', () => {
    productoServiceSpy.listarTodos.and.returnValue(
      throwError(() => new Error('Error de red'))
    );

    component.cargarProductos();

    expect(component.cargando).toBeFalse();
  });

  // ─── COMBINAR FILTROS ────────────────────────────────────────────────────
  it('debería combinar filtros de texto y categoría', () => {
    component.textoBusqueda = 'mouse';
    component.categoriaSeleccionada = 'Electrónica';
    component.filtrar();
    expect(component.productosFiltrados.length).toBe(1);
    expect(component.productosFiltrados[0].nombre).toBe('Mouse Inalámbrico');
  });
});
