
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin, of, timeout, catchError } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { UsuarioService } from '../../core/services/usuario.service';
import { ProductoService } from '../../core/services/producto.service';
import { Usuario } from '../../models/usuario.model';
import { Producto } from '../../models/producto.model';
import { LoginResponse } from '../../models/usuario.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cargando = true;
  sesion: LoginResponse | null = null;

  // Errores por microservicio para mostrar en pantalla
  errorUsuarios = false;
  errorProductos = false;

  // Estadísticas usuarios
  totalUsuarios = 0;
  usuariosActivos = 0;
  totalAdmins = 0;

  // Estadísticas productos
  totalProductos = 0;
  productosActivos = 0;
  stockTotal = 0;
  sinStock = 0;
  categorias: string[] = [];
  ultimosProductos: Producto[] = [];
  productosSinStock: Producto[] = [];

  constructor(
    public authService: AuthService,
    private usuarioService: UsuarioService,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.sesion = this.authService.getSesion();
    this.cargarEstadisticas();
  }

  cargarEstadisticas(): void {
    this.cargando = true;
    this.errorUsuarios = false;
    this.errorProductos = false;

    // Observable de productos con timeout de 8 segundos y fallback a array vacío
    const productos$ = this.productoService.listarTodos().pipe(
      timeout(8000),
      catchError(() => {
        this.errorProductos = true;
        return of([] as Producto[]);   // Retorna vacío en lugar de tirar error
      })
    );

    if (!this.authService.isAdmin()) {
      // Usuario normal: solo carga productos
      productos$.subscribe({
        next: (productos) => {
          this.procesarProductos(productos);
          this.cargando = false;
        },
        error: () => { this.cargando = false; }
      });
      return;
    }

    // Admin: carga usuarios Y productos en paralelo
    // Si uno falla, el otro igual se muestra (catchError en cada uno)
    const usuarios$ = this.usuarioService.listarTodos().pipe(
      timeout(8000),
      catchError(() => {
        this.errorUsuarios = true;
        return of([] as Usuario[]);
      })
    );

    // forkJoin nunca queda colgado porque ambos tienen catchError
    forkJoin({ usuarios: usuarios$, productos: productos$ }).subscribe({
      next: ({ usuarios, productos }) => {
        this.procesarUsuarios(usuarios);
        this.procesarProductos(productos);
        this.cargando = false;
      },
      error: () => {
        // Este error ya no debería ocurrir gracias a catchError arriba
        this.cargando = false;
      }
    });
  }

  private procesarUsuarios(usuarios: Usuario[]): void {
    this.totalUsuarios = usuarios.length;
    this.usuariosActivos = usuarios.filter(u => u.activo === 1).length;
    this.totalAdmins = usuarios.filter(u => u.rol === 'ADMIN').length;
  }

  private procesarProductos(productos: Producto[]): void {
    this.totalProductos = productos.length;
    this.productosActivos = productos.filter(p => p.activo === 1).length;
    this.stockTotal = productos.reduce((acc, p) => acc + (p.stock || 0), 0);
    this.sinStock = productos.filter(p => p.stock === 0).length;
    this.categorias = [...new Set(
      productos.map(p => p.categoria).filter(c => !!c) as string[]
    )];
    this.ultimosProductos = [...productos].reverse().slice(0, 5);
    this.productosSinStock = productos.filter(p => p.stock === 0).slice(0, 3);
  }

  get saludo(): string {
    const hora = new Date().getHours();
    if (hora < 12) return 'Buenos días';
    if (hora < 18) return 'Buenas tardes';
    return 'Buenas noches';
  }

  get porcentajeActivos(): number {
    if (!this.totalProductos) return 0;
    return Math.round((this.productosActivos / this.totalProductos) * 100);
  }

  get primerNombre(): string {
    if (!this.sesion?.nombre) return '';
    return this.sesion.nombre.split(' ')[0] || '';
  }
}
