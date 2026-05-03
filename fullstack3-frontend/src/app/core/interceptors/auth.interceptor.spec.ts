import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Router } from '@angular/router';
import { authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: Router, useValue: routerSpy }
      ]
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('debería dejar pasar peticiones exitosas sin modificarlas', () => {
    http.get('/api/test').subscribe(data => {
      expect(data).toBeTruthy();
    });

    const req = httpMock.expectOne('/api/test');
    req.flush({ ok: true });
  });

  it('debería eliminar la sesión y redirigir al login ante un error 401', () => {
    localStorage.setItem('fullstack3_session', JSON.stringify({ rol: 'USER' }));

    http.get('/api/test').subscribe({ error: () => {} });

    const req = httpMock.expectOne('/api/test');
    req.flush({ message: 'Unauthorized' }, { status: 401, statusText: 'Unauthorized' });

    expect(localStorage.getItem('fullstack3_session')).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('debería propagar el error 401 al subscriber', (done) => {
    http.get('/api/test').subscribe({
      next: () => fail('No debería tener éxito'),
      error: (err) => {
        expect(err.status).toBe(401);
        done();
      }
    });

    const req = httpMock.expectOne('/api/test');
    req.flush({}, { status: 401, statusText: 'Unauthorized' });
  });

  it('debería propagar errores que no son 401 sin redirigir', (done) => {
    http.get('/api/test').subscribe({
      next: () => fail('No debería tener éxito'),
      error: (err) => {
        expect(err.status).toBe(500);
        expect(routerSpy.navigate).not.toHaveBeenCalled();
        done();
      }
    });

    const req = httpMock.expectOne('/api/test');
    req.flush({}, { status: 500, statusText: 'Server Error' });
  });

  it('debería propagar errores de red (status 0) sin redirigir al login', (done) => {
    http.get('/api/test').subscribe({
      next: () => fail('No debería tener éxito'),
      error: (err) => {
        expect(err.status).toBe(0);
        expect(routerSpy.navigate).not.toHaveBeenCalled();
        done();
      }
    });

    const req = httpMock.expectOne('/api/test');
    req.flush(null, { status: 0, statusText: 'Unknown Error' });
  });
});
