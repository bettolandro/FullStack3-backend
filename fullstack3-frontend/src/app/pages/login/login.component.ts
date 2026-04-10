
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // FormGroup reactivo con validaciones
  loginForm!: FormGroup;

  // Estado de carga (deshabilita el botón mientras espera)
  cargando = false;

  // Controla si se muestra la contraseña en texto plano
  mostrarPassword = false;

  constructor(
    private fb: FormBuilder,      // Construye el formulario reactivo
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Si ya está logueado, redirigir directamente al dashboard
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return;
    }

    // Inicializar el formulario reactivo con validaciones
    this.loginForm = this.fb.group({
      correo: ['', [
        Validators.required,
        Validators.email    // Valida formato email@dominio.com
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  // ─── GETTERS (acceso rápido a los controles) ─────────────
  // Permite usar: this.correo.invalid en el template
  get correo() { return this.loginForm.get('correo')!; }
  get password() { return this.loginForm.get('password')!; }

  // ─── ALTERNAR VISIBILIDAD PASSWORD ───────────────────────
  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  // ─── SUBMIT DEL FORMULARIO ───────────────────────────────
  onSubmit(): void {
    // Si el formulario tiene errores, marcar todos los campos y salir
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.cargando = true;

    // Llamar al servicio de autenticación
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        // Login exitoso → redirigir al dashboard
        this.cargando = false;
        Swal.fire({
          icon: 'success',
          title: `¡Bienvenido, ${response.nombre}!`,
          text: `Rol: ${response.rol}`,
          timer: 1800,
          showConfirmButton: false,
        }).then(() => {
          this.router.navigate(['/dashboard']);
        });
      },
      error: (err) => {
        // Error en login → mostrar mensaje
        this.cargando = false;
        const msg = err?.error?.mensaje || err?.error || 'Credenciales incorrectas';
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: typeof msg === 'string' ? msg : 'Verifica tus credenciales',
        });
      }
    });
  }
}
