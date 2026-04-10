
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];
  cargando = true;
  textoBusqueda = '';

  constructor(
    private usuarioService: UsuarioService,
    private cdr: ChangeDetectorRef   // Fuerza la detección de cambios
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.usuarioService.listarTodos().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.usuariosFiltrados = [...data];
        this.cargando = false;
        this.cdr.detectChanges();    // Fuerza re-render inmediato
      },
      error: () => {
        this.cargando = false;
        this.cdr.detectChanges();
        Swal.fire('Error', 'No se pudieron cargar los usuarios. Verifica que ms-usuarios (puerto 8081) esté corriendo.', 'error');
      }
    });
  }

  filtrar(): void {
    const texto = this.textoBusqueda.toLowerCase().trim();
    if (!texto) {
      this.usuariosFiltrados = [...this.usuarios];
      return;
    }
    this.usuariosFiltrados = this.usuarios.filter(u =>
      u.nombre.toLowerCase().includes(texto) ||
      u.correo.toLowerCase().includes(texto) ||
      u.rol.toLowerCase().includes(texto)
    );
  }

  eliminar(usuario: Usuario): void {
    Swal.fire({
      title: '¿Eliminar usuario?',
      html: `Se eliminará a <strong>${usuario.nombre}</strong>.<br>Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        this.usuarioService.eliminar(usuario.idUsuario!).subscribe({
          next: () => {
            this.usuarios = this.usuarios.filter(u => u.idUsuario !== usuario.idUsuario);
            this.filtrar();
            this.cdr.detectChanges();
            Swal.fire('Eliminado', 'El usuario fue eliminado correctamente', 'success');
          },
          error: (err) => {
            const msg = err?.error || 'No se pudo eliminar el usuario';
            Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al eliminar', 'error');
          }
        });
      }
    });
  }

  toggleActivo(usuario: Usuario): void {
    const nuevoEstado = usuario.activo === 1 ? 0 : 1;
    const accion = nuevoEstado === 1 ? 'activar' : 'desactivar';

    Swal.fire({
      title: `¿${accion.charAt(0).toUpperCase() + accion.slice(1)} usuario?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        const usuarioActualizado = { ...usuario, activo: nuevoEstado };
        this.usuarioService.actualizar(usuario.idUsuario!, usuarioActualizado).subscribe({
          next: (data) => {
            const idx = this.usuarios.findIndex(u => u.idUsuario === data.idUsuario);
            if (idx !== -1) this.usuarios[idx] = data;
            this.filtrar();
            this.cdr.detectChanges();
            Swal.fire('Actualizado', `Usuario ${nuevoEstado === 1 ? 'activado' : 'desactivado'}`, 'success');
          },
          error: () => Swal.fire('Error', 'No se pudo actualizar el estado', 'error')
        });
      }
    });
  }

  get totalActivos(): number  { return this.usuarios.filter(u => u.activo === 1).length; }
  get totalInactivos(): number { return this.usuarios.filter(u => u.activo === 0).length; }
}
