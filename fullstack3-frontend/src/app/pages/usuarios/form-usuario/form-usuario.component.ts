
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
import { UsuarioService } from '../../../core/services/usuario.service';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  // Formulario reactivo
  usuarioForm!: FormGroup;

  // true = modo edición, false = modo creación
  esEdicion = false;

  // ID del usuario a editar (viene de la URL)
  usuarioId: number | null = null;

  // Estado de envío
  enviando = false;

  // Para mostrar/ocultar contraseña
  mostrarPassword = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,    // Lee parámetros de la URL
    private router: Router
  ) {}

  ngOnInit(): void {
    // Construir el formulario con validaciones
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      correo: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
      // En edición, el password es opcional (si se deja vacío no se cambia)
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      rol: ['USER', [Validators.required]],              // Valor por defecto: USER
      activo: [1, [Validators.required]]                 // Activo por defecto
    });

    // Verificar si hay un :id en la URL → modo edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.usuarioId = +id;   // Convertir string a number con +
      this.cargarUsuario(this.usuarioId);

      // En edición, el password no es obligatorio (puede dejarse vacío)
      this.usuarioForm.get('password')!.clearValidators();
      this.usuarioForm.get('password')!.setValidators([Validators.minLength(3)]);
      this.usuarioForm.get('password')!.updateValueAndValidity();
    }
  }

  // ── CARGAR DATOS DEL USUARIO A EDITAR ───────────────────
  cargarUsuario(id: number): void {
    this.usuarioService.buscarPorId(id).subscribe({
      next: (usuario) => {
        // Rellenar el formulario con los datos existentes
        // No se carga el password (por seguridad)
        this.usuarioForm.patchValue({
          nombre: usuario.nombre,
          correo: usuario.correo,
          password: '',         // Vacío: si no se llena, no cambia
          rol: usuario.rol,
          activo: usuario.activo
        });
      },
      error: () => {
        Swal.fire('Error', 'No se encontró el usuario', 'error');
        this.router.navigate(['/usuarios']);
      }
    });
  }

  // ── GETTERS RÁPIDOS ──────────────────────────────────────
  get nombre()   { return this.usuarioForm.get('nombre')!; }
  get correo()   { return this.usuarioForm.get('correo')!; }
  get password() { return this.usuarioForm.get('password')!; }
  get rol()      { return this.usuarioForm.get('rol')!; }
  get activo()   { return this.usuarioForm.get('activo')!; }

  // ── SUBMIT ───────────────────────────────────────────────
  onSubmit(): void {
    if (this.usuarioForm.invalid) {
      this.usuarioForm.markAllAsTouched();
      return;
    }

    this.enviando = true;
    const datos = { ...this.usuarioForm.value };

    if (this.esEdicion) {
      // Si el password quedó vacío, cargar el original no es posible sin otro GET.
      // La mejor práctica: si no ingresó password nuevo, no actualizarlo.
      // El backend siempre requiere password → si está vacío, avisamos al usuario.
      if (!datos.password) {
        // Pedimos que ingrese password de todas formas (el MS lo requiere)
        Swal.fire('Atención', 'Debes ingresar la contraseña para confirmar la actualización', 'warning');
        this.enviando = false;
        return;
      }

      this.usuarioService.actualizar(this.usuarioId!, datos).subscribe({
        next: () => {
          this.enviando = false;
          Swal.fire('Actualizado', 'Usuario actualizado correctamente', 'success')
            .then(() => this.router.navigate(['/usuarios']));
        },
        error: (err) => {
          this.enviando = false;
          const msg = err?.error?.mensaje || err?.error || 'Error al actualizar';
          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al actualizar', 'error');
        }
      });

    } else {
      // Crear nuevo usuario
      this.usuarioService.guardar(datos).subscribe({
        next: () => {
          this.enviando = false;
          Swal.fire('Creado', 'Usuario creado correctamente', 'success')
            .then(() => this.router.navigate(['/usuarios']));
        },
        error: (err) => {
          this.enviando = false;
          const msg = err?.error?.mensaje || err?.error || 'Error al crear el usuario';
          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al crear', 'error');
        }
      });
    }
  }
}
