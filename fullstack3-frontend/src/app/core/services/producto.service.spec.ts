import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductoService } from './producto.service';
import { Producto } from '../../models/producto.model';
import { environment } from '../../../environments/environment';

describe('ProductoService', () => {
  let service: ProductoService;
  let httpMock: HttpTestingController;

  const mockProducto: Producto = {
    idProducto: 1,
    nombre: 'Laptop Gamer',
    descripcion: 'Laptop de alto rendimiento',
    precio: 1500000,
    stock: 10,
    categoria: 'Electrónica',
    activo: 1
  };

  const mockProductos: Producto[] = [
    mockProducto,
    {
      idProducto: 2,
      nombre: 'Mouse Inalámbrico',
      descripcion: 'Mouse ergonómico',
      precio: 25000,
      stock: 0,
      categoria: 'Electrónica',
      activo: 1
    },
    {
      idProducto: 3,
      nombre: 'Teclado Mecánico',
      precio: 80000,
      stock: 5,
      activo: 0
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductoService]
    });

    service = TestBed.inject(ProductoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // ─── CREACIÓN ────────────────────────────────────────────────────────────
  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  // ─── LISTAR TODOS ────────────────────────────────────────────────────────
  it('debería listar todos los productos con GET', () => {
    service.listarTodos().subscribe(productos => {
      expect(productos.length).toBe(3);
      expect(productos[0].nombre).toBe('Laptop Gamer');
    });

    const req = httpMock.expectOne(environment.apiProductos);
    expect(req.request.method).toBe('GET');
    req.flush(mockProductos);
  });

  it('debería retornar un arreglo vacío si no hay productos', () => {
    service.listarTodos().subscribe(productos => {
      expect(productos).toEqual([]);
    });

    const req = httpMock.expectOne(environment.apiProductos);
    req.flush([]);
  });

  // ─── BUSCAR POR ID ───────────────────────────────────────────────────────
  it('debería buscar un producto por su ID con GET', () => {
    service.buscarPorId(1).subscribe(producto => {
      expect(producto).toEqual(mockProducto);
      expect(producto.nombre).toBe('Laptop Gamer');
    });

    const req = httpMock.expectOne(`${environment.apiProductos}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducto);
  });

  // ─── GUARDAR ─────────────────────────────────────────────────────────────
  it('debería crear un nuevo producto con POST', () => {
    const nuevoProducto: Producto = {
      nombre: 'Webcam HD',
      precio: 45000,
      stock: 20,
      categoria: 'Electrónica',
      activo: 1
    };

    service.guardar(nuevoProducto).subscribe(producto => {
      expect(producto.idProducto).toBe(10);
      expect(producto.nombre).toBe('Webcam HD');
    });

    const req = httpMock.expectOne(environment.apiProductos);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(nuevoProducto);
    req.flush({ ...nuevoProducto, idProducto: 10 });
  });

  // ─── ACTUALIZAR ──────────────────────────────────────────────────────────
  it('debería actualizar un producto existente con PUT', () => {
    const productoActualizado: Producto = { ...mockProducto, precio: 1400000 };

    service.actualizar(1, productoActualizado).subscribe(producto => {
      expect(producto.precio).toBe(1400000);
    });

    const req = httpMock.expectOne(`${environment.apiProductos}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(productoActualizado);
    req.flush(productoActualizado);
  });

  // ─── ELIMINAR ────────────────────────────────────────────────────────────
  it('debería eliminar un producto con DELETE', () => {
    service.eliminar(1).subscribe(msg => {
      expect(msg).toBe('Producto eliminado correctamente');
    });

    const req = httpMock.expectOne(`${environment.apiProductos}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush('Producto eliminado correctamente');
  });

  it('debería enviar la URL correcta al eliminar con ID diferente', () => {
    service.eliminar(99).subscribe();

    const req = httpMock.expectOne(`${environment.apiProductos}/99`);
    expect(req.request.method).toBe('DELETE');
    req.flush('OK');
  });
});
