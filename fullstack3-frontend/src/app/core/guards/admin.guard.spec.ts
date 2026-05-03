import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { adminGuard } from './admin.guard';
import { AuthService } from '../services/auth.service';

describe('adminGuard', () => {
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockRoute = {} as ActivatedRouteSnapshot;
  const mockState = { url: '/usuarios' } as RouterStateSnapshot;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAdmin', 'isLoggedIn', 'getSesion']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate', 'createUrlTree', 'serializeUrl']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
  });

  it('debería permitir acceso si el usuario es ADMIN', () => {
    authServiceSpy.isAdmin.and.returnValue(true);

    const result = TestBed.runInInjectionContext(() =>
      adminGuard(mockRoute, mockState)
    );

    expect(result).toBeTrue();
  });

  it('debería denegar acceso y redirigir al dashboard si no es ADMIN', () => {
    authServiceSpy.isAdmin.and.returnValue(false);

    const result = TestBed.runInInjectionContext(() =>
      adminGuard(mockRoute, mockState)
    );

    expect(result).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('debería llamar a isAdmin exactamente una vez', () => {
    authServiceSpy.isAdmin.and.returnValue(false);

    TestBed.runInInjectionContext(() =>
      adminGuard(mockRoute, mockState)
    );

    expect(authServiceSpy.isAdmin).toHaveBeenCalledTimes(1);
  });

  it('debería NO navegar si el usuario es ADMIN', () => {
    authServiceSpy.isAdmin.and.returnValue(true);

    TestBed.runInInjectionContext(() =>
      adminGuard(mockRoute, mockState)
    );

    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
