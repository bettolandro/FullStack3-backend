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

// angular:jit:template:src\app\pages\usuarios\form-usuario\form-usuario.component.html
var form_usuario_component_default;
var init_form_usuario_component = __esm({
  "angular:jit:template:src\\app\\pages\\usuarios\\form-usuario\\form-usuario.component.html"() {
    form_usuario_component_default = `\r
<div class="page-container fade-in">\r
\r
  <!-- \u2500\u2500 ENCABEZADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">\r
        {{ esEdicion ? 'Editar' : 'Nuevo' }} <span>Usuario</span>\r
      </h1>\r
      <p class="page-subtitle">\r
        {{ esEdicion ? 'Modifica los datos del usuario' : 'Completa el formulario para crear un nuevo usuario' }}\r
      </p>\r
    </div>\r
    <a routerLink="/usuarios" class="btn-outline-custom">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>\r
      </svg>\r
      Volver a la lista\r
    </a>\r
  </div>\r
\r
  <!-- \u2500\u2500 FORMULARIO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="form-container">\r
    <div class="form-card">\r
\r
      <form [formGroup]="usuarioForm" (ngSubmit)="onSubmit()" novalidate>\r
\r
        <!-- \u2500\u2500 SECCI\xD3N: INFORMACI\xD3N PERSONAL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-section-title">Informaci\xF3n personal</div>\r
\r
        <!-- Nombre -->\r
        <div class="form-group">\r
          <label for="nombre">Nombre completo *</label>\r
          <input\r
            id="nombre"\r
            type="text"\r
            formControlName="nombre"\r
            placeholder="Ej: Juan P\xE9rez"\r
            [class.error]="nombre.invalid && nombre.touched"\r
          >\r
          <span class="error-msg" *ngIf="nombre.touched && nombre.errors?.['required']">El nombre es obligatorio</span>\r
          <span class="error-msg" *ngIf="nombre.touched && nombre.errors?.['minlength']">M\xEDnimo 3 caracteres</span>\r
          <span class="error-msg" *ngIf="nombre.touched && nombre.errors?.['maxlength']">M\xE1ximo 100 caracteres</span>\r
        </div>\r
\r
        <!-- Correo -->\r
        <div class="form-group">\r
          <label for="correo">Correo electr\xF3nico *</label>\r
          <input\r
            id="correo"\r
            type="email"\r
            formControlName="correo"\r
            placeholder="usuario@email.com"\r
            [class.error]="correo.invalid && correo.touched"\r
          >\r
          <span class="error-msg" *ngIf="correo.touched && correo.errors?.['required']">El correo es obligatorio</span>\r
          <span class="error-msg" *ngIf="correo.touched && correo.errors?.['email']">Formato de correo inv\xE1lido</span>\r
        </div>\r
\r
        <!-- \u2500\u2500 SECCI\xD3N: SEGURIDAD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-section-title" style="margin-top: 1.5rem">Seguridad</div>\r
\r
        <!-- Password con toggle -->\r
        <div class="form-group">\r
          <label for="password">\r
            Contrase\xF1a {{ esEdicion ? '(requerida para confirmar cambios)' : '*' }}\r
          </label>\r
          <div class="input-with-icon">\r
            <input\r
              id="password"\r
              [type]="mostrarPassword ? 'text' : 'password'"\r
              formControlName="password"\r
              placeholder="{{ esEdicion ? 'Ingresa la contrase\xF1a actual o nueva' : 'M\xEDnimo 3 caracteres' }}"\r
              [class.error]="password.invalid && password.touched"\r
            >\r
            <button type="button" class="icon-btn" (click)="mostrarPassword = !mostrarPassword">\r
              <svg *ngIf="!mostrarPassword" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>\r
              </svg>\r
              <svg *ngIf="mostrarPassword" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>\r
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>\r
                <line x1="1" y1="1" x2="23" y2="23"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <span class="error-msg" *ngIf="password.touched && password.errors?.['minlength']">M\xEDnimo 3 caracteres</span>\r
        </div>\r
\r
        <!-- \u2500\u2500 SECCI\xD3N: ROL Y ESTADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-section-title" style="margin-top: 1.5rem">Rol y estado</div>\r
\r
        <div class="form-row">\r
          <!-- Rol -->\r
          <div class="form-group">\r
            <label for="rol">Rol del usuario *</label>\r
            <select id="rol" formControlName="rol" [class.error]="rol.invalid && rol.touched">\r
              <option value="USER">USER \u2014 Acceso est\xE1ndar</option>\r
              <option value="ADMIN">ADMIN \u2014 Acceso total</option>\r
            </select>\r
            <span class="error-msg" *ngIf="rol.touched && rol.errors?.['required']">Selecciona un rol</span>\r
          </div>\r
\r
          <!-- Estado -->\r
          <div class="form-group">\r
            <label for="activo">Estado</label>\r
            <select id="activo" formControlName="activo">\r
              <option [value]="1">Activo</option>\r
              <option [value]="0">Inactivo</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 BOTONES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="form-actions">\r
          <a routerLink="/usuarios" class="btn-outline-custom">Cancelar</a>\r
          <button type="submit" class="btn-primary-custom" [disabled]="enviando">\r
            <span *ngIf="enviando" class="mini-spinner"></span>\r
            <span>{{ enviando ? 'Guardando...' : (esEdicion ? 'Actualizar usuario' : 'Crear usuario') }}</span>\r
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

// angular:jit:style:src\app\pages\usuarios\form-usuario\form-usuario.component.scss
var form_usuario_component_default2;
var init_form_usuario_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\usuarios\\form-usuario\\form-usuario.component.scss"() {
    form_usuario_component_default2 = "/* src/app/pages/usuarios/form-usuario/form-usuario.component.scss */\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 576px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon input {\n  width: 100%;\n  padding-right: 3rem;\n  background: var(--bg-input);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  transition: var(--transition);\n  outline: none;\n}\n.input-with-icon input:focus {\n  border-color: var(--accent-blue);\n  box-shadow: 0 0 0 3px rgba(79, 142, 247, 0.15);\n}\n.input-with-icon input.error {\n  border-color: var(--accent-red);\n}\n.icon-btn {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n}\n.icon-btn:hover {\n  color: var(--accent-blue);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border-color);\n  flex-wrap: wrap;\n}\n.mini-spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=form-usuario.component.css.map */\n";
  }
});

// src/app/pages/usuarios/form-usuario/form-usuario.component.ts
function cov_xpejlp69w() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\usuarios\\form-usuario\\form-usuario.component.ts";
  var hash = "f43dea5106a596a2e3d3d8f16d65ee5fcba8195f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\usuarios\\form-usuario\\form-usuario.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 133,
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
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 20
        }
      },
      "3": {
        start: {
          line: 22,
          column: 15
        },
        end: {
          line: 22,
          column: 20
        }
      },
      "4": {
        start: {
          line: 24,
          column: 22
        },
        end: {
          line: 24,
          column: 27
        }
      },
      "5": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 21
        }
      },
      "6": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 45
        }
      },
      "7": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 27
        }
      },
      "8": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 29
        }
      },
      "9": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 41,
          column: 11
        }
      },
      "10": {
        start: {
          line: 43,
          column: 19
        },
        end: {
          line: 43,
          column: 57
        }
      },
      "11": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 52,
          column: 9
        }
      },
      "12": {
        start: {
          line: 45,
          column: 12
        },
        end: {
          line: 45,
          column: 34
        }
      },
      "13": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 46,
          column: 33
        }
      },
      "14": {
        start: {
          line: 47,
          column: 12
        },
        end: {
          line: 47,
          column: 47
        }
      },
      "15": {
        start: {
          line: 49,
          column: 12
        },
        end: {
          line: 49,
          column: 63
        }
      },
      "16": {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 50,
          column: 86
        }
      },
      "17": {
        start: {
          line: 51,
          column: 12
        },
        end: {
          line: 51,
          column: 70
        }
      },
      "18": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 72,
          column: 11
        }
      },
      "19": {
        start: {
          line: 60,
          column: 16
        },
        end: {
          line: 66,
          column: 19
        }
      },
      "20": {
        start: {
          line: 69,
          column: 16
        },
        end: {
          line: 69,
          column: 73
        }
      },
      "21": {
        start: {
          line: 70,
          column: 16
        },
        end: {
          line: 70,
          column: 52
        }
      },
      "22": {
        start: {
          line: 75,
          column: 19
        },
        end: {
          line: 75,
          column: 57
        }
      },
      "23": {
        start: {
          line: 76,
          column: 19
        },
        end: {
          line: 76,
          column: 57
        }
      },
      "24": {
        start: {
          line: 77,
          column: 21
        },
        end: {
          line: 77,
          column: 61
        }
      },
      "25": {
        start: {
          line: 78,
          column: 16
        },
        end: {
          line: 78,
          column: 51
        }
      },
      "26": {
        start: {
          line: 79,
          column: 19
        },
        end: {
          line: 79,
          column: 57
        }
      },
      "27": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 85,
          column: 9
        }
      },
      "28": {
        start: {
          line: 83,
          column: 12
        },
        end: {
          line: 83,
          column: 48
        }
      },
      "29": {
        start: {
          line: 84,
          column: 12
        },
        end: {
          line: 84,
          column: 19
        }
      },
      "30": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 29
        }
      },
      "31": {
        start: {
          line: 87,
          column: 22
        },
        end: {
          line: 87,
          column: 51
        }
      },
      "32": {
        start: {
          line: 88,
          column: 8
        },
        end: {
          line: 125,
          column: 9
        }
      },
      "33": {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 97,
          column: 13
        }
      },
      "34": {
        start: {
          line: 94,
          column: 16
        },
        end: {
          line: 94,
          column: 113
        }
      },
      "35": {
        start: {
          line: 95,
          column: 16
        },
        end: {
          line: 95,
          column: 38
        }
      },
      "36": {
        start: {
          line: 96,
          column: 16
        },
        end: {
          line: 96,
          column: 23
        }
      },
      "37": {
        start: {
          line: 98,
          column: 12
        },
        end: {
          line: 109,
          column: 15
        }
      },
      "38": {
        start: {
          line: 100,
          column: 20
        },
        end: {
          line: 100,
          column: 42
        }
      },
      "39": {
        start: {
          line: 101,
          column: 20
        },
        end: {
          line: 102,
          column: 73
        }
      },
      "40": {
        start: {
          line: 102,
          column: 36
        },
        end: {
          line: 102,
          column: 71
        }
      },
      "41": {
        start: {
          line: 105,
          column: 20
        },
        end: {
          line: 105,
          column: 42
        }
      },
      "42": {
        start: {
          line: 106,
          column: 32
        },
        end: {
          line: 106,
          column: 90
        }
      },
      "43": {
        start: {
          line: 107,
          column: 20
        },
        end: {
          line: 107,
          column: 103
        }
      },
      "44": {
        start: {
          line: 113,
          column: 12
        },
        end: {
          line: 124,
          column: 15
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
          column: 20
        },
        end: {
          line: 117,
          column: 73
        }
      },
      "47": {
        start: {
          line: 117,
          column: 36
        },
        end: {
          line: 117,
          column: 71
        }
      },
      "48": {
        start: {
          line: 120,
          column: 20
        },
        end: {
          line: 120,
          column: 42
        }
      },
      "49": {
        start: {
          line: 121,
          column: 32
        },
        end: {
          line: 121,
          column: 96
        }
      },
      "50": {
        start: {
          line: 122,
          column: 20
        },
        end: {
          line: 122,
          column: 98
        }
      },
      "51": {
        start: {
          line: 127,
          column: 28
        },
        end: {
          line: 132,
          column: 5
        }
      },
      "52": {
        start: {
          line: 127,
          column: 34
        },
        end: {
          line: 132,
          column: 5
        }
      },
      "53": {
        start: {
          line: 134,
          column: 0
        },
        end: {
          line: 142,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            line: 26,
            column: 12
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 15
          },
          end: {
            line: 53,
            column: 5
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        loc: {
          start: {
            line: 55,
            column: 22
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 55
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 18
          },
          end: {
            line: 57,
            column: 19
          }
        },
        loc: {
          start: {
            line: 57,
            column: 31
          },
          end: {
            line: 67,
            column: 13
          }
        },
        line: 57
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 68,
            column: 19
          },
          end: {
            line: 68,
            column: 20
          }
        },
        loc: {
          start: {
            line: 68,
            column: 25
          },
          end: {
            line: 71,
            column: 13
          }
        },
        line: 68
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 17
          },
          end: {
            line: 75,
            column: 59
          }
        },
        line: 75
      },
      "6": {
        name: "(anonymous_6)",
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
            column: 17
          },
          end: {
            line: 76,
            column: 59
          }
        },
        line: 76
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        },
        loc: {
          start: {
            line: 77,
            column: 19
          },
          end: {
            line: 77,
            column: 63
          }
        },
        line: 77
      },
      "8": {
        name: "(anonymous_8)",
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
            column: 14
          },
          end: {
            line: 78,
            column: 53
          }
        },
        line: 78
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        loc: {
          start: {
            line: 79,
            column: 17
          },
          end: {
            line: 79,
            column: 59
          }
        },
        line: 79
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        loc: {
          start: {
            line: 81,
            column: 15
          },
          end: {
            line: 126,
            column: 5
          }
        },
        line: 81
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 99,
            column: 22
          },
          end: {
            line: 99,
            column: 23
          }
        },
        loc: {
          start: {
            line: 99,
            column: 28
          },
          end: {
            line: 103,
            column: 17
          }
        },
        line: 99
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 102,
            column: 30
          },
          end: {
            line: 102,
            column: 31
          }
        },
        loc: {
          start: {
            line: 102,
            column: 36
          },
          end: {
            line: 102,
            column: 71
          }
        },
        line: 102
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 104,
            column: 23
          },
          end: {
            line: 104,
            column: 24
          }
        },
        loc: {
          start: {
            line: 104,
            column: 32
          },
          end: {
            line: 108,
            column: 17
          }
        },
        line: 104
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 114,
            column: 22
          },
          end: {
            line: 114,
            column: 23
          }
        },
        loc: {
          start: {
            line: 114,
            column: 28
          },
          end: {
            line: 118,
            column: 17
          }
        },
        line: 114
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 117,
            column: 30
          },
          end: {
            line: 117,
            column: 31
          }
        },
        loc: {
          start: {
            line: 117,
            column: 36
          },
          end: {
            line: 117,
            column: 71
          }
        },
        line: 117
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 119,
            column: 23
          },
          end: {
            line: 119,
            column: 24
          }
        },
        loc: {
          start: {
            line: 119,
            column: 32
          },
          end: {
            line: 123,
            column: 17
          }
        },
        line: 119
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 127,
            column: 28
          },
          end: {
            line: 127,
            column: 29
          }
        },
        loc: {
          start: {
            line: 127,
            column: 34
          },
          end: {
            line: 132,
            column: 5
          }
        },
        line: 127
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 52,
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
        line: 44
      },
      "1": {
        loc: {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 85,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 85,
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
        line: 82
      },
      "2": {
        loc: {
          start: {
            line: 88,
            column: 8
          },
          end: {
            line: 125,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 8
          },
          end: {
            line: 125,
            column: 9
          }
        }, {
          start: {
            line: 111,
            column: 13
          },
          end: {
            line: 125,
            column: 9
          }
        }],
        line: 88
      },
      "3": {
        loc: {
          start: {
            line: 92,
            column: 12
          },
          end: {
            line: 97,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 92,
            column: 12
          },
          end: {
            line: 97,
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
        line: 92
      },
      "4": {
        loc: {
          start: {
            line: 106,
            column: 32
          },
          end: {
            line: 106,
            column: 90
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 106,
            column: 32
          },
          end: {
            line: 106,
            column: 51
          }
        }, {
          start: {
            line: 106,
            column: 55
          },
          end: {
            line: 106,
            column: 65
          }
        }, {
          start: {
            line: 106,
            column: 69
          },
          end: {
            line: 106,
            column: 90
          }
        }],
        line: 106
      },
      "5": {
        loc: {
          start: {
            line: 107,
            column: 39
          },
          end: {
            line: 107,
            column: 92
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 107,
            column: 65
          },
          end: {
            line: 107,
            column: 68
          }
        }, {
          start: {
            line: 107,
            column: 71
          },
          end: {
            line: 107,
            column: 92
          }
        }],
        line: 107
      },
      "6": {
        loc: {
          start: {
            line: 121,
            column: 32
          },
          end: {
            line: 121,
            column: 96
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 121,
            column: 32
          },
          end: {
            line: 121,
            column: 51
          }
        }, {
          start: {
            line: 121,
            column: 55
          },
          end: {
            line: 121,
            column: 65
          }
        }, {
          start: {
            line: 121,
            column: 69
          },
          end: {
            line: 121,
            column: 96
          }
        }],
        line: 121
      },
      "7": {
        loc: {
          start: {
            line: 122,
            column: 39
          },
          end: {
            line: 122,
            column: 87
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 122,
            column: 65
          },
          end: {
            line: 122,
            column: 68
          }
        }, {
          start: {
            line: 122,
            column: 71
          },
          end: {
            line: 122,
            column: 87
          }
        }],
        line: 122
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
      "17": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0],
      "5": [0, 0],
      "6": [0, 0, 0],
      "7": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "form-usuario.component.js",
      sourceRoot: "",
      sources: ["form-usuario.component.ts"],
      names: [],
      mappings: "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",
      sourcesContent: ["\r\nimport { Component, OnInit } from '@angular/core';\r\nimport { CommonModule } from '@angular/common';\r\nimport {\r\n  FormBuilder,\r\n  FormGroup,\r\n  Validators,\r\n  ReactiveFormsModule\r\n} from '@angular/forms';\r\nimport { ActivatedRoute, Router, RouterLink } from '@angular/router';\r\nimport Swal from 'sweetalert2';\r\nimport { UsuarioService } from '../../../core/services/usuario.service';\r\n\r\n@Component({\r\n  selector: 'app-form-usuario',\r\n  standalone: true,\r\n  imports: [CommonModule, ReactiveFormsModule, RouterLink],\r\n  templateUrl: './form-usuario.component.html',\r\n  styleUrls: ['./form-usuario.component.scss']\r\n})\r\nexport class FormUsuarioComponent implements OnInit {\r\n\r\n  // Formulario reactivo\r\n  usuarioForm!: FormGroup;\r\n\r\n  // true = modo edici\xF3n, false = modo creaci\xF3n\r\n  esEdicion = false;\r\n\r\n  // ID del usuario a editar (viene de la URL)\r\n  usuarioId: number | null = null;\r\n\r\n  // Estado de env\xEDo\r\n  enviando = false;\r\n\r\n  // Para mostrar/ocultar contrase\xF1a\r\n  mostrarPassword = false;\r\n\r\n  constructor(\r\n    private fb: FormBuilder,\r\n    private usuarioService: UsuarioService,\r\n    private route: ActivatedRoute,    // Lee par\xE1metros de la URL\r\n    private router: Router\r\n  ) {}\r\n\r\n  ngOnInit(): void {\r\n    // Construir el formulario con validaciones\r\n    this.usuarioForm = this.fb.group({\r\n      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],\r\n      correo: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],\r\n      // En edici\xF3n, el password es opcional (si se deja vac\xEDo no se cambia)\r\n      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],\r\n      rol: ['USER', [Validators.required]],              // Valor por defecto: USER\r\n      activo: [1, [Validators.required]]                 // Activo por defecto\r\n    });\r\n\r\n    // Verificar si hay un :id en la URL \u2192 modo edici\xF3n\r\n    const id = this.route.snapshot.paramMap.get('id');\r\n    if (id) {\r\n      this.esEdicion = true;\r\n      this.usuarioId = +id;   // Convertir string a number con +\r\n      this.cargarUsuario(this.usuarioId);\r\n\r\n      // En edici\xF3n, el password no es obligatorio (puede dejarse vac\xEDo)\r\n      this.usuarioForm.get('password')!.clearValidators();\r\n      this.usuarioForm.get('password')!.setValidators([Validators.minLength(3)]);\r\n      this.usuarioForm.get('password')!.updateValueAndValidity();\r\n    }\r\n  }\r\n\r\n  // \u2500\u2500 CARGAR DATOS DEL USUARIO A EDITAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  cargarUsuario(id: number): void {\r\n    this.usuarioService.buscarPorId(id).subscribe({\r\n      next: (usuario) => {\r\n        // Rellenar el formulario con los datos existentes\r\n        // No se carga el password (por seguridad)\r\n        this.usuarioForm.patchValue({\r\n          nombre: usuario.nombre,\r\n          correo: usuario.correo,\r\n          password: '',         // Vac\xEDo: si no se llena, no cambia\r\n          rol: usuario.rol,\r\n          activo: usuario.activo\r\n        });\r\n      },\r\n      error: () => {\r\n        Swal.fire('Error', 'No se encontr\xF3 el usuario', 'error');\r\n        this.router.navigate(['/usuarios']);\r\n      }\r\n    });\r\n  }\r\n\r\n  // \u2500\u2500 GETTERS R\xC1PIDOS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  get nombre()   { return this.usuarioForm.get('nombre')!; }\r\n  get correo()   { return this.usuarioForm.get('correo')!; }\r\n  get password() { return this.usuarioForm.get('password')!; }\r\n  get rol()      { return this.usuarioForm.get('rol')!; }\r\n  get activo()   { return this.usuarioForm.get('activo')!; }\r\n\r\n  // \u2500\u2500 SUBMIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  onSubmit(): void {\r\n    if (this.usuarioForm.invalid) {\r\n      this.usuarioForm.markAllAsTouched();\r\n      return;\r\n    }\r\n\r\n    this.enviando = true;\r\n    const datos = { ...this.usuarioForm.value };\r\n\r\n    if (this.esEdicion) {\r\n      // Si el password qued\xF3 vac\xEDo, cargar el original no es posible sin otro GET.\r\n      // La mejor pr\xE1ctica: si no ingres\xF3 password nuevo, no actualizarlo.\r\n      // El backend siempre requiere password \u2192 si est\xE1 vac\xEDo, avisamos al usuario.\r\n      if (!datos.password) {\r\n        // Pedimos que ingrese password de todas formas (el MS lo requiere)\r\n        Swal.fire('Atenci\xF3n', 'Debes ingresar la contrase\xF1a para confirmar la actualizaci\xF3n', 'warning');\r\n        this.enviando = false;\r\n        return;\r\n      }\r\n\r\n      this.usuarioService.actualizar(this.usuarioId!, datos).subscribe({\r\n        next: () => {\r\n          this.enviando = false;\r\n          Swal.fire('Actualizado', 'Usuario actualizado correctamente', 'success')\r\n            .then(() => this.router.navigate(['/usuarios']));\r\n        },\r\n        error: (err) => {\r\n          this.enviando = false;\r\n          const msg = err?.error?.mensaje || err?.error || 'Error al actualizar';\r\n          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al actualizar', 'error');\r\n        }\r\n      });\r\n\r\n    } else {\r\n      // Crear nuevo usuario\r\n      this.usuarioService.guardar(datos).subscribe({\r\n        next: () => {\r\n          this.enviando = false;\r\n          Swal.fire('Creado', 'Usuario creado correctamente', 'success')\r\n            .then(() => this.router.navigate(['/usuarios']));\r\n        },\r\n        error: (err) => {\r\n          this.enviando = false;\r\n          const msg = err?.error?.mensaje || err?.error || 'Error al crear el usuario';\r\n          Swal.fire('Error', typeof msg === 'string' ? msg : 'Error al crear', 'error');\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f43dea5106a596a2e3d3d8f16d65ee5fcba8195f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_xpejlp69w = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var import_sweetalert2, FormUsuarioComponent;
var init_form_usuario_component3 = __esm({
  "src/app/pages/usuarios/form-usuario/form-usuario.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_form_usuario_component();
    init_form_usuario_component2();
    init_core();
    init_common();
    init_forms();
    init_router();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    init_usuario_service();
    cov_xpejlp69w();
    cov_xpejlp69w().s[0]++;
    FormUsuarioComponent = class FormUsuarioComponent2 {
      fb;
      usuarioService;
      route;
      router;
      // Formulario reactivo
      usuarioForm;
      // true = modo edición, false = modo creación
      esEdicion = (cov_xpejlp69w().s[1]++, false);
      // ID del usuario a editar (viene de la URL)
      usuarioId = (cov_xpejlp69w().s[2]++, null);
      // Estado de envío
      enviando = (cov_xpejlp69w().s[3]++, false);
      // Para mostrar/ocultar contraseña
      mostrarPassword = (cov_xpejlp69w().s[4]++, false);
      constructor(fb, usuarioService, route, router) {
        cov_xpejlp69w().f[0]++;
        cov_xpejlp69w().s[5]++;
        this.fb = fb;
        cov_xpejlp69w().s[6]++;
        this.usuarioService = usuarioService;
        cov_xpejlp69w().s[7]++;
        this.route = route;
        cov_xpejlp69w().s[8]++;
        this.router = router;
      }
      ngOnInit() {
        cov_xpejlp69w().f[1]++;
        cov_xpejlp69w().s[9]++;
        this.usuarioForm = this.fb.group({
          nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
          correo: ["", [Validators.required, Validators.email, Validators.maxLength(120)]],
          // En edición, el password es opcional (si se deja vacío no se cambia)
          password: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
          rol: ["USER", [Validators.required]],
          // Valor por defecto: USER
          activo: [1, [Validators.required]]
          // Activo por defecto
        });
        const id = (cov_xpejlp69w().s[10]++, this.route.snapshot.paramMap.get("id"));
        cov_xpejlp69w().s[11]++;
        if (id) {
          cov_xpejlp69w().b[0][0]++;
          cov_xpejlp69w().s[12]++;
          this.esEdicion = true;
          cov_xpejlp69w().s[13]++;
          this.usuarioId = +id;
          cov_xpejlp69w().s[14]++;
          this.cargarUsuario(this.usuarioId);
          cov_xpejlp69w().s[15]++;
          this.usuarioForm.get("password").clearValidators();
          cov_xpejlp69w().s[16]++;
          this.usuarioForm.get("password").setValidators([Validators.minLength(3)]);
          cov_xpejlp69w().s[17]++;
          this.usuarioForm.get("password").updateValueAndValidity();
        } else {
          cov_xpejlp69w().b[0][1]++;
        }
      }
      // ── CARGAR DATOS DEL USUARIO A EDITAR ───────────────────
      cargarUsuario(id) {
        cov_xpejlp69w().f[2]++;
        cov_xpejlp69w().s[18]++;
        this.usuarioService.buscarPorId(id).subscribe({
          next: (usuario) => {
            cov_xpejlp69w().f[3]++;
            cov_xpejlp69w().s[19]++;
            this.usuarioForm.patchValue({
              nombre: usuario.nombre,
              correo: usuario.correo,
              password: "",
              // Vacío: si no se llena, no cambia
              rol: usuario.rol,
              activo: usuario.activo
            });
          },
          error: () => {
            cov_xpejlp69w().f[4]++;
            cov_xpejlp69w().s[20]++;
            import_sweetalert2.default.fire("Error", "No se encontr\xF3 el usuario", "error");
            cov_xpejlp69w().s[21]++;
            this.router.navigate(["/usuarios"]);
          }
        });
      }
      // ── GETTERS RÁPIDOS ──────────────────────────────────────
      get nombre() {
        cov_xpejlp69w().f[5]++;
        cov_xpejlp69w().s[22]++;
        return this.usuarioForm.get("nombre");
      }
      get correo() {
        cov_xpejlp69w().f[6]++;
        cov_xpejlp69w().s[23]++;
        return this.usuarioForm.get("correo");
      }
      get password() {
        cov_xpejlp69w().f[7]++;
        cov_xpejlp69w().s[24]++;
        return this.usuarioForm.get("password");
      }
      get rol() {
        cov_xpejlp69w().f[8]++;
        cov_xpejlp69w().s[25]++;
        return this.usuarioForm.get("rol");
      }
      get activo() {
        cov_xpejlp69w().f[9]++;
        cov_xpejlp69w().s[26]++;
        return this.usuarioForm.get("activo");
      }
      // ── SUBMIT ───────────────────────────────────────────────
      onSubmit() {
        cov_xpejlp69w().f[10]++;
        cov_xpejlp69w().s[27]++;
        if (this.usuarioForm.invalid) {
          cov_xpejlp69w().b[1][0]++;
          cov_xpejlp69w().s[28]++;
          this.usuarioForm.markAllAsTouched();
          cov_xpejlp69w().s[29]++;
          return;
        } else {
          cov_xpejlp69w().b[1][1]++;
        }
        cov_xpejlp69w().s[30]++;
        this.enviando = true;
        const datos = (cov_xpejlp69w().s[31]++, __spreadValues({}, this.usuarioForm.value));
        cov_xpejlp69w().s[32]++;
        if (this.esEdicion) {
          cov_xpejlp69w().b[2][0]++;
          cov_xpejlp69w().s[33]++;
          if (!datos.password) {
            cov_xpejlp69w().b[3][0]++;
            cov_xpejlp69w().s[34]++;
            import_sweetalert2.default.fire("Atenci\xF3n", "Debes ingresar la contrase\xF1a para confirmar la actualizaci\xF3n", "warning");
            cov_xpejlp69w().s[35]++;
            this.enviando = false;
            cov_xpejlp69w().s[36]++;
            return;
          } else {
            cov_xpejlp69w().b[3][1]++;
          }
          cov_xpejlp69w().s[37]++;
          this.usuarioService.actualizar(this.usuarioId, datos).subscribe({
            next: () => {
              cov_xpejlp69w().f[11]++;
              cov_xpejlp69w().s[38]++;
              this.enviando = false;
              cov_xpejlp69w().s[39]++;
              import_sweetalert2.default.fire("Actualizado", "Usuario actualizado correctamente", "success").then(() => {
                cov_xpejlp69w().f[12]++;
                cov_xpejlp69w().s[40]++;
                return this.router.navigate(["/usuarios"]);
              });
            },
            error: (err) => {
              cov_xpejlp69w().f[13]++;
              cov_xpejlp69w().s[41]++;
              this.enviando = false;
              const msg = (cov_xpejlp69w().s[42]++, (cov_xpejlp69w().b[4][0]++, err?.error?.mensaje) || (cov_xpejlp69w().b[4][1]++, err?.error) || (cov_xpejlp69w().b[4][2]++, "Error al actualizar"));
              cov_xpejlp69w().s[43]++;
              import_sweetalert2.default.fire("Error", typeof msg === "string" ? (cov_xpejlp69w().b[5][0]++, msg) : (cov_xpejlp69w().b[5][1]++, "Error al actualizar"), "error");
            }
          });
        } else {
          cov_xpejlp69w().b[2][1]++;
          cov_xpejlp69w().s[44]++;
          this.usuarioService.guardar(datos).subscribe({
            next: () => {
              cov_xpejlp69w().f[14]++;
              cov_xpejlp69w().s[45]++;
              this.enviando = false;
              cov_xpejlp69w().s[46]++;
              import_sweetalert2.default.fire("Creado", "Usuario creado correctamente", "success").then(() => {
                cov_xpejlp69w().f[15]++;
                cov_xpejlp69w().s[47]++;
                return this.router.navigate(["/usuarios"]);
              });
            },
            error: (err) => {
              cov_xpejlp69w().f[16]++;
              cov_xpejlp69w().s[48]++;
              this.enviando = false;
              const msg = (cov_xpejlp69w().s[49]++, (cov_xpejlp69w().b[6][0]++, err?.error?.mensaje) || (cov_xpejlp69w().b[6][1]++, err?.error) || (cov_xpejlp69w().b[6][2]++, "Error al crear el usuario"));
              cov_xpejlp69w().s[50]++;
              import_sweetalert2.default.fire("Error", typeof msg === "string" ? (cov_xpejlp69w().b[7][0]++, msg) : (cov_xpejlp69w().b[7][1]++, "Error al crear"), "error");
            }
          });
        }
      }
      static ctorParameters = (cov_xpejlp69w().s[51]++, () => {
        cov_xpejlp69w().f[17]++;
        cov_xpejlp69w().s[52]++;
        return [{
          type: FormBuilder
        }, {
          type: UsuarioService
        }, {
          type: ActivatedRoute
        }, {
          type: Router
        }];
      });
    };
    cov_xpejlp69w().s[53]++;
    FormUsuarioComponent = __decorate([Component({
      selector: "app-form-usuario",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, RouterLink],
      template: form_usuario_component_default,
      styles: [form_usuario_component_default2]
    })], FormUsuarioComponent);
  }
});

// src/app/pages/usuarios/form-usuario/form-usuario.component.spec.ts
var require_form_usuario_component_spec = __commonJS({
  "src/app/pages/usuarios/form-usuario/form-usuario.component.spec.ts"(exports) {
    init_testing();
    init_forms();
    init_router();
    init_testing2();
    init_esm();
    init_form_usuario_component3();
    init_usuario_service();
    describe("FormUsuarioComponent - Modo Creaci\xF3n", () => {
      let component;
      let fixture;
      let usuarioServiceSpy;
      let routerSpy;
      const activatedRouteStub = {
        snapshot: { paramMap: convertToParamMap({}) }
      };
      beforeEach(() => __async(null, null, function* () {
        usuarioServiceSpy = jasmine.createSpyObj("UsuarioService", ["guardar", "actualizar", "buscarPorId"]);
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        routerSpy.navigate.and.returnValue(Promise.resolve(true));
        yield TestBed.configureTestingModule({
          imports: [FormUsuarioComponent, ReactiveFormsModule, RouterTestingModule],
          providers: [
            { provide: UsuarioService, useValue: usuarioServiceSpy },
            { provide: Router, useValue: routerSpy },
            { provide: ActivatedRoute, useValue: activatedRouteStub }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(FormUsuarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente en modo creaci\xF3n", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa iniciar en modo creaci\xF3n (esEdicion = false)", () => {
        expect(component.esEdicion).toBeFalse();
      });
      it("deber\xEDa inicializar el formulario con valores por defecto", () => {
        expect(component.usuarioForm).toBeDefined();
        expect(component.rol.value).toBe("USER");
        expect(component.activo.value).toBe(1);
      });
      it("deber\xEDa invalidar nombre con menos de 3 caracteres", () => {
        component.nombre.setValue("AB");
        expect(component.nombre.invalid).toBeTrue();
      });
      it("deber\xEDa validar nombre con 3 o m\xE1s caracteres", () => {
        component.nombre.setValue("Ana");
        expect(component.nombre.valid).toBeTrue();
      });
      it("deber\xEDa requerir un correo con formato v\xE1lido", () => {
        component.correo.setValue("no-es-email");
        expect(component.correo.invalid).toBeTrue();
      });
      it("deber\xEDa validar correo con formato correcto", () => {
        component.correo.setValue("valid@email.com");
        expect(component.correo.valid).toBeTrue();
      });
      it("deber\xEDa requerir password en modo creaci\xF3n", () => {
        component.password.setValue("");
        expect(component.password.invalid).toBeTrue();
      });
      it("deber\xEDa invalidar password con menos de 3 caracteres", () => {
        component.password.setValue("ab");
        expect(component.password.invalid).toBeTrue();
      });
      it("deber\xEDa tener todos los getters funcionando", () => {
        expect(component.nombre).toBeDefined();
        expect(component.correo).toBeDefined();
        expect(component.password).toBeDefined();
        expect(component.rol).toBeDefined();
        expect(component.activo).toBeDefined();
      });
      it("no deber\xEDa llamar al servicio si el formulario es inv\xE1lido", () => {
        component.onSubmit();
        expect(usuarioServiceSpy.guardar).not.toHaveBeenCalled();
      });
      it("deber\xEDa marcar todos los campos como touched si el formulario es inv\xE1lido", () => {
        component.onSubmit();
        expect(component.nombre.touched).toBeTrue();
        expect(component.correo.touched).toBeTrue();
      });
      it("deber\xEDa llamar a guardar con los datos del formulario", fakeAsync(() => {
        const mockUsuario = {
          idUsuario: 1,
          nombre: "Test",
          correo: "test@test.com",
          password: "test123",
          rol: "USER",
          activo: 1
        };
        usuarioServiceSpy.guardar.and.returnValue(of(mockUsuario));
        component.nombre.setValue("Test");
        component.correo.setValue("test@test.com");
        component.password.setValue("test123");
        component.rol.setValue("USER");
        component.activo.setValue(1);
        component.onSubmit();
        tick(500);
        expect(usuarioServiceSpy.guardar).toHaveBeenCalled();
      }));
      it("deber\xEDa manejar error al crear usuario", fakeAsync(() => {
        usuarioServiceSpy.guardar.and.returnValue(throwError(() => ({ error: { mensaje: "Correo ya existe" } })));
        component.nombre.setValue("Test");
        component.correo.setValue("test@test.com");
        component.password.setValue("test123");
        component.rol.setValue("USER");
        component.activo.setValue(1);
        component.onSubmit();
        tick();
        expect(component.enviando).toBeFalse();
      }));
    });
    describe("FormUsuarioComponent - Modo Edici\xF3n", () => {
      let component;
      let fixture;
      let usuarioServiceSpy;
      let routerSpy;
      const mockUsuario = {
        idUsuario: 5,
        nombre: "Usuario Editar",
        correo: "editar@test.com",
        password: "pass123",
        rol: "USER",
        activo: 1
      };
      const activatedRouteStubEdicion = {
        snapshot: { paramMap: convertToParamMap({ id: "5" }) }
      };
      beforeEach(() => __async(null, null, function* () {
        usuarioServiceSpy = jasmine.createSpyObj("UsuarioService", ["guardar", "actualizar", "buscarPorId"]);
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        routerSpy.navigate.and.returnValue(Promise.resolve(true));
        usuarioServiceSpy.buscarPorId.and.returnValue(of(mockUsuario));
        yield TestBed.configureTestingModule({
          imports: [FormUsuarioComponent, ReactiveFormsModule, RouterTestingModule],
          providers: [
            { provide: UsuarioService, useValue: usuarioServiceSpy },
            { provide: Router, useValue: routerSpy },
            { provide: ActivatedRoute, useValue: activatedRouteStubEdicion }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(FormUsuarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa iniciar en modo edici\xF3n cuando hay un ID en la URL", () => {
        expect(component.esEdicion).toBeTrue();
        expect(component.usuarioId).toBe(5);
      });
      it("deber\xEDa cargar el usuario al inicializar en modo edici\xF3n", () => {
        expect(usuarioServiceSpy.buscarPorId).toHaveBeenCalledWith(5);
        expect(component.nombre.value).toBe("Usuario Editar");
        expect(component.correo.value).toBe("editar@test.com");
      });
      it("deber\xEDa advertir si se intenta guardar sin password en modo edici\xF3n", fakeAsync(() => {
        component.nombre.setValue("Test Edit");
        component.correo.setValue("editar@test.com");
        component.password.setValue("");
        component.rol.setValue("USER");
        component.activo.setValue(1);
        component.onSubmit();
        tick();
        expect(component.enviando).toBeFalse();
        expect(usuarioServiceSpy.actualizar).not.toHaveBeenCalled();
      }));
      it("deber\xEDa llamar a actualizar cuando el formulario es v\xE1lido en modo edici\xF3n", fakeAsync(() => {
        usuarioServiceSpy.actualizar.and.returnValue(of(mockUsuario));
        component.nombre.setValue("Usuario Actualizado");
        component.correo.setValue("editar@test.com");
        component.password.setValue("newpass123");
        component.rol.setValue("USER");
        component.activo.setValue(1);
        component.onSubmit();
        tick(500);
        expect(usuarioServiceSpy.actualizar).toHaveBeenCalledWith(5, jasmine.any(Object));
      }));
      it("deber\xEDa manejar error al buscar el usuario en modo edici\xF3n", () => __async(null, null, function* () {
        usuarioServiceSpy.buscarPorId.and.returnValue(throwError(() => new Error("No encontrado")));
        yield TestBed.configureTestingModule({
          imports: [FormUsuarioComponent, ReactiveFormsModule, RouterTestingModule],
          providers: [
            { provide: UsuarioService, useValue: usuarioServiceSpy },
            { provide: Router, useValue: routerSpy },
            { provide: ActivatedRoute, useValue: activatedRouteStubEdicion }
          ]
        }).compileComponents();
        const newFixture = TestBed.createComponent(FormUsuarioComponent);
        newFixture.detectChanges();
        expect(usuarioServiceSpy.buscarPorId).toHaveBeenCalled();
      }));
    });
  }
});
export default require_form_usuario_component_spec();
//# sourceMappingURL=spec-app-pages-usuarios-form-usuario-form-usuario.component.spec.js.map
