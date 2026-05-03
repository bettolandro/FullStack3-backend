import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
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
  ActivatedRoute,
  Router,
  RouterLink,
  convertToParamMap,
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
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __spreadValues,
  __toESM,
  fakeAsync,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  throwError,
  tick
} from "./chunk-X225SWGN.js";

// angular:jit:template:src\app\pages\productos\form-producto\form-producto.component.html
var form_producto_component_default;
var init_form_producto_component = __esm({
  "angular:jit:template:src\\app\\pages\\productos\\form-producto\\form-producto.component.html"() {
    form_producto_component_default = `<!-- ============================================================\r
  ARCHIVO: src/app/pages/productos/form-producto/form-producto.component.html\r
  ============================================================ -->\r
\r
<div class="page-container fade-in">\r
\r
  <!-- \u2500\u2500 ENCABEZADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">\r
        {{ esEdicion ? 'Editar' : 'Nuevo' }} <span>Producto</span>\r
      </h1>\r
      <p class="page-subtitle">\r
        {{ esEdicion ? 'Modifica los datos del producto' : 'Completa el formulario para agregar un producto al inventario' }}\r
      </p>\r
    </div>\r
    <a routerLink="/productos" class="btn-outline-custom">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>\r
      </svg>\r
      Volver a productos\r
    </a>\r
  </div>\r
\r
  <!-- \u2500\u2500 FORMULARIO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="form-container">\r
    <div class="form-card">\r
\r
      <form [formGroup]="productoForm" (ngSubmit)="onSubmit()" novalidate>\r
\r
        <!-- \u2500\u2500 SECCI\xD3N: INFORMACI\xD3N B\xC1SICA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-section-title">Informaci\xF3n del producto</div>\r
\r
        <!-- Nombre del producto -->\r
        <div class="form-group">\r
          <label for="nombre">Nombre del producto *</label>\r
          <input\r
            id="nombre"\r
            type="text"\r
            formControlName="nombre"\r
            placeholder="Ej: Laptop Dell Inspiron 15"\r
            [class.error]="nombre.invalid && nombre.touched"\r
          >\r
          <span class="error-msg" *ngIf="nombre.touched && nombre.errors?.['required']">\r
            El nombre es obligatorio\r
          </span>\r
          <span class="error-msg" *ngIf="nombre.touched && nombre.errors?.['maxlength']">\r
            M\xE1ximo 120 caracteres\r
          </span>\r
        </div>\r
\r
        <!-- Descripci\xF3n -->\r
        <div class="form-group">\r
          <label for="descripcion">Descripci\xF3n <span class="label-optional">(opcional)</span></label>\r
          <textarea\r
            id="descripcion"\r
            formControlName="descripcion"\r
            placeholder="Describe las caracter\xEDsticas principales del producto..."\r
            rows="3"\r
            [class.error]="descripcion.invalid && descripcion.touched"\r
          ></textarea>\r
          <div class="field-hint" *ngIf="productoForm.get('descripcion')?.value">\r
            {{ productoForm.get('descripcion')?.value?.length || 0 }}/250 caracteres\r
          </div>\r
          <span class="error-msg" *ngIf="descripcion.touched && descripcion.errors?.['maxlength']">\r
            M\xE1ximo 250 caracteres\r
          </span>\r
        </div>\r
\r
        <!-- \u2500\u2500 SECCI\xD3N: PRECIO Y STOCK \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-section-title" style="margin-top: 1.5rem">Precio e inventario</div>\r
\r
        <div class="form-row-2">\r
          <!-- Precio -->\r
          <div class="form-group">\r
            <label for="precio">Precio *</label>\r
            <div class="input-prefix">\r
              <span class="prefix">$</span>\r
              <input\r
                id="precio"\r
                type="number"\r
                formControlName="precio"\r
                placeholder="0"\r
                min="1"\r
                step="0.01"\r
                [class.error]="precio.invalid && precio.touched"\r
              >\r
            </div>\r
            <span class="error-msg" *ngIf="precio.touched && precio.errors?.['required']">\r
              El precio es obligatorio\r
            </span>\r
            <span class="error-msg" *ngIf="precio.touched && precio.errors?.['min']">\r
              El precio debe ser mayor a 0\r
            </span>\r
          </div>\r
\r
          <!-- Stock -->\r
          <div class="form-group">\r
            <label for="stock">Stock disponible *</label>\r
            <input\r
              id="stock"\r
              type="number"\r
              formControlName="stock"\r
              placeholder="0"\r
              min="0"\r
              [class.error]="stock.invalid && stock.touched"\r
            >\r
            <span class="error-msg" *ngIf="stock.touched && stock.errors?.['required']">\r
              El stock es obligatorio\r
            </span>\r
            <span class="error-msg" *ngIf="stock.touched && stock.errors?.['min']">\r
              El stock no puede ser negativo\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 SECCI\xD3N: CATEGOR\xCDA Y ESTADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-section-title" style="margin-top: 1.5rem">Categor\xEDa y estado</div>\r
\r
        <!-- Categor\xEDa con chips sugeridos -->\r
        <div class="form-group">\r
          <label for="categoria">Categor\xEDa <span class="label-optional">(opcional)</span></label>\r
          <input\r
            id="categoria"\r
            type="text"\r
            formControlName="categoria"\r
            placeholder="Escribe o selecciona una categor\xEDa"\r
          >\r
          <!-- Chips de categor\xEDas sugeridas -->\r
          <div class="categoria-chips">\r
            <button\r
              type="button"\r
              class="chip"\r
              *ngFor="let cat of categoriasSugeridas"\r
              [class.chip-active]="productoForm.get('categoria')?.value === cat"\r
              (click)="seleccionarCategoria(cat)"\r
            >\r
              {{ cat }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Estado -->\r
        <div class="form-group">\r
          <label for="activo">Estado del producto</label>\r
          <select id="activo" formControlName="activo">\r
            <option [value]="1">Activo \u2014 Visible en el sistema</option>\r
            <option [value]="0">Inactivo \u2014 Oculto del sistema</option>\r
          </select>\r
        </div>\r
\r
        <!-- \u2500\u2500 VISTA PREVIA DEL PRODUCTO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="preview-card" *ngIf="nombre.value || precio.value">\r
          <div class="preview-label">Vista previa</div>\r
          <div class="preview-content">\r
            <div class="preview-name">{{ nombre.value || 'Nombre del producto' }}</div>\r
            <div class="preview-row">\r
              <span class="preview-price" *ngIf="precio.value">\r
                \${{ precio.value | number:'1.0-0' }}\r
              </span>\r
              <span class="badge badge-blue" *ngIf="productoForm.get('categoria')?.value">\r
                {{ productoForm.get('categoria')?.value }}\r
              </span>\r
              <span class="badge" [ngClass]="productoForm.get('stock')?.value > 0 ? 'badge-success' : 'badge-danger'">\r
                Stock: {{ productoForm.get('stock')?.value || 0 }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 BOTONES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-actions">\r
          <a routerLink="/productos" class="btn-outline-custom">Cancelar</a>\r
          <button type="submit" class="btn-primary-custom" [disabled]="enviando">\r
            <span *ngIf="enviando" class="mini-spinner"></span>\r
            <span>{{ enviando ? 'Guardando...' : (esEdicion ? 'Actualizar producto' : 'Crear producto') }}</span>\r
          </button>\r
        </div>\r
\r
      </form>\r
    </div>\r
  </div>\r
\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\productos\form-producto\form-producto.component.scss
var form_producto_component_default2;
var init_form_producto_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\productos\\form-producto\\form-producto.component.scss"() {
    form_producto_component_default2 = '@charset "UTF-8";\n\n/* src/app/pages/productos/form-producto/form-producto.component.scss */\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 576px) {\n  .form-row-2 {\n    grid-template-columns: 1fr;\n  }\n}\n.input-prefix {\n  display: flex;\n  align-items: stretch;\n}\n.input-prefix .prefix {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-right: none;\n  border-radius: var(--radius-sm) 0 0 var(--radius-sm);\n  padding: 0.75rem 0.875rem;\n  font-family: var(--font-display);\n  font-weight: 700;\n  color: var(--accent-cyan);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\n.input-prefix input {\n  flex: 1;\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0 !important;\n  width: 100%;\n  background: var(--bg-input);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  padding: 0.75rem 1rem;\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  transition: var(--transition);\n  outline: none;\n}\n.input-prefix input:focus {\n  border-color: var(--accent-blue);\n  box-shadow: 0 0 0 3px rgba(79, 142, 247, 0.15);\n}\n.input-prefix input.error {\n  border-color: var(--accent-red);\n}\n.label-optional {\n  font-weight: 400;\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  text-transform: none;\n  letter-spacing: 0;\n}\n.field-hint {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin-top: 0.3rem;\n  text-align: right;\n}\n.categoria-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.6rem;\n}\n.chip {\n  background: transparent;\n  border: 1px solid var(--border-color);\n  color: var(--text-secondary);\n  padding: 0.25rem 0.65rem;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-family: var(--font-display);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.chip:hover {\n  border-color: var(--accent-blue);\n  color: var(--accent-blue);\n}\n.chip.chip-active {\n  background: rgba(79, 142, 247, 0.15);\n  border-color: var(--accent-blue);\n  color: var(--accent-blue);\n}\n.preview-card {\n  background: var(--bg-secondary);\n  border: 1px dashed var(--border-accent);\n  border-radius: var(--radius-md);\n  padding: 1.25rem;\n  margin-top: 1.5rem;\n}\n.preview-label {\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--text-muted);\n  margin-bottom: 0.75rem;\n}\n.preview-name {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.preview-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.preview-price {\n  font-family: var(--font-display);\n  font-weight: 800;\n  font-size: 1.1rem;\n  color: var(--accent-cyan);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border-color);\n  flex-wrap: wrap;\n}\n.mini-spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=form-producto.component.css.map */\n';
  }
});

// src/app/pages/productos/form-producto/form-producto.component.ts
function cov_6gcxdaljm() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\productos\\form-producto\\form-producto.component.ts";
  var hash = "569f7a1694a38833d84258f6ddec7ece5f5ed999";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\productos\\form-producto\\form-producto.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 28
        },
        end: {
          line: 128,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 16
        },
        end: {
          line: 18,
          column: 21
        }
      },
      "2": {
        start: {
          line: 19,
          column: 17
        },
        end: {
          line: 19,
          column: 21
        }
      },
      "3": {
        start: {
          line: 21,
          column: 15
        },
        end: {
          line: 21,
          column: 20
        }
      },
      "4": {
        start: {
          line: 23,
          column: 26
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "5": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 21
        }
      },
      "6": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 47
        }
      },
      "7": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 27
        }
      },
      "8": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 29
        }
      },
      "9": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 42,
          column: 11
        }
      },
      "10": {
        start: {
          line: 44,
          column: 19
        },
        end: {
          line: 44,
          column: 57
        }
      },
      "11": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 49,
          column: 9
        }
      },
      "12": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 46,
          column: 34
        }
      },
      "13": {
        start: {
          line: 47,
          column: 12
        },
        end: {
          line: 47,
          column: 34
        }
      },
      "14": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 48,
          column: 49
        }
      },
      "15": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 69,
          column: 11
        }
      },
      "16": {
        start: {
          line: 56,
          column: 16
        },
        end: {
          line: 63,
          column: 19
        }
      },
      "17": {
        start: {
          line: 66,
          column: 16
        },
        end: {
          line: 66,
          column: 74
        }
      },
      "18": {
        start: {
          line: 67,
          column: 16
        },
        end: {
          line: 67,
          column: 53
        }
      },
      "19": {
        start: {
          line: 72,
          column: 19
        },
        end: {
          line: 72,
          column: 58
        }
      },
      "20": {
        start: {
          line: 73,
          column: 24
        },
        end: {
          line: 73,
          column: 68
        }
      },
      "21": {
        start: {
          line: 74,
          column: 19
        },
        end: {
          line: 74,
          column: 58
        }
      },
      "22": {
        start: {
          line: 75,
          column: 18
        },
        end: {
          line: 75,
          column: 56
        }
      },
      "23": {
        start: {
          line: 76,
          column: 22
        },
        end: {
          line: 76,
          column: 64
        }
      },
      "24": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 57
        }
      },
      "25": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 86,
          column: 9
        }
      },
      "26": {
        start: {
          line: 84,
          column: 12
        },
        end: {
          line: 84,
          column: 49
        }
      },
      "27": {
        start: {
          line: 85,
          column: 12
        },
        end: {
          line: 85,
          column: 19
        }
      },
      "28": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 29
        }
      },
      "29": {
        start: {
          line: 88,
          column: 22
        },
        end: {
          line: 88,
          column: 52
        }
      },
      "30": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 37
        }
      },
      "31": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 35
        }
      },
      "32": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 37
        }
      },
      "33": {
        start: {
          line: 93,
          column: 8
        },
        end: {
          line: 120,
          column: 9
        }
      },
      "34": {
        start: {
          line: 94,
          column: 12
        },
        end: {
          line: 105,
          column: 15
        }
      },
      "35": {
        start: {
          line: 96,
          column: 20
        },
        end: {
          line: 96,
          column: 42
        }
      },
      "36": {
        start: {
          line: 97,
          column: 20
        },
        end: {
          line: 98,
          column: 74
        }
      },
      "37": {
        start: {
          line: 98,
          column: 36
        },
        end: {
          line: 98,
          column: 72
        }
      },
      "38": {
        start: {
          line: 101,
          column: 20
        },
        end: {
          line: 101,
          column: 42
        }
      },
      "39": {
        start: {
          line: 102,
          column: 32
        },
        end: {
          line: 102,
          column: 90
        }
      },
      "40": {
        start: {
          line: 103,
          column: 20
        },
        end: {
          line: 103,
          column: 103
        }
      },
      "41": {
        start: {
          line: 108,
          column: 12
        },
        end: {
          line: 119,
          column: 15
        }
      },
      "42": {
        start: {
          line: 110,
          column: 20
        },
        end: {
          line: 110,
          column: 42
        }
      },
      "43": {
        start: {
          line: 111,
          column: 20
        },
        end: {
          line: 112,
          column: 74
        }
      },
      "44": {
        start: {
          line: 112,
          column: 36
        },
        end: {
          line: 112,
          column: 72
        }
      },
      "45": {
        start: {
          line: 115,
          column: 20
        },
        end: {
          line: 115,
          column: 42
        }
      },
      "46": {
        start: {
          line: 116,
          column: 32
        },
        end: {
          line: 116,
          column: 97
        }
      },
      "47": {
        start: {
          line: 117,
          column: 20
        },
        end: {
          line: 117,
          column: 98
        }
      },
      "48": {
        start: {
          line: 122,
          column: 28
        },
        end: {
          line: 127,
          column: 5
        }
      },
      "49": {
        start: {
          line: 122,
          column: 34
        },
        end: {
          line: 127,
          column: 5
        }
      },
      "50": {
        start: {
          line: 129,
          column: 0
        },
        end: {
          line: 137,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        loc: {
          start: {
            line: 27,
            column: 52
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        loc: {
          start: {
            line: 33,
            column: 15
          },
          end: {
            line: 50,
            column: 5
          }
        },
        line: 33
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        loc: {
          start: {
            line: 52,
            column: 23
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 52
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 54,
            column: 18
          },
          end: {
            line: 54,
            column: 19
          }
        },
        loc: {
          start: {
            line: 54,
            column: 32
          },
          end: {
            line: 64,
            column: 13
          }
        },
        line: 54
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 19
          },
          end: {
            line: 65,
            column: 20
          }
        },
        loc: {
          start: {
            line: 65,
            column: 25
          },
          end: {
            line: 68,
            column: 13
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        },
        loc: {
          start: {
            line: 72,
            column: 17
          },
          end: {
            line: 72,
            column: 60
          }
        },
        line: 72
      },
      "6": {
        name: "(anonymous_6)",
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
            column: 22
          },
          end: {
            line: 73,
            column: 70
          }
        },
        line: 73
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        loc: {
          start: {
            line: 74,
            column: 17
          },
          end: {
            line: 74,
            column: 60
          }
        },
        line: 74
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        loc: {
          start: {
            line: 75,
            column: 16
          },
          end: {
            line: 75,
            column: 58
          }
        },
        line: 75
      },
      "9": {
        name: "(anonymous_9)",
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
            column: 20
          },
          end: {
            line: 76,
            column: 66
          }
        },
        line: 76
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        },
        loc: {
          start: {
            line: 78,
            column: 30
          },
          end: {
            line: 80,
            column: 5
          }
        },
        line: 78
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 5
          }
        },
        loc: {
          start: {
            line: 82,
            column: 15
          },
          end: {
            line: 121,
            column: 5
          }
        },
        line: 82
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 95,
            column: 22
          },
          end: {
            line: 95,
            column: 23
          }
        },
        loc: {
          start: {
            line: 95,
            column: 28
          },
          end: {
            line: 99,
            column: 17
          }
        },
        line: 95
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 98,
            column: 30
          },
          end: {
            line: 98,
            column: 31
          }
        },
        loc: {
          start: {
            line: 98,
            column: 36
          },
          end: {
            line: 98,
            column: 72
          }
        },
        line: 98
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 100,
            column: 23
          },
          end: {
            line: 100,
            column: 24
          }
        },
        loc: {
          start: {
            line: 100,
            column: 32
          },
          end: {
            line: 104,
            column: 17
          }
        },
        line: 100
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 109,
            column: 22
          },
          end: {
            line: 109,
            column: 23
          }
        },
        loc: {
          start: {
            line: 109,
            column: 28
          },
          end: {
            line: 113,
            column: 17
          }
        },
        line: 109
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 112,
            column: 30
          },
          end: {
            line: 112,
            column: 31
          }
        },
        loc: {
          start: {
            line: 112,
            column: 36
          },
          end: {
            line: 112,
            column: 72
          }
        },
        line: 112
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 114,
            column: 23
          },
          end: {
            line: 114,
            column: 24
          }
        },
        loc: {
          start: {
            line: 114,
            column: 32
          },
          end: {
            line: 118,
            column: 17
          }
        },
        line: 114
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 122,
            column: 28
          },
          end: {
            line: 122,
            column: 29
          }
        },
        loc: {
          start: {
            line: 122,
            column: 34
          },
          end: {
            line: 127,
            column: 5
          }
        },
        line: 122
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 49,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 49,
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
        line: 45
      },
      "1": {
        loc: {
          start: {
            line: 58,
            column: 33
          },
          end: {
            line: 58,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 58,
            column: 33
          },
          end: {
            line: 58,
            column: 53
          }
        }, {
          start: {
            line: 58,
            column: 57
          },
          end: {
            line: 58,
            column: 59
          }
        }],
        line: 58
      },
      "2": {
        loc: {
          start: {
            line: 61,
            column: 31
          },
          end: {
            line: 61,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 61,
            column: 31
          },
          end: {
            line: 61,
            column: 49
          }
        }, {
          start: {
            line: 61,
            column: 53
          },
          end: {
            line: 61,
            column: 55
          }
        }],
        line: 61
      },
      "3": {
        loc: {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 86,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 86,
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
        line: 83
      },
      "4": {
        loc: {
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        }, {
          start: {
            line: 107,
            column: 13
          },
          end: {
            line: 120,
            column: 9
          }
        }],
        line: 93
      },
      "5": {
        loc: {
          start: {
            line: 102,
            column: 32
          },
          end: {
            line: 102,
            column: 90
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 102,
            column: 32
          },
          end: {
            line: 102,
            column: 51
          }
        }, {
          start: {
            line: 102,
            column: 55
          },
          end: {
            line: 102,
            column: 65
          }
        }, {
          start: {
            line: 102,
            column: 69
          },
          end: {
            line: 102,
            column: 90
          }
        }],
        line: 102
      },
      "6": {
        loc: {
          start: {
            line: 103,
            column: 39
          },
          end: {
            line: 103,
            column: 92
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 103,
            column: 65
          },
          end: {
            line: 103,
            column: 68
          }
        }, {
          start: {
            line: 103,
            column: 71
          },
          end: {
            line: 103,
            column: 92
          }
        }],
        line: 103
      },
      "7": {
        loc: {
          start: {
            line: 116,
            column: 32
          },
          end: {
            line: 116,
            column: 97
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 116,
            column: 32
          },
          end: {
            line: 116,
            column: 51
          }
        }, {
          start: {
            line: 116,
            column: 55
          },
          end: {
            line: 116,
            column: 65
          }
        }, {
          start: {
            line: 116,
            column: 69
          },
          end: {
            line: 116,
            column: 97
          }
        }],
        line: 116
      },
      "8": {
        loc: {
          start: {
            line: 117,
            column: 39
          },
          end: {
            line: 117,
            column: 87
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 117,
            column: 65
          },
          end: {
            line: 117,
            column: 68
          }
        }, {
          start: {
            line: 117,
            column: 71
          },
          end: {
            line: 117,
            column: 87
          }
        }],
        line: 117
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
      "50": 0
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
      "18": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0],
      "6": [0, 0],
      "7": [0, 0, 0],
      "8": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "form-producto.component.js",
      sourceRoot: "",
      sources: ["form-producto.component.ts"],
      names: [],
      mappings: "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",
      sourcesContent: ["\r\nimport { Component, OnInit } from '@angular/core';\r\nimport { CommonModule } from '@angular/common';\r\nimport {\r\n  FormBuilder,\r\n  FormGroup,\r\n  Validators,\r\n  ReactiveFormsModule\r\n} from '@angular/forms';\r\nimport { ActivatedRoute, Router, RouterLink } from '@angular/router';\r\nimport Swal from 'sweetalert2';\r\nimport { ProductoService } from '../../../core/services/producto.service';\r\n\r\n@Component({\r\n  selector: 'app-form-producto',\r\n  standalone: true,\r\n  imports: [CommonModule, ReactiveFormsModule, RouterLink],\r\n  templateUrl: './form-producto.component.html',\r\n  styleUrls: ['./form-producto.component.scss']\r\n})\r\nexport class FormProductoComponent implements OnInit {\r\n\r\n  // Formulario reactivo\r\n  productoForm!: FormGroup;\r\n\r\n  // Modo del formulario\r\n  esEdicion = false;\r\n  productoId: number | null = null;\r\n\r\n  // Estado de env\xEDo\r\n  enviando = false;\r\n\r\n  // Categor\xEDas predefinidas como sugerencia (se pueden escribir otras)\r\n  categoriasSugeridas = [\r\n    'Electr\xF3nica', 'Ropa', 'Alimentos', 'Hogar', 'Deportes',\r\n    'Tecnolog\xEDa', 'Libros', 'Juguetes', 'Salud', 'Automotriz'\r\n  ];\r\n\r\n  constructor(\r\n    private fb: FormBuilder,\r\n    private productoService: ProductoService,\r\n    private route: ActivatedRoute,\r\n    private router: Router\r\n  ) {}\r\n\r\n  ngOnInit(): void {\r\n    // Construir formulario con validaciones seg\xFAn el modelo Java\r\n    this.productoForm = this.fb.group({\r\n      nombre:      ['', [Validators.required, Validators.maxLength(120)]],\r\n      descripcion: ['', [Validators.maxLength(250)]],         // Opcional\r\n      precio:      [null, [Validators.required, Validators.min(1)]],\r\n      stock:       [0,    [Validators.required, Validators.min(0)]],\r\n      categoria:   ['', [Validators.maxLength(80)]],           // Opcional\r\n      activo:      [1, [Validators.required]]\r\n    });\r\n\r\n    // Verificar modo edici\xF3n por el :id en la URL\r\n    const id = this.route.snapshot.paramMap.get('id');\r\n    if (id) {\r\n      this.esEdicion = true;\r\n      this.productoId = +id;\r\n      this.cargarProducto(this.productoId);\r\n    }\r\n  }\r\n\r\n  // \u2500\u2500 CARGAR DATOS DEL PRODUCTO A EDITAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  cargarProducto(id: number): void {\r\n    this.productoService.buscarPorId(id).subscribe({\r\n      next: (producto) => {\r\n        // patchValue rellena solo los campos que existen en el form\r\n        this.productoForm.patchValue({\r\n          nombre:      producto.nombre,\r\n          descripcion: producto.descripcion || '',\r\n          precio:      producto.precio,\r\n          stock:       producto.stock,\r\n          categoria:   producto.categoria || '',\r\n          activo:      producto.activo\r\n        });\r\n      },\r\n      error: () => {\r\n        Swal.fire('Error', 'No se encontr\xF3 el producto', 'error');\r\n        this.router.navigate(['/productos']);\r\n      }\r\n    });\r\n  }\r\n\r\n  // \u2500\u2500 GETTERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  get nombre()      { return this.productoForm.get('nombre')!; }\r\n  get descripcion() { return this.productoForm.get('descripcion')!; }\r\n  get precio()      { return this.productoForm.get('precio')!; }\r\n  get stock()       { return this.productoForm.get('stock')!; }\r\n  get categoria()   { return this.productoForm.get('categoria')!; }\r\n\r\n  // \u2500\u2500 SELECCIONAR CATEGOR\xCDA SUGERIDA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  seleccionarCategoria(cat: string): void {\r\n    this.productoForm.patchValue({ categoria: cat });\r\n  }\r\n\r\n  // \u2500\u2500 SUBMIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  onSubmit(): void {\r\n    if (this.productoForm.invalid) {\r\n      this.productoForm.markAllAsTouched();\r\n      return;\r\n    }\r\n\r\n    this.enviando = true;\r\n    const datos = { ...this.productoForm.value };\r\n\r\n    // Convertir a n\xFAmero (los inputs HTML devuelven strings)\r\n    datos.precio = +datos.precio;\r\n    datos.stock  = +datos.stock;\r\n    datos.activo = +datos.activo;\r\n\r\n    if (this.esEdicion) {\r\n      this.productoService.actualizar(this.productoId!, datos).subscribe({\r\n        next: () => {\r\n          this.enviando = false;\r\n          Swal.fire('Actualizado', 'Producto actualizado correctamente', 'success')\r\n            .then(() => this.router.navigate(['/productos']));\r\n        },\r\n        error: (err) => {\r\n          this.enviando = false;\r\n          const msg = err?.error?.mensaje || err?.error || 'Error al actualizar';\r\n          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al actualizar', 'error');\r\n        }\r\n      });\r\n    } else {\r\n      this.productoService.guardar(datos).subscribe({\r\n        next: () => {\r\n          this.enviando = false;\r\n          Swal.fire('Creado', 'Producto creado correctamente', 'success')\r\n            .then(() => this.router.navigate(['/productos']));\r\n        },\r\n        error: (err) => {\r\n          this.enviando = false;\r\n          const msg = err?.error?.mensaje || err?.error || 'Error al crear el producto';\r\n          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al crear', 'error');\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "569f7a1694a38833d84258f6ddec7ece5f5ed999"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_6gcxdaljm = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var import_sweetalert2, FormProductoComponent;
var init_form_producto_component3 = __esm({
  "src/app/pages/productos/form-producto/form-producto.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_form_producto_component();
    init_form_producto_component2();
    init_core();
    init_common();
    init_forms();
    init_router();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    init_producto_service();
    cov_6gcxdaljm();
    cov_6gcxdaljm().s[0]++;
    FormProductoComponent = class FormProductoComponent2 {
      fb;
      productoService;
      route;
      router;
      // Formulario reactivo
      productoForm;
      // Modo del formulario
      esEdicion = (cov_6gcxdaljm().s[1]++, false);
      productoId = (cov_6gcxdaljm().s[2]++, null);
      // Estado de envío
      enviando = (cov_6gcxdaljm().s[3]++, false);
      // Categorías predefinidas como sugerencia (se pueden escribir otras)
      categoriasSugeridas = (cov_6gcxdaljm().s[4]++, ["Electr\xF3nica", "Ropa", "Alimentos", "Hogar", "Deportes", "Tecnolog\xEDa", "Libros", "Juguetes", "Salud", "Automotriz"]);
      constructor(fb, productoService, route, router) {
        cov_6gcxdaljm().f[0]++;
        cov_6gcxdaljm().s[5]++;
        this.fb = fb;
        cov_6gcxdaljm().s[6]++;
        this.productoService = productoService;
        cov_6gcxdaljm().s[7]++;
        this.route = route;
        cov_6gcxdaljm().s[8]++;
        this.router = router;
      }
      ngOnInit() {
        cov_6gcxdaljm().f[1]++;
        cov_6gcxdaljm().s[9]++;
        this.productoForm = this.fb.group({
          nombre: ["", [Validators.required, Validators.maxLength(120)]],
          descripcion: ["", [Validators.maxLength(250)]],
          // Opcional
          precio: [null, [Validators.required, Validators.min(1)]],
          stock: [0, [Validators.required, Validators.min(0)]],
          categoria: ["", [Validators.maxLength(80)]],
          // Opcional
          activo: [1, [Validators.required]]
        });
        const id = (cov_6gcxdaljm().s[10]++, this.route.snapshot.paramMap.get("id"));
        cov_6gcxdaljm().s[11]++;
        if (id) {
          cov_6gcxdaljm().b[0][0]++;
          cov_6gcxdaljm().s[12]++;
          this.esEdicion = true;
          cov_6gcxdaljm().s[13]++;
          this.productoId = +id;
          cov_6gcxdaljm().s[14]++;
          this.cargarProducto(this.productoId);
        } else {
          cov_6gcxdaljm().b[0][1]++;
        }
      }
      // ── CARGAR DATOS DEL PRODUCTO A EDITAR ──────────────────
      cargarProducto(id) {
        cov_6gcxdaljm().f[2]++;
        cov_6gcxdaljm().s[15]++;
        this.productoService.buscarPorId(id).subscribe({
          next: (producto) => {
            cov_6gcxdaljm().f[3]++;
            cov_6gcxdaljm().s[16]++;
            this.productoForm.patchValue({
              nombre: producto.nombre,
              descripcion: (cov_6gcxdaljm().b[1][0]++, producto.descripcion) || (cov_6gcxdaljm().b[1][1]++, ""),
              precio: producto.precio,
              stock: producto.stock,
              categoria: (cov_6gcxdaljm().b[2][0]++, producto.categoria) || (cov_6gcxdaljm().b[2][1]++, ""),
              activo: producto.activo
            });
          },
          error: () => {
            cov_6gcxdaljm().f[4]++;
            cov_6gcxdaljm().s[17]++;
            import_sweetalert2.default.fire("Error", "No se encontr\xF3 el producto", "error");
            cov_6gcxdaljm().s[18]++;
            this.router.navigate(["/productos"]);
          }
        });
      }
      // ── GETTERS ──────────────────────────────────────────────
      get nombre() {
        cov_6gcxdaljm().f[5]++;
        cov_6gcxdaljm().s[19]++;
        return this.productoForm.get("nombre");
      }
      get descripcion() {
        cov_6gcxdaljm().f[6]++;
        cov_6gcxdaljm().s[20]++;
        return this.productoForm.get("descripcion");
      }
      get precio() {
        cov_6gcxdaljm().f[7]++;
        cov_6gcxdaljm().s[21]++;
        return this.productoForm.get("precio");
      }
      get stock() {
        cov_6gcxdaljm().f[8]++;
        cov_6gcxdaljm().s[22]++;
        return this.productoForm.get("stock");
      }
      get categoria() {
        cov_6gcxdaljm().f[9]++;
        cov_6gcxdaljm().s[23]++;
        return this.productoForm.get("categoria");
      }
      // ── SELECCIONAR CATEGORÍA SUGERIDA ───────────────────────
      seleccionarCategoria(cat) {
        cov_6gcxdaljm().f[10]++;
        cov_6gcxdaljm().s[24]++;
        this.productoForm.patchValue({
          categoria: cat
        });
      }
      // ── SUBMIT ───────────────────────────────────────────────
      onSubmit() {
        cov_6gcxdaljm().f[11]++;
        cov_6gcxdaljm().s[25]++;
        if (this.productoForm.invalid) {
          cov_6gcxdaljm().b[3][0]++;
          cov_6gcxdaljm().s[26]++;
          this.productoForm.markAllAsTouched();
          cov_6gcxdaljm().s[27]++;
          return;
        } else {
          cov_6gcxdaljm().b[3][1]++;
        }
        cov_6gcxdaljm().s[28]++;
        this.enviando = true;
        const datos = (cov_6gcxdaljm().s[29]++, __spreadValues({}, this.productoForm.value));
        cov_6gcxdaljm().s[30]++;
        datos.precio = +datos.precio;
        cov_6gcxdaljm().s[31]++;
        datos.stock = +datos.stock;
        cov_6gcxdaljm().s[32]++;
        datos.activo = +datos.activo;
        cov_6gcxdaljm().s[33]++;
        if (this.esEdicion) {
          cov_6gcxdaljm().b[4][0]++;
          cov_6gcxdaljm().s[34]++;
          this.productoService.actualizar(this.productoId, datos).subscribe({
            next: () => {
              cov_6gcxdaljm().f[12]++;
              cov_6gcxdaljm().s[35]++;
              this.enviando = false;
              cov_6gcxdaljm().s[36]++;
              import_sweetalert2.default.fire("Actualizado", "Producto actualizado correctamente", "success").then(() => {
                cov_6gcxdaljm().f[13]++;
                cov_6gcxdaljm().s[37]++;
                return this.router.navigate(["/productos"]);
              });
            },
            error: (err) => {
              cov_6gcxdaljm().f[14]++;
              cov_6gcxdaljm().s[38]++;
              this.enviando = false;
              const msg = (cov_6gcxdaljm().s[39]++, (cov_6gcxdaljm().b[5][0]++, err?.error?.mensaje) || (cov_6gcxdaljm().b[5][1]++, err?.error) || (cov_6gcxdaljm().b[5][2]++, "Error al actualizar"));
              cov_6gcxdaljm().s[40]++;
              import_sweetalert2.default.fire("Error", typeof msg === "string" ? (cov_6gcxdaljm().b[6][0]++, msg) : (cov_6gcxdaljm().b[6][1]++, "Error al actualizar"), "error");
            }
          });
        } else {
          cov_6gcxdaljm().b[4][1]++;
          cov_6gcxdaljm().s[41]++;
          this.productoService.guardar(datos).subscribe({
            next: () => {
              cov_6gcxdaljm().f[15]++;
              cov_6gcxdaljm().s[42]++;
              this.enviando = false;
              cov_6gcxdaljm().s[43]++;
              import_sweetalert2.default.fire("Creado", "Producto creado correctamente", "success").then(() => {
                cov_6gcxdaljm().f[16]++;
                cov_6gcxdaljm().s[44]++;
                return this.router.navigate(["/productos"]);
              });
            },
            error: (err) => {
              cov_6gcxdaljm().f[17]++;
              cov_6gcxdaljm().s[45]++;
              this.enviando = false;
              const msg = (cov_6gcxdaljm().s[46]++, (cov_6gcxdaljm().b[7][0]++, err?.error?.mensaje) || (cov_6gcxdaljm().b[7][1]++, err?.error) || (cov_6gcxdaljm().b[7][2]++, "Error al crear el producto"));
              cov_6gcxdaljm().s[47]++;
              import_sweetalert2.default.fire("Error", typeof msg === "string" ? (cov_6gcxdaljm().b[8][0]++, msg) : (cov_6gcxdaljm().b[8][1]++, "Error al crear"), "error");
            }
          });
        }
      }
      static ctorParameters = (cov_6gcxdaljm().s[48]++, () => {
        cov_6gcxdaljm().f[18]++;
        cov_6gcxdaljm().s[49]++;
        return [{
          type: FormBuilder
        }, {
          type: ProductoService
        }, {
          type: ActivatedRoute
        }, {
          type: Router
        }];
      });
    };
    cov_6gcxdaljm().s[50]++;
    FormProductoComponent = __decorate([Component({
      selector: "app-form-producto",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, RouterLink],
      template: form_producto_component_default,
      styles: [form_producto_component_default2]
    })], FormProductoComponent);
  }
});

// src/app/pages/productos/form-producto/form-producto.component.spec.ts
var require_form_producto_component_spec = __commonJS({
  "src/app/pages/productos/form-producto/form-producto.component.spec.ts"(exports) {
    init_testing();
    init_forms();
    init_router();
    init_testing2();
    init_esm();
    init_form_producto_component3();
    init_producto_service();
    describe("FormProductoComponent - Modo Creaci\xF3n", () => {
      let component;
      let fixture;
      let productoServiceSpy;
      let routerSpy;
      const activatedRouteStub = {
        snapshot: { paramMap: convertToParamMap({}) }
      };
      beforeEach(() => __async(null, null, function* () {
        productoServiceSpy = jasmine.createSpyObj("ProductoService", ["guardar", "actualizar", "buscarPorId"]);
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        routerSpy.navigate.and.returnValue(Promise.resolve(true));
        yield TestBed.configureTestingModule({
          imports: [FormProductoComponent, ReactiveFormsModule, RouterTestingModule],
          providers: [
            { provide: ProductoService, useValue: productoServiceSpy },
            { provide: Router, useValue: routerSpy },
            { provide: ActivatedRoute, useValue: activatedRouteStub }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(FormProductoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa iniciar en modo creaci\xF3n", () => {
        expect(component.esEdicion).toBeFalse();
        expect(component.productoId).toBeNull();
      });
      it("deber\xEDa tener categor\xEDas sugeridas predefinidas", () => {
        expect(component.categoriasSugeridas.length).toBeGreaterThan(0);
        expect(component.categoriasSugeridas).toContain("Electr\xF3nica");
        expect(component.categoriasSugeridas).toContain("Ropa");
      });
      it("deber\xEDa requerir nombre", () => {
        component.nombre.setValue("");
        expect(component.nombre.invalid).toBeTrue();
      });
      it("deber\xEDa validar nombre con contenido", () => {
        component.nombre.setValue("Laptop");
        expect(component.nombre.valid).toBeTrue();
      });
      it("deber\xEDa requerir precio mayor a 0", () => {
        component.precio.setValue(0);
        expect(component.precio.invalid).toBeTrue();
      });
      it("deber\xEDa validar precio positivo", () => {
        component.precio.setValue(1e3);
        expect(component.precio.valid).toBeTrue();
      });
      it("deber\xEDa requerir stock mayor o igual a 0", () => {
        component.stock.setValue(-1);
        expect(component.stock.invalid).toBeTrue();
      });
      it("deber\xEDa validar stock igual a 0", () => {
        component.stock.setValue(0);
        expect(component.stock.valid).toBeTrue();
      });
      it("deber\xEDa tener descripci\xF3n y categor\xEDa como campos opcionales", () => {
        expect(component.descripcion.valid).toBeTrue();
        expect(component.categoria.valid).toBeTrue();
      });
      it("deber\xEDa tener todos los getters definidos", () => {
        expect(component.nombre).toBeDefined();
        expect(component.descripcion).toBeDefined();
        expect(component.precio).toBeDefined();
        expect(component.stock).toBeDefined();
        expect(component.categoria).toBeDefined();
      });
      it("deber\xEDa asignar la categor\xEDa al seleccionar una sugerida", () => {
        component.seleccionarCategoria("Electr\xF3nica");
        expect(component.categoria.value).toBe("Electr\xF3nica");
      });
      it("deber\xEDa actualizar la categor\xEDa al seleccionar diferente", () => {
        component.seleccionarCategoria("Electr\xF3nica");
        component.seleccionarCategoria("Deportes");
        expect(component.categoria.value).toBe("Deportes");
      });
      it("no deber\xEDa llamar al servicio si el formulario es inv\xE1lido", () => {
        component.onSubmit();
        expect(productoServiceSpy.guardar).not.toHaveBeenCalled();
      });
      it("deber\xEDa marcar todos los campos como touched al enviar formulario inv\xE1lido", () => {
        component.onSubmit();
        expect(component.nombre.touched).toBeTrue();
        expect(component.precio.touched).toBeTrue();
      });
      it("deber\xEDa llamar a guardar con los datos correctos", fakeAsync(() => {
        const mockProducto = {
          idProducto: 1,
          nombre: "Webcam HD",
          precio: 45e3,
          stock: 10,
          activo: 1
        };
        productoServiceSpy.guardar.and.returnValue(of(mockProducto));
        component.nombre.setValue("Webcam HD");
        component.precio.setValue(45e3);
        component.stock.setValue(10);
        component.productoForm.get("activo").setValue(1);
        component.onSubmit();
        tick(500);
        expect(productoServiceSpy.guardar).toHaveBeenCalled();
        const args = productoServiceSpy.guardar.calls.mostRecent().args[0];
        expect(args.nombre).toBe("Webcam HD");
        expect(args.precio).toBe(45e3);
      }));
      it("deber\xEDa manejar error al crear producto", fakeAsync(() => {
        productoServiceSpy.guardar.and.returnValue(throwError(() => ({ error: { mensaje: "Error de validaci\xF3n" } })));
        component.nombre.setValue("Webcam HD");
        component.precio.setValue(45e3);
        component.stock.setValue(10);
        component.productoForm.get("activo").setValue(1);
        component.onSubmit();
        tick();
        expect(component.enviando).toBeFalse();
      }));
    });
    describe("FormProductoComponent - Modo Edici\xF3n", () => {
      let component;
      let fixture;
      let productoServiceSpy;
      let routerSpy;
      const mockProducto = {
        idProducto: 3,
        nombre: "Laptop Editar",
        descripcion: "Descripci\xF3n original",
        precio: 1e6,
        stock: 5,
        categoria: "Electr\xF3nica",
        activo: 1
      };
      const activatedRouteStubEdicion = {
        snapshot: { paramMap: convertToParamMap({ id: "3" }) }
      };
      beforeEach(() => __async(null, null, function* () {
        productoServiceSpy = jasmine.createSpyObj("ProductoService", ["guardar", "actualizar", "buscarPorId"]);
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        routerSpy.navigate.and.returnValue(Promise.resolve(true));
        productoServiceSpy.buscarPorId.and.returnValue(of(mockProducto));
        yield TestBed.configureTestingModule({
          imports: [FormProductoComponent, ReactiveFormsModule, RouterTestingModule],
          providers: [
            { provide: ProductoService, useValue: productoServiceSpy },
            { provide: Router, useValue: routerSpy },
            { provide: ActivatedRoute, useValue: activatedRouteStubEdicion }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(FormProductoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa iniciar en modo edici\xF3n con ID correcto", () => {
        expect(component.esEdicion).toBeTrue();
        expect(component.productoId).toBe(3);
      });
      it("deber\xEDa cargar el producto al inicializar en modo edici\xF3n", () => {
        expect(productoServiceSpy.buscarPorId).toHaveBeenCalledWith(3);
        expect(component.nombre.value).toBe("Laptop Editar");
        expect(component.precio.value).toBe(1e6);
        expect(component.stock.value).toBe(5);
      });
      it("deber\xEDa llamar a actualizar en modo edici\xF3n", fakeAsync(() => {
        productoServiceSpy.actualizar.and.returnValue(of(mockProducto));
        component.nombre.setValue("Laptop Editado");
        component.precio.setValue(9e5);
        component.stock.setValue(3);
        component.productoForm.get("activo").setValue(1);
        component.onSubmit();
        tick(500);
        expect(productoServiceSpy.actualizar).toHaveBeenCalledWith(3, jasmine.any(Object));
      }));
      it("deber\xEDa manejar error al buscar el producto en modo edici\xF3n", () => __async(null, null, function* () {
        productoServiceSpy.buscarPorId.and.returnValue(throwError(() => new Error("No encontrado")));
        yield TestBed.configureTestingModule({
          imports: [FormProductoComponent, ReactiveFormsModule, RouterTestingModule],
          providers: [
            { provide: ProductoService, useValue: productoServiceSpy },
            { provide: Router, useValue: routerSpy },
            { provide: ActivatedRoute, useValue: activatedRouteStubEdicion }
          ]
        }).compileComponents();
        const newFixture = TestBed.createComponent(FormProductoComponent);
        newFixture.detectChanges();
        expect(productoServiceSpy.buscarPorId).toHaveBeenCalled();
      }));
      it("deber\xEDa manejar error al actualizar producto", fakeAsync(() => {
        productoServiceSpy.actualizar.and.returnValue(throwError(() => ({ error: null })));
        component.nombre.setValue("Test");
        component.precio.setValue(1e3);
        component.stock.setValue(1);
        component.productoForm.get("activo").setValue(1);
        component.onSubmit();
        tick();
        expect(component.enviando).toBeFalse();
      }));
    });
  }
});
export default require_form_producto_component_spec();
//# sourceMappingURL=spec-app-pages-productos-form-producto-form-producto.component.spec.js.map
