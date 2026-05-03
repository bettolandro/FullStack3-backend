
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { LoginResponse } from '../../../models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Datos del usuario en sesión
  sesion: LoginResponse | null = null;

  // Controla si el menú móvil está abierto
  menuAbierto = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar datos de sesión al inicializar
    this.sesion = this.authService.getSesion();
  }

  // Retorna la inicial del nombre para el avatar
  get inicialNombre(): string {
    return this.sesion?.nombre?.charAt(0)?.toUpperCase() || '?';
  }

  // Retorna badge de rol con clase CSS apropiada
  get rolBadge(): { texto: string; clase: string } {
    if (this.sesion?.rol === 'ADMIN') {
      return { texto: 'Admin', clase: 'badge-purple' };
    }
    return { texto: 'User', clase: 'badge-blue' };
  }

  // Alterna el menú móvil
  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  // Cierra el menú (al navegar en móvil)
  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  // Confirmar y ejecutar logout
  confirmarLogout(): void {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: 'Se cerrará tu sesión actual.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        this.authService.logout();
      }
    });
  }
}
