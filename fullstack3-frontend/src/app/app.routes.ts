
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  // ─── RUTA RAÍZ ────────────────────────────────────────────
  // Redirige automáticamente al dashboard (o login si no está autenticado)
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  // ─── LOGIN ────────────────────────────────────────────────
  // Ruta pública - no requiere autenticación
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },

  // ─── DASHBOARD ───────────────────────────────────────────
  // Requiere estar logueado (authGuard)
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },

  // ─── GESTIÓN DE USUARIOS ──────────────────────────────────
  // Requiere estar logueado Y tener rol ADMIN
  {
    path: 'usuarios',
    canActivate: [authGuard, adminGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/usuarios/lista-usuarios/lista-usuarios.component')
            .then(m => m.ListaUsuariosComponent)
      },
      {
        path: 'nuevo',
        loadComponent: () =>
          import('./pages/usuarios/form-usuario/form-usuario.component')
            .then(m => m.FormUsuarioComponent)
      },
      {
        path: 'editar/:id',
        loadComponent: () =>
          import('./pages/usuarios/form-usuario/form-usuario.component')
            .then(m => m.FormUsuarioComponent)
      }
    ]
  },

  // ─── GESTIÓN DE PRODUCTOS ─────────────────────────────────
  // Requiere estar logueado (cualquier rol)
  {
    path: 'productos',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/productos/lista-productos/lista-productos.component')
            .then(m => m.ListaProductosComponent)
      },
      {
        path: 'nuevo',
        canActivate: [adminGuard],   // Solo ADMIN puede crear productos
        loadComponent: () =>
          import('./pages/productos/form-producto/form-producto.component')
            .then(m => m.FormProductoComponent)
      },
      {
        path: 'editar/:id',
        canActivate: [adminGuard],   // Solo ADMIN puede editar productos
        loadComponent: () =>
          import('./pages/productos/form-producto/form-producto.component')
            .then(m => m.FormProductoComponent)
      }
    ]
  },

  // ─── RUTA WILDCARD ────────────────────────────────────────
  // Cualquier ruta no encontrada → redirige al dashboard
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
