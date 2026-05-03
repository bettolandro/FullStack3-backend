import {
  FormsModule,
  init_forms
} from "./chunk-AUDESBNG.js";
import {
  require_sweetalert2_all
} from "./chunk-JRW4AWWM.js";
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
import "./chunk-J2TET66I.js";
import "./chunk-DPIYGMOA.js";
import {
  ChangeDetectorRef,
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __toESM,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  throwError
} from "./chunk-X225SWGN.js";

// angular:jit:template:src\app\pages\productos\lista-productos\lista-productos.component.html
var lista_productos_component_default;
var init_lista_productos_component = __esm({
  "angular:jit:template:src\\app\\pages\\productos\\lista-productos\\lista-productos.component.html"() {
    lista_productos_component_default = `\r
<div class="page-container fade-in">\r
\r
  <!-- ENCABEZADO -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">Gesti\xF3n de <span>Productos</span></h1>\r
      <p class="page-subtitle">\r
        {{ productos.length }} productos \xB7\r
        <span class="badge badge-success">{{ totalActivos }} activos</span>\r
        <span class="badge badge-danger" style="margin-left:4px" *ngIf="sinStock > 0">\r
          {{ sinStock }} sin stock\r
        </span>\r
      </p>\r
    </div>\r
    <!-- Bot\xF3n solo visible para ADMIN -->\r
    <a routerLink="/productos/nuevo" class="btn-primary-custom" *ngIf="authService.isAdmin()">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
      </svg>\r
      Nuevo producto\r
    </a>\r
  </div>\r
\r
  <!-- FILTROS -->\r
  <div class="filters-bar">\r
    <div class="search-wrapper">\r
      <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>\r
      </svg>\r
      <input\r
        type="text"\r
        placeholder="Buscar por nombre, descripci\xF3n..."\r
        [(ngModel)]="textoBusqueda"\r
        (input)="filtrar()"\r
      >\r
    </div>\r
    <select class="filter-select" [(ngModel)]="categoriaSeleccionada" (change)="filtrar()">\r
      <option value="">Todas las categor\xEDas</option>\r
      <option *ngFor="let cat of categorias" [value]="cat">{{ cat }}</option>\r
    </select>\r
    <label class="filter-toggle">\r
      <input type="checkbox" [(ngModel)]="soloActivos" (change)="filtrar()">\r
      <span>Solo activos</span>\r
    </label>\r
    <button *ngIf="hayFiltrosActivos" class="btn-outline-custom btn-sm" (click)="limpiarFiltros()">\r
      \u2715 Limpiar\r
    </button>\r
  </div>\r
\r
  <!-- LOADING -->\r
  <div class="loading-container" *ngIf="cargando">\r
    <div class="spinner"></div>\r
    <p>Cargando productos...</p>\r
  </div>\r
\r
  <!-- TABLA -->\r
  <div class="table-container" *ngIf="!cargando">\r
\r
    <div class="empty-state" *ngIf="productosFiltrados.length === 0">\r
      <div class="empty-icon">\u{1F4E6}</div>\r
      <h3>{{ hayFiltrosActivos ? 'Sin resultados' : 'No hay productos' }}</h3>\r
      <p>{{ hayFiltrosActivos ? 'Ajusta los filtros de b\xFAsqueda' : 'Agrega el primer producto' }}</p>\r
    </div>\r
\r
    <table class="custom-table" *ngIf="productosFiltrados.length > 0">\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Nombre</th>\r
          <th class="hide-mobile">Categor\xEDa</th>\r
          <th>Precio</th>\r
          <th>Stock</th>\r
          <th>Estado</th>\r
          <!-- Columna acciones: solo ADMIN la ve -->\r
          <th *ngIf="authService.isAdmin()">Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let p of productosFiltrados">\r
\r
          <td class="td-id">#{{ p.idProducto }}</td>\r
\r
          <td>\r
            <div class="producto-cell">\r
              <span class="producto-nombre">{{ p.nombre }}</span>\r
              <span class="producto-desc hide-tablet" *ngIf="p.descripcion">\r
                {{ p.descripcion | slice:0:50 }}{{ p.descripcion!.length > 50 ? '...' : '' }}\r
              </span>\r
            </div>\r
          </td>\r
\r
          <td class="hide-mobile">\r
            <span class="badge badge-blue" *ngIf="p.categoria">{{ p.categoria }}</span>\r
            <span class="text-muted" *ngIf="!p.categoria">\u2014</span>\r
          </td>\r
\r
          <td class="precio-td">\${{ p.precio | number:'1.0-0' }}</td>\r
\r
          <td>\r
            <span class="badge" [ngClass]="getStockClass(p.stock)">{{ p.stock }}</span>\r
          </td>\r
\r
          <td>\r
            <span class="badge" [ngClass]="p.activo === 1 ? 'badge-success' : 'badge-danger'">\r
              {{ p.activo === 1 ? 'Activo' : 'Inactivo' }}\r
            </span>\r
          </td>\r
\r
          <!-- Acciones: solo ADMIN las ve -->\r
          <td *ngIf="authService.isAdmin()">\r
            <div class="action-btns">\r
              <a [routerLink]="['/productos/editar', p.idProducto]" class="btn-edit-custom">\r
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
                </svg>\r
                Editar\r
              </a>\r
              <button class="btn-danger-custom" (click)="eliminar(p)">\r
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="3 6 5 6 21 6"/>\r
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>\r
                </svg>\r
                Eliminar\r
              </button>\r
            </div>\r
          </td>\r
\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <div class="table-footer" *ngIf="productosFiltrados.length > 0">\r
      <span>Mostrando {{ productosFiltrados.length }} de {{ productos.length }} productos</span>\r
      <span *ngIf="hayFiltrosActivos" class="filter-info">\u{1F50D} Filtros activos</span>\r
    </div>\r
\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\productos\lista-productos\lista-productos.component.scss
var lista_productos_component_default2;
var init_lista_productos_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\productos\\lista-productos\\lista-productos.component.scss"() {
    lista_productos_component_default2 = `@charset "UTF-8";

/* src/app/pages/productos/lista-productos/lista-productos.component.scss */
.filters-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}
.filter-select {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.55rem 2rem 0.55rem 0.875rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
  transition: var(--transition);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238892b0' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
}
.filter-select:focus {
  border-color: var(--accent-blue);
}
.filter-select option {
  background: var(--bg-input);
}
.filter-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--text-secondary);
  -webkit-user-select: none;
  user-select: none;
}
.filter-toggle input[type=checkbox] {
  width: 16px;
  height: 16px;
  accent-color: var(--accent-blue);
  cursor: pointer;
}
.filter-toggle:hover {
  color: var(--text-primary);
}
.btn-sm {
  padding: 0.45rem 0.875rem !important;
  font-size: 0.8rem !important;
}
.producto-cell {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.producto-nombre {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
}
.producto-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.3;
}
.precio-td {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--accent-cyan);
}
.td-id {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}
.action-btns {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.filter-info {
  color: var(--accent-blue);
  font-size: 0.8rem;
}
.text-muted {
  color: var(--text-muted);
  font-size: 0.8rem;
}
@media (max-width: 640px) {
  .hide-mobile {
    display: none !important;
  }
}
@media (max-width: 900px) {
  .hide-tablet {
    display: none !important;
  }
}
/*# sourceMappingURL=lista-productos.component.css.map */
`;
  }
});

// src/app/pages/productos/lista-productos/lista-productos.component.ts
function cov_1di9snbnya() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\productos\\lista-productos\\lista-productos.component.ts";
  var hash = "dd25649db169cadb9fcfa8bcecb320c6d9398881";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\productos\\lista-productos\\lista-productos.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 30
        },
        end: {
          line: 113,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 15,
          column: 18
        }
      },
      "2": {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 16,
          column: 27
        }
      },
      "3": {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 19
        }
      },
      "4": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 22
        }
      },
      "5": {
        start: {
          line: 19,
          column: 28
        },
        end: {
          line: 19,
          column: 30
        }
      },
      "6": {
        start: {
          line: 20,
          column: 18
        },
        end: {
          line: 20,
          column: 23
        }
      },
      "7": {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 21,
          column: 19
        }
      },
      "8": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 47
        }
      },
      "9": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 23
        }
      },
      "10": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 39
        }
      },
      "11": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 31
        }
      },
      "12": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 29
        }
      },
      "13": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 46,
          column: 11
        }
      },
      "14": {
        start: {
          line: 35,
          column: 16
        },
        end: {
          line: 35,
          column: 38
        }
      },
      "15": {
        start: {
          line: 36,
          column: 16
        },
        end: {
          line: 36,
          column: 41
        }
      },
      "16": {
        start: {
          line: 37,
          column: 16
        },
        end: {
          line: 37,
          column: 31
        }
      },
      "17": {
        start: {
          line: 38,
          column: 16
        },
        end: {
          line: 38,
          column: 38
        }
      },
      "18": {
        start: {
          line: 39,
          column: 16
        },
        end: {
          line: 39,
          column: 41
        }
      },
      "19": {
        start: {
          line: 42,
          column: 16
        },
        end: {
          line: 42,
          column: 38
        }
      },
      "20": {
        start: {
          line: 43,
          column: 16
        },
        end: {
          line: 43,
          column: 41
        }
      },
      "21": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 140
        }
      },
      "22": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 49,
          column: 101
        }
      },
      "23": {
        start: {
          line: 49,
          column: 62
        },
        end: {
          line: 49,
          column: 73
        }
      },
      "24": {
        start: {
          line: 49,
          column: 87
        },
        end: {
          line: 49,
          column: 90
        }
      },
      "25": {
        start: {
          line: 52,
          column: 24
        },
        end: {
          line: 52,
          column: 43
        }
      },
      "26": {
        start: {
          line: 53,
          column: 22
        },
        end: {
          line: 53,
          column: 61
        }
      },
      "27": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 58,
          column: 9
        }
      },
      "28": {
        start: {
          line: 55,
          column: 12
        },
        end: {
          line: 57,
          column: 71
        }
      },
      "29": {
        start: {
          line: 55,
          column: 46
        },
        end: {
          line: 57,
          column: 69
        }
      },
      "30": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 61,
          column: 9
        }
      },
      "31": {
        start: {
          line: 60,
          column: 12
        },
        end: {
          line: 60,
          column: 90
        }
      },
      "32": {
        start: {
          line: 60,
          column: 46
        },
        end: {
          line: 60,
          column: 88
        }
      },
      "33": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 64,
          column: 9
        }
      },
      "34": {
        start: {
          line: 63,
          column: 12
        },
        end: {
          line: 63,
          column: 62
        }
      },
      "35": {
        start: {
          line: 63,
          column: 46
        },
        end: {
          line: 63,
          column: 60
        }
      },
      "36": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 44
        }
      },
      "37": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 32
        }
      },
      "38": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 40
        }
      },
      "39": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 33
        }
      },
      "40": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 71,
          column: 23
        }
      },
      "41": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 94,
          column: 11
        }
      },
      "42": {
        start: {
          line: 82,
          column: 12
        },
        end: {
          line: 93,
          column: 13
        }
      },
      "43": {
        start: {
          line: 83,
          column: 16
        },
        end: {
          line: 92,
          column: 19
        }
      },
      "44": {
        start: {
          line: 85,
          column: 24
        },
        end: {
          line: 85,
          column: 106
        }
      },
      "45": {
        start: {
          line: 85,
          column: 68
        },
        end: {
          line: 85,
          column: 104
        }
      },
      "46": {
        start: {
          line: 86,
          column: 24
        },
        end: {
          line: 86,
          column: 49
        }
      },
      "47": {
        start: {
          line: 87,
          column: 24
        },
        end: {
          line: 87,
          column: 39
        }
      },
      "48": {
        start: {
          line: 88,
          column: 24
        },
        end: {
          line: 88,
          column: 49
        }
      },
      "49": {
        start: {
          line: 89,
          column: 24
        },
        end: {
          line: 89,
          column: 94
        }
      },
      "50": {
        start: {
          line: 91,
          column: 33
        },
        end: {
          line: 91,
          column: 95
        }
      },
      "51": {
        start: {
          line: 96,
          column: 25
        },
        end: {
          line: 96,
          column: 82
        }
      },
      "52": {
        start: {
          line: 96,
          column: 59
        },
        end: {
          line: 96,
          column: 73
        }
      },
      "53": {
        start: {
          line: 97,
          column: 21
        },
        end: {
          line: 97,
          column: 77
        }
      },
      "54": {
        start: {
          line: 97,
          column: 55
        },
        end: {
          line: 97,
          column: 68
        }
      },
      "55": {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 99,
          column: 88
        }
      },
      "56": {
        start: {
          line: 102,
          column: 8
        },
        end: {
          line: 103,
          column: 34
        }
      },
      "57": {
        start: {
          line: 103,
          column: 12
        },
        end: {
          line: 103,
          column: 34
        }
      },
      "58": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 105,
          column: 34
        }
      },
      "59": {
        start: {
          line: 105,
          column: 12
        },
        end: {
          line: 105,
          column: 34
        }
      },
      "60": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 106,
          column: 31
        }
      },
      "61": {
        start: {
          line: 108,
          column: 28
        },
        end: {
          line: 112,
          column: 5
        }
      },
      "62": {
        start: {
          line: 108,
          column: 34
        },
        end: {
          line: 112,
          column: 5
        }
      },
      "63": {
        start: {
          line: 114,
          column: 0
        },
        end: {
          line: 122,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        loc: {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        loc: {
          start: {
            line: 31,
            column: 22
          },
          end: {
            line: 47,
            column: 5
          }
        },
        line: 31
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 34,
            column: 18
          },
          end: {
            line: 34,
            column: 19
          }
        },
        loc: {
          start: {
            line: 34,
            column: 28
          },
          end: {
            line: 40,
            column: 13
          }
        },
        line: 34
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 41,
            column: 20
          }
        },
        loc: {
          start: {
            line: 41,
            column: 25
          },
          end: {
            line: 45,
            column: 13
          }
        },
        line: 41
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 5
          }
        },
        loc: {
          start: {
            line: 48,
            column: 24
          },
          end: {
            line: 50,
            column: 5
          }
        },
        line: 48
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 49,
            column: 57
          },
          end: {
            line: 49,
            column: 58
          }
        },
        loc: {
          start: {
            line: 49,
            column: 62
          },
          end: {
            line: 49,
            column: 73
          }
        },
        line: 49
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 49,
            column: 82
          },
          end: {
            line: 49,
            column: 83
          }
        },
        loc: {
          start: {
            line: 49,
            column: 87
          },
          end: {
            line: 49,
            column: 90
          }
        },
        line: 49
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        loc: {
          start: {
            line: 51,
            column: 14
          },
          end: {
            line: 66,
            column: 5
          }
        },
        line: 51
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 55,
            column: 41
          },
          end: {
            line: 55,
            column: 42
          }
        },
        loc: {
          start: {
            line: 55,
            column: 46
          },
          end: {
            line: 57,
            column: 69
          }
        },
        line: 55
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 60,
            column: 41
          },
          end: {
            line: 60,
            column: 42
          }
        },
        loc: {
          start: {
            line: 60,
            column: 46
          },
          end: {
            line: 60,
            column: 88
          }
        },
        line: 60
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 63,
            column: 41
          },
          end: {
            line: 63,
            column: 42
          }
        },
        loc: {
          start: {
            line: 63,
            column: 46
          },
          end: {
            line: 63,
            column: 60
          }
        },
        line: 63
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        loc: {
          start: {
            line: 67,
            column: 21
          },
          end: {
            line: 72,
            column: 5
          }
        },
        line: 67
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 5
          }
        },
        loc: {
          start: {
            line: 73,
            column: 23
          },
          end: {
            line: 95,
            column: 5
          }
        },
        line: 73
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 81,
            column: 16
          },
          end: {
            line: 81,
            column: 17
          }
        },
        loc: {
          start: {
            line: 81,
            column: 26
          },
          end: {
            line: 94,
            column: 9
          }
        },
        line: 81
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 84,
            column: 26
          },
          end: {
            line: 84,
            column: 27
          }
        },
        loc: {
          start: {
            line: 84,
            column: 32
          },
          end: {
            line: 90,
            column: 21
          }
        },
        line: 84
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 85,
            column: 63
          },
          end: {
            line: 85,
            column: 64
          }
        },
        loc: {
          start: {
            line: 85,
            column: 68
          },
          end: {
            line: 85,
            column: 104
          }
        },
        line: 85
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 91,
            column: 27
          },
          end: {
            line: 91,
            column: 28
          }
        },
        loc: {
          start: {
            line: 91,
            column: 33
          },
          end: {
            line: 91,
            column: 95
          }
        },
        line: 91
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 5
          }
        },
        loc: {
          start: {
            line: 96,
            column: 23
          },
          end: {
            line: 96,
            column: 84
          }
        },
        line: 96
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 96,
            column: 54
          },
          end: {
            line: 96,
            column: 55
          }
        },
        loc: {
          start: {
            line: 96,
            column: 59
          },
          end: {
            line: 96,
            column: 73
          }
        },
        line: 96
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 5
          }
        },
        loc: {
          start: {
            line: 97,
            column: 19
          },
          end: {
            line: 97,
            column: 79
          }
        },
        line: 97
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 97,
            column: 50
          },
          end: {
            line: 97,
            column: 51
          }
        },
        loc: {
          start: {
            line: 97,
            column: 55
          },
          end: {
            line: 97,
            column: 68
          }
        },
        line: 97
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        },
        loc: {
          start: {
            line: 98,
            column: 28
          },
          end: {
            line: 100,
            column: 5
          }
        },
        line: 98
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 5
          }
        },
        loc: {
          start: {
            line: 101,
            column: 25
          },
          end: {
            line: 107,
            column: 5
          }
        },
        line: 101
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 108,
            column: 28
          },
          end: {
            line: 108,
            column: 29
          }
        },
        loc: {
          start: {
            line: 108,
            column: 34
          },
          end: {
            line: 112,
            column: 5
          }
        },
        line: 108
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 58,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 58,
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
        line: 54
      },
      "1": {
        loc: {
          start: {
            line: 55,
            column: 46
          },
          end: {
            line: 57,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 55,
            column: 46
          },
          end: {
            line: 55,
            column: 84
          }
        }, {
          start: {
            line: 56,
            column: 17
          },
          end: {
            line: 56,
            column: 61
          }
        }, {
          start: {
            line: 56,
            column: 65
          },
          end: {
            line: 56,
            column: 70
          }
        }, {
          start: {
            line: 57,
            column: 17
          },
          end: {
            line: 57,
            column: 59
          }
        }, {
          start: {
            line: 57,
            column: 63
          },
          end: {
            line: 57,
            column: 68
          }
        }],
        line: 55
      },
      "2": {
        loc: {
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 61,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 61,
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
        line: 59
      },
      "3": {
        loc: {
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 64,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 64,
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
        line: 62
      },
      "4": {
        loc: {
          start: {
            line: 82,
            column: 12
          },
          end: {
            line: 93,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 12
          },
          end: {
            line: 93,
            column: 13
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
        line: 82
      },
      "5": {
        loc: {
          start: {
            line: 99,
            column: 18
          },
          end: {
            line: 99,
            column: 86
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 99,
            column: 18
          },
          end: {
            line: 99,
            column: 36
          }
        }, {
          start: {
            line: 99,
            column: 40
          },
          end: {
            line: 99,
            column: 66
          }
        }, {
          start: {
            line: 99,
            column: 70
          },
          end: {
            line: 99,
            column: 86
          }
        }],
        line: 99
      },
      "6": {
        loc: {
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 103,
            column: 34
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 103,
            column: 34
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
        line: 102
      },
      "7": {
        loc: {
          start: {
            line: 104,
            column: 8
          },
          end: {
            line: 105,
            column: 34
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 104,
            column: 8
          },
          end: {
            line: 105,
            column: 34
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
        line: 104
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
      "63": 0
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
      "22": 0,
      "23": 0,
      "24": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0],
      "6": [0, 0],
      "7": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "lista-productos.component.js",
      sourceRoot: "",
      sources: ["lista-productos.component.ts"],
      names: [],
      mappings: ";;;AACA,OAAO,EAAE,SAAS,EAAU,iBAAiB,EAAE,MAAM,eAAe,CAAC;AACrE,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAC/C,OAAO,EAAE,UAAU,EAAE,MAAM,iBAAiB,CAAC;AAC7C,OAAO,EAAE,WAAW,EAAE,MAAM,gBAAgB,CAAC;AAC7C,OAAO,IAAI,MAAM,aAAa,CAAC;AAC/B,OAAO,EAAE,eAAe,EAAE,MAAM,yCAAyC,CAAC;AAE1E,OAAO,EAAE,WAAW,EAAE,MAAM,qCAAqC,CAAC;AAS3D,IAAM,uBAAuB,GAA7B,MAAM,uBAAuB;IAWxB;IACA;IACD;IAXT,SAAS,GAAe,EAAE,CAAC;IAC3B,kBAAkB,GAAe,EAAE,CAAC;IACpC,QAAQ,GAAG,IAAI,CAAC;IAChB,aAAa,GAAG,EAAE,CAAC;IACnB,qBAAqB,GAAG,EAAE,CAAC;IAC3B,WAAW,GAAG,KAAK,CAAC;IACpB,UAAU,GAAa,EAAE,CAAC;IAE1B,YACU,eAAgC,EAChC,GAAsB,EACvB,WAAwB,CAAG,gCAAgC;;QAF1D,oBAAe,GAAf,eAAe,CAAiB;QAChC,QAAG,GAAH,GAAG,CAAmB;QACvB,gBAAW,GAAX,WAAW,CAAa;IAC9B,CAAC;IAEJ,QAAQ;QACN,IAAI,CAAC,eAAe,EAAE,CAAC;IACzB,CAAC;IAED,eAAe;QACb,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC;QACrB,IAAI,CAAC,eAAe,CAAC,WAAW,EAAE,CAAC,SAAS,CAAC;YAC3C,IAAI,EAAE,CAAC,IAAI,EAAE,EAAE;gBACb,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC;gBACtB,IAAI,CAAC,iBAAiB,EAAE,CAAC;gBACzB,IAAI,CAAC,OAAO,EAAE,CAAC;gBACf,IAAI,CAAC,QAAQ,GAAG,KAAK,CAAC;gBACtB,IAAI,CAAC,GAAG,CAAC,aAAa,EAAE,CAAC;YAC3B,CAAC;YACD,KAAK,EAAE,GAAG,EAAE;gBACV,IAAI,CAAC,QAAQ,GAAG,KAAK,CAAC;gBACtB,IAAI,CAAC,GAAG,CAAC,aAAa,EAAE,CAAC;gBACzB,IAAI,CAAC,IAAI,CAAC,OAAO,EAAE,8FAA8F,EAAE,OAAO,CAAC,CAAC;YAC9H,CAAC;SACF,CAAC,CAAC;IACL,CAAC;IAEO,iBAAiB;QACvB,IAAI,CAAC,UAAU,GAAG,CAAC,GAAG,IAAI,GAAG,CAC3B,IAAI,CAAC,SAAS,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,SAAS,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAa,CAClE,CAAC,CAAC,IAAI,EAAE,CAAC;IACZ,CAAC;IAED,OAAO;QACL,IAAI,SAAS,GAAG,CAAC,GAAG,IAAI,CAAC,SAAS,CAAC,CAAC;QACpC,MAAM,KAAK,GAAG,IAAI,CAAC,aAAa,CAAC,WAAW,EAAE,CAAC,IAAI,EAAE,CAAC;QACtD,IAAI,KAAK,EAAE,CAAC;YACV,SAAS,GAAG,SAAS,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAC/B,CAAC,CAAC,MAAM,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,KAAK,CAAC;gBACtC,CAAC,CAAC,CAAC,WAAW,EAAE,WAAW,EAAE,CAAC,QAAQ,CAAC,KAAK,CAAC,IAAI,KAAK,CAAC;gBACvD,CAAC,CAAC,CAAC,SAAS,EAAE,WAAW,EAAE,CAAC,QAAQ,CAAC,KAAK,CAAC,IAAI,KAAK,CAAC,CACtD,CAAC;QACJ,CAAC;QACD,IAAI,IAAI,CAAC,qBAAqB,EAAE,CAAC;YAC/B,SAAS,GAAG,SAAS,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,SAAS,KAAK,IAAI,CAAC,qBAAqB,CAAC,CAAC;QAChF,CAAC;QACD,IAAI,IAAI,CAAC,WAAW,EAAE,CAAC;YACrB,SAAS,GAAG,SAAS,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,KAAK,CAAC,CAAC,CAAC;QACpD,CAAC;QACD,IAAI,CAAC,kBAAkB,GAAG,SAAS,CAAC;IACtC,CAAC;IAED,cAAc;QACZ,IAAI,CAAC,aAAa,GAAG,EAAE,CAAC;QACxB,IAAI,CAAC,qBAAqB,GAAG,EAAE,CAAC;QAChC,IAAI,CAAC,WAAW,GAAG,KAAK,CAAC;QACzB,IAAI,CAAC,OAAO,EAAE,CAAC;IACjB,CAAC;IAED,QAAQ,CAAC,QAAkB;QACzB,IAAI,CAAC,IAAI,CAAC;YACR,KAAK,EAAE,qBAAqB;YAC5B,IAAI,EAAE,wBAAwB,QAAQ,CAAC,MAAM,iDAAiD;YAC9F,IAAI,EAAE,SAAS;YACf,gBAAgB,EAAE,IAAI;YACtB,iBAAiB,EAAE,cAAc;YACjC,gBAAgB,EAAE,UAAU;SAC7B,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE;YACf,IAAI,MAAM,CAAC,WAAW,EAAE,CAAC;gBACvB,IAAI,CAAC,eAAe,CAAC,QAAQ,CAAC,QAAQ,CAAC,UAAW,CAAC,CAAC,SAAS,CAAC;oBAC5D,IAAI,EAAE,GAAG,EAAE;wBACT,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,UAAU,KAAK,QAAQ,CAAC,UAAU,CAAC,CAAC;wBAClF,IAAI,CAAC,iBAAiB,EAAE,CAAC;wBACzB,IAAI,CAAC,OAAO,EAAE,CAAC;wBACf,IAAI,CAAC,GAAG,CAAC,aAAa,EAAE,CAAC;wBACzB,IAAI,CAAC,IAAI,CAAC,WAAW,EAAE,kCAAkC,EAAE,SAAS,CAAC,CAAC;oBACxE,CAAC;oBACD,KAAK,EAAE,GAAG,EAAE,CAAC,IAAI,CAAC,IAAI,CAAC,OAAO,EAAE,iCAAiC,EAAE,OAAO,CAAC;iBAC5E,CAAC,CAAC;YACL,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IAED,IAAI,YAAY,KAAa,OAAO,IAAI,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,KAAK,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC;IACxF,IAAI,QAAQ,KAAkB,OAAO,IAAI,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC;IACxF,IAAI,iBAAiB;QACnB,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,aAAa,IAAI,IAAI,CAAC,qBAAqB,IAAI,IAAI,CAAC,WAAW,CAAC,CAAC;IAClF,CAAC;IAED,aAAa,CAAC,KAAa;QACzB,IAAI,KAAK,KAAK,CAAC;YAAE,OAAO,cAAc,CAAC;QACvC,IAAI,KAAK,GAAG,CAAC;YAAG,OAAO,cAAc,CAAC;QACtC,OAAO,eAAe,CAAC;IACzB,CAAC;;;;;;;AAxGU,uBAAuB;IAPnC,SAAS,CAAC;QACT,QAAQ,EAAE,qBAAqB;QAC/B,UAAU,EAAE,IAAI;QAChB,OAAO,EAAE,CAAC,YAAY,EAAE,UAAU,EAAE,WAAW,CAAC;QAChD,8BAA+C;;KAEhD,CAAC;GACW,uBAAuB,CAyGnC",
      sourcesContent: ["\r\nimport { Component, OnInit, ChangeDetectorRef } from '@angular/core';\r\nimport { CommonModule } from '@angular/common';\r\nimport { RouterLink } from '@angular/router';\r\nimport { FormsModule } from '@angular/forms';\r\nimport Swal from 'sweetalert2';\r\nimport { ProductoService } from '../../../core/services/producto.service';\r\nimport { Producto } from '../../../models/producto.model';\r\nimport { AuthService } from '../../../core/services/auth.service';\r\n\r\n@Component({\r\n  selector: 'app-lista-productos',\r\n  standalone: true,\r\n  imports: [CommonModule, RouterLink, FormsModule],\r\n  templateUrl: './lista-productos.component.html',\r\n  styleUrls: ['./lista-productos.component.scss']\r\n})\r\nexport class ListaProductosComponent implements OnInit {\r\n\r\n  productos: Producto[] = [];\r\n  productosFiltrados: Producto[] = [];\r\n  cargando = true;\r\n  textoBusqueda = '';\r\n  categoriaSeleccionada = '';\r\n  soloActivos = false;\r\n  categorias: string[] = [];\r\n\r\n  constructor(\r\n    private productoService: ProductoService,\r\n    private cdr: ChangeDetectorRef,\r\n    public authService: AuthService   // public para usarlo en el HTML\r\n  ) {}\r\n\r\n  ngOnInit(): void {\r\n    this.cargarProductos();\r\n  }\r\n\r\n  cargarProductos(): void {\r\n    this.cargando = true;\r\n    this.productoService.listarTodos().subscribe({\r\n      next: (data) => {\r\n        this.productos = data;\r\n        this.extraerCategorias();\r\n        this.filtrar();\r\n        this.cargando = false;\r\n        this.cdr.detectChanges();\r\n      },\r\n      error: () => {\r\n        this.cargando = false;\r\n        this.cdr.detectChanges();\r\n        Swal.fire('Error', 'No se pudieron cargar los productos. Verifica que ms-productos (puerto 8082) est\xE9 corriendo.', 'error');\r\n      }\r\n    });\r\n  }\r\n\r\n  private extraerCategorias(): void {\r\n    this.categorias = [...new Set(\r\n      this.productos.map(p => p.categoria).filter(c => !!c) as string[]\r\n    )].sort();\r\n  }\r\n\r\n  filtrar(): void {\r\n    let resultado = [...this.productos];\r\n    const texto = this.textoBusqueda.toLowerCase().trim();\r\n    if (texto) {\r\n      resultado = resultado.filter(p =>\r\n        p.nombre.toLowerCase().includes(texto) ||\r\n        (p.descripcion?.toLowerCase().includes(texto) ?? false) ||\r\n        (p.categoria?.toLowerCase().includes(texto) ?? false)\r\n      );\r\n    }\r\n    if (this.categoriaSeleccionada) {\r\n      resultado = resultado.filter(p => p.categoria === this.categoriaSeleccionada);\r\n    }\r\n    if (this.soloActivos) {\r\n      resultado = resultado.filter(p => p.activo === 1);\r\n    }\r\n    this.productosFiltrados = resultado;\r\n  }\r\n\r\n  limpiarFiltros(): void {\r\n    this.textoBusqueda = '';\r\n    this.categoriaSeleccionada = '';\r\n    this.soloActivos = false;\r\n    this.filtrar();\r\n  }\r\n\r\n  eliminar(producto: Producto): void {\r\n    Swal.fire({\r\n      title: '\xBFEliminar producto?',\r\n      html: `Se eliminar\xE1 <strong>${producto.nombre}</strong>.<br>Esta acci\xF3n no se puede deshacer.`,\r\n      icon: 'warning',\r\n      showCancelButton: true,\r\n      confirmButtonText: 'S\xED, eliminar',\r\n      cancelButtonText: 'Cancelar',\r\n    }).then(result => {\r\n      if (result.isConfirmed) {\r\n        this.productoService.eliminar(producto.idProducto!).subscribe({\r\n          next: () => {\r\n            this.productos = this.productos.filter(p => p.idProducto !== producto.idProducto);\r\n            this.extraerCategorias();\r\n            this.filtrar();\r\n            this.cdr.detectChanges();\r\n            Swal.fire('Eliminado', 'Producto eliminado correctamente', 'success');\r\n          },\r\n          error: () => Swal.fire('Error', 'No se pudo eliminar el producto', 'error')\r\n        });\r\n      }\r\n    });\r\n  }\r\n\r\n  get totalActivos(): number { return this.productos.filter(p => p.activo === 1).length; }\r\n  get sinStock(): number      { return this.productos.filter(p => p.stock === 0).length; }\r\n  get hayFiltrosActivos(): boolean {\r\n    return !!(this.textoBusqueda || this.categoriaSeleccionada || this.soloActivos);\r\n  }\r\n\r\n  getStockClass(stock: number): string {\r\n    if (stock === 0) return 'badge-danger';\r\n    if (stock < 5)  return 'badge-orange';\r\n    return 'badge-success';\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dd25649db169cadb9fcfa8bcecb320c6d9398881"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1di9snbnya = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var import_sweetalert2, ListaProductosComponent;
var init_lista_productos_component3 = __esm({
  "src/app/pages/productos/lista-productos/lista-productos.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_lista_productos_component();
    init_lista_productos_component2();
    init_core();
    init_common();
    init_router();
    init_forms();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    init_producto_service();
    init_auth_service();
    cov_1di9snbnya();
    cov_1di9snbnya().s[0]++;
    ListaProductosComponent = class ListaProductosComponent2 {
      productoService;
      cdr;
      authService;
      productos = (cov_1di9snbnya().s[1]++, []);
      productosFiltrados = (cov_1di9snbnya().s[2]++, []);
      cargando = (cov_1di9snbnya().s[3]++, true);
      textoBusqueda = (cov_1di9snbnya().s[4]++, "");
      categoriaSeleccionada = (cov_1di9snbnya().s[5]++, "");
      soloActivos = (cov_1di9snbnya().s[6]++, false);
      categorias = (cov_1di9snbnya().s[7]++, []);
      constructor(productoService, cdr, authService) {
        cov_1di9snbnya().f[0]++;
        cov_1di9snbnya().s[8]++;
        this.productoService = productoService;
        cov_1di9snbnya().s[9]++;
        this.cdr = cdr;
        cov_1di9snbnya().s[10]++;
        this.authService = authService;
      }
      ngOnInit() {
        cov_1di9snbnya().f[1]++;
        cov_1di9snbnya().s[11]++;
        this.cargarProductos();
      }
      cargarProductos() {
        cov_1di9snbnya().f[2]++;
        cov_1di9snbnya().s[12]++;
        this.cargando = true;
        cov_1di9snbnya().s[13]++;
        this.productoService.listarTodos().subscribe({
          next: (data) => {
            cov_1di9snbnya().f[3]++;
            cov_1di9snbnya().s[14]++;
            this.productos = data;
            cov_1di9snbnya().s[15]++;
            this.extraerCategorias();
            cov_1di9snbnya().s[16]++;
            this.filtrar();
            cov_1di9snbnya().s[17]++;
            this.cargando = false;
            cov_1di9snbnya().s[18]++;
            this.cdr.detectChanges();
          },
          error: () => {
            cov_1di9snbnya().f[4]++;
            cov_1di9snbnya().s[19]++;
            this.cargando = false;
            cov_1di9snbnya().s[20]++;
            this.cdr.detectChanges();
            cov_1di9snbnya().s[21]++;
            import_sweetalert2.default.fire("Error", "No se pudieron cargar los productos. Verifica que ms-productos (puerto 8082) est\xE9 corriendo.", "error");
          }
        });
      }
      extraerCategorias() {
        cov_1di9snbnya().f[5]++;
        cov_1di9snbnya().s[22]++;
        this.categorias = [...new Set(this.productos.map((p) => {
          cov_1di9snbnya().f[6]++;
          cov_1di9snbnya().s[23]++;
          return p.categoria;
        }).filter((c) => {
          cov_1di9snbnya().f[7]++;
          cov_1di9snbnya().s[24]++;
          return !!c;
        }))].sort();
      }
      filtrar() {
        cov_1di9snbnya().f[8]++;
        let resultado = (cov_1di9snbnya().s[25]++, [...this.productos]);
        const texto = (cov_1di9snbnya().s[26]++, this.textoBusqueda.toLowerCase().trim());
        cov_1di9snbnya().s[27]++;
        if (texto) {
          cov_1di9snbnya().b[0][0]++;
          cov_1di9snbnya().s[28]++;
          resultado = resultado.filter((p) => {
            cov_1di9snbnya().f[9]++;
            cov_1di9snbnya().s[29]++;
            return (cov_1di9snbnya().b[1][0]++, p.nombre.toLowerCase().includes(texto)) || ((cov_1di9snbnya().b[1][1]++, p.descripcion?.toLowerCase().includes(texto)) ?? (cov_1di9snbnya().b[1][2]++, false)) || ((cov_1di9snbnya().b[1][3]++, p.categoria?.toLowerCase().includes(texto)) ?? (cov_1di9snbnya().b[1][4]++, false));
          });
        } else {
          cov_1di9snbnya().b[0][1]++;
        }
        cov_1di9snbnya().s[30]++;
        if (this.categoriaSeleccionada) {
          cov_1di9snbnya().b[2][0]++;
          cov_1di9snbnya().s[31]++;
          resultado = resultado.filter((p) => {
            cov_1di9snbnya().f[10]++;
            cov_1di9snbnya().s[32]++;
            return p.categoria === this.categoriaSeleccionada;
          });
        } else {
          cov_1di9snbnya().b[2][1]++;
        }
        cov_1di9snbnya().s[33]++;
        if (this.soloActivos) {
          cov_1di9snbnya().b[3][0]++;
          cov_1di9snbnya().s[34]++;
          resultado = resultado.filter((p) => {
            cov_1di9snbnya().f[11]++;
            cov_1di9snbnya().s[35]++;
            return p.activo === 1;
          });
        } else {
          cov_1di9snbnya().b[3][1]++;
        }
        cov_1di9snbnya().s[36]++;
        this.productosFiltrados = resultado;
      }
      limpiarFiltros() {
        cov_1di9snbnya().f[12]++;
        cov_1di9snbnya().s[37]++;
        this.textoBusqueda = "";
        cov_1di9snbnya().s[38]++;
        this.categoriaSeleccionada = "";
        cov_1di9snbnya().s[39]++;
        this.soloActivos = false;
        cov_1di9snbnya().s[40]++;
        this.filtrar();
      }
      eliminar(producto) {
        cov_1di9snbnya().f[13]++;
        cov_1di9snbnya().s[41]++;
        import_sweetalert2.default.fire({
          title: "\xBFEliminar producto?",
          html: `Se eliminar\xE1 <strong>${producto.nombre}</strong>.<br>Esta acci\xF3n no se puede deshacer.`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "S\xED, eliminar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          cov_1di9snbnya().f[14]++;
          cov_1di9snbnya().s[42]++;
          if (result.isConfirmed) {
            cov_1di9snbnya().b[4][0]++;
            cov_1di9snbnya().s[43]++;
            this.productoService.eliminar(producto.idProducto).subscribe({
              next: () => {
                cov_1di9snbnya().f[15]++;
                cov_1di9snbnya().s[44]++;
                this.productos = this.productos.filter((p) => {
                  cov_1di9snbnya().f[16]++;
                  cov_1di9snbnya().s[45]++;
                  return p.idProducto !== producto.idProducto;
                });
                cov_1di9snbnya().s[46]++;
                this.extraerCategorias();
                cov_1di9snbnya().s[47]++;
                this.filtrar();
                cov_1di9snbnya().s[48]++;
                this.cdr.detectChanges();
                cov_1di9snbnya().s[49]++;
                import_sweetalert2.default.fire("Eliminado", "Producto eliminado correctamente", "success");
              },
              error: () => {
                cov_1di9snbnya().f[17]++;
                cov_1di9snbnya().s[50]++;
                return import_sweetalert2.default.fire("Error", "No se pudo eliminar el producto", "error");
              }
            });
          } else {
            cov_1di9snbnya().b[4][1]++;
          }
        });
      }
      get totalActivos() {
        cov_1di9snbnya().f[18]++;
        cov_1di9snbnya().s[51]++;
        return this.productos.filter((p) => {
          cov_1di9snbnya().f[19]++;
          cov_1di9snbnya().s[52]++;
          return p.activo === 1;
        }).length;
      }
      get sinStock() {
        cov_1di9snbnya().f[20]++;
        cov_1di9snbnya().s[53]++;
        return this.productos.filter((p) => {
          cov_1di9snbnya().f[21]++;
          cov_1di9snbnya().s[54]++;
          return p.stock === 0;
        }).length;
      }
      get hayFiltrosActivos() {
        cov_1di9snbnya().f[22]++;
        cov_1di9snbnya().s[55]++;
        return !!((cov_1di9snbnya().b[5][0]++, this.textoBusqueda) || (cov_1di9snbnya().b[5][1]++, this.categoriaSeleccionada) || (cov_1di9snbnya().b[5][2]++, this.soloActivos));
      }
      getStockClass(stock) {
        cov_1di9snbnya().f[23]++;
        cov_1di9snbnya().s[56]++;
        if (stock === 0) {
          cov_1di9snbnya().b[6][0]++;
          cov_1di9snbnya().s[57]++;
          return "badge-danger";
        } else {
          cov_1di9snbnya().b[6][1]++;
        }
        cov_1di9snbnya().s[58]++;
        if (stock < 5) {
          cov_1di9snbnya().b[7][0]++;
          cov_1di9snbnya().s[59]++;
          return "badge-orange";
        } else {
          cov_1di9snbnya().b[7][1]++;
        }
        cov_1di9snbnya().s[60]++;
        return "badge-success";
      }
      static ctorParameters = (cov_1di9snbnya().s[61]++, () => {
        cov_1di9snbnya().f[24]++;
        cov_1di9snbnya().s[62]++;
        return [{
          type: ProductoService
        }, {
          type: ChangeDetectorRef
        }, {
          type: AuthService
        }];
      });
    };
    cov_1di9snbnya().s[63]++;
    ListaProductosComponent = __decorate([Component({
      selector: "app-lista-productos",
      standalone: true,
      imports: [CommonModule, RouterLink, FormsModule],
      template: lista_productos_component_default,
      styles: [lista_productos_component_default2]
    })], ListaProductosComponent);
  }
});

// src/app/pages/productos/lista-productos/lista-productos.component.spec.ts
var require_lista_productos_component_spec = __commonJS({
  "src/app/pages/productos/lista-productos/lista-productos.component.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_forms();
    init_esm();
    init_lista_productos_component3();
    init_producto_service();
    init_auth_service();
    describe("ListaProductosComponent", () => {
      let component;
      let fixture;
      let productoServiceSpy;
      let authServiceSpy;
      const mockSesion = {
        mensaje: "OK",
        idUsuario: 1,
        nombre: "Admin",
        rol: "ADMIN"
      };
      const mockProductos = [
        { idProducto: 1, nombre: "Laptop Gamer", descripcion: "Laptop top", precio: 15e5, stock: 10, categoria: "Electr\xF3nica", activo: 1 },
        { idProducto: 2, nombre: "Mouse Inal\xE1mbrico", descripcion: "Mouse err.", precio: 25e3, stock: 0, categoria: "Electr\xF3nica", activo: 1 },
        { idProducto: 3, nombre: "Polera Deportiva", descripcion: "Ropa c\xF3moda", precio: 15e3, stock: 30, categoria: "Ropa", activo: 0 },
        { idProducto: 4, nombre: "Teclado Mec\xE1nico", precio: 8e4, stock: 5, activo: 1 }
      ];
      beforeEach(() => __async(null, null, function* () {
        productoServiceSpy = jasmine.createSpyObj("ProductoService", ["listarTodos", "eliminar"]);
        productoServiceSpy.listarTodos.and.returnValue(of(mockProductos));
        authServiceSpy = jasmine.createSpyObj("AuthService", ["isAdmin", "getSesion", "isLoggedIn"]);
        authServiceSpy.isAdmin.and.returnValue(true);
        authServiceSpy.getSesion.and.returnValue(mockSesion);
        yield TestBed.configureTestingModule({
          imports: [ListaProductosComponent, RouterTestingModule, FormsModule],
          providers: [
            { provide: ProductoService, useValue: productoServiceSpy },
            { provide: AuthService, useValue: authServiceSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(ListaProductosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar productos al inicializar", () => {
        expect(productoServiceSpy.listarTodos).toHaveBeenCalled();
        expect(component.productos.length).toBe(4);
      });
      it("deber\xEDa poner cargando en false despu\xE9s de cargar", () => {
        expect(component.cargando).toBeFalse();
      });
      it("deber\xEDa extraer categor\xEDas \xFAnicas de los productos", () => {
        expect(component.categorias).toContain("Electr\xF3nica");
        expect(component.categorias).toContain("Ropa");
        expect(component.categorias.length).toBe(2);
      });
      it("deber\xEDa calcular correctamente el total de productos activos", () => {
        expect(component.totalActivos).toBe(3);
      });
      it("deber\xEDa calcular correctamente los productos sin stock", () => {
        expect(component.sinStock).toBe(1);
      });
      it("deber\xEDa filtrar por nombre correctamente", () => {
        component.textoBusqueda = "laptop";
        component.filtrar();
        expect(component.productosFiltrados.length).toBe(1);
        expect(component.productosFiltrados[0].nombre).toBe("Laptop Gamer");
      });
      it("deber\xEDa filtrar por descripci\xF3n correctamente", () => {
        component.textoBusqueda = "Laptop top";
        component.filtrar();
        expect(component.productosFiltrados.length).toBe(1);
      });
      it("deber\xEDa filtrar por categor\xEDa con el select", () => {
        component.categoriaSeleccionada = "Ropa";
        component.filtrar();
        expect(component.productosFiltrados.length).toBe(1);
        expect(component.productosFiltrados[0].nombre).toBe("Polera Deportiva");
      });
      it("deber\xEDa filtrar por estado activo", () => {
        component.soloActivos = true;
        component.filtrar();
        expect(component.productosFiltrados.every((p) => p.activo === 1)).toBeTrue();
      });
      it("deber\xEDa limpiar todos los filtros correctamente", () => {
        component.textoBusqueda = "test";
        component.categoriaSeleccionada = "Ropa";
        component.soloActivos = true;
        component.limpiarFiltros();
        expect(component.textoBusqueda).toBe("");
        expect(component.categoriaSeleccionada).toBe("");
        expect(component.soloActivos).toBeFalse();
        expect(component.productosFiltrados.length).toBe(4);
      });
      it("deber\xEDa reportar hayFiltrosActivos = true cuando hay filtros", () => {
        component.textoBusqueda = "test";
        expect(component.hayFiltrosActivos).toBeTrue();
      });
      it("deber\xEDa reportar hayFiltrosActivos = false sin filtros", () => {
        component.textoBusqueda = "";
        component.categoriaSeleccionada = "";
        component.soloActivos = false;
        expect(component.hayFiltrosActivos).toBeFalse();
      });
      it("deber\xEDa retornar badge-danger para stock 0", () => {
        expect(component.getStockClass(0)).toBe("badge-danger");
      });
      it("deber\xEDa retornar badge-orange para stock menor a 5", () => {
        expect(component.getStockClass(3)).toBe("badge-orange");
      });
      it("deber\xEDa retornar badge-success para stock normal", () => {
        expect(component.getStockClass(10)).toBe("badge-success");
      });
      it("deber\xEDa manejar error al cargar productos", () => {
        productoServiceSpy.listarTodos.and.returnValue(throwError(() => new Error("Error de red")));
        component.cargarProductos();
        expect(component.cargando).toBeFalse();
      });
      it("deber\xEDa combinar filtros de texto y categor\xEDa", () => {
        component.textoBusqueda = "mouse";
        component.categoriaSeleccionada = "Electr\xF3nica";
        component.filtrar();
        expect(component.productosFiltrados.length).toBe(1);
        expect(component.productosFiltrados[0].nombre).toBe("Mouse Inal\xE1mbrico");
      });
    });
  }
});
export default require_lista_productos_component_spec();
//# sourceMappingURL=spec-app-pages-productos-lista-productos-lista-productos.component.spec.js.map
