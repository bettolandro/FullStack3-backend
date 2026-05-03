import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-MU4QYCSZ.js";
import {
  ProductoService,
  init_producto_service
} from "./chunk-DLZ2Y4CJ.js";
import {
  environment,
  init_environment
} from "./chunk-J2TET66I.js";
import "./chunk-DPIYGMOA.js";
import {
  TestBed,
  __spreadProps,
  __spreadValues,
  init_testing
} from "./chunk-X225SWGN.js";

// src/app/core/services/producto.service.spec.ts
init_testing();
init_producto_service();
init_environment();
describe("ProductoService", () => {
  let service;
  let httpMock;
  const mockProducto = {
    idProducto: 1,
    nombre: "Laptop Gamer",
    descripcion: "Laptop de alto rendimiento",
    precio: 15e5,
    stock: 10,
    categoria: "Electr\xF3nica",
    activo: 1
  };
  const mockProductos = [
    mockProducto,
    {
      idProducto: 2,
      nombre: "Mouse Inal\xE1mbrico",
      descripcion: "Mouse ergon\xF3mico",
      precio: 25e3,
      stock: 0,
      categoria: "Electr\xF3nica",
      activo: 1
    },
    {
      idProducto: 3,
      nombre: "Teclado Mec\xE1nico",
      precio: 8e4,
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
  it("deber\xEDa crearse correctamente", () => {
    expect(service).toBeTruthy();
  });
  it("deber\xEDa listar todos los productos con GET", () => {
    service.listarTodos().subscribe((productos) => {
      expect(productos.length).toBe(3);
      expect(productos[0].nombre).toBe("Laptop Gamer");
    });
    const req = httpMock.expectOne(environment.apiProductos);
    expect(req.request.method).toBe("GET");
    req.flush(mockProductos);
  });
  it("deber\xEDa retornar un arreglo vac\xEDo si no hay productos", () => {
    service.listarTodos().subscribe((productos) => {
      expect(productos).toEqual([]);
    });
    const req = httpMock.expectOne(environment.apiProductos);
    req.flush([]);
  });
  it("deber\xEDa buscar un producto por su ID con GET", () => {
    service.buscarPorId(1).subscribe((producto) => {
      expect(producto).toEqual(mockProducto);
      expect(producto.nombre).toBe("Laptop Gamer");
    });
    const req = httpMock.expectOne(`${environment.apiProductos}/1`);
    expect(req.request.method).toBe("GET");
    req.flush(mockProducto);
  });
  it("deber\xEDa crear un nuevo producto con POST", () => {
    const nuevoProducto = {
      nombre: "Webcam HD",
      precio: 45e3,
      stock: 20,
      categoria: "Electr\xF3nica",
      activo: 1
    };
    service.guardar(nuevoProducto).subscribe((producto) => {
      expect(producto.idProducto).toBe(10);
      expect(producto.nombre).toBe("Webcam HD");
    });
    const req = httpMock.expectOne(environment.apiProductos);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(nuevoProducto);
    req.flush(__spreadProps(__spreadValues({}, nuevoProducto), { idProducto: 10 }));
  });
  it("deber\xEDa actualizar un producto existente con PUT", () => {
    const productoActualizado = __spreadProps(__spreadValues({}, mockProducto), { precio: 14e5 });
    service.actualizar(1, productoActualizado).subscribe((producto) => {
      expect(producto.precio).toBe(14e5);
    });
    const req = httpMock.expectOne(`${environment.apiProductos}/1`);
    expect(req.request.method).toBe("PUT");
    expect(req.request.body).toEqual(productoActualizado);
    req.flush(productoActualizado);
  });
  it("deber\xEDa eliminar un producto con DELETE", () => {
    service.eliminar(1).subscribe((msg) => {
      expect(msg).toBe("Producto eliminado correctamente");
    });
    const req = httpMock.expectOne(`${environment.apiProductos}/1`);
    expect(req.request.method).toBe("DELETE");
    req.flush("Producto eliminado correctamente");
  });
  it("deber\xEDa enviar la URL correcta al eliminar con ID diferente", () => {
    service.eliminar(99).subscribe();
    const req = httpMock.expectOne(`${environment.apiProductos}/99`);
    expect(req.request.method).toBe("DELETE");
    req.flush("OK");
  });
});
//# sourceMappingURL=spec-app-core-services-producto.service.spec.js.map
