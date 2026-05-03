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
  RouterLink,
  init_router
} from "./chunk-45UUSLVD.js";
import {
  CommonModule,
  init_common
} from "./chunk-QT67HBTK.js";
import {
  UsuarioService,
  init_usuario_service
} from "./chunk-ZAFUMGS2.js";
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
  __spreadProps,
  __spreadValues,
  __toESM,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  throwError
} from "./chunk-X225SWGN.js";

// angular:jit:template:src\app\pages\usuarios\lista-usuarios\lista-usuarios.component.html
var lista_usuarios_component_default;
var init_lista_usuarios_component = __esm({
  "angular:jit:template:src\\app\\pages\\usuarios\\lista-usuarios\\lista-usuarios.component.html"() {
    lista_usuarios_component_default = `\r
<div class="page-container fade-in">\r
\r
  <!-- \u2500\u2500 ENCABEZADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">Gesti\xF3n de <span>Usuarios</span></h1>\r
      <p class="page-subtitle">\r
        {{ usuarios.length }} registros \xB7\r
        <span class="badge badge-success">{{ totalActivos }} activos</span>\r
        <span class="badge badge-danger" style="margin-left:4px">{{ totalInactivos }} inactivos</span>\r
      </p>\r
    </div>\r
    <a routerLink="/usuarios/nuevo" class="btn-primary-custom">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
      </svg>\r
      Nuevo usuario\r
    </a>\r
  </div>\r
\r
  <!-- \u2500\u2500 BARRA DE B\xDASQUEDA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="toolbar">\r
    <div class="search-wrapper">\r
      <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>\r
      </svg>\r
      <input\r
        type="text"\r
        placeholder="Buscar por nombre, correo o rol..."\r
        [(ngModel)]="textoBusqueda"\r
        (input)="filtrar()"\r
      >\r
    </div>\r
    <span class="results-count" *ngIf="textoBusqueda">\r
      {{ usuariosFiltrados.length }} resultado(s)\r
    </span>\r
  </div>\r
\r
  <!-- \u2500\u2500 LOADING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="loading-container" *ngIf="cargando">\r
    <div class="spinner"></div>\r
    <p>Cargando usuarios...</p>\r
  </div>\r
\r
  <!-- \u2500\u2500 TABLA DE USUARIOS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="table-container" *ngIf="!cargando">\r
\r
    <!-- Estado vac\xEDo -->\r
    <div class="empty-state" *ngIf="usuariosFiltrados.length === 0">\r
      <div class="empty-icon">\u{1F464}</div>\r
      <h3>{{ textoBusqueda ? 'Sin resultados' : 'No hay usuarios' }}</h3>\r
      <p>{{ textoBusqueda ? 'Intenta con otro t\xE9rmino de b\xFAsqueda' : 'Crea el primer usuario con el bot\xF3n de arriba' }}</p>\r
    </div>\r
\r
    <table class="custom-table" *ngIf="usuariosFiltrados.length > 0">\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Nombre</th>\r
          <th class="hide-mobile">Correo</th>\r
          <th>Rol</th>\r
          <th>Estado</th>\r
          <th>Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let u of usuariosFiltrados">\r
\r
          <!-- ID -->\r
          <td class="td-id">#{{ u.idUsuario }}</td>\r
\r
          <!-- Nombre con avatar -->\r
          <td>\r
            <div class="user-cell">\r
              <div class="mini-avatar">{{ u.nombre.charAt(0).toUpperCase() }}</div>\r
              <span class="user-name-td">{{ u.nombre }}</span>\r
            </div>\r
          </td>\r
\r
          <!-- Correo -->\r
          <td class="hide-mobile td-email">{{ u.correo }}</td>\r
\r
          <!-- Rol -->\r
          <td>\r
            <span class="badge" [ngClass]="u.rol === 'ADMIN' ? 'badge-purple' : 'badge-blue'">\r
              {{ u.rol }}\r
            </span>\r
          </td>\r
\r
          <!-- Estado toggle -->\r
          <td>\r
            <button\r
              class="toggle-btn"\r
              [class.active]="u.activo === 1"\r
              (click)="toggleActivo(u)"\r
              [title]="u.activo === 1 ? 'Click para desactivar' : 'Click para activar'"\r
            >\r
              <span class="toggle-dot"></span>\r
              {{ u.activo === 1 ? 'Activo' : 'Inactivo' }}\r
            </button>\r
          </td>\r
\r
          <!-- Acciones -->\r
          <td>\r
            <div class="action-btns">\r
              <a [routerLink]="['/usuarios/editar', u.idUsuario]" class="btn-edit-custom">\r
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
                </svg>\r
                Editar\r
              </a>\r
              <button class="btn-danger-custom" (click)="eliminar(u)">\r
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>\r
                </svg>\r
                Eliminar\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Footer de tabla -->\r
    <div class="table-footer" *ngIf="usuariosFiltrados.length > 0">\r
      <span>Mostrando {{ usuariosFiltrados.length }} de {{ usuarios.length }} usuarios</span>\r
      <span>Solo rol ADMIN puede ver esta secci\xF3n</span>\r
    </div>\r
  </div>\r
\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\usuarios\lista-usuarios\lista-usuarios.component.scss
var lista_usuarios_component_default2;
var init_lista_usuarios_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\usuarios\\lista-usuarios\\lista-usuarios.component.scss"() {
    lista_usuarios_component_default2 = '@charset "UTF-8";\n\n/* src/app/pages/usuarios/lista-usuarios/lista-usuarios.component.scss */\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n}\n.results-count {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.mini-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-blue),\n      var(--accent-purple));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-weight: 800;\n  font-size: 0.75rem;\n  color: white;\n  flex-shrink: 0;\n}\n.user-name-td {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.td-id {\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.td-email {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.25rem 0.6rem;\n  border-radius: 50px;\n  border: 1px solid rgba(255, 77, 109, 0.3);\n  background: rgba(255, 77, 109, 0.1);\n  color: var(--accent-red);\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-family: var(--font-display);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.toggle-btn.active {\n  border-color: rgba(0, 229, 160, 0.3);\n  background: rgba(0, 229, 160, 0.1);\n  color: var(--accent-green);\n}\n.toggle-btn:hover {\n  opacity: 0.8;\n  transform: scale(0.97);\n}\n.toggle-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.action-btns {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .hide-mobile {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=lista-usuarios.component.css.map */\n';
  }
});

// src/app/pages/usuarios/lista-usuarios/lista-usuarios.component.ts
function cov_jxnzkcwt() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\usuarios\\lista-usuarios\\lista-usuarios.component.ts";
  var hash = "2c898abdeb586ae8034dfaf93081f605b3987f23";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\usuarios\\lista-usuarios\\lista-usuarios.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 29
        },
        end: {
          line: 108,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "2": {
        start: {
          line: 14,
          column: 24
        },
        end: {
          line: 14,
          column: 26
        }
      },
      "3": {
        start: {
          line: 15,
          column: 15
        },
        end: {
          line: 15,
          column: 19
        }
      },
      "4": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 16,
          column: 22
        }
      },
      "5": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 45
        }
      },
      "6": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 23
        }
      },
      "7": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 30
        }
      },
      "8": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 29
        }
      },
      "9": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 39,
          column: 11
        }
      },
      "10": {
        start: {
          line: 29,
          column: 16
        },
        end: {
          line: 29,
          column: 37
        }
      },
      "11": {
        start: {
          line: 30,
          column: 16
        },
        end: {
          line: 30,
          column: 51
        }
      },
      "12": {
        start: {
          line: 31,
          column: 16
        },
        end: {
          line: 31,
          column: 38
        }
      },
      "13": {
        start: {
          line: 32,
          column: 16
        },
        end: {
          line: 32,
          column: 41
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
          column: 138
        }
      },
      "17": {
        start: {
          line: 42,
          column: 22
        },
        end: {
          line: 42,
          column: 61
        }
      },
      "18": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 46,
          column: 9
        }
      },
      "19": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 44,
          column: 56
        }
      },
      "20": {
        start: {
          line: 45,
          column: 12
        },
        end: {
          line: 45,
          column: 19
        }
      },
      "21": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 49,
          column: 49
        }
      },
      "22": {
        start: {
          line: 47,
          column: 59
        },
        end: {
          line: 49,
          column: 47
        }
      },
      "23": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 74,
          column: 11
        }
      },
      "24": {
        start: {
          line: 60,
          column: 12
        },
        end: {
          line: 73,
          column: 13
        }
      },
      "25": {
        start: {
          line: 61,
          column: 16
        },
        end: {
          line: 72,
          column: 19
        }
      },
      "26": {
        start: {
          line: 63,
          column: 24
        },
        end: {
          line: 63,
          column: 101
        }
      },
      "27": {
        start: {
          line: 63,
          column: 66
        },
        end: {
          line: 63,
          column: 99
        }
      },
      "28": {
        start: {
          line: 64,
          column: 24
        },
        end: {
          line: 64,
          column: 39
        }
      },
      "29": {
        start: {
          line: 65,
          column: 24
        },
        end: {
          line: 65,
          column: 49
        }
      },
      "30": {
        start: {
          line: 66,
          column: 24
        },
        end: {
          line: 66,
          column: 100
        }
      },
      "31": {
        start: {
          line: 69,
          column: 36
        },
        end: {
          line: 69,
          column: 82
        }
      },
      "32": {
        start: {
          line: 70,
          column: 24
        },
        end: {
          line: 70,
          column: 105
        }
      },
      "33": {
        start: {
          line: 77,
          column: 28
        },
        end: {
          line: 77,
          column: 56
        }
      },
      "34": {
        start: {
          line: 78,
          column: 23
        },
        end: {
          line: 78,
          column: 67
        }
      },
      "35": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 100,
          column: 11
        }
      },
      "36": {
        start: {
          line: 86,
          column: 12
        },
        end: {
          line: 99,
          column: 13
        }
      },
      "37": {
        start: {
          line: 87,
          column: 43
        },
        end: {
          line: 87,
          column: 78
        }
      },
      "38": {
        start: {
          line: 88,
          column: 16
        },
        end: {
          line: 98,
          column: 19
        }
      },
      "39": {
        start: {
          line: 90,
          column: 36
        },
        end: {
          line: 90,
          column: 96
        }
      },
      "40": {
        start: {
          line: 90,
          column: 65
        },
        end: {
          line: 90,
          column: 95
        }
      },
      "41": {
        start: {
          line: 91,
          column: 24
        },
        end: {
          line: 92,
          column: 54
        }
      },
      "42": {
        start: {
          line: 92,
          column: 28
        },
        end: {
          line: 92,
          column: 54
        }
      },
      "43": {
        start: {
          line: 93,
          column: 24
        },
        end: {
          line: 93,
          column: 39
        }
      },
      "44": {
        start: {
          line: 94,
          column: 24
        },
        end: {
          line: 94,
          column: 49
        }
      },
      "45": {
        start: {
          line: 95,
          column: 24
        },
        end: {
          line: 95,
          column: 121
        }
      },
      "46": {
        start: {
          line: 97,
          column: 33
        },
        end: {
          line: 97,
          column: 95
        }
      },
      "47": {
        start: {
          line: 102,
          column: 25
        },
        end: {
          line: 102,
          column: 81
        }
      },
      "48": {
        start: {
          line: 102,
          column: 58
        },
        end: {
          line: 102,
          column: 72
        }
      },
      "49": {
        start: {
          line: 103,
          column: 27
        },
        end: {
          line: 103,
          column: 83
        }
      },
      "50": {
        start: {
          line: 103,
          column: 60
        },
        end: {
          line: 103,
          column: 74
        }
      },
      "51": {
        start: {
          line: 104,
          column: 28
        },
        end: {
          line: 107,
          column: 5
        }
      },
      "52": {
        start: {
          line: 104,
          column: 34
        },
        end: {
          line: 107,
          column: 5
        }
      },
      "53": {
        start: {
          line: 109,
          column: 0
        },
        end: {
          line: 117,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
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
            line: 22,
            column: 15
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        loc: {
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 28,
            column: 19
          }
        },
        loc: {
          start: {
            line: 28,
            column: 28
          },
          end: {
            line: 33,
            column: 13
          }
        },
        line: 28
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 19
          },
          end: {
            line: 34,
            column: 20
          }
        },
        loc: {
          start: {
            line: 34,
            column: 25
          },
          end: {
            line: 38,
            column: 13
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 14
          },
          end: {
            line: 50,
            column: 5
          }
        },
        line: 41
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 47,
            column: 54
          },
          end: {
            line: 47,
            column: 55
          }
        },
        loc: {
          start: {
            line: 47,
            column: 59
          },
          end: {
            line: 49,
            column: 47
          }
        },
        line: 47
      },
      "7": {
        name: "(anonymous_7)",
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
            column: 22
          },
          end: {
            line: 75,
            column: 5
          }
        },
        line: 51
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 59,
            column: 16
          },
          end: {
            line: 59,
            column: 17
          }
        },
        loc: {
          start: {
            line: 59,
            column: 26
          },
          end: {
            line: 74,
            column: 9
          }
        },
        line: 59
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 62,
            column: 26
          },
          end: {
            line: 62,
            column: 27
          }
        },
        loc: {
          start: {
            line: 62,
            column: 32
          },
          end: {
            line: 67,
            column: 21
          }
        },
        line: 62
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 63,
            column: 61
          },
          end: {
            line: 63,
            column: 62
          }
        },
        loc: {
          start: {
            line: 63,
            column: 66
          },
          end: {
            line: 63,
            column: 99
          }
        },
        line: 63
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 68,
            column: 27
          },
          end: {
            line: 68,
            column: 28
          }
        },
        loc: {
          start: {
            line: 68,
            column: 36
          },
          end: {
            line: 71,
            column: 21
          }
        },
        line: 68
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 5
          }
        },
        loc: {
          start: {
            line: 76,
            column: 26
          },
          end: {
            line: 101,
            column: 5
          }
        },
        line: 76
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 85,
            column: 16
          },
          end: {
            line: 85,
            column: 17
          }
        },
        loc: {
          start: {
            line: 85,
            column: 26
          },
          end: {
            line: 100,
            column: 9
          }
        },
        line: 85
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 89,
            column: 26
          },
          end: {
            line: 89,
            column: 27
          }
        },
        loc: {
          start: {
            line: 89,
            column: 36
          },
          end: {
            line: 96,
            column: 21
          }
        },
        line: 89
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 90,
            column: 60
          },
          end: {
            line: 90,
            column: 61
          }
        },
        loc: {
          start: {
            line: 90,
            column: 65
          },
          end: {
            line: 90,
            column: 95
          }
        },
        line: 90
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 97,
            column: 27
          },
          end: {
            line: 97,
            column: 28
          }
        },
        loc: {
          start: {
            line: 97,
            column: 33
          },
          end: {
            line: 97,
            column: 95
          }
        },
        line: 97
      },
      "17": {
        name: "(anonymous_17)",
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
            column: 23
          },
          end: {
            line: 102,
            column: 83
          }
        },
        line: 102
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 102,
            column: 53
          },
          end: {
            line: 102,
            column: 54
          }
        },
        loc: {
          start: {
            line: 102,
            column: 58
          },
          end: {
            line: 102,
            column: 72
          }
        },
        line: 102
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        loc: {
          start: {
            line: 103,
            column: 25
          },
          end: {
            line: 103,
            column: 85
          }
        },
        line: 103
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 103,
            column: 55
          },
          end: {
            line: 103,
            column: 56
          }
        },
        loc: {
          start: {
            line: 103,
            column: 60
          },
          end: {
            line: 103,
            column: 74
          }
        },
        line: 103
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 104,
            column: 28
          },
          end: {
            line: 104,
            column: 29
          }
        },
        loc: {
          start: {
            line: 104,
            column: 34
          },
          end: {
            line: 107,
            column: 5
          }
        },
        line: 104
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 43,
            column: 8
          },
          end: {
            line: 46,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 8
          },
          end: {
            line: 46,
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
        line: 43
      },
      "1": {
        loc: {
          start: {
            line: 47,
            column: 59
          },
          end: {
            line: 49,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 59
          },
          end: {
            line: 47,
            column: 97
          }
        }, {
          start: {
            line: 48,
            column: 12
          },
          end: {
            line: 48,
            column: 50
          }
        }, {
          start: {
            line: 49,
            column: 12
          },
          end: {
            line: 49,
            column: 47
          }
        }],
        line: 47
      },
      "2": {
        loc: {
          start: {
            line: 60,
            column: 12
          },
          end: {
            line: 73,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 12
          },
          end: {
            line: 73,
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
        line: 60
      },
      "3": {
        loc: {
          start: {
            line: 69,
            column: 36
          },
          end: {
            line: 69,
            column: 82
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 69,
            column: 36
          },
          end: {
            line: 69,
            column: 46
          }
        }, {
          start: {
            line: 69,
            column: 50
          },
          end: {
            line: 69,
            column: 82
          }
        }],
        line: 69
      },
      "4": {
        loc: {
          start: {
            line: 70,
            column: 43
          },
          end: {
            line: 70,
            column: 94
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 70,
            column: 69
          },
          end: {
            line: 70,
            column: 72
          }
        }, {
          start: {
            line: 70,
            column: 75
          },
          end: {
            line: 70,
            column: 94
          }
        }],
        line: 70
      },
      "5": {
        loc: {
          start: {
            line: 77,
            column: 28
          },
          end: {
            line: 77,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 77,
            column: 51
          },
          end: {
            line: 77,
            column: 52
          }
        }, {
          start: {
            line: 77,
            column: 55
          },
          end: {
            line: 77,
            column: 56
          }
        }],
        line: 77
      },
      "6": {
        loc: {
          start: {
            line: 78,
            column: 23
          },
          end: {
            line: 78,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 78,
            column: 43
          },
          end: {
            line: 78,
            column: 52
          }
        }, {
          start: {
            line: 78,
            column: 55
          },
          end: {
            line: 78,
            column: 67
          }
        }],
        line: 78
      },
      "7": {
        loc: {
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 99,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 99,
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
        line: 86
      },
      "8": {
        loc: {
          start: {
            line: 91,
            column: 24
          },
          end: {
            line: 92,
            column: 54
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 24
          },
          end: {
            line: 92,
            column: 54
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
        line: 91
      },
      "9": {
        loc: {
          start: {
            line: 95,
            column: 60
          },
          end: {
            line: 95,
            column: 106
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 95,
            column: 80
          },
          end: {
            line: 95,
            column: 90
          }
        }, {
          start: {
            line: 95,
            column: 93
          },
          end: {
            line: 95,
            column: 106
          }
        }],
        line: 95
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
      "53": 0
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
      "21": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "lista-usuarios.component.js",
      sourceRoot: "",
      sources: ["lista-usuarios.component.ts"],
      names: [],
      mappings: "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",
      sourcesContent: ["\r\nimport { Component, OnInit, ChangeDetectorRef } from '@angular/core';\r\nimport { CommonModule } from '@angular/common';\r\nimport { RouterLink } from '@angular/router';\r\nimport { FormsModule } from '@angular/forms';\r\nimport Swal from 'sweetalert2';\r\nimport { UsuarioService } from '../../../core/services/usuario.service';\r\nimport { Usuario } from '../../../models/usuario.model';\r\n\r\n@Component({\r\n  selector: 'app-lista-usuarios',\r\n  standalone: true,\r\n  imports: [CommonModule, RouterLink, FormsModule],\r\n  templateUrl: './lista-usuarios.component.html',\r\n  styleUrls: ['./lista-usuarios.component.scss']\r\n})\r\nexport class ListaUsuariosComponent implements OnInit {\r\n\r\n  usuarios: Usuario[] = [];\r\n  usuariosFiltrados: Usuario[] = [];\r\n  cargando = true;\r\n  textoBusqueda = '';\r\n\r\n  constructor(\r\n    private usuarioService: UsuarioService,\r\n    private cdr: ChangeDetectorRef   // Fuerza la detecci\xF3n de cambios\r\n  ) {}\r\n\r\n  ngOnInit(): void {\r\n    this.cargarUsuarios();\r\n  }\r\n\r\n  cargarUsuarios(): void {\r\n    this.cargando = true;\r\n    this.usuarioService.listarTodos().subscribe({\r\n      next: (data) => {\r\n        this.usuarios = data;\r\n        this.usuariosFiltrados = [...data];\r\n        this.cargando = false;\r\n        this.cdr.detectChanges();    // Fuerza re-render inmediato\r\n      },\r\n      error: () => {\r\n        this.cargando = false;\r\n        this.cdr.detectChanges();\r\n        Swal.fire('Error', 'No se pudieron cargar los usuarios. Verifica que ms-usuarios (puerto 8081) est\xE9 corriendo.', 'error');\r\n      }\r\n    });\r\n  }\r\n\r\n  filtrar(): void {\r\n    const texto = this.textoBusqueda.toLowerCase().trim();\r\n    if (!texto) {\r\n      this.usuariosFiltrados = [...this.usuarios];\r\n      return;\r\n    }\r\n    this.usuariosFiltrados = this.usuarios.filter(u =>\r\n      u.nombre.toLowerCase().includes(texto) ||\r\n      u.correo.toLowerCase().includes(texto) ||\r\n      u.rol.toLowerCase().includes(texto)\r\n    );\r\n  }\r\n\r\n  eliminar(usuario: Usuario): void {\r\n    Swal.fire({\r\n      title: '\xBFEliminar usuario?',\r\n      html: `Se eliminar\xE1 a <strong>${usuario.nombre}</strong>.<br>Esta acci\xF3n no se puede deshacer.`,\r\n      icon: 'warning',\r\n      showCancelButton: true,\r\n      confirmButtonText: 'S\xED, eliminar',\r\n      cancelButtonText: 'Cancelar',\r\n    }).then(result => {\r\n      if (result.isConfirmed) {\r\n        this.usuarioService.eliminar(usuario.idUsuario!).subscribe({\r\n          next: () => {\r\n            this.usuarios = this.usuarios.filter(u => u.idUsuario !== usuario.idUsuario);\r\n            this.filtrar();\r\n            this.cdr.detectChanges();\r\n            Swal.fire('Eliminado', 'El usuario fue eliminado correctamente', 'success');\r\n          },\r\n          error: (err) => {\r\n            const msg = err?.error || 'No se pudo eliminar el usuario';\r\n            Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al eliminar', 'error');\r\n          }\r\n        });\r\n      }\r\n    });\r\n  }\r\n\r\n  toggleActivo(usuario: Usuario): void {\r\n    const nuevoEstado = usuario.activo === 1 ? 0 : 1;\r\n    const accion = nuevoEstado === 1 ? 'activar' : 'desactivar';\r\n\r\n    Swal.fire({\r\n      title: `\xBF${accion.charAt(0).toUpperCase() + accion.slice(1)} usuario?`,\r\n      icon: 'question',\r\n      showCancelButton: true,\r\n      confirmButtonText: 'Confirmar',\r\n      cancelButtonText: 'Cancelar',\r\n    }).then(result => {\r\n      if (result.isConfirmed) {\r\n        const usuarioActualizado = { ...usuario, activo: nuevoEstado };\r\n        this.usuarioService.actualizar(usuario.idUsuario!, usuarioActualizado).subscribe({\r\n          next: (data) => {\r\n            const idx = this.usuarios.findIndex(u => u.idUsuario === data.idUsuario);\r\n            if (idx !== -1) this.usuarios[idx] = data;\r\n            this.filtrar();\r\n            this.cdr.detectChanges();\r\n            Swal.fire('Actualizado', `Usuario ${nuevoEstado === 1 ? 'activado' : 'desactivado'}`, 'success');\r\n          },\r\n          error: () => Swal.fire('Error', 'No se pudo actualizar el estado', 'error')\r\n        });\r\n      }\r\n    });\r\n  }\r\n\r\n  get totalActivos(): number  { return this.usuarios.filter(u => u.activo === 1).length; }\r\n  get totalInactivos(): number { return this.usuarios.filter(u => u.activo === 0).length; }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2c898abdeb586ae8034dfaf93081f605b3987f23"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_jxnzkcwt = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var import_sweetalert2, ListaUsuariosComponent;
var init_lista_usuarios_component3 = __esm({
  "src/app/pages/usuarios/lista-usuarios/lista-usuarios.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_lista_usuarios_component();
    init_lista_usuarios_component2();
    init_core();
    init_common();
    init_router();
    init_forms();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    init_usuario_service();
    cov_jxnzkcwt();
    cov_jxnzkcwt().s[0]++;
    ListaUsuariosComponent = class ListaUsuariosComponent2 {
      usuarioService;
      cdr;
      usuarios = (cov_jxnzkcwt().s[1]++, []);
      usuariosFiltrados = (cov_jxnzkcwt().s[2]++, []);
      cargando = (cov_jxnzkcwt().s[3]++, true);
      textoBusqueda = (cov_jxnzkcwt().s[4]++, "");
      constructor(usuarioService, cdr) {
        cov_jxnzkcwt().f[0]++;
        cov_jxnzkcwt().s[5]++;
        this.usuarioService = usuarioService;
        cov_jxnzkcwt().s[6]++;
        this.cdr = cdr;
      }
      ngOnInit() {
        cov_jxnzkcwt().f[1]++;
        cov_jxnzkcwt().s[7]++;
        this.cargarUsuarios();
      }
      cargarUsuarios() {
        cov_jxnzkcwt().f[2]++;
        cov_jxnzkcwt().s[8]++;
        this.cargando = true;
        cov_jxnzkcwt().s[9]++;
        this.usuarioService.listarTodos().subscribe({
          next: (data) => {
            cov_jxnzkcwt().f[3]++;
            cov_jxnzkcwt().s[10]++;
            this.usuarios = data;
            cov_jxnzkcwt().s[11]++;
            this.usuariosFiltrados = [...data];
            cov_jxnzkcwt().s[12]++;
            this.cargando = false;
            cov_jxnzkcwt().s[13]++;
            this.cdr.detectChanges();
          },
          error: () => {
            cov_jxnzkcwt().f[4]++;
            cov_jxnzkcwt().s[14]++;
            this.cargando = false;
            cov_jxnzkcwt().s[15]++;
            this.cdr.detectChanges();
            cov_jxnzkcwt().s[16]++;
            import_sweetalert2.default.fire("Error", "No se pudieron cargar los usuarios. Verifica que ms-usuarios (puerto 8081) est\xE9 corriendo.", "error");
          }
        });
      }
      filtrar() {
        cov_jxnzkcwt().f[5]++;
        const texto = (cov_jxnzkcwt().s[17]++, this.textoBusqueda.toLowerCase().trim());
        cov_jxnzkcwt().s[18]++;
        if (!texto) {
          cov_jxnzkcwt().b[0][0]++;
          cov_jxnzkcwt().s[19]++;
          this.usuariosFiltrados = [...this.usuarios];
          cov_jxnzkcwt().s[20]++;
          return;
        } else {
          cov_jxnzkcwt().b[0][1]++;
        }
        cov_jxnzkcwt().s[21]++;
        this.usuariosFiltrados = this.usuarios.filter((u) => {
          cov_jxnzkcwt().f[6]++;
          cov_jxnzkcwt().s[22]++;
          return (cov_jxnzkcwt().b[1][0]++, u.nombre.toLowerCase().includes(texto)) || (cov_jxnzkcwt().b[1][1]++, u.correo.toLowerCase().includes(texto)) || (cov_jxnzkcwt().b[1][2]++, u.rol.toLowerCase().includes(texto));
        });
      }
      eliminar(usuario) {
        cov_jxnzkcwt().f[7]++;
        cov_jxnzkcwt().s[23]++;
        import_sweetalert2.default.fire({
          title: "\xBFEliminar usuario?",
          html: `Se eliminar\xE1 a <strong>${usuario.nombre}</strong>.<br>Esta acci\xF3n no se puede deshacer.`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "S\xED, eliminar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          cov_jxnzkcwt().f[8]++;
          cov_jxnzkcwt().s[24]++;
          if (result.isConfirmed) {
            cov_jxnzkcwt().b[2][0]++;
            cov_jxnzkcwt().s[25]++;
            this.usuarioService.eliminar(usuario.idUsuario).subscribe({
              next: () => {
                cov_jxnzkcwt().f[9]++;
                cov_jxnzkcwt().s[26]++;
                this.usuarios = this.usuarios.filter((u) => {
                  cov_jxnzkcwt().f[10]++;
                  cov_jxnzkcwt().s[27]++;
                  return u.idUsuario !== usuario.idUsuario;
                });
                cov_jxnzkcwt().s[28]++;
                this.filtrar();
                cov_jxnzkcwt().s[29]++;
                this.cdr.detectChanges();
                cov_jxnzkcwt().s[30]++;
                import_sweetalert2.default.fire("Eliminado", "El usuario fue eliminado correctamente", "success");
              },
              error: (err) => {
                cov_jxnzkcwt().f[11]++;
                const msg = (cov_jxnzkcwt().s[31]++, (cov_jxnzkcwt().b[3][0]++, err?.error) || (cov_jxnzkcwt().b[3][1]++, "No se pudo eliminar el usuario"));
                cov_jxnzkcwt().s[32]++;
                import_sweetalert2.default.fire("Error", typeof msg === "string" ? (cov_jxnzkcwt().b[4][0]++, msg) : (cov_jxnzkcwt().b[4][1]++, "Error al eliminar"), "error");
              }
            });
          } else {
            cov_jxnzkcwt().b[2][1]++;
          }
        });
      }
      toggleActivo(usuario) {
        cov_jxnzkcwt().f[12]++;
        const nuevoEstado = (cov_jxnzkcwt().s[33]++, usuario.activo === 1 ? (cov_jxnzkcwt().b[5][0]++, 0) : (cov_jxnzkcwt().b[5][1]++, 1));
        const accion = (cov_jxnzkcwt().s[34]++, nuevoEstado === 1 ? (cov_jxnzkcwt().b[6][0]++, "activar") : (cov_jxnzkcwt().b[6][1]++, "desactivar"));
        cov_jxnzkcwt().s[35]++;
        import_sweetalert2.default.fire({
          title: `\xBF${accion.charAt(0).toUpperCase() + accion.slice(1)} usuario?`,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Confirmar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          cov_jxnzkcwt().f[13]++;
          cov_jxnzkcwt().s[36]++;
          if (result.isConfirmed) {
            cov_jxnzkcwt().b[7][0]++;
            const usuarioActualizado = (cov_jxnzkcwt().s[37]++, __spreadProps(__spreadValues({}, usuario), {
              activo: nuevoEstado
            }));
            cov_jxnzkcwt().s[38]++;
            this.usuarioService.actualizar(usuario.idUsuario, usuarioActualizado).subscribe({
              next: (data) => {
                cov_jxnzkcwt().f[14]++;
                const idx = (cov_jxnzkcwt().s[39]++, this.usuarios.findIndex((u) => {
                  cov_jxnzkcwt().f[15]++;
                  cov_jxnzkcwt().s[40]++;
                  return u.idUsuario === data.idUsuario;
                }));
                cov_jxnzkcwt().s[41]++;
                if (idx !== -1) {
                  cov_jxnzkcwt().b[8][0]++;
                  cov_jxnzkcwt().s[42]++;
                  this.usuarios[idx] = data;
                } else {
                  cov_jxnzkcwt().b[8][1]++;
                }
                cov_jxnzkcwt().s[43]++;
                this.filtrar();
                cov_jxnzkcwt().s[44]++;
                this.cdr.detectChanges();
                cov_jxnzkcwt().s[45]++;
                import_sweetalert2.default.fire("Actualizado", `Usuario ${nuevoEstado === 1 ? (cov_jxnzkcwt().b[9][0]++, "activado") : (cov_jxnzkcwt().b[9][1]++, "desactivado")}`, "success");
              },
              error: () => {
                cov_jxnzkcwt().f[16]++;
                cov_jxnzkcwt().s[46]++;
                return import_sweetalert2.default.fire("Error", "No se pudo actualizar el estado", "error");
              }
            });
          } else {
            cov_jxnzkcwt().b[7][1]++;
          }
        });
      }
      get totalActivos() {
        cov_jxnzkcwt().f[17]++;
        cov_jxnzkcwt().s[47]++;
        return this.usuarios.filter((u) => {
          cov_jxnzkcwt().f[18]++;
          cov_jxnzkcwt().s[48]++;
          return u.activo === 1;
        }).length;
      }
      get totalInactivos() {
        cov_jxnzkcwt().f[19]++;
        cov_jxnzkcwt().s[49]++;
        return this.usuarios.filter((u) => {
          cov_jxnzkcwt().f[20]++;
          cov_jxnzkcwt().s[50]++;
          return u.activo === 0;
        }).length;
      }
      static ctorParameters = (cov_jxnzkcwt().s[51]++, () => {
        cov_jxnzkcwt().f[21]++;
        cov_jxnzkcwt().s[52]++;
        return [{
          type: UsuarioService
        }, {
          type: ChangeDetectorRef
        }];
      });
    };
    cov_jxnzkcwt().s[53]++;
    ListaUsuariosComponent = __decorate([Component({
      selector: "app-lista-usuarios",
      standalone: true,
      imports: [CommonModule, RouterLink, FormsModule],
      template: lista_usuarios_component_default,
      styles: [lista_usuarios_component_default2]
    })], ListaUsuariosComponent);
  }
});

// src/app/pages/usuarios/lista-usuarios/lista-usuarios.component.spec.ts
var require_lista_usuarios_component_spec = __commonJS({
  "src/app/pages/usuarios/lista-usuarios/lista-usuarios.component.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_forms();
    init_esm();
    init_lista_usuarios_component3();
    init_usuario_service();
    describe("ListaUsuariosComponent", () => {
      let component;
      let fixture;
      let usuarioServiceSpy;
      const mockUsuarios = [
        { idUsuario: 1, nombre: "Juan P\xE9rez", correo: "juan@test.com", password: "p1", rol: "ADMIN", activo: 1 },
        { idUsuario: 2, nombre: "Mar\xEDa Gonz\xE1lez", correo: "maria@test.com", password: "p2", rol: "USER", activo: 1 },
        { idUsuario: 3, nombre: "Pedro L\xF3pez", correo: "pedro@test.com", password: "p3", rol: "USER", activo: 0 }
      ];
      beforeEach(() => __async(null, null, function* () {
        usuarioServiceSpy = jasmine.createSpyObj("UsuarioService", [
          "listarTodos",
          "eliminar",
          "actualizar"
        ]);
        usuarioServiceSpy.listarTodos.and.returnValue(of(mockUsuarios));
        yield TestBed.configureTestingModule({
          imports: [ListaUsuariosComponent, RouterTestingModule, FormsModule],
          providers: [
            { provide: UsuarioService, useValue: usuarioServiceSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(ListaUsuariosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar usuarios al inicializar", () => {
        expect(usuarioServiceSpy.listarTodos).toHaveBeenCalled();
        expect(component.usuarios.length).toBe(3);
      });
      it("deber\xEDa poner cargando en false despu\xE9s de cargar usuarios", () => {
        expect(component.cargando).toBeFalse();
      });
      it("deber\xEDa calcular correctamente el total de usuarios activos", () => {
        expect(component.totalActivos).toBe(2);
      });
      it("deber\xEDa calcular correctamente el total de usuarios inactivos", () => {
        expect(component.totalInactivos).toBe(1);
      });
      it("deber\xEDa filtrar por nombre correctamente", () => {
        component.textoBusqueda = "juan";
        component.filtrar();
        expect(component.usuariosFiltrados.length).toBe(1);
        expect(component.usuariosFiltrados[0].nombre).toBe("Juan P\xE9rez");
      });
      it("deber\xEDa filtrar por correo correctamente", () => {
        component.textoBusqueda = "maria@";
        component.filtrar();
        expect(component.usuariosFiltrados.length).toBe(1);
      });
      it("deber\xEDa filtrar por rol correctamente", () => {
        component.textoBusqueda = "admin";
        component.filtrar();
        expect(component.usuariosFiltrados.length).toBe(1);
        expect(component.usuariosFiltrados[0].rol).toBe("ADMIN");
      });
      it("deber\xEDa mostrar todos los usuarios si el texto de b\xFAsqueda est\xE1 vac\xEDo", () => {
        component.textoBusqueda = "";
        component.filtrar();
        expect(component.usuariosFiltrados.length).toBe(3);
      });
      it("deber\xEDa retornar lista vac\xEDa si no hay coincidencias en el filtro", () => {
        component.textoBusqueda = "zzz_no_existe";
        component.filtrar();
        expect(component.usuariosFiltrados.length).toBe(0);
      });
      it("deber\xEDa manejar error al cargar usuarios", () => {
        usuarioServiceSpy.listarTodos.and.returnValue(throwError(() => new Error("Error de red")));
        component.cargarUsuarios();
        expect(component.cargando).toBeFalse();
      });
      it("deber\xEDa existir el m\xE9todo eliminar", () => {
        expect(component.eliminar).toBeDefined();
      });
      it("deber\xEDa existir el m\xE9todo toggleActivo", () => {
        expect(component.toggleActivo).toBeDefined();
      });
    });
  }
});
export default require_lista_usuarios_component_spec();
//# sourceMappingURL=spec-app-pages-usuarios-lista-usuarios-lista-usuarios.component.spec.js.map
