
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductoService } from '../../../core/services/producto.service';
import { Producto } from '../../../models/producto.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  cargando = true;
  textoBusqueda = '';
  categoriaSeleccionada = '';
  soloActivos = false;
  categorias: string[] = [];

  constructor(
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef,
    public authService: AuthService   // public para usarlo en el HTML
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.productoService.listarTodos().subscribe({
      next: (data) => {
        this.productos = data;
        this.extraerCategorias();
        this.filtrar();
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargando = false;
        this.cdr.detectChanges();
        Swal.fire('Error', 'No se pudieron cargar los productos. Verifica que ms-productos (puerto 8082) esté corriendo.', 'error');
      }
    });
  }

  private extraerCategorias(): void {
    this.categorias = [...new Set(
      this.productos.map(p => p.categoria).filter(c => !!c) as string[]
    )].sort();
  }

  filtrar(): void {
    let resultado = [...this.productos];
    const texto = this.textoBusqueda.toLowerCase().trim();
    if (texto) {
      resultado = resultado.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        (p.descripcion?.toLowerCase().includes(texto) ?? false) ||
        (p.categoria?.toLowerCase().includes(texto) ?? false)
      );
    }
    if (this.categoriaSeleccionada) {
      resultado = resultado.filter(p => p.categoria === this.categoriaSeleccionada);
    }
    if (this.soloActivos) {
      resultado = resultado.filter(p => p.activo === 1);
    }
    this.productosFiltrados = resultado;
  }

  limpiarFiltros(): void {
    this.textoBusqueda = '';
    this.categoriaSeleccionada = '';
    this.soloActivos = false;
    this.filtrar();
  }

  eliminar(producto: Producto): void {
    Swal.fire({
      title: '¿Eliminar producto?',
      html: `Se eliminará <strong>${producto.nombre}</strong>.<br>Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        this.productoService.eliminar(producto.idProducto!).subscribe({
          next: () => {
            this.productos = this.productos.filter(p => p.idProducto !== producto.idProducto);
            this.extraerCategorias();
            this.filtrar();
            this.cdr.detectChanges();
            Swal.fire('Eliminado', 'Producto eliminado correctamente', 'success');
          },
          error: () => Swal.fire('Error', 'No se pudo eliminar el producto', 'error')
        });
      }
    });
  }

  get totalActivos(): number { return this.productos.filter(p => p.activo === 1).length; }
  get sinStock(): number      { return this.productos.filter(p => p.stock === 0).length; }
  get hayFiltrosActivos(): boolean {
    return !!(this.textoBusqueda || this.categoriaSeleccionada || this.soloActivos);
  }

  getStockClass(stock: number): string {
    if (stock === 0) return 'badge-danger';
    if (stock < 5)  return 'badge-orange';
    return 'badge-success';
  }
}
