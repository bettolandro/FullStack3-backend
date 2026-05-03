import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../../models/usuario.model';
import { environment } from '../../../environments/environment';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;

  const mockUsuario: Usuario = {
    idUsuario: 1,
    nombre: 'Juan Pérez',
    correo: 'juan@test.com',
    password: 'pass123',
    rol: 'ADMIN',
    activo: 1
  };

  const mockUsuarios: Usuario[] = [
    mockUsuario,
    {
      idUsuario: 2,
      nombre: 'María González',
      correo: 'maria@test.com',
      password: 'pass456',
      rol: 'USER',
      activo: 1
    },
    {
      idUsuario: 3,
      nombre: 'Pedro López',
      correo: 'pedro@test.com',
      password: 'pass789',
      rol: 'USER',
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

  // ─── CREACIÓN ────────────────────────────────────────────────────────────
  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  // ─── LISTAR TODOS ────────────────────────────────────────────────────────
  it('debería listar todos los usuarios con GET', () => {
    service.listarTodos().subscribe(usuarios => {
      expect(usuarios.length).toBe(3);
      expect(usuarios[0].nombre).toBe('Juan Pérez');
      expect(usuarios[1].rol).toBe('USER');
    });

    const req = httpMock.expectOne(environment.apiUsuarios);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsuarios);
  });

  it('debería retornar un arreglo vacío si no hay usuarios', () => {
    service.listarTodos().subscribe(usuarios => {
      expect(usuarios).toEqual([]);
      expect(usuarios.length).toBe(0);
    });

    const req = httpMock.expectOne(environment.apiUsuarios);
    req.flush([]);
  });

  // ─── BUSCAR POR ID ───────────────────────────────────────────────────────
  it('debería buscar un usuario por ID con GET', () => {
    service.buscarPorId(1).subscribe(usuario => {
      expect(usuario).toEqual(mockUsuario);
      expect(usuario.correo).toBe('juan@test.com');
    });

    const req = httpMock.expectOne(`${environment.apiUsuarios}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsuario);
  });

  it('debería construir la URL correcta al buscar por ID', () => {
    service.buscarPorId(42).subscribe();

    const req = httpMock.expectOne(`${environment.apiUsuarios}/42`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsuario);
  });

  // ─── GUARDAR ─────────────────────────────────────────────────────────────
  it('debería crear un nuevo usuario con POST', () => {
    const nuevoUsuario: Usuario = {
      nombre: 'Ana Silva',
      correo: 'ana@test.com',
      password: 'ana123',
      rol: 'USER',
      activo: 1
    };

    service.guardar(nuevoUsuario).subscribe(usuario => {
      expect(usuario.idUsuario).toBe(4);
      expect(usuario.nombre).toBe('Ana Silva');
    });

    const req = httpMock.expectOne(environment.apiUsuarios);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(nuevoUsuario);
    req.flush({ ...nuevoUsuario, idUsuario: 4 });
  });

  it('debería enviar el body correcto al guardar', () => {
    const nuevoUsuario: Usuario = {
      nombre: 'Test User',
      correo: 'test@test.com',
      password: 'test123',
      rol: 'USER'
    };

    service.guardar(nuevoUsuario).subscribe();

    const req = httpMock.expectOne(environment.apiUsuarios);
    expect(req.request.body.correo).toBe('test@test.com');
    expect(req.request.body.rol).toBe('USER');
    req.flush({ ...nuevoUsuario, idUsuario: 5 });
  });

  // ─── ACTUALIZAR ──────────────────────────────────────────────────────────
  it('debería actualizar un usuario existente con PUT', () => {
    const usuarioActualizado: Usuario = { ...mockUsuario, nombre: 'Juan Actualizado' };

    service.actualizar(1, usuarioActualizado).subscribe(usuario => {
      expect(usuario.nombre).toBe('Juan Actualizado');
    });

    const req = httpMock.expectOne(`${environment.apiUsuarios}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(usuarioActualizado);
    req.flush(usuarioActualizado);
  });

  // ─── ELIMINAR ────────────────────────────────────────────────────────────
  it('debería eliminar un usuario con DELETE', () => {
    service.eliminar(1).subscribe(msg => {
      expect(msg).toBe('Usuario eliminado correctamente');
    });

    const req = httpMock.expectOne(`${environment.apiUsuarios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush('Usuario eliminado correctamente');
  });

  it('debería construir la URL correcta al eliminar por ID', () => {
    service.eliminar(7).subscribe();

    const req = httpMock.expectOne(`${environment.apiUsuarios}/7`);
    expect(req.request.method).toBe('DELETE');
    req.flush('OK');
  });
});
