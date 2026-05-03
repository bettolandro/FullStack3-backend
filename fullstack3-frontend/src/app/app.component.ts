// ============================================================
// ARCHIVO: src/app/app.component.ts
// DESCRIPCIÓN: Componente raíz de la aplicación.
// Actúa como "shell" que contiene la navbar y el router-outlet.
// ============================================================

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,      // Renderiza el componente de la ruta activa
    NavbarComponent,   // Barra de navegación superior
    CommonModule       // ngIf, ngFor, etc.
  ],
  template: `
    <!-- Mostrar navbar solo si el usuario está logueado -->
    <app-navbar *ngIf="authService.isLoggedIn()"></app-navbar>

    <!-- Router outlet: aquí se renderizan los componentes de cada ruta -->
    <main [class.with-navbar]="authService.isLoggedIn()">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      background: var(--bg-primary);
    }
    main.with-navbar {
      padding-top: 64px; /* Espacio para la navbar fija */
    }
  `]
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
