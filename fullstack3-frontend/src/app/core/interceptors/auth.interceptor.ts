

import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        localStorage.removeItem('fullstack3_session');
        router.navigate(['/login']);
      }
      // Para status 0 (sin conexión) y otros errores:
      // NO mostramos Swal aquí — lo manejan los componentes individualmente
      // para dar mensajes más específicos (qué microservicio falló)
      return throwError(() => error);
    })
  );
};
