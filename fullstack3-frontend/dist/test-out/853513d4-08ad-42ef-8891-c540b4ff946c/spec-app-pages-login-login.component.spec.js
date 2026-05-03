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
  AuthService,
  init_auth_service
} from "./chunk-6YKIA4DS.js";
import {
  Router,
  init_router
} from "./chunk-45UUSLVD.js";
import {
  CommonModule,
  init_common
} from "./chunk-QT67HBTK.js";
import "./chunk-J2TET66I.js";
import "./chunk-DPIYGMOA.js";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
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

// angular:jit:template:src\app\pages\login\login.component.html
var login_component_default;
var init_login_component = __esm({
  "angular:jit:template:src\\app\\pages\\login\\login.component.html"() {
    login_component_default = `\r
<div class="login-page">\r
\r
  <!-- Fondo decorativo con grid y gradientes -->\r
  <div class="login-bg">\r
    <div class="grid-overlay"></div>\r
    <div class="glow glow-1"></div>\r
    <div class="glow glow-2"></div>\r
  </div>\r
\r
  <!-- Tarjeta central del formulario -->\r
  <div class="login-card fade-in">\r
\r
    <!-- \u2500\u2500 ENCABEZADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="login-header">\r
      <div class="login-logo">\r
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>\r
        </svg>\r
      </div>\r
      <h1 class="login-title">FullStack<span>3</span></h1>\r
      <p class="login-subtitle">Sistema de Gesti\xF3n \xB7 Ingresa tus credenciales</p>\r
    </div>\r
\r
    <!-- \u2500\u2500 FORMULARIO REACTIVO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate>\r
\r
      <!-- Campo: Correo -->\r
      <div class="form-group">\r
        <label for="correo">Correo electr\xF3nico</label>\r
        <div class="input-wrapper">\r
          <!-- \xCDcono decorativo -->\r
          <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>\r
            <polyline points="22,6 12,13 2,6"/>\r
          </svg>\r
          <input\r
            id="correo"\r
            type="email"\r
            formControlName="correo"\r
            placeholder="usuario@email.com"\r
            autocomplete="email"\r
            [class.error]="correo.invalid && correo.touched"\r
          >\r
        </div>\r
        <!-- Mensajes de validaci\xF3n reactiva -->\r
        <span class="error-msg" *ngIf="correo.touched && correo.errors?.['required']">\r
          El correo es obligatorio\r
        </span>\r
        <span class="error-msg" *ngIf="correo.touched && correo.errors?.['email']">\r
          Ingresa un correo v\xE1lido\r
        </span>\r
      </div>\r
\r
      <!-- Campo: Password -->\r
      <div class="form-group">\r
        <label for="password">Contrase\xF1a</label>\r
        <div class="input-wrapper">\r
          <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>\r
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>\r
          </svg>\r
          <!-- El tipo cambia seg\xFAn mostrarPassword -->\r
          <input\r
            id="password"\r
            [type]="mostrarPassword ? 'text' : 'password'"\r
            formControlName="password"\r
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
            autocomplete="current-password"\r
            [class.error]="password.invalid && password.touched"\r
          >\r
          <!-- Bot\xF3n para alternar visibilidad -->\r
          <button type="button" class="toggle-password" (click)="togglePassword()" tabindex="-1">\r
            <svg *ngIf="!mostrarPassword" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
              <circle cx="12" cy="12" r="3"/>\r
            </svg>\r
            <svg *ngIf="mostrarPassword" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>\r
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>\r
              <line x1="1" y1="1" x2="23" y2="23"/>\r
            </svg>\r
          </button>\r
        </div>\r
        <span class="error-msg" *ngIf="password.touched && password.errors?.['required']">\r
          La contrase\xF1a es obligatoria\r
        </span>\r
        <span class="error-msg" *ngIf="password.touched && password.errors?.['minlength']">\r
          M\xEDnimo 3 caracteres\r
        </span>\r
      </div>\r
\r
      <!-- Bot\xF3n Submit -->\r
      <button\r
        type="submit"\r
        class="btn-login"\r
        [disabled]="cargando"\r
      >\r
        <!-- Spinner mientras carga -->\r
        <span *ngIf="cargando" class="btn-spinner"></span>\r
        <span *ngIf="!cargando">\r
          Iniciar sesi\xF3n\r
        </span>\r
        <span *ngIf="cargando">Verificando...</span>\r
      </button>\r
\r
    </form>\r
\r
    \r
\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\login\login.component.scss
var login_component_default2;
var init_login_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\login\\login.component.scss"() {
    login_component_default2 = '@charset "UTF-8";\n\n/* src/app/pages/login/login.component.scss */\n.login-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  background: var(--bg-primary);\n}\n.login-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.grid-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(79, 142, 247, 0.04) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(79, 142, 247, 0.04) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n}\n.glow {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n}\n.glow.glow-1 {\n  width: 400px;\n  height: 400px;\n  background: rgba(79, 142, 247, 0.12);\n  top: -100px;\n  right: -100px;\n}\n.glow.glow-2 {\n  width: 300px;\n  height: 300px;\n  background: rgba(168, 85, 247, 0.08);\n  bottom: -80px;\n  left: -80px;\n}\n.login-card {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 420px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  padding: 2.5rem;\n  box-shadow: var(--shadow-lg), 0 0 60px rgba(79, 142, 247, 0.06);\n}\n.login-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.login-logo {\n  width: 56px;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-blue),\n      var(--accent-cyan));\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  margin: 0 auto 1rem;\n  box-shadow: 0 8px 24px rgba(79, 142, 247, 0.35);\n}\n.login-title {\n  font-family: var(--font-display);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin-bottom: 0.4rem;\n}\n.login-title span {\n  color: var(--accent-blue);\n}\n.login-subtitle {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n}\n.form-group {\n  margin-bottom: 1.25rem;\n}\n.form-group label {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n  font-family: var(--font-display);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.input-wrapper {\n  position: relative;\n}\n.input-wrapper .input-icon {\n  position: absolute;\n  left: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  pointer-events: none;\n}\n.input-wrapper input {\n  width: 100%;\n  background: var(--bg-input);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  padding: 0.75rem 3rem 0.75rem 2.75rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  transition: var(--transition);\n  outline: none;\n}\n.input-wrapper input:focus {\n  border-color: var(--accent-blue);\n  box-shadow: 0 0 0 3px rgba(79, 142, 247, 0.15);\n}\n.input-wrapper input::placeholder {\n  color: var(--text-muted);\n  letter-spacing: 0;\n}\n.input-wrapper input.error {\n  border-color: var(--accent-red);\n}\n.toggle-password {\n  position: absolute;\n  right: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n}\n.toggle-password:hover {\n  color: var(--accent-blue);\n}\n.btn-login {\n  width: 100%;\n  margin-top: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-blue),\n      var(--accent-blue-dark));\n  color: white;\n  border: none;\n  padding: 0.875rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  letter-spacing: 0.02em;\n}\n.btn-login:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-accent);\n}\n.btn-login:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.login-footer {\n  margin-top: 1.75rem;\n  text-align: center;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.login-footer strong {\n  color: var(--accent-blue);\n}\n/*# sourceMappingURL=login.component.css.map */\n';
  }
});

// src/app/pages/login/login.component.ts
function cov_1t3x7g1xb5() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\login\\login.component.ts";
  var hash = "f1e8f3c1b8fa99e56d5fb91f636a1ba8953fb38c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\pages\\login\\login.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 21
        },
        end: {
          line: 92,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 20
        }
      },
      "2": {
        start: {
          line: 19,
          column: 22
        },
        end: {
          line: 19,
          column: 27
        }
      },
      "3": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 21
        }
      },
      "4": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 39
        }
      },
      "5": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 29
        }
      },
      "6": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 31,
          column: 9
        }
      },
      "7": {
        start: {
          line: 29,
          column: 12
        },
        end: {
          line: 29,
          column: 49
        }
      },
      "8": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 30,
          column: 19
        }
      },
      "9": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 42,
          column: 11
        }
      },
      "10": {
        start: {
          line: 46,
          column: 19
        },
        end: {
          line: 46,
          column: 55
        }
      },
      "11": {
        start: {
          line: 47,
          column: 21
        },
        end: {
          line: 47,
          column: 59
        }
      },
      "12": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 53
        }
      },
      "13": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 58,
          column: 9
        }
      },
      "14": {
        start: {
          line: 56,
          column: 12
        },
        end: {
          line: 56,
          column: 46
        }
      },
      "15": {
        start: {
          line: 57,
          column: 12
        },
        end: {
          line: 57,
          column: 19
        }
      },
      "16": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 59,
          column: 29
        }
      },
      "17": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 85,
          column: 11
        }
      },
      "18": {
        start: {
          line: 64,
          column: 16
        },
        end: {
          line: 64,
          column: 38
        }
      },
      "19": {
        start: {
          line: 65,
          column: 16
        },
        end: {
          line: 73,
          column: 19
        }
      },
      "20": {
        start: {
          line: 72,
          column: 20
        },
        end: {
          line: 72,
          column: 57
        }
      },
      "21": {
        start: {
          line: 77,
          column: 16
        },
        end: {
          line: 77,
          column: 38
        }
      },
      "22": {
        start: {
          line: 78,
          column: 28
        },
        end: {
          line: 78,
          column: 91
        }
      },
      "23": {
        start: {
          line: 79,
          column: 16
        },
        end: {
          line: 83,
          column: 19
        }
      },
      "24": {
        start: {
          line: 87,
          column: 28
        },
        end: {
          line: 91,
          column: 5
        }
      },
      "25": {
        start: {
          line: 87,
          column: 34
        },
        end: {
          line: 91,
          column: 5
        }
      },
      "26": {
        start: {
          line: 93,
          column: 0
        },
        end: {
          line: 101,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 25
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 43,
            column: 5
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        loc: {
          start: {
            line: 46,
            column: 17
          },
          end: {
            line: 46,
            column: 57
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        loc: {
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 47,
            column: 61
          }
        },
        line: 47
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        loc: {
          start: {
            line: 49,
            column: 21
          },
          end: {
            line: 51,
            column: 5
          }
        },
        line: 49
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        loc: {
          start: {
            line: 53,
            column: 15
          },
          end: {
            line: 86,
            column: 5
          }
        },
        line: 53
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 62,
            column: 18
          },
          end: {
            line: 62,
            column: 19
          }
        },
        loc: {
          start: {
            line: 62,
            column: 32
          },
          end: {
            line: 74,
            column: 13
          }
        },
        line: 62
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 71,
            column: 25
          }
        },
        loc: {
          start: {
            line: 71,
            column: 30
          },
          end: {
            line: 73,
            column: 17
          }
        },
        line: 71
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 75,
            column: 19
          },
          end: {
            line: 75,
            column: 20
          }
        },
        loc: {
          start: {
            line: 75,
            column: 28
          },
          end: {
            line: 84,
            column: 13
          }
        },
        line: 75
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 87,
            column: 28
          },
          end: {
            line: 87,
            column: 29
          }
        },
        loc: {
          start: {
            line: 87,
            column: 34
          },
          end: {
            line: 91,
            column: 5
          }
        },
        line: 87
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 31,
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
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 55,
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
            line: 55,
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
        line: 55
      },
      "2": {
        loc: {
          start: {
            line: 78,
            column: 28
          },
          end: {
            line: 78,
            column: 91
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 78,
            column: 28
          },
          end: {
            line: 78,
            column: 47
          }
        }, {
          start: {
            line: 78,
            column: 51
          },
          end: {
            line: 78,
            column: 61
          }
        }, {
          start: {
            line: 78,
            column: 65
          },
          end: {
            line: 78,
            column: 91
          }
        }],
        line: 78
      },
      "3": {
        loc: {
          start: {
            line: 82,
            column: 26
          },
          end: {
            line: 82,
            column: 85
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 82,
            column: 52
          },
          end: {
            line: 82,
            column: 55
          }
        }, {
          start: {
            line: 82,
            column: 58
          },
          end: {
            line: 82,
            column: 85
          }
        }],
        line: 82
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
      "26": 0
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
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "login.component.js",
      sourceRoot: "",
      sources: ["login.component.ts"],
      names: [],
      mappings: "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",
      sourcesContent: ["\r\nimport { Component, OnInit } from '@angular/core';\r\nimport { CommonModule } from '@angular/common';\r\nimport {\r\n  FormBuilder,\r\n  FormGroup,\r\n  Validators,\r\n  ReactiveFormsModule\r\n} from '@angular/forms';\r\nimport { Router } from '@angular/router';\r\nimport Swal from 'sweetalert2';\r\nimport { AuthService } from '../../core/services/auth.service';\r\n\r\n@Component({\r\n  selector: 'app-login',\r\n  standalone: true,\r\n  imports: [CommonModule, ReactiveFormsModule],\r\n  templateUrl: './login.component.html',\r\n  styleUrls: ['./login.component.scss']\r\n})\r\nexport class LoginComponent implements OnInit {\r\n\r\n  // FormGroup reactivo con validaciones\r\n  loginForm!: FormGroup;\r\n\r\n  // Estado de carga (deshabilita el bot\xF3n mientras espera)\r\n  cargando = false;\r\n\r\n  // Controla si se muestra la contrase\xF1a en texto plano\r\n  mostrarPassword = false;\r\n\r\n  constructor(\r\n    private fb: FormBuilder,      // Construye el formulario reactivo\r\n    private authService: AuthService,\r\n    private router: Router\r\n  ) {}\r\n\r\n  ngOnInit(): void {\r\n    // Si ya est\xE1 logueado, redirigir directamente al dashboard\r\n    if (this.authService.isLoggedIn()) {\r\n      this.router.navigate(['/dashboard']);\r\n      return;\r\n    }\r\n\r\n    // Inicializar el formulario reactivo con validaciones\r\n    this.loginForm = this.fb.group({\r\n      correo: ['', [\r\n        Validators.required,\r\n        Validators.email    // Valida formato email@dominio.com\r\n      ]],\r\n      password: ['', [\r\n        Validators.required,\r\n        Validators.minLength(3)\r\n      ]]\r\n    });\r\n  }\r\n\r\n  // \u2500\u2500\u2500 GETTERS (acceso r\xE1pido a los controles) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // Permite usar: this.correo.invalid en el template\r\n  get correo() { return this.loginForm.get('correo')!; }\r\n  get password() { return this.loginForm.get('password')!; }\r\n\r\n  // \u2500\u2500\u2500 ALTERNAR VISIBILIDAD PASSWORD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  togglePassword(): void {\r\n    this.mostrarPassword = !this.mostrarPassword;\r\n  }\r\n\r\n  // \u2500\u2500\u2500 SUBMIT DEL FORMULARIO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  onSubmit(): void {\r\n    // Si el formulario tiene errores, marcar todos los campos y salir\r\n    if (this.loginForm.invalid) {\r\n      this.loginForm.markAllAsTouched();\r\n      return;\r\n    }\r\n\r\n    this.cargando = true;\r\n\r\n    // Llamar al servicio de autenticaci\xF3n\r\n    this.authService.login(this.loginForm.value).subscribe({\r\n      next: (response) => {\r\n        // Login exitoso \u2192 redirigir al dashboard\r\n        this.cargando = false;\r\n        Swal.fire({\r\n          icon: 'success',\r\n          title: `\xA1Bienvenido, ${response.nombre}!`,\r\n          text: `Rol: ${response.rol}`,\r\n          timer: 1800,\r\n          showConfirmButton: false,\r\n        }).then(() => {\r\n          this.router.navigate(['/dashboard']);\r\n        });\r\n      },\r\n      error: (err) => {\r\n        // Error en login \u2192 mostrar mensaje\r\n        this.cargando = false;\r\n        const msg = err?.error?.mensaje || err?.error || 'Credenciales incorrectas';\r\n        Swal.fire({\r\n          icon: 'error',\r\n          title: 'Error al iniciar sesi\xF3n',\r\n          text: typeof msg === 'string' ? msg : 'Verifica tus credenciales',\r\n        });\r\n      }\r\n    });\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f1e8f3c1b8fa99e56d5fb91f636a1ba8953fb38c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1t3x7g1xb5 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var import_sweetalert2, LoginComponent;
var init_login_component3 = __esm({
  "src/app/pages/login/login.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_component();
    init_login_component2();
    init_core();
    init_common();
    init_forms();
    init_router();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    init_auth_service();
    cov_1t3x7g1xb5();
    cov_1t3x7g1xb5().s[0]++;
    LoginComponent = class LoginComponent2 {
      fb;
      authService;
      router;
      // FormGroup reactivo con validaciones
      loginForm;
      // Estado de carga (deshabilita el botón mientras espera)
      cargando = (cov_1t3x7g1xb5().s[1]++, false);
      // Controla si se muestra la contraseña en texto plano
      mostrarPassword = (cov_1t3x7g1xb5().s[2]++, false);
      constructor(fb, authService, router) {
        cov_1t3x7g1xb5().f[0]++;
        cov_1t3x7g1xb5().s[3]++;
        this.fb = fb;
        cov_1t3x7g1xb5().s[4]++;
        this.authService = authService;
        cov_1t3x7g1xb5().s[5]++;
        this.router = router;
      }
      ngOnInit() {
        cov_1t3x7g1xb5().f[1]++;
        cov_1t3x7g1xb5().s[6]++;
        if (this.authService.isLoggedIn()) {
          cov_1t3x7g1xb5().b[0][0]++;
          cov_1t3x7g1xb5().s[7]++;
          this.router.navigate(["/dashboard"]);
          cov_1t3x7g1xb5().s[8]++;
          return;
        } else {
          cov_1t3x7g1xb5().b[0][1]++;
        }
        cov_1t3x7g1xb5().s[9]++;
        this.loginForm = this.fb.group({
          correo: ["", [
            Validators.required,
            Validators.email
            // Valida formato email@dominio.com
          ]],
          password: ["", [Validators.required, Validators.minLength(3)]]
        });
      }
      // ─── GETTERS (acceso rápido a los controles) ─────────────
      // Permite usar: this.correo.invalid en el template
      get correo() {
        cov_1t3x7g1xb5().f[2]++;
        cov_1t3x7g1xb5().s[10]++;
        return this.loginForm.get("correo");
      }
      get password() {
        cov_1t3x7g1xb5().f[3]++;
        cov_1t3x7g1xb5().s[11]++;
        return this.loginForm.get("password");
      }
      // ─── ALTERNAR VISIBILIDAD PASSWORD ───────────────────────
      togglePassword() {
        cov_1t3x7g1xb5().f[4]++;
        cov_1t3x7g1xb5().s[12]++;
        this.mostrarPassword = !this.mostrarPassword;
      }
      // ─── SUBMIT DEL FORMULARIO ───────────────────────────────
      onSubmit() {
        cov_1t3x7g1xb5().f[5]++;
        cov_1t3x7g1xb5().s[13]++;
        if (this.loginForm.invalid) {
          cov_1t3x7g1xb5().b[1][0]++;
          cov_1t3x7g1xb5().s[14]++;
          this.loginForm.markAllAsTouched();
          cov_1t3x7g1xb5().s[15]++;
          return;
        } else {
          cov_1t3x7g1xb5().b[1][1]++;
        }
        cov_1t3x7g1xb5().s[16]++;
        this.cargando = true;
        cov_1t3x7g1xb5().s[17]++;
        this.authService.login(this.loginForm.value).subscribe({
          next: (response) => {
            cov_1t3x7g1xb5().f[6]++;
            cov_1t3x7g1xb5().s[18]++;
            this.cargando = false;
            cov_1t3x7g1xb5().s[19]++;
            import_sweetalert2.default.fire({
              icon: "success",
              title: `\xA1Bienvenido, ${response.nombre}!`,
              text: `Rol: ${response.rol}`,
              timer: 1800,
              showConfirmButton: false
            }).then(() => {
              cov_1t3x7g1xb5().f[7]++;
              cov_1t3x7g1xb5().s[20]++;
              this.router.navigate(["/dashboard"]);
            });
          },
          error: (err) => {
            cov_1t3x7g1xb5().f[8]++;
            cov_1t3x7g1xb5().s[21]++;
            this.cargando = false;
            const msg = (cov_1t3x7g1xb5().s[22]++, (cov_1t3x7g1xb5().b[2][0]++, err?.error?.mensaje) || (cov_1t3x7g1xb5().b[2][1]++, err?.error) || (cov_1t3x7g1xb5().b[2][2]++, "Credenciales incorrectas"));
            cov_1t3x7g1xb5().s[23]++;
            import_sweetalert2.default.fire({
              icon: "error",
              title: "Error al iniciar sesi\xF3n",
              text: typeof msg === "string" ? (cov_1t3x7g1xb5().b[3][0]++, msg) : (cov_1t3x7g1xb5().b[3][1]++, "Verifica tus credenciales")
            });
          }
        });
      }
      static ctorParameters = (cov_1t3x7g1xb5().s[24]++, () => {
        cov_1t3x7g1xb5().f[9]++;
        cov_1t3x7g1xb5().s[25]++;
        return [{
          type: FormBuilder
        }, {
          type: AuthService
        }, {
          type: Router
        }];
      });
    };
    cov_1t3x7g1xb5().s[26]++;
    LoginComponent = __decorate([Component({
      selector: "app-login",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule],
      template: login_component_default,
      styles: [login_component_default2]
    })], LoginComponent);
  }
});

// src/app/pages/login/login.component.spec.ts
var require_login_component_spec = __commonJS({
  "src/app/pages/login/login.component.spec.ts"(exports) {
    init_testing();
    init_forms();
    init_router();
    init_esm();
    init_login_component3();
    init_auth_service();
    var mockSwal = {
      fire: jasmine.createSpy("fire").and.returnValue(Promise.resolve({ isConfirmed: true }))
    };
    describe("LoginComponent", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let routerSpy;
      const mockLoginResponse = {
        mensaje: "Inicio de sesion correcto",
        idUsuario: 1,
        nombre: "Admin Test",
        rol: "ADMIN"
      };
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = jasmine.createSpyObj("AuthService", ["login", "isLoggedIn", "getSesion"]);
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        routerSpy.navigate.and.returnValue(Promise.resolve(true));
        authServiceSpy.isLoggedIn.and.returnValue(false);
        yield TestBed.configureTestingModule({
          imports: [LoginComponent, ReactiveFormsModule],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa inicializar el formulario con campos vac\xEDos", () => {
        expect(component.loginForm).toBeDefined();
        expect(component.correo.value).toBe("");
        expect(component.password.value).toBe("");
      });
      it("deber\xEDa iniciar con cargando en false", () => {
        expect(component.cargando).toBeFalse();
      });
      it("deber\xEDa iniciar con mostrarPassword en false", () => {
        expect(component.mostrarPassword).toBeFalse();
      });
      it("deber\xEDa redirigir al dashboard si ya est\xE1 logueado", () => __async(null, null, function* () {
        authServiceSpy.isLoggedIn.and.returnValue(true);
        yield TestBed.configureTestingModule({
          imports: [LoginComponent],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        const newFixture = TestBed.createComponent(LoginComponent);
        newFixture.detectChanges();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/dashboard"]);
      }));
      it("deber\xEDa marcar el formulario como inv\xE1lido si est\xE1 vac\xEDo", () => {
        expect(component.loginForm.invalid).toBeTrue();
      });
      it("deber\xEDa marcar correo como inv\xE1lido si no tiene formato email", () => {
        component.correo.setValue("no-es-un-email");
        expect(component.correo.invalid).toBeTrue();
      });
      it("deber\xEDa marcar correo como v\xE1lido con formato correcto", () => {
        component.correo.setValue("test@example.com");
        expect(component.correo.valid).toBeTrue();
      });
      it("deber\xEDa marcar password como inv\xE1lido si tiene menos de 3 caracteres", () => {
        component.password.setValue("ab");
        expect(component.password.invalid).toBeTrue();
      });
      it("deber\xEDa marcar el formulario como v\xE1lido con datos correctos", () => {
        component.correo.setValue("test@example.com");
        component.password.setValue("password123");
        expect(component.loginForm.valid).toBeTrue();
      });
      it("deber\xEDa alternar la visibilidad de la contrase\xF1a", () => {
        expect(component.mostrarPassword).toBeFalse();
        component.togglePassword();
        expect(component.mostrarPassword).toBeTrue();
        component.togglePassword();
        expect(component.mostrarPassword).toBeFalse();
      });
      it("no deber\xEDa llamar al servicio si el formulario es inv\xE1lido", () => {
        component.onSubmit();
        expect(authServiceSpy.login).not.toHaveBeenCalled();
      });
      it("deber\xEDa marcar todos los campos como touched si el formulario es inv\xE1lido al hacer submit", () => {
        component.onSubmit();
        expect(component.correo.touched).toBeTrue();
        expect(component.password.touched).toBeTrue();
      });
      it("deber\xEDa llamar al servicio login con las credenciales del formulario", () => {
        authServiceSpy.login.and.returnValue(of(mockLoginResponse));
        component.correo.setValue("admin@test.com");
        component.password.setValue("admin123");
        component.onSubmit();
        expect(authServiceSpy.login).toHaveBeenCalledWith({
          correo: "admin@test.com",
          password: "admin123"
        });
      });
      it("deber\xEDa poner cargando en true durante la petici\xF3n y false al terminar", fakeAsync(() => {
        authServiceSpy.login.and.returnValue(of(mockLoginResponse));
        component.correo.setValue("admin@test.com");
        component.password.setValue("admin123");
        component.onSubmit();
        tick(2e3);
        expect(component.cargando).toBeFalse();
      }));
      it("deber\xEDa manejar error en login y poner cargando en false", fakeAsync(() => {
        authServiceSpy.login.and.returnValue(throwError(() => ({ error: { mensaje: "Credenciales incorrectas" } })));
        component.correo.setValue("wrong@test.com");
        component.password.setValue("wrong123");
        component.onSubmit();
        tick();
        expect(component.cargando).toBeFalse();
      }));
      it("deber\xEDa manejar error sin campo mensaje en la respuesta de error", fakeAsync(() => {
        authServiceSpy.login.and.returnValue(throwError(() => ({ error: null })));
        component.correo.setValue("wrong@test.com");
        component.password.setValue("wrong123");
        expect(() => {
          component.onSubmit();
          tick();
        }).not.toThrow();
      }));
    });
  }
});
export default require_login_component_spec();
//# sourceMappingURL=spec-app-pages-login-login.component.spec.js.map
