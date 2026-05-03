import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-MU4QYCSZ.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-6YKIA4DS.js";
import {
  Router,
  init_router
} from "./chunk-45UUSLVD.js";
import "./chunk-QT67HBTK.js";
import "./chunk-J2TET66I.js";
import "./chunk-DPIYGMOA.js";
import {
  TestBed,
  __spreadProps,
  __spreadValues,
  init_testing
} from "./chunk-X225SWGN.js";

// src/app/core/services/auth.service.spec.ts
init_testing();
init_router();
init_auth_service();
describe("AuthService", () => {
  let service;
  let httpMock;
  let routerSpy;
  const mockLoginResponse = {
    mensaje: "Inicio de sesion correcto",
    idUsuario: 1,
    nombre: "Admin Test",
    rol: "ADMIN"
  };
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy }
      ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });
  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });
  it("deber\xEDa crearse correctamente", () => {
    expect(service).toBeTruthy();
  });
  it("deber\xEDa llamar al endpoint de login con las credenciales correctas", () => {
    const credenciales = { correo: "admin@test.com", password: "123" };
    service.login(credenciales).subscribe((response) => {
      expect(response).toEqual(mockLoginResponse);
    });
    const req = httpMock.expectOne("http://localhost:8081/api/usuarios/login");
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(credenciales);
    req.flush(mockLoginResponse);
  });
  it("deber\xEDa guardar la sesi\xF3n en localStorage tras un login exitoso", () => {
    const credenciales = { correo: "admin@test.com", password: "123" };
    service.login(credenciales).subscribe();
    const req = httpMock.expectOne("http://localhost:8081/api/usuarios/login");
    req.flush(mockLoginResponse);
    const stored = localStorage.getItem("fullstack3_session");
    expect(stored).not.toBeNull();
    expect(JSON.parse(stored)).toEqual(mockLoginResponse);
  });
  it("deber\xEDa eliminar la sesi\xF3n de localStorage al hacer logout", () => {
    localStorage.setItem("fullstack3_session", JSON.stringify(mockLoginResponse));
    service.logout();
    expect(localStorage.getItem("fullstack3_session")).toBeNull();
  });
  it("deber\xEDa navegar a /login al hacer logout", () => {
    service.logout();
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/login"]);
  });
  it("deber\xEDa retornar true si hay sesi\xF3n activa", () => {
    localStorage.setItem("fullstack3_session", JSON.stringify(mockLoginResponse));
    expect(service.isLoggedIn()).toBeTrue();
  });
  it("deber\xEDa retornar false si no hay sesi\xF3n activa", () => {
    expect(service.isLoggedIn()).toBeFalse();
  });
  it("deber\xEDa retornar el objeto de sesi\xF3n si existe en localStorage", () => {
    localStorage.setItem("fullstack3_session", JSON.stringify(mockLoginResponse));
    const sesion = service.getSesion();
    expect(sesion).toEqual(mockLoginResponse);
  });
  it("deber\xEDa retornar null si no hay sesi\xF3n guardada", () => {
    expect(service.getSesion()).toBeNull();
  });
  it("deber\xEDa retornar true si el rol es ADMIN", () => {
    localStorage.setItem("fullstack3_session", JSON.stringify(mockLoginResponse));
    expect(service.isAdmin()).toBeTrue();
  });
  it("deber\xEDa retornar false si el rol es USER", () => {
    const sesionUser = __spreadProps(__spreadValues({}, mockLoginResponse), { rol: "USER" });
    localStorage.setItem("fullstack3_session", JSON.stringify(sesionUser));
    expect(service.isAdmin()).toBeFalse();
  });
  it("deber\xEDa retornar false si no hay sesi\xF3n activa al verificar isAdmin", () => {
    expect(service.isAdmin()).toBeFalse();
  });
});
//# sourceMappingURL=spec-app-core-services-auth.service.spec.js.map
