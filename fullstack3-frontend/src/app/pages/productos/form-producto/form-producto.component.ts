
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from '../../../core/services/producto.service';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {

  // Formulario reactivo
  productoForm!: FormGroup;

  // Modo del formulario
  esEdicion = false;
  productoId: number | null = null;

  // Estado de envío
  enviando = false;

  // Categorías predefinidas como sugerencia (se pueden escribir otras)
  categoriasSugeridas = [
    'Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Deportes',
    'Tecnología', 'Libros', 'Juguetes', 'Salud', 'Automotriz'
  ];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Construir formulario con validaciones según el modelo Java
    this.productoForm = this.fb.group({
      nombre:      ['', [Validators.required, Validators.maxLength(120)]],
      descripcion: ['', [Validators.maxLength(250)]],         // Opcional
      precio:      [null, [Validators.required, Validators.min(1)]],
      stock:       [0,    [Validators.required, Validators.min(0)]],
      categoria:   ['', [Validators.maxLength(80)]],           // Opcional
      activo:      [1, [Validators.required]]
    });

    // Verificar modo edición por el :id en la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.productoId = +id;
      this.cargarProducto(this.productoId);
    }
  }

  // ── CARGAR DATOS DEL PRODUCTO A EDITAR ──────────────────
  cargarProducto(id: number): void {
    this.productoService.buscarPorId(id).subscribe({
      next: (producto) => {
        // patchValue rellena solo los campos que existen en el form
        this.productoForm.patchValue({
          nombre:      producto.nombre,
          descripcion: producto.descripcion || '',
          precio:      producto.precio,
          stock:       producto.stock,
          categoria:   producto.categoria || '',
          activo:      producto.activo
        });
      },
      error: () => {
        Swal.fire('Error', 'No se encontró el producto', 'error');
        this.router.navigate(['/productos']);
      }
    });
  }

  // ── GETTERS ──────────────────────────────────────────────
  get nombre()      { return this.productoForm.get('nombre')!; }
  get descripcion() { return this.productoForm.get('descripcion')!; }
  get precio()      { return this.productoForm.get('precio')!; }
  get stock()       { return this.productoForm.get('stock')!; }
  get categoria()   { return this.productoForm.get('categoria')!; }

  // ── SELECCIONAR CATEGORÍA SUGERIDA ───────────────────────
  seleccionarCategoria(cat: string): void {
    this.productoForm.patchValue({ categoria: cat });
  }

  // ── SUBMIT ───────────────────────────────────────────────
  onSubmit(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    this.enviando = true;
    const datos = { ...this.productoForm.value };

    // Convertir a número (los inputs HTML devuelven strings)
    datos.precio = +datos.precio;
    datos.stock  = +datos.stock;
    datos.activo = +datos.activo;

    if (this.esEdicion) {
      this.productoService.actualizar(this.productoId!, datos).subscribe({
        next: () => {
          this.enviando = false;
          Swal.fire('Actualizado', 'Producto actualizado correctamente', 'success')
            .then(() => this.router.navigate(['/productos']));
        },
        error: (err) => {
          this.enviando = false;
          const msg = err?.error?.mensaje || err?.error || 'Error al actualizar';
          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al actualizar', 'error');
        }
      });
    } else {
      this.productoService.guardar(datos).subscribe({
        next: () => {
          this.enviando = false;
          Swal.fire('Creado', 'Producto creado correctamente', 'success')
            .then(() => this.router.navigate(['/productos']));
        },
        error: (err) => {
          this.enviando = false;
          const msg = err?.error?.mensaje || err?.error || 'Error al crear el producto';
          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al crear', 'error');
        }
      });
    }
  }
}
