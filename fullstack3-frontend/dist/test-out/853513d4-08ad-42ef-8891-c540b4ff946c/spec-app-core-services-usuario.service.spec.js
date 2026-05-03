import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-MU4QYCSZ.js";
import {
  UsuarioService,
  init_usuario_service
} from "./chunk-ZAFUMGS2.js";
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

// src/app/core/services/usuario.service.spec.ts
init_testing();
init_usuario_service();
init_environment();
describe("UsuarioService", () => {
  let service;
  let httpMock;
  const mockUsuario = {
    idUsuario: 1,
    nombre: "Juan P\xE9rez",
    correo: "juan@test.com",
    password: "pass123",
    rol: "ADMIN",
    activo: 1
  };
  const mockUsuarios = [
    mockUsuario,
    {
      idUsuario: 2,
      nombre: "Mar\xEDa Gonz\xE1lez",
      correo: "maria@test.com",
      password: "pass456",
      rol: "USER",
      activo: 1
    },
    {
      idUsuario: 3,
      nombre: "Pedro L\xF3pez",
      correo: "pedro@test.com",
      password: "pass789",
      rol: "USER",
      activo: 0
    }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService]
    });
    service = TestBed.inject(UsuarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("deber\xEDa crearse correctamente", () => {
    expect(service).toBeTruthy();
  });
  it("deber\xEDa listar todos los usuarios con GET", () => {
    service.listarTodos().subscribe((usuarios) => {
      expect(usuarios.length).toBe(3);
      expect(usuarios[0].nombre).toBe("Juan P\xE9rez");
      expect(usuarios[1].rol).toBe("USER");
    });
    const req = httpMock.expectOne(environment.apiUsuarios);
    expect(req.request.method).toBe("GET");
    req.flush(mockUsuarios);
  });
  it("deber\xEDa retornar un arreglo vac\xEDo si no hay usuarios", () => {
    service.listarTodos().subscribe((usuarios) => {
      expect(usuarios).toEqual([]);
      expect(usuarios.length).toBe(0);
    });
    const req = httpMock.expectOne(environment.apiUsuarios);
    req.flush([]);
  });
  it("deber\xEDa buscar un usuario por ID con GET", () => {
    service.buscarPorId(1).subscribe((usuario) => {
      expect(usuario).toEqual(mockUsuario);
      expect(usuario.correo).toBe("juan@test.com");
    });
    const req = httpMock.expectOne(`${environment.apiUsuarios}/1`);
    expect(req.request.method).toBe("GET");
    req.flush(mockUsuario);
  });
  it("deber\xEDa construir la URL correcta al buscar por ID", () => {
    service.buscarPorId(42).subscribe();
    const req = httpMock.expectOne(`${environment.apiUsuarios}/42`);
    expect(req.request.method).toBe("GET");
    req.flush(mockUsuario);
  });
  it("deber\xEDa crear un nuevo usuario con POST", () => {
    const nuevoUsuario = {
      nombre: "Ana Silva",
      correo: "ana@test.com",
      password: "ana123",
      rol: "USER",
      activo: 1
    };
    service.guardar(nuevoUsuario).subscribe((usuario) => {
      expect(usuario.idUsuario).toBe(4);
      expect(usuario.nombre).toBe("Ana Silva");
    });
    const req = httpMock.expectOne(environment.apiUsuarios);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(nuevoUsuario);
    req.flush(__spreadProps(__spreadValues({}, nuevoUsuario), { idUsuario: 4 }));
  });
  it("deber\xEDa enviar el body correcto al guardar", () => {
    const nuevoUsuario = {
      nombre: "Test User",
      correo: "test@test.com",
      password: "test123",
      rol: "USER"
    };
    service.guardar(nuevoUsuario).subscribe();
    const req = httpMock.expectOne(environment.apiUsuarios);
    expect(req.request.body.correo).toBe("test@test.com");
    expect(req.request.body.rol).toBe("USER");
    req.flush(__spreadProps(__spreadValues({}, nuevoUsuario), { idUsuario: 5 }));
  });
  it("deber\xEDa actualizar un usuario existente con PUT", () => {
    const usuarioActualizado = __spreadProps(__spreadValues({}, mockUsuario), { nombre: "Juan Actualizado" });
    service.actualizar(1, usuarioActualizado).subscribe((usuario) => {
      expect(usuario.nombre).toBe("Juan Actualizado");
    });
    const req = httpMock.expectOne(`${environment.apiUsuarios}/1`);
    expect(req.request.method).toBe("PUT");
    expect(req.request.body).toEqual(usuarioActualizado);
    req.flush(usuarioActualizado);
  });
  it("deber\xEDa eliminar un usuario con DELETE", () => {
    service.eliminar(1).subscribe((msg) => {
      expect(msg).toBe("Usuario eliminado correctamente");
    });
    const req = httpMock.expectOne(`${environment.apiUsuarios}/1`);
    expect(req.request.method).toBe("DELETE");
    req.flush("Usuario eliminado correctamente");
  });
  it("deber\xEDa construir la URL correcta al eliminar por ID", () => {
    service.eliminar(7).subscribe();
    const req = httpMock.expectOne(`${environment.apiUsuarios}/7`);
    expect(req.request.method).toBe("DELETE");
    req.flush("OK");
  });
});
//# sourceMappingURL=spec-app-core-services-usuario.service.spec.js.map
