import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { FormProductoComponent } from './form-producto.component';
import { ProductoService } from '../../../core/services/producto.service';
import { Producto } from '../../../models/producto.model';

// ─── MODO CREACIÓN ───────────────────────────────────────────────────────────
describe('FormProductoComponent - Modo Creación', () => {
  let component: FormProductoComponent;
  let fixture: ComponentFixture<FormProductoComponent>;
  let productoServiceSpy: jasmine.SpyObj<ProductoService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const activatedRouteStub = {
    snapshot: { paramMap: convertToParamMap({}) }
  };

  beforeEach(async () => {
    productoServiceSpy = jasmine.createSpyObj('ProductoService', ['guardar', 'actualizar', 'buscarPorId']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));

    await TestBed.configureTestingModule({
      imports: [FormProductoComponent, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        { provide: ProductoService, useValue: productoServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar en modo creación', () => {
    expect(component.esEdicion).toBeFalse();
    expect(component.productoId).toBeNull();
  });

  it('debería tener categorías sugeridas predefinidas', () => {
    expect(component.categoriasSugeridas.length).toBeGreaterThan(0);
    expect(component.categoriasSugeridas).toContain('Electrónica');
    expect(component.categoriasSugeridas).toContain('Ropa');
  });

  it('debería requerir nombre', () => {
    component.nombre.setValue('');
    expect(component.nombre.invalid).toBeTrue();
  });

  it('debería validar nombre con contenido', () => {
    component.nombre.setValue('Laptop');
    expect(component.nombre.valid).toBeTrue();
  });

  it('debería requerir precio mayor a 0', () => {
    component.precio.setValue(0);
    expect(component.precio.invalid).toBeTrue();
  });

  it('debería validar precio positivo', () => {
    component.precio.setValue(1000);
    expect(component.precio.valid).toBeTrue();
  });

  it('debería requerir stock mayor o igual a 0', () => {
    component.stock.setValue(-1);
    expect(component.stock.invalid).toBeTrue();
  });

  it('debería validar stock igual a 0', () => {
    component.stock.setValue(0);
    expect(component.stock.valid).toBeTrue();
  });

  it('debería tener descripción y categoría como campos opcionales', () => {
    expect(component.descripcion.valid).toBeTrue();
    expect(component.categoria.valid).toBeTrue();
  });

  it('debería tener todos los getters definidos', () => {
    expect(component.nombre).toBeDefined();
    expect(component.descripcion).toBeDefined();
    expect(component.precio).toBeDefined();
    expect(component.stock).toBeDefined();
    expect(component.categoria).toBeDefined();
  });

  it('debería asignar la categoría al seleccionar una sugerida', () => {
    component.seleccionarCategoria('Electrónica');
    expect(component.categoria.value).toBe('Electrónica');
  });

  it('debería actualizar la categoría al seleccionar diferente', () => {
    component.seleccionarCategoria('Electrónica');
    component.seleccionarCategoria('Deportes');
    expect(component.categoria.value).toBe('Deportes');
  });

  it('no debería llamar al servicio si el formulario es inválido', () => {
    component.onSubmit();
    expect(productoServiceSpy.guardar).not.toHaveBeenCalled();
  });

  it('debería marcar todos los campos como touched al enviar formulario inválido', () => {
    component.onSubmit();
    expect(component.nombre.touched).toBeTrue();
    expect(component.precio.touched).toBeTrue();
  });

  it('debería llamar a guardar con los datos correctos', fakeAsync(() => {
    const mockProducto: Producto = { idProducto: 1, nombre: 'Webcam HD', precio: 45000, stock: 10, activo: 1 };
    productoServiceSpy.guardar.and.returnValue(of(mockProducto));
    component.nombre.setValue('Webcam HD');
    component.precio.setValue(45000);
    component.stock.setValue(10);
    component.productoForm.get('activo')!.setValue(1);
    component.onSubmit();
    tick(500);
    expect(productoServiceSpy.guardar).toHaveBeenCalled();
    expect(productoServiceSpy.guardar.calls.mostRecent().args[0].nombre).toBe('Webcam HD');
  }));

  it('debería manejar error al crear producto', fakeAsync(() => {
    productoServiceSpy.guardar.and.returnValue(
      throwError(() => ({ error: { mensaje: 'Error de validación' } }))
    );
    component.nombre.setValue('Webcam HD');
    component.precio.setValue(45000);
    component.stock.setValue(10);
    component.productoForm.get('activo')!.setValue(1);
    component.onSubmit();
    tick();
    expect(component.enviando).toBeFalse();
  }));
});

// ─── MODO EDICIÓN ────────────────────────────────────────────────────────────
describe('FormProductoComponent - Modo Edición', () => {
  let component: FormProductoComponent;
  let fixture: ComponentFixture<FormProductoComponent>;
  let productoServiceSpy: jasmine.SpyObj<ProductoService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockProducto: Producto = {
    idProducto: 3, nombre: 'Laptop Editar', descripcion: 'Descripción original',
    precio: 1000000, stock: 5, categoria: 'Electrónica', activo: 1
  };

  const activatedRouteStubEdicion = {
    snapshot: { paramMap: convertToParamMap({ id: '3' }) }
  };

  beforeEach(async () => {
    productoServiceSpy = jasmine.createSpyObj('ProductoService', ['guardar', 'actualizar', 'buscarPorId']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    productoServiceSpy.buscarPorId.and.returnValue(of(mockProducto));

    await TestBed.configureTestingModule({
      imports: [FormProductoComponent, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        { provide: ProductoService, useValue: productoServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStubEdicion }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería iniciar en modo edición con ID correcto', () => {
    expect(component.esEdicion).toBeTrue();
    expect(component.productoId).toBe(3);
  });

  it('debería cargar el producto al inicializar en modo edición', () => {
    expect(productoServiceSpy.buscarPorId).toHaveBeenCalledWith(3);
    expect(component.nombre.value).toBe('Laptop Editar');
    expect(component.precio.value).toBe(1000000);
    expect(component.stock.value).toBe(5);
  });

  it('debería llamar a actualizar en modo edición', fakeAsync(() => {
    productoServiceSpy.actualizar.and.returnValue(of(mockProducto));
    component.nombre.setValue('Laptop Editado');
    component.precio.setValue(900000);
    component.stock.setValue(3);
    component.productoForm.get('activo')!.setValue(1);
    component.onSubmit();
    tick(500);
    expect(productoServiceSpy.actualizar).toHaveBeenCalledWith(3, jasmine.any(Object));
  }));

  it('debería manejar error al buscar el producto (llamando directamente al método)', () => {
    productoServiceSpy.buscarPorId.and.returnValue(
      throwError(() => new Error('No encontrado'))
    );
    component.cargarProducto(3);
    expect(productoServiceSpy.buscarPorId).toHaveBeenCalledWith(3);
  });

  it('debería manejar error al actualizar producto', fakeAsync(() => {
    productoServiceSpy.actualizar.and.returnValue(
      throwError(() => ({ error: null }))
    );
    component.nombre.setValue('Test');
    component.precio.setValue(1000);
    component.stock.setValue(1);
    component.productoForm.get('activo')!.setValue(1);
    component.onSubmit();
    tick();
    expect(component.enviando).toBeFalse();
  }));
});
