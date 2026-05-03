import {
  RouterTestingModule,
  init_testing as init_testing2
} from "./chunk-7XSCNJ5P.js";
import "./chunk-P7R2VAFB.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-6YKIA4DS.js";
import {
  RouterLink,
  init_router
} from "./chunk-45UUSLVD.js";
import {
  CommonModule,
  init_common
} from "./chunk-QT67HBTK.js";
import {
  ProductoService,
  init_producto_service
} from "./chunk-DLZ2Y4CJ.js";
import {
  UsuarioService,
  init_usuario_service
} from "./chunk-ZAFUMGS2.js";
import "./chunk-J2TET66I.js";
import "./chunk-DPIYGMOA.js";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  catchError,
  fakeAsync,
  forkJoin,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  throwError,
  tick,
  timeout
} from "./chunk-X225SWGN.js";

// angular:jit:template:src\app\pages\dashboard\dashboard.component.html
var dashboard_component_default;
var init_dashboard_component = __esm({
  "angular:jit:template:src\\app\\pages\\dashboard\\dashboard.component.html"() {
    dashboard_component_default = `\r
<div class="page-container fade-in">\r
\r
  <!-- ENCABEZADO -->\r
  <div class="dash-header">\r
    <div>\r
      <h1 class="page-title">{{ saludo }}, <span>{{ primerNombre }}</span></h1>\r
      <p class="page-subtitle">\r
        Resumen del sistema \xB7 Rol:\r
        <span class="badge" [ngClass]="sesion?.rol === 'ADMIN' ? 'badge-purple' : 'badge-blue'">\r
          {{ sesion?.rol }}\r
        </span>\r
      </p>\r
    </div>\r
    <div class="header-actions" *ngIf="authService.isAdmin()">\r
      <a routerLink="/productos/nuevo" class="btn-primary-custom">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
        </svg>\r
        Nuevo producto\r
      </a>\r
    </div>\r
  </div>\r
\r
  <!-- ALERTAS DE CONEXI\xD3N -->\r
  <div class="alert-conexion" *ngIf="errorUsuarios">\r
    \u26A0 No se pudo conectar con <strong>ms-usuarios</strong> (puerto 8081). Verifica que el microservicio est\xE9 corriendo.\r
  </div>\r
  <div class="alert-conexion" *ngIf="errorProductos">\r
    \u26A0 No se pudo conectar con <strong>ms-productos</strong> (puerto 8082). Verifica que el microservicio est\xE9 corriendo.\r
  </div>\r
\r
  <!-- LOADING -->\r
  <div class="loading-container" *ngIf="cargando">\r
    <div class="spinner"></div>\r
    <p>Cargando estad\xEDsticas...</p>\r
  </div>\r
\r
  <ng-container *ngIf="!cargando">\r
\r
    <!-- ESTAD\xCDSTICAS USUARIOS (solo ADMIN) -->\r
    <div class="stats-section" *ngIf="authService.isAdmin()">\r
      <h2 class="section-label">Usuarios</h2>\r
      <div class="stats-grid">\r
\r
        <div class="stat-card">\r
          <div class="stat-icon icon-blue">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\r
              <circle cx="9" cy="7" r="4"/>\r
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">{{ totalUsuarios }}</span>\r
            <span class="stat-label">Total usuarios</span>\r
          </div>\r
        </div>\r
\r
        <div class="stat-card">\r
          <div class="stat-icon icon-green">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>\r
              <polyline points="22 4 12 14.01 9 11.01"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">{{ usuariosActivos }}</span>\r
            <span class="stat-label">Activos</span>\r
          </div>\r
        </div>\r
\r
        <div class="stat-card">\r
          <div class="stat-icon icon-purple">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">{{ totalAdmins }}</span>\r
            <span class="stat-label">Administradores</span>\r
          </div>\r
        </div>\r
\r
        <div class="stat-card stat-link" routerLink="/usuarios">\r
          <div class="stat-icon icon-orange">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="12" cy="12" r="3"/>\r
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>\r
              <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">\u2192</span>\r
            <span class="stat-label">Gestionar usuarios</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- ESTAD\xCDSTICAS PRODUCTOS -->\r
    <div class="stats-section">\r
      <h2 class="section-label">Productos</h2>\r
      <div class="stats-grid">\r
\r
        <div class="stat-card">\r
          <div class="stat-icon icon-blue">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>\r
              <line x1="3" y1="6" x2="21" y2="6"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">{{ totalProductos }}</span>\r
            <span class="stat-label">Total productos</span>\r
          </div>\r
        </div>\r
\r
        <div class="stat-card">\r
          <div class="stat-icon icon-green">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">{{ porcentajeActivos }}%</span>\r
            <span class="stat-label">Activos</span>\r
          </div>\r
        </div>\r
\r
        <div class="stat-card">\r
          <div class="stat-icon icon-cyan">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="1" y="3" width="15" height="13"/>\r
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>\r
              <circle cx="5.5" cy="18.5" r="2.5"/>\r
              <circle cx="18.5" cy="18.5" r="2.5"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">{{ stockTotal }}</span>\r
            <span class="stat-label">Stock total</span>\r
          </div>\r
        </div>\r
\r
        <div class="stat-card" [class.stat-warning]="sinStock > 0">\r
          <div class="stat-icon icon-red">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="12" cy="12" r="10"/>\r
              <line x1="12" y1="8" x2="12" y2="12"/>\r
              <line x1="12" y1="16" x2="12.01" y2="16"/>\r
            </svg>\r
          </div>\r
          <div class="stat-info">\r
            <span class="stat-value">{{ sinStock }}</span>\r
            <span class="stat-label">Sin stock</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- FILA INFERIOR -->\r
    <div class="dash-bottom-grid">\r
\r
      <!-- \xDAltimos productos -->\r
      <div class="dash-widget">\r
        <div class="widget-header">\r
          <h3 class="widget-title">\xDAltimos productos</h3>\r
          <a routerLink="/productos" class="widget-link">Ver todos \u2192</a>\r
        </div>\r
        <div *ngIf="ultimosProductos.length === 0" class="empty-state">\r
          <p>Sin productos registrados</p>\r
        </div>\r
        <table class="mini-table" *ngIf="ultimosProductos.length > 0">\r
          <thead>\r
            <tr>\r
              <th>Nombre</th>\r
              <th>Precio</th>\r
              <th>Stock</th>\r
              <th>Estado</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let p of ultimosProductos">\r
              <td class="td-name">{{ p.nombre }}</td>\r
              <td>\${{ p.precio | number:'1.0-0' }}</td>\r
              <td>\r
                <span [class]="p.stock === 0 ? 'badge badge-danger' : 'badge badge-success'">\r
                  {{ p.stock }}\r
                </span>\r
              </td>\r
              <td>\r
                <span [class]="p.activo === 1 ? 'badge badge-success' : 'badge badge-danger'">\r
                  {{ p.activo === 1 ? 'Activo' : 'Inactivo' }}\r
                </span>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Panel lateral -->\r
      <div class="dash-side">\r
\r
        <!-- Categor\xEDas -->\r
        <div class="dash-widget">\r
          <div class="widget-header">\r
            <h3 class="widget-title">Categor\xEDas</h3>\r
            <span class="badge badge-blue">{{ categorias.length }}</span>\r
          </div>\r
          <div *ngIf="categorias.length === 0" class="empty-state">\r
            <p>Sin categor\xEDas</p>\r
          </div>\r
          <div class="categoria-chips">\r
            <span *ngFor="let cat of categorias" class="badge badge-blue cat-chip">{{ cat }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- Alerta sin stock -->\r
        <div class="dash-widget alert-widget" *ngIf="productosSinStock.length > 0">\r
          <div class="widget-header">\r
            <h3 class="widget-title alert-title">\u26A0 Sin stock</h3>\r
          </div>\r
          <div class="alert-items">\r
            <div class="alert-item" *ngFor="let p of productosSinStock">\r
              <span class="alert-name">{{ p.nombre }}</span>\r
              <a [routerLink]="['/productos/editar', p.idProducto]" class="btn-edit-custom btn-xs">Reponer</a>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Acceso r\xE1pido -->\r
        <div class="dash-widget quick-access">\r
          <h3 class="widget-title" style="margin-bottom: 1rem">Acceso r\xE1pido</h3>\r
          <a routerLink="/productos/nuevo" class="quick-btn" *ngIf="authService.isAdmin()">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
            </svg>\r
            Nuevo producto\r
          </a>\r
          <a routerLink="/usuarios/nuevo" class="quick-btn" *ngIf="authService.isAdmin()">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
            </svg>\r
            Nuevo usuario\r
          </a>\r
          <a routerLink="/productos" class="quick-btn secondary">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>\r
            </svg>\r
            Ver productos\r
          </a>\r
          <!-- Bot\xF3n para recargar si hubo error -->\r
          <button class="quick-btn secondary" (click)="cargarEstadisticas()" *ngIf="errorUsuarios || errorProductos">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <polyline points="23 4 23 10 17 10"/>\r
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>\r
            </svg>\r
            Reintentar conexi\xF3n\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\dashboard\dashboard.component.scss
var dashboard_component_default2;
var init_dashboard_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\dashboard\\dashboard.component.scss"() {
    dashboard_component_default2 = '@charset "UTF-8";\n\n/* src/app/pages/dashboard/dashboard.component.scss */\n.dash-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title {\n  font-size: 1.6rem;\n  margin-bottom: 0.4rem;\n}\n.page-subtitle {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.stats-section {\n  margin-bottom: 2rem;\n}\n.section-label {\n  font-family: var(--font-display);\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  color: var(--text-muted);\n  margin-bottom: 1rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 1024px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: var(--transition);\n}\n.stat-card:hover {\n  border-color: var(--border-accent);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.stat-card.stat-link {\n  cursor: pointer;\n}\n.stat-card.stat-warning {\n  border-color: rgba(255, 77, 109, 0.3);\n  background: rgba(255, 77, 109, 0.04);\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon.icon-blue {\n  background: rgba(79, 142, 247, 0.15);\n  color: var(--accent-blue);\n}\n.stat-icon.icon-green {\n  background: rgba(0, 229, 160, 0.15);\n  color: var(--accent-green);\n}\n.stat-icon.icon-purple {\n  background: rgba(168, 85, 247, 0.15);\n  color: var(--accent-purple);\n}\n.stat-icon.icon-orange {\n  background: rgba(255, 123, 58, 0.15);\n  color: var(--accent-orange);\n}\n.stat-icon.icon-red {\n  background: rgba(255, 77, 109, 0.15);\n  color: var(--accent-red);\n}\n.stat-icon.icon-cyan {\n  background: rgba(0, 212, 255, 0.15);\n  color: var(--accent-cyan);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-value {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.1;\n}\n.stat-label {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  margin-top: 0.15rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dash-bottom-grid {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 1.25rem;\n}\n@media (max-width: 1024px) {\n  .dash-bottom-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.dash-side {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.dash-widget {\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  padding: 1.25rem 1.5rem;\n}\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.widget-title {\n  font-family: var(--font-display);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.widget-link {\n  font-size: 0.8rem;\n  color: var(--accent-blue);\n  text-decoration: none;\n  font-family: var(--font-display);\n  font-weight: 600;\n  transition: opacity 0.2s;\n}\n.widget-link:hover {\n  opacity: 0.8;\n}\n.mini-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.mini-table thead th {\n  text-align: left;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border-color);\n}\n.mini-table tbody tr {\n  border-bottom: 1px solid rgba(30, 45, 74, 0.5);\n  transition: var(--transition);\n}\n.mini-table tbody tr:last-child {\n  border-bottom: none;\n}\n.mini-table tbody tr:hover {\n  background: var(--bg-card-hover);\n}\n.mini-table tbody td {\n  padding: 0.6rem 0.75rem;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.mini-table .td-name {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.categoria-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.cat-chip {\n  font-size: 0.75rem;\n  cursor: default;\n}\n.alert-widget {\n  border-color: rgba(255, 77, 109, 0.25);\n  background: rgba(255, 77, 109, 0.04);\n}\n.alert-title {\n  color: var(--accent-red) !important;\n}\n.alert-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.alert-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.alert-name {\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.quick-access {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.quick-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.75rem 1rem;\n  background: rgba(79, 142, 247, 0.1);\n  border: 1px solid rgba(79, 142, 247, 0.2);\n  border-radius: var(--radius-sm);\n  color: var(--accent-blue);\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-decoration: none;\n  transition: var(--transition);\n}\n.quick-btn:hover {\n  background: rgba(79, 142, 247, 0.18);\n  color: var(--accent-blue);\n}\n.quick-btn.secondary {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: var(--border-color);\n  color: var(--text-secondary);\n}\n.quick-btn.secondary:hover {\n  border-color: var(--border-accent);\n  color: var(--text-primary);\n}\n.btn-xs {\n  padding: 0.3rem 0.6rem !important;\n  font-size: 0.72rem !important;\n}\n.alert-conexion {\n  background: rgba(255, 123, 58, 0.1);\n  border: 1px solid rgba(255, 123, 58, 0.35);\n  border-radius: var(--radius-sm);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.85rem;\n  color: var(--accent-orange);\n  margin-bottom: 1rem;\n}\n.alert-conexion strong {\n  font-weight: 700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n';
  }
});

// src/app/pages/dashboard/dashboard.component.ts
function cov_r46crajif() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\dashboard\\dashboard.component.ts";
  var hash = "ff5573438d1a1c4545902b7c25d5e8ee6c2ff40b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\dashboard\\dashboard.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 117,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 15
        },
        end: {
          line: 15,
          column: 19
        }
      },
      "2": {
        start: {
          line: 16,
          column: 13
        },
        end: {
          line: 16,
          column: 17
        }
      },
      "3": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 25
        }
      },
      "4": {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 19,
          column: 26
        }
      },
      "5": {
        start: {
          line: 21,
          column: 20
        },
        end: {
          line: 21,
          column: 21
        }
      },
      "6": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 22,
          column: 23
        }
      },
      "7": {
        start: {
          line: 23,
          column: 18
        },
        end: {
          line: 23,
          column: 19
        }
      },
      "8": {
        start: {
          line: 25,
          column: 21
        },
        end: {
          line: 25,
          column: 22
        }
      },
      "9": {
        start: {
          line: 26,
          column: 23
        },
        end: {
          line: 26,
          column: 24
        }
      },
      "10": {
        start: {
          line: 27,
          column: 17
        },
        end: {
          line: 27,
          column: 18
        }
      },
      "11": {
        start: {
          line: 28,
          column: 15
        },
        end: {
          line: 28,
          column: 16
        }
      },
      "12": {
        start: {
          line: 29,
          column: 17
        },
        end: {
          line: 29,
          column: 19
        }
      },
      "13": {
        start: {
          line: 30,
          column: 23
        },
        end: {
          line: 30,
          column: 25
        }
      },
      "14": {
        start: {
          line: 31,
          column: 24
        },
        end: {
          line: 31,
          column: 26
        }
      },
      "15": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 39
        }
      },
      "16": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 45
        }
      },
      "17": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 35,
          column: 47
        }
      },
      "18": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 51
        }
      },
      "19": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 34
        }
      },
      "20": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 29
        }
      },
      "21": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 35
        }
      },
      "22": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 36
        }
      },
      "23": {
        start: {
          line: 46,
          column: 27
        },
        end: {
          line: 49,
          column: 11
        }
      },
      "24": {
        start: {
          line: 47,
          column: 12
        },
        end: {
          line: 47,
          column: 39
        }
      },
      "25": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 48,
          column: 26
        }
      },
      "26": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 60,
          column: 9
        }
      },
      "27": {
        start: {
          line: 52,
          column: 12
        },
        end: {
          line: 58,
          column: 15
        }
      },
      "28": {
        start: {
          line: 54,
          column: 20
        },
        end: {
          line: 54,
          column: 54
        }
      },
      "29": {
        start: {
          line: 55,
          column: 20
        },
        end: {
          line: 55,
          column: 42
        }
      },
      "30": {
        start: {
          line: 57,
          column: 31
        },
        end: {
          line: 57,
          column: 53
        }
      },
      "31": {
        start: {
          line: 59,
          column: 12
        },
        end: {
          line: 59,
          column: 19
        }
      },
      "32": {
        start: {
          line: 63,
          column: 26
        },
        end: {
          line: 66,
          column: 11
        }
      },
      "33": {
        start: {
          line: 64,
          column: 12
        },
        end: {
          line: 64,
          column: 38
        }
      },
      "34": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 65,
          column: 26
        }
      },
      "35": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 78,
          column: 11
        }
      },
      "36": {
        start: {
          line: 70,
          column: 16
        },
        end: {
          line: 70,
          column: 48
        }
      },
      "37": {
        start: {
          line: 71,
          column: 16
        },
        end: {
          line: 71,
          column: 50
        }
      },
      "38": {
        start: {
          line: 72,
          column: 16
        },
        end: {
          line: 72,
          column: 38
        }
      },
      "39": {
        start: {
          line: 76,
          column: 16
        },
        end: {
          line: 76,
          column: 38
        }
      },
      "40": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 45
        }
      },
      "41": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 75
        }
      },
      "42": {
        start: {
          line: 82,
          column: 52
        },
        end: {
          line: 82,
          column: 66
        }
      },
      "43": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 74
        }
      },
      "44": {
        start: {
          line: 83,
          column: 48
        },
        end: {
          line: 83,
          column: 65
        }
      },
      "45": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 47
        }
      },
      "46": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 77
        }
      },
      "47": {
        start: {
          line: 87,
          column: 54
        },
        end: {
          line: 87,
          column: 68
        }
      },
      "48": {
        start: {
          line: 88,
          column: 8
        },
        end: {
          line: 88,
          column: 80
        }
      },
      "49": {
        start: {
          line: 88,
          column: 55
        },
        end: {
          line: 88,
          column: 75
        }
      },
      "50": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 68
        }
      },
      "51": {
        start: {
          line: 89,
          column: 46
        },
        end: {
          line: 89,
          column: 59
        }
      },
      "52": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 89
        }
      },
      "53": {
        start: {
          line: 90,
          column: 57
        },
        end: {
          line: 90,
          column: 68
        }
      },
      "54": {
        start: {
          line: 90,
          column: 82
        },
        end: {
          line: 90,
          column: 85
        }
      },
      "55": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 69
        }
      },
      "56": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 82
        }
      },
      "57": {
        start: {
          line: 92,
          column: 55
        },
        end: {
          line: 92,
          column: 68
        }
      },
      "58": {
        start: {
          line: 95,
          column: 21
        },
        end: {
          line: 95,
          column: 42
        }
      },
      "59": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 97,
          column: 33
        }
      },
      "60": {
        start: {
          line: 97,
          column: 12
        },
        end: {
          line: 97,
          column: 33
        }
      },
      "61": {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 99,
          column: 35
        }
      },
      "62": {
        start: {
          line: 99,
          column: 12
        },
        end: {
          line: 99,
          column: 35
        }
      },
      "63": {
        start: {
          line: 100,
          column: 8
        },
        end: {
          line: 100,
          column: 31
        }
      },
      "64": {
        start: {
          line: 103,
          column: 8
        },
        end: {
          line: 104,
          column: 21
        }
      },
      "65": {
        start: {
          line: 104,
          column: 12
        },
        end: {
          line: 104,
          column: 21
        }
      },
      "66": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 105,
          column: 79
        }
      },
      "67": {
        start: {
          line: 108,
          column: 8
        },
        end: {
          line: 109,
          column: 22
        }
      },
      "68": {
        start: {
          line: 109,
          column: 12
        },
        end: {
          line: 109,
          column: 22
        }
      },
      "69": {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 110,
          column: 54
        }
      },
      "70": {
        start: {
          line: 112,
          column: 28
        },
        end: {
          line: 116,
          column: 5
        }
      },
      "71": {
        start: {
          line: 112,
          column: 34
        },
        end: {
          line: 116,
          column: 5
        }
      },
      "72": {
        start: {
          line: 118,
          column: 0
        },
        end: {
          line: 126,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        loc: {
          start: {
            line: 32,
            column: 62
          },
          end: {
            line: 36,
            column: 5
          }
        },
        line: 32
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        loc: {
          start: {
            line: 37,
            column: 15
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 37
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        loc: {
          start: {
            line: 41,
            column: 25
          },
          end: {
            line: 79,
            column: 5
          }
        },
        line: 41
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 46,
            column: 93
          },
          end: {
            line: 46,
            column: 94
          }
        },
        loc: {
          start: {
            line: 46,
            column: 99
          },
          end: {
            line: 49,
            column: 9
          }
        },
        line: 46
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 53,
            column: 22
          },
          end: {
            line: 53,
            column: 23
          }
        },
        loc: {
          start: {
            line: 53,
            column: 37
          },
          end: {
            line: 56,
            column: 17
          }
        },
        line: 53
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 57,
            column: 23
          },
          end: {
            line: 57,
            column: 24
          }
        },
        loc: {
          start: {
            line: 57,
            column: 29
          },
          end: {
            line: 57,
            column: 55
          }
        },
        line: 57
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 63,
            column: 91
          },
          end: {
            line: 63,
            column: 92
          }
        },
        loc: {
          start: {
            line: 63,
            column: 97
          },
          end: {
            line: 66,
            column: 9
          }
        },
        line: 63
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 69,
            column: 18
          },
          end: {
            line: 69,
            column: 19
          }
        },
        loc: {
          start: {
            line: 69,
            column: 47
          },
          end: {
            line: 73,
            column: 13
          }
        },
        line: 69
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 74,
            column: 19
          },
          end: {
            line: 74,
            column: 20
          }
        },
        loc: {
          start: {
            line: 74,
            column: 25
          },
          end: {
            line: 77,
            column: 13
          }
        },
        line: 74
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        loc: {
          start: {
            line: 80,
            column: 31
          },
          end: {
            line: 84,
            column: 5
          }
        },
        line: 80
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 82,
            column: 47
          },
          end: {
            line: 82,
            column: 48
          }
        },
        loc: {
          start: {
            line: 82,
            column: 52
          },
          end: {
            line: 82,
            column: 66
          }
        },
        line: 82
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 83,
            column: 43
          },
          end: {
            line: 83,
            column: 44
          }
        },
        loc: {
          start: {
            line: 83,
            column: 48
          },
          end: {
            line: 83,
            column: 65
          }
        },
        line: 83
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 5
          }
        },
        loc: {
          start: {
            line: 85,
            column: 33
          },
          end: {
            line: 93,
            column: 5
          }
        },
        line: 85
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 87,
            column: 49
          },
          end: {
            line: 87,
            column: 50
          }
        },
        loc: {
          start: {
            line: 87,
            column: 54
          },
          end: {
            line: 87,
            column: 68
          }
        },
        line: 87
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 88,
            column: 43
          },
          end: {
            line: 88,
            column: 44
          }
        },
        loc: {
          start: {
            line: 88,
            column: 55
          },
          end: {
            line: 88,
            column: 75
          }
        },
        line: 88
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 89,
            column: 41
          },
          end: {
            line: 89,
            column: 42
          }
        },
        loc: {
          start: {
            line: 89,
            column: 46
          },
          end: {
            line: 89,
            column: 59
          }
        },
        line: 89
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 90,
            column: 52
          },
          end: {
            line: 90,
            column: 53
          }
        },
        loc: {
          start: {
            line: 90,
            column: 57
          },
          end: {
            line: 90,
            column: 68
          }
        },
        line: 90
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 90,
            column: 77
          },
          end: {
            line: 90,
            column: 78
          }
        },
        loc: {
          start: {
            line: 90,
            column: 82
          },
          end: {
            line: 90,
            column: 85
          }
        },
        line: 90
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 92,
            column: 50
          },
          end: {
            line: 92,
            column: 51
          }
        },
        loc: {
          start: {
            line: 92,
            column: 55
          },
          end: {
            line: 92,
            column: 68
          }
        },
        line: 92
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        loc: {
          start: {
            line: 94,
            column: 17
          },
          end: {
            line: 101,
            column: 5
          }
        },
        line: 94
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        loc: {
          start: {
            line: 102,
            column: 28
          },
          end: {
            line: 106,
            column: 5
          }
        },
        line: 102
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        },
        loc: {
          start: {
            line: 107,
            column: 23
          },
          end: {
            line: 111,
            column: 5
          }
        },
        line: 107
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 112,
            column: 28
          },
          end: {
            line: 112,
            column: 29
          }
        },
        loc: {
          start: {
            line: 112,
            column: 34
          },
          end: {
            line: 116,
            column: 5
          }
        },
        line: 112
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 50
      },
      "1": {
        loc: {
          start: {
            line: 88,
            column: 62
          },
          end: {
            line: 88,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 88,
            column: 62
          },
          end: {
            line: 88,
            column: 69
          }
        }, {
          start: {
            line: 88,
            column: 73
          },
          end: {
            line: 88,
            column: 74
          }
        }],
        line: 88
      },
      "2": {
        loc: {
          start: {
            line: 96,
            column: 8
          },
          end: {
            line: 97,
            column: 33
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 96,
            column: 8
          },
          end: {
            line: 97,
            column: 33
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 96
      },
      "3": {
        loc: {
          start: {
            line: 98,
            column: 8
          },
          end: {
            line: 99,
            column: 35
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 98,
            column: 8
          },
          end: {
            line: 99,
            column: 35
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 98
      },
      "4": {
        loc: {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 104,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 104,
            column: 21
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 103
      },
      "5": {
        loc: {
          start: {
            line: 108,
            column: 8
          },
          end: {
            line: 109,
            column: 22
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 108,
            column: 8
          },
          end: {
            line: 109,
            column: 22
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 108
      },
      "6": {
        loc: {
          start: {
            line: 110,
            column: 15
          },
          end: {
            line: 110,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 110,
            column: 15
          },
          end: {
            line: 110,
            column: 47
          }
        }, {
          start: {
            line: 110,
            column: 51
          },
          end: {
            line: 110,
            column: 53
          }
        }],
        line: 110
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "dashboard.component.js",
      sourceRoot: "",
      sources: ["dashboard.component.ts"],
      names: [],
      mappings: "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",
      sourcesContent: ["\r\nimport { Component, OnInit } from '@angular/core';\r\nimport { CommonModule } from '@angular/common';\r\nimport { RouterLink } from '@angular/router';\r\nimport { forkJoin, of, timeout, catchError } from 'rxjs';\r\nimport { AuthService } from '../../core/services/auth.service';\r\nimport { UsuarioService } from '../../core/services/usuario.service';\r\nimport { ProductoService } from '../../core/services/producto.service';\r\nimport { Usuario } from '../../models/usuario.model';\r\nimport { Producto } from '../../models/producto.model';\r\nimport { LoginResponse } from '../../models/usuario.model';\r\n\r\n@Component({\r\n  selector: 'app-dashboard',\r\n  standalone: true,\r\n  imports: [CommonModule, RouterLink],\r\n  templateUrl: './dashboard.component.html',\r\n  styleUrls: ['./dashboard.component.scss']\r\n})\r\nexport class DashboardComponent implements OnInit {\r\n\r\n  cargando = true;\r\n  sesion: LoginResponse | null = null;\r\n\r\n  // Errores por microservicio para mostrar en pantalla\r\n  errorUsuarios = false;\r\n  errorProductos = false;\r\n\r\n  // Estad\xEDsticas usuarios\r\n  totalUsuarios = 0;\r\n  usuariosActivos = 0;\r\n  totalAdmins = 0;\r\n\r\n  // Estad\xEDsticas productos\r\n  totalProductos = 0;\r\n  productosActivos = 0;\r\n  stockTotal = 0;\r\n  sinStock = 0;\r\n  categorias: string[] = [];\r\n  ultimosProductos: Producto[] = [];\r\n  productosSinStock: Producto[] = [];\r\n\r\n  constructor(\r\n    public authService: AuthService,\r\n    private usuarioService: UsuarioService,\r\n    private productoService: ProductoService\r\n  ) {}\r\n\r\n  ngOnInit(): void {\r\n    this.sesion = this.authService.getSesion();\r\n    this.cargarEstadisticas();\r\n  }\r\n\r\n  cargarEstadisticas(): void {\r\n    this.cargando = true;\r\n    this.errorUsuarios = false;\r\n    this.errorProductos = false;\r\n\r\n    // Observable de productos con timeout de 8 segundos y fallback a array vac\xEDo\r\n    const productos$ = this.productoService.listarTodos().pipe(\r\n      timeout(8000),\r\n      catchError(() => {\r\n        this.errorProductos = true;\r\n        return of([] as Producto[]);   // Retorna vac\xEDo en lugar de tirar error\r\n      })\r\n    );\r\n\r\n    if (!this.authService.isAdmin()) {\r\n      // Usuario normal: solo carga productos\r\n      productos$.subscribe({\r\n        next: (productos) => {\r\n          this.procesarProductos(productos);\r\n          this.cargando = false;\r\n        },\r\n        error: () => { this.cargando = false; }\r\n      });\r\n      return;\r\n    }\r\n\r\n    // Admin: carga usuarios Y productos en paralelo\r\n    // Si uno falla, el otro igual se muestra (catchError en cada uno)\r\n    const usuarios$ = this.usuarioService.listarTodos().pipe(\r\n      timeout(8000),\r\n      catchError(() => {\r\n        this.errorUsuarios = true;\r\n        return of([] as Usuario[]);\r\n      })\r\n    );\r\n\r\n    // forkJoin nunca queda colgado porque ambos tienen catchError\r\n    forkJoin({ usuarios: usuarios$, productos: productos$ }).subscribe({\r\n      next: ({ usuarios, productos }) => {\r\n        this.procesarUsuarios(usuarios);\r\n        this.procesarProductos(productos);\r\n        this.cargando = false;\r\n      },\r\n      error: () => {\r\n        // Este error ya no deber\xEDa ocurrir gracias a catchError arriba\r\n        this.cargando = false;\r\n      }\r\n    });\r\n  }\r\n\r\n  private procesarUsuarios(usuarios: Usuario[]): void {\r\n    this.totalUsuarios = usuarios.length;\r\n    this.usuariosActivos = usuarios.filter(u => u.activo === 1).length;\r\n    this.totalAdmins = usuarios.filter(u => u.rol === 'ADMIN').length;\r\n  }\r\n\r\n  private procesarProductos(productos: Producto[]): void {\r\n    this.totalProductos = productos.length;\r\n    this.productosActivos = productos.filter(p => p.activo === 1).length;\r\n    this.stockTotal = productos.reduce((acc, p) => acc + (p.stock || 0), 0);\r\n    this.sinStock = productos.filter(p => p.stock === 0).length;\r\n    this.categorias = [...new Set(\r\n      productos.map(p => p.categoria).filter(c => !!c) as string[]\r\n    )];\r\n    this.ultimosProductos = [...productos].reverse().slice(0, 5);\r\n    this.productosSinStock = productos.filter(p => p.stock === 0).slice(0, 3);\r\n  }\r\n\r\n  get saludo(): string {\r\n    const hora = new Date().getHours();\r\n    if (hora < 12) return 'Buenos d\xEDas';\r\n    if (hora < 18) return 'Buenas tardes';\r\n    return 'Buenas noches';\r\n  }\r\n\r\n  get porcentajeActivos(): number {\r\n    if (!this.totalProductos) return 0;\r\n    return Math.round((this.productosActivos / this.totalProductos) * 100);\r\n  }\r\n\r\n  get primerNombre(): string {\r\n    if (!this.sesion?.nombre) return '';\r\n    return this.sesion.nombre.split(' ')[0] || '';\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ff5573438d1a1c4545902b7c25d5e8ee6c2ff40b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_r46crajif = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var DashboardComponent;
var init_dashboard_component3 = __esm({
  "src/app/pages/dashboard/dashboard.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard_component();
    init_dashboard_component2();
    init_core();
    init_common();
    init_router();
    init_esm();
    init_auth_service();
    init_usuario_service();
    init_producto_service();
    cov_r46crajif();
    cov_r46crajif().s[0]++;
    DashboardComponent = class DashboardComponent2 {
      authService;
      usuarioService;
      productoService;
      cargando = (cov_r46crajif().s[1]++, true);
      sesion = (cov_r46crajif().s[2]++, null);
      // Errores por microservicio para mostrar en pantalla
      errorUsuarios = (cov_r46crajif().s[3]++, false);
      errorProductos = (cov_r46crajif().s[4]++, false);
      // Estadísticas usuarios
      totalUsuarios = (cov_r46crajif().s[5]++, 0);
      usuariosActivos = (cov_r46crajif().s[6]++, 0);
      totalAdmins = (cov_r46crajif().s[7]++, 0);
      // Estadísticas productos
      totalProductos = (cov_r46crajif().s[8]++, 0);
      productosActivos = (cov_r46crajif().s[9]++, 0);
      stockTotal = (cov_r46crajif().s[10]++, 0);
      sinStock = (cov_r46crajif().s[11]++, 0);
      categorias = (cov_r46crajif().s[12]++, []);
      ultimosProductos = (cov_r46crajif().s[13]++, []);
      productosSinStock = (cov_r46crajif().s[14]++, []);
      constructor(authService, usuarioService, productoService) {
        cov_r46crajif().f[0]++;
        cov_r46crajif().s[15]++;
        this.authService = authService;
        cov_r46crajif().s[16]++;
        this.usuarioService = usuarioService;
        cov_r46crajif().s[17]++;
        this.productoService = productoService;
      }
      ngOnInit() {
        cov_r46crajif().f[1]++;
        cov_r46crajif().s[18]++;
        this.sesion = this.authService.getSesion();
        cov_r46crajif().s[19]++;
        this.cargarEstadisticas();
      }
      cargarEstadisticas() {
        cov_r46crajif().f[2]++;
        cov_r46crajif().s[20]++;
        this.cargando = true;
        cov_r46crajif().s[21]++;
        this.errorUsuarios = false;
        cov_r46crajif().s[22]++;
        this.errorProductos = false;
        const productos$ = (cov_r46crajif().s[23]++, this.productoService.listarTodos().pipe(timeout(8e3), catchError(() => {
          cov_r46crajif().f[3]++;
          cov_r46crajif().s[24]++;
          this.errorProductos = true;
          cov_r46crajif().s[25]++;
          return of([]);
        })));
        cov_r46crajif().s[26]++;
        if (!this.authService.isAdmin()) {
          cov_r46crajif().b[0][0]++;
          cov_r46crajif().s[27]++;
          productos$.subscribe({
            next: (productos) => {
              cov_r46crajif().f[4]++;
              cov_r46crajif().s[28]++;
              this.procesarProductos(productos);
              cov_r46crajif().s[29]++;
              this.cargando = false;
            },
            error: () => {
              cov_r46crajif().f[5]++;
              cov_r46crajif().s[30]++;
              this.cargando = false;
            }
          });
          cov_r46crajif().s[31]++;
          return;
        } else {
          cov_r46crajif().b[0][1]++;
        }
        const usuarios$ = (cov_r46crajif().s[32]++, this.usuarioService.listarTodos().pipe(timeout(8e3), catchError(() => {
          cov_r46crajif().f[6]++;
          cov_r46crajif().s[33]++;
          this.errorUsuarios = true;
          cov_r46crajif().s[34]++;
          return of([]);
        })));
        cov_r46crajif().s[35]++;
        forkJoin({
          usuarios: usuarios$,
          productos: productos$
        }).subscribe({
          next: ({
            usuarios,
            productos
          }) => {
            cov_r46crajif().f[7]++;
            cov_r46crajif().s[36]++;
            this.procesarUsuarios(usuarios);
            cov_r46crajif().s[37]++;
            this.procesarProductos(productos);
            cov_r46crajif().s[38]++;
            this.cargando = false;
          },
          error: () => {
            cov_r46crajif().f[8]++;
            cov_r46crajif().s[39]++;
            this.cargando = false;
          }
        });
      }
      procesarUsuarios(usuarios) {
        cov_r46crajif().f[9]++;
        cov_r46crajif().s[40]++;
        this.totalUsuarios = usuarios.length;
        cov_r46crajif().s[41]++;
        this.usuariosActivos = usuarios.filter((u) => {
          cov_r46crajif().f[10]++;
          cov_r46crajif().s[42]++;
          return u.activo === 1;
        }).length;
        cov_r46crajif().s[43]++;
        this.totalAdmins = usuarios.filter((u) => {
          cov_r46crajif().f[11]++;
          cov_r46crajif().s[44]++;
          return u.rol === "ADMIN";
        }).length;
      }
      procesarProductos(productos) {
        cov_r46crajif().f[12]++;
        cov_r46crajif().s[45]++;
        this.totalProductos = productos.length;
        cov_r46crajif().s[46]++;
        this.productosActivos = productos.filter((p) => {
          cov_r46crajif().f[13]++;
          cov_r46crajif().s[47]++;
          return p.activo === 1;
        }).length;
        cov_r46crajif().s[48]++;
        this.stockTotal = productos.reduce((acc, p) => {
          cov_r46crajif().f[14]++;
          cov_r46crajif().s[49]++;
          return acc + ((cov_r46crajif().b[1][0]++, p.stock) || (cov_r46crajif().b[1][1]++, 0));
        }, 0);
        cov_r46crajif().s[50]++;
        this.sinStock = productos.filter((p) => {
          cov_r46crajif().f[15]++;
          cov_r46crajif().s[51]++;
          return p.stock === 0;
        }).length;
        cov_r46crajif().s[52]++;
        this.categorias = [...new Set(productos.map((p) => {
          cov_r46crajif().f[16]++;
          cov_r46crajif().s[53]++;
          return p.categoria;
        }).filter((c) => {
          cov_r46crajif().f[17]++;
          cov_r46crajif().s[54]++;
          return !!c;
        }))];
        cov_r46crajif().s[55]++;
        this.ultimosProductos = [...productos].reverse().slice(0, 5);
        cov_r46crajif().s[56]++;
        this.productosSinStock = productos.filter((p) => {
          cov_r46crajif().f[18]++;
          cov_r46crajif().s[57]++;
          return p.stock === 0;
        }).slice(0, 3);
      }
      get saludo() {
        cov_r46crajif().f[19]++;
        const hora = (cov_r46crajif().s[58]++, (/* @__PURE__ */ new Date()).getHours());
        cov_r46crajif().s[59]++;
        if (hora < 12) {
          cov_r46crajif().b[2][0]++;
          cov_r46crajif().s[60]++;
          return "Buenos d\xEDas";
        } else {
          cov_r46crajif().b[2][1]++;
        }
        cov_r46crajif().s[61]++;
        if (hora < 18) {
          cov_r46crajif().b[3][0]++;
          cov_r46crajif().s[62]++;
          return "Buenas tardes";
        } else {
          cov_r46crajif().b[3][1]++;
        }
        cov_r46crajif().s[63]++;
        return "Buenas noches";
      }
      get porcentajeActivos() {
        cov_r46crajif().f[20]++;
        cov_r46crajif().s[64]++;
        if (!this.totalProductos) {
          cov_r46crajif().b[4][0]++;
          cov_r46crajif().s[65]++;
          return 0;
        } else {
          cov_r46crajif().b[4][1]++;
        }
        cov_r46crajif().s[66]++;
        return Math.round(this.productosActivos / this.totalProductos * 100);
      }
      get primerNombre() {
        cov_r46crajif().f[21]++;
        cov_r46crajif().s[67]++;
        if (!this.sesion?.nombre) {
          cov_r46crajif().b[5][0]++;
          cov_r46crajif().s[68]++;
          return "";
        } else {
          cov_r46crajif().b[5][1]++;
        }
        cov_r46crajif().s[69]++;
        return (cov_r46crajif().b[6][0]++, this.sesion.nombre.split(" ")[0]) || (cov_r46crajif().b[6][1]++, "");
      }
      static ctorParameters = (cov_r46crajif().s[70]++, () => {
        cov_r46crajif().f[22]++;
        cov_r46crajif().s[71]++;
        return [{
          type: AuthService
        }, {
          type: UsuarioService
        }, {
          type: ProductoService
        }];
      });
    };
    cov_r46crajif().s[72]++;
    DashboardComponent = __decorate([Component({
      selector: "app-dashboard",
      standalone: true,
      imports: [CommonModule, RouterLink],
      template: dashboard_component_default,
      styles: [dashboard_component_default2]
    })], DashboardComponent);
  }
});

// src/app/pages/dashboard/dashboard.component.spec.ts
var require_dashboard_component_spec = __commonJS({
  "src/app/pages/dashboard/dashboard.component.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_esm();
    init_dashboard_component3();
    init_auth_service();
    init_usuario_service();
    init_producto_service();
    describe("DashboardComponent - Admin", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let usuarioServiceSpy;
      let productoServiceSpy;
      const mockSesionAdmin = {
        mensaje: "OK",
        idUsuario: 1,
        nombre: "Admin Test",
        rol: "ADMIN"
      };
      const mockUsuarios = [
        { idUsuario: 1, nombre: "Admin", correo: "a@a.com", password: "p", rol: "ADMIN", activo: 1 },
        { idUsuario: 2, nombre: "User1", correo: "u@u.com", password: "p", rol: "USER", activo: 1 },
        { idUsuario: 3, nombre: "User2", correo: "u2@u.com", password: "p", rol: "USER", activo: 0 }
      ];
      const mockProductos = [
        { idProducto: 1, nombre: "Laptop", precio: 1e6, stock: 10, categoria: "Electr\xF3nica", activo: 1 },
        { idProducto: 2, nombre: "Mouse", precio: 2e4, stock: 0, categoria: "Electr\xF3nica", activo: 1 },
        { idProducto: 3, nombre: "Polera", precio: 15e3, stock: 30, categoria: "Ropa", activo: 0 }
      ];
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = jasmine.createSpyObj("AuthService", ["isAdmin", "getSesion", "isLoggedIn"]);
        authServiceSpy.isAdmin.and.returnValue(true);
        authServiceSpy.getSesion.and.returnValue(mockSesionAdmin);
        usuarioServiceSpy = jasmine.createSpyObj("UsuarioService", ["listarTodos"]);
        usuarioServiceSpy.listarTodos.and.returnValue(of(mockUsuarios));
        productoServiceSpy = jasmine.createSpyObj("ProductoService", ["listarTodos"]);
        productoServiceSpy.listarTodos.and.returnValue(of(mockProductos));
        yield TestBed.configureTestingModule({
          imports: [DashboardComponent, RouterTestingModule],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: UsuarioService, useValue: usuarioServiceSpy },
            { provide: ProductoService, useValue: productoServiceSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar la sesi\xF3n del admin al inicializar", () => {
        expect(component.sesion).toEqual(mockSesionAdmin);
      });
      it("deber\xEDa poner cargando en false despu\xE9s de cargar datos", fakeAsync(() => {
        tick(100);
        expect(component.cargando).toBeFalse();
      }));
      it("deber\xEDa calcular el total de usuarios correctamente", fakeAsync(() => {
        tick(100);
        expect(component.totalUsuarios).toBe(3);
      }));
      it("deber\xEDa calcular usuarios activos correctamente", fakeAsync(() => {
        tick(100);
        expect(component.usuariosActivos).toBe(2);
      }));
      it("deber\xEDa calcular total de admins correctamente", fakeAsync(() => {
        tick(100);
        expect(component.totalAdmins).toBe(1);
      }));
      it("deber\xEDa calcular el total de productos correctamente", fakeAsync(() => {
        tick(100);
        expect(component.totalProductos).toBe(3);
      }));
      it("deber\xEDa calcular productos activos correctamente", fakeAsync(() => {
        tick(100);
        expect(component.productosActivos).toBe(2);
      }));
      it("deber\xEDa calcular productos sin stock correctamente", fakeAsync(() => {
        tick(100);
        expect(component.sinStock).toBe(1);
      }));
      it("deber\xEDa calcular el stock total correctamente", fakeAsync(() => {
        tick(100);
        expect(component.stockTotal).toBe(40);
      }));
      it("deber\xEDa extraer categor\xEDas \xFAnicas", fakeAsync(() => {
        tick(100);
        expect(component.categorias).toContain("Electr\xF3nica");
        expect(component.categorias).toContain("Ropa");
      }));
      it("deber\xEDa cargar los \xFAltimos 5 productos", fakeAsync(() => {
        tick(100);
        expect(component.ultimosProductos.length).toBeLessThanOrEqual(5);
      }));
      it("deber\xEDa calcular el porcentaje de activos correctamente", fakeAsync(() => {
        tick(100);
        expect(component.porcentajeActivos).toBe(67);
      }));
      it("deber\xEDa retornar 0 si no hay productos al calcular porcentaje", () => {
        component.totalProductos = 0;
        expect(component.porcentajeActivos).toBe(0);
      });
      it("deber\xEDa retornar un saludo no vac\xEDo", () => {
        expect(component.saludo).toBeTruthy();
        expect(["Buenos d\xEDas", "Buenas tardes", "Buenas noches"]).toContain(component.saludo);
      });
      it("deber\xEDa retornar el primer nombre de la sesi\xF3n", () => {
        expect(component.primerNombre).toBe("Admin");
      });
      it("deber\xEDa retornar cadena vac\xEDa si no hay sesi\xF3n", () => {
        component.sesion = null;
        expect(component.primerNombre).toBe("");
      });
      it("deber\xEDa manejar error en microservicio de usuarios con graceful degradation", fakeAsync(() => {
        usuarioServiceSpy.listarTodos.and.returnValue(throwError(() => new Error("Error usuarios")));
        component.cargarEstadisticas();
        tick(9e3);
        expect(component.cargando).toBeFalse();
      }));
      it("deber\xEDa manejar error en microservicio de productos con graceful degradation", fakeAsync(() => {
        productoServiceSpy.listarTodos.and.returnValue(throwError(() => new Error("Error productos")));
        component.cargarEstadisticas();
        tick(9e3);
        expect(component.cargando).toBeFalse();
      }));
    });
    describe("DashboardComponent - Usuario normal (USER)", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let usuarioServiceSpy;
      let productoServiceSpy;
      const mockSesionUser = {
        mensaje: "OK",
        idUsuario: 2,
        nombre: "Pedro User",
        rol: "USER"
      };
      const mockProductos = [
        { idProducto: 1, nombre: "Laptop", precio: 1e6, stock: 10, activo: 1 }
      ];
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = jasmine.createSpyObj("AuthService", ["isAdmin", "getSesion", "isLoggedIn"]);
        authServiceSpy.isAdmin.and.returnValue(false);
        authServiceSpy.getSesion.and.returnValue(mockSesionUser);
        usuarioServiceSpy = jasmine.createSpyObj("UsuarioService", ["listarTodos"]);
        productoServiceSpy = jasmine.createSpyObj("ProductoService", ["listarTodos"]);
        productoServiceSpy.listarTodos.and.returnValue(of(mockProductos));
        yield TestBed.configureTestingModule({
          imports: [DashboardComponent, RouterTestingModule],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: UsuarioService, useValue: usuarioServiceSpy },
            { provide: ProductoService, useValue: productoServiceSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente para un usuario normal", () => {
        expect(component).toBeTruthy();
      });
      it("NO deber\xEDa llamar al servicio de usuarios si no es admin", fakeAsync(() => {
        tick(100);
        expect(usuarioServiceSpy.listarTodos).not.toHaveBeenCalled();
      }));
      it("deber\xEDa cargar productos para usuarios normales", fakeAsync(() => {
        tick(100);
        expect(productoServiceSpy.listarTodos).toHaveBeenCalled();
        expect(component.totalProductos).toBe(1);
      }));
      it("deber\xEDa retornar el primer nombre del usuario normal", () => {
        expect(component.primerNombre).toBe("Pedro");
      });
    });
  }
});
export default require_dashboard_component_spec();
//# sourceMappingURL=spec-app-pages-dashboard-dashboard.component.spec.js.map
