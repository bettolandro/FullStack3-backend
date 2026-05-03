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
  Router,
  RouterLink,
  RouterLinkActive,
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
  __spreadProps,
  __spreadValues,
  __toESM,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-X225SWGN.js";

// angular:jit:template:src\app\shared\components\navbar\navbar.component.html
var navbar_component_default;
var init_navbar_component = __esm({
  "angular:jit:template:src\\app\\shared\\components\\navbar\\navbar.component.html"() {
    navbar_component_default = `\r
<nav class="navbar-custom">\r
  <div class="navbar-inner">\r
\r
    <!-- \u2500\u2500 LOGO / MARCA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <a routerLink="/dashboard" class="navbar-brand" (click)="cerrarMenu()">\r
      <div class="brand-icon">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>\r
        </svg>\r
      </div>\r
      <span class="brand-name">Betto's<span class="brand-accent">Shop</span></span>\r
    </a>\r
\r
    <!-- \u2500\u2500 MEN\xDA DESKTOP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <ul class="nav-links">\r
      <!-- Dashboard: visible para todos -->\r
      <li>\r
        <a routerLink="/dashboard" routerLinkActive="active" (click)="cerrarMenu()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>\r
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>\r
          </svg>\r
          Dashboard\r
        </a>\r
      </li>\r
\r
      <!-- Usuarios: solo visible para ADMIN -->\r
      <li *ngIf="authService.isAdmin()">\r
        <a routerLink="/usuarios" routerLinkActive="active" (click)="cerrarMenu()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\r
            <circle cx="9" cy="7" r="4"/>\r
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
          </svg>\r
          Usuarios\r
        </a>\r
      </li>\r
\r
      <!-- Productos: visible para todos -->\r
      <li>\r
        <a routerLink="/productos" routerLinkActive="active" (click)="cerrarMenu()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>\r
            <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>\r
          </svg>\r
          Productos\r
        </a>\r
      </li>\r
    </ul>\r
\r
    <!-- \u2500\u2500 INFO DE USUARIO + LOGOUT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="navbar-right">\r
      <!-- Avatar + nombre -->\r
      <div class="user-info">\r
        <div class="user-avatar">{{ inicialNombre }}</div>\r
        <div class="user-details hide-tablet">\r
          <span class="user-name">{{ sesion?.nombre }}</span>\r
          <span class="badge" [ngClass]="rolBadge.clase">{{ rolBadge.texto }}</span>\r
        </div>\r
      </div>\r
\r
      <!-- Bot\xF3n logout desktop -->\r
      <button class="btn-logout hide-mobile" (click)="confirmarLogout()" title="Cerrar sesi\xF3n">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>\r
          <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>\r
        </svg>\r
        Salir\r
      </button>\r
\r
      <!-- Bot\xF3n hamburguesa (m\xF3vil) -->\r
      <button class="hamburger" (click)="toggleMenu()" [class.open]="menuAbierto">\r
        <span></span><span></span><span></span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 MEN\xDA M\xD3VIL (overlay) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="mobile-menu" [class.open]="menuAbierto">\r
    <div class="mobile-user-info">\r
      <div class="user-avatar large">{{ inicialNombre }}</div>\r
      <div>\r
        <div class="user-name">{{ sesion?.nombre }}</div>\r
        <span class="badge" [ngClass]="rolBadge.clase">{{ rolBadge.texto }}</span>\r
      </div>\r
    </div>\r
\r
    <ul class="mobile-nav-links">\r
      <li>\r
        <a routerLink="/dashboard" routerLinkActive="active" (click)="cerrarMenu()">\r
          Dashboard\r
        </a>\r
      </li>\r
      <li *ngIf="authService.isAdmin()">\r
        <a routerLink="/usuarios" routerLinkActive="active" (click)="cerrarMenu()">\r
          Usuarios\r
        </a>\r
      </li>\r
      <li>\r
        <a routerLink="/productos" routerLinkActive="active" (click)="cerrarMenu()">\r
          Productos\r
        </a>\r
      </li>\r
      <li>\r
        <button class="btn-logout-mobile" (click)="confirmarLogout(); cerrarMenu()">\r
          Cerrar sesi\xF3n\r
        </button>\r
      </li>\r
    </ul>\r
  </div>\r
</nav>\r
`;
  }
});

// angular:jit:style:src\app\shared\components\navbar\navbar.component.scss
var navbar_component_default2;
var init_navbar_component2 = __esm({
  "angular:jit:style:src\\app\\shared\\components\\navbar\\navbar.component.scss"() {
    navbar_component_default2 = '@charset "UTF-8";\n\n/* src/app/shared/components/navbar/navbar.component.scss */\n.navbar-custom {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: rgba(10, 14, 26, 0.92);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid var(--border-color);\n  height: 64px;\n}\n.navbar-inner {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .navbar-inner {\n    padding: 0 1rem;\n  }\n}\n.navbar-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-icon {\n  width: 34px;\n  height: 34px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-blue),\n      var(--accent-cyan));\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.brand-name {\n  font-family: var(--font-display);\n  font-weight: 800;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n.brand-accent {\n  color: var(--accent-blue);\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  list-style: none;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n  }\n}\n.nav-links li a {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.875rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  text-decoration: none;\n  transition: var(--transition);\n}\n.nav-links li a:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.05);\n}\n.nav-links li a.active {\n  color: var(--accent-blue);\n  background: rgba(79, 142, 247, 0.1);\n}\n.navbar-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-left: auto;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-blue),\n      var(--accent-purple));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-weight: 800;\n  font-size: 0.875rem;\n  color: white;\n  flex-shrink: 0;\n}\n.user-avatar.large {\n  width: 48px;\n  height: 48px;\n  font-size: 1.1rem;\n}\n.user-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.user-name {\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n}\n.btn-logout {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: transparent;\n  border: 1px solid var(--border-color);\n  color: var(--text-secondary);\n  padding: 0.4rem 0.875rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-logout:hover {\n  border-color: var(--accent-red);\n  color: var(--accent-red);\n  background: rgba(255, 77, 109, 0.05);\n}\n.hamburger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n}\n@media (max-width: 768px) {\n  .hamburger {\n    display: flex;\n  }\n}\n.hamburger span {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--text-secondary);\n  border-radius: 2px;\n  transition: var(--transition);\n}\n.hamburger.open span:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.hamburger.open span:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.open span:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.mobile-menu {\n  display: none;\n  position: fixed;\n  top: 64px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--bg-primary);\n  padding: 1.5rem;\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-top: 1px solid var(--border-color);\n}\n@media (max-width: 768px) {\n  .mobile-menu {\n    display: block;\n  }\n}\n.mobile-menu.open {\n  transform: translateX(0);\n}\n.mobile-user-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--bg-card);\n  border-radius: var(--radius-md);\n  margin-bottom: 1.5rem;\n  border: 1px solid var(--border-color);\n}\n.mobile-nav-links {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.mobile-nav-links li a {\n  display: block;\n  padding: 0.875rem 1rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: 1rem;\n  color: var(--text-secondary);\n  text-decoration: none;\n  transition: var(--transition);\n}\n.mobile-nav-links li a:hover,\n.mobile-nav-links li a.active {\n  color: var(--accent-blue);\n  background: rgba(79, 142, 247, 0.1);\n}\n.btn-logout-mobile {\n  width: 100%;\n  padding: 0.875rem 1rem;\n  background: rgba(255, 77, 109, 0.1);\n  border: 1px solid rgba(255, 77, 109, 0.2);\n  color: var(--accent-red);\n  border-radius: var(--radius-sm);\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: left;\n  transition: var(--transition);\n  margin-top: 0.5rem;\n}\n.btn-logout-mobile:hover {\n  background: rgba(255, 77, 109, 0.2);\n}\n@media (max-width: 900px) {\n  .hide-tablet {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .hide-mobile {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n';
  }
});

// src/app/shared/components/navbar/navbar.component.ts
function cov_1s85the5m2() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\shared\\components\\navbar\\navbar.component.ts";
  var hash = "51d34b75a3fcd41a5485709a3ebb45b8f08a1a72";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\shared\\components\\navbar\\navbar.component.ts",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "2": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 15,
          column: 23
        }
      },
      "3": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 39
        }
      },
      "4": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 29
        }
      },
      "5": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 51
        }
      },
      "6": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 68
        }
      },
      "7": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 32,
          column: 9
        }
      },
      "8": {
        start: {
          line: 31,
          column: 12
        },
        end: {
          line: 31,
          column: 61
        }
      },
      "9": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 54
        }
      },
      "10": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 45
        }
      },
      "11": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 41,
          column: 33
        }
      },
      "12": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 56,
          column: 11
        }
      },
      "13": {
        start: {
          line: 53,
          column: 12
        },
        end: {
          line: 55,
          column: 13
        }
      },
      "14": {
        start: {
          line: 54,
          column: 16
        },
        end: {
          line: 54,
          column: 42
        }
      },
      "15": {
        start: {
          line: 58,
          column: 28
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "16": {
        start: {
          line: 58,
          column: 34
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "17": {
        start: {
          line: 63,
          column: 0
        },
        end: {
          line: 71,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 37
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
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
            line: 20,
            column: 15
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 20
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
            column: 24
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 19
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 29
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        loc: {
          start: {
            line: 36,
            column: 17
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 36
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        loc: {
          start: {
            line: 40,
            column: 17
          },
          end: {
            line: 42,
            column: 5
          }
        },
        line: 40
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        loc: {
          start: {
            line: 44,
            column: 22
          },
          end: {
            line: 57,
            column: 5
          }
        },
        line: 44
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 52,
            column: 16
          },
          end: {
            line: 52,
            column: 17
          }
        },
        loc: {
          start: {
            line: 52,
            column: 26
          },
          end: {
            line: 56,
            column: 9
          }
        },
        line: 52
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 58,
            column: 28
          },
          end: {
            line: 58,
            column: 29
          }
        },
        loc: {
          start: {
            line: 58,
            column: 34
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 58
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 26,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 26,
            column: 60
          }
        }, {
          start: {
            line: 26,
            column: 64
          },
          end: {
            line: 26,
            column: 67
          }
        }],
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 32,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 32,
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
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 53,
            column: 12
          },
          end: {
            line: 55,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 12
          },
          end: {
            line: 55,
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
        line: 53
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
      "17": 0
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
      "8": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "navbar.component.js",
      sourceRoot: "",
      sources: ["navbar.component.ts"],
      names: [],
      mappings: ";;;AACA,OAAO,EAAE,SAAS,EAAU,MAAM,eAAe,CAAC;AAClD,OAAO,EAAE,MAAM,EAAE,UAAU,EAAE,gBAAgB,EAAE,MAAM,iBAAiB,CAAC;AACvE,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAC/C,OAAO,EAAE,WAAW,EAAE,MAAM,qCAAqC,CAAC;AAElE,OAAO,IAAI,MAAM,aAAa,CAAC;AASxB,IAAM,eAAe,GAArB,MAAM,eAAe;IASjB;IACC;IARV,8BAA8B;IAC9B,MAAM,GAAyB,IAAI,CAAC;IAEpC,yCAAyC;IACzC,WAAW,GAAG,KAAK,CAAC;IAEpB,YACS,WAAwB,EACvB,MAAc;QADf,gBAAW,GAAX,WAAW,CAAa;QACvB,WAAM,GAAN,MAAM,CAAQ;IACrB,CAAC;IAEJ,QAAQ;QACN,wCAAwC;QACxC,IAAI,CAAC,MAAM,GAAG,IAAI,CAAC,WAAW,CAAC,SAAS,EAAE,CAAC;IAC7C,CAAC;IAED,+CAA+C;IAC/C,IAAI,aAAa;QACf,OAAO,IAAI,CAAC,MAAM,EAAE,MAAM,EAAE,MAAM,CAAC,CAAC,CAAC,EAAE,WAAW,EAAE,IAAI,GAAG,CAAC;IAC9D,CAAC;IAED,+CAA+C;IAC/C,IAAI,QAAQ;QACV,IAAI,IAAI,CAAC,MAAM,EAAE,GAAG,KAAK,OAAO,EAAE,CAAC;YACjC,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,KAAK,EAAE,cAAc,EAAE,CAAC;QACnD,CAAC;QACD,OAAO,EAAE,KAAK,EAAE,MAAM,EAAE,KAAK,EAAE,YAAY,EAAE,CAAC;IAChD,CAAC;IAED,wBAAwB;IACxB,UAAU;QACR,IAAI,CAAC,WAAW,GAAG,CAAC,IAAI,CAAC,WAAW,CAAC;IACvC,CAAC;IAED,uCAAuC;IACvC,UAAU;QACR,IAAI,CAAC,WAAW,GAAG,KAAK,CAAC;IAC3B,CAAC;IAED,8BAA8B;IAC9B,eAAe;QACb,IAAI,CAAC,IAAI,CAAC;YACR,KAAK,EAAE,iBAAiB;YACxB,IAAI,EAAE,8BAA8B;YACpC,IAAI,EAAE,UAAU;YAChB,gBAAgB,EAAE,IAAI;YACtB,iBAAiB,EAAE,WAAW;YAC9B,gBAAgB,EAAE,UAAU;SAC7B,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE;YACf,IAAI,MAAM,CAAC,WAAW,EAAE,CAAC;gBACvB,IAAI,CAAC,WAAW,CAAC,MAAM,EAAE,CAAC;YAC5B,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;;;;;;AAvDU,eAAe;IAP3B,SAAS,CAAC;QACT,QAAQ,EAAE,YAAY;QACtB,UAAU,EAAE,IAAI;QAChB,OAAO,EAAE,CAAC,YAAY,EAAE,UAAU,EAAE,gBAAgB,CAAC;QACrD,8BAAsC;;KAEvC,CAAC;GACW,eAAe,CAwD3B",
      sourcesContent: ["\r\nimport { Component, OnInit } from '@angular/core';\r\nimport { Router, RouterLink, RouterLinkActive } from '@angular/router';\r\nimport { CommonModule } from '@angular/common';\r\nimport { AuthService } from '../../../core/services/auth.service';\r\nimport { LoginResponse } from '../../../models/usuario.model';\r\nimport Swal from 'sweetalert2';\r\n\r\n@Component({\r\n  selector: 'app-navbar',\r\n  standalone: true,\r\n  imports: [CommonModule, RouterLink, RouterLinkActive],\r\n  templateUrl: './navbar.component.html',\r\n  styleUrls: ['./navbar.component.scss']\r\n})\r\nexport class NavbarComponent implements OnInit {\r\n\r\n  // Datos del usuario en sesi\xF3n\r\n  sesion: LoginResponse | null = null;\r\n\r\n  // Controla si el men\xFA m\xF3vil est\xE1 abierto\r\n  menuAbierto = false;\r\n\r\n  constructor(\r\n    public authService: AuthService,\r\n    private router: Router\r\n  ) {}\r\n\r\n  ngOnInit(): void {\r\n    // Cargar datos de sesi\xF3n al inicializar\r\n    this.sesion = this.authService.getSesion();\r\n  }\r\n\r\n  // Retorna la inicial del nombre para el avatar\r\n  get inicialNombre(): string {\r\n    return this.sesion?.nombre?.charAt(0)?.toUpperCase() || '?';\r\n  }\r\n\r\n  // Retorna badge de rol con clase CSS apropiada\r\n  get rolBadge(): { texto: string; clase: string } {\r\n    if (this.sesion?.rol === 'ADMIN') {\r\n      return { texto: 'Admin', clase: 'badge-purple' };\r\n    }\r\n    return { texto: 'User', clase: 'badge-blue' };\r\n  }\r\n\r\n  // Alterna el men\xFA m\xF3vil\r\n  toggleMenu(): void {\r\n    this.menuAbierto = !this.menuAbierto;\r\n  }\r\n\r\n  // Cierra el men\xFA (al navegar en m\xF3vil)\r\n  cerrarMenu(): void {\r\n    this.menuAbierto = false;\r\n  }\r\n\r\n  // Confirmar y ejecutar logout\r\n  confirmarLogout(): void {\r\n    Swal.fire({\r\n      title: '\xBFCerrar sesi\xF3n?',\r\n      text: 'Se cerrar\xE1 tu sesi\xF3n actual.',\r\n      icon: 'question',\r\n      showCancelButton: true,\r\n      confirmButtonText: 'S\xED, salir',\r\n      cancelButtonText: 'Cancelar',\r\n    }).then(result => {\r\n      if (result.isConfirmed) {\r\n        this.authService.logout();\r\n      }\r\n    });\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "51d34b75a3fcd41a5485709a3ebb45b8f08a1a72"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1s85the5m2 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var import_sweetalert2, NavbarComponent;
var init_navbar_component3 = __esm({
  "src/app/shared/components/navbar/navbar.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar_component();
    init_navbar_component2();
    init_core();
    init_router();
    init_common();
    init_auth_service();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    cov_1s85the5m2();
    cov_1s85the5m2().s[0]++;
    NavbarComponent = class NavbarComponent2 {
      authService;
      router;
      // Datos del usuario en sesión
      sesion = (cov_1s85the5m2().s[1]++, null);
      // Controla si el menú móvil está abierto
      menuAbierto = (cov_1s85the5m2().s[2]++, false);
      constructor(authService, router) {
        cov_1s85the5m2().f[0]++;
        cov_1s85the5m2().s[3]++;
        this.authService = authService;
        cov_1s85the5m2().s[4]++;
        this.router = router;
      }
      ngOnInit() {
        cov_1s85the5m2().f[1]++;
        cov_1s85the5m2().s[5]++;
        this.sesion = this.authService.getSesion();
      }
      // Retorna la inicial del nombre para el avatar
      get inicialNombre() {
        cov_1s85the5m2().f[2]++;
        cov_1s85the5m2().s[6]++;
        return (cov_1s85the5m2().b[0][0]++, this.sesion?.nombre?.charAt(0)?.toUpperCase()) || (cov_1s85the5m2().b[0][1]++, "?");
      }
      // Retorna badge de rol con clase CSS apropiada
      get rolBadge() {
        cov_1s85the5m2().f[3]++;
        cov_1s85the5m2().s[7]++;
        if (this.sesion?.rol === "ADMIN") {
          cov_1s85the5m2().b[1][0]++;
          cov_1s85the5m2().s[8]++;
          return {
            texto: "Admin",
            clase: "badge-purple"
          };
        } else {
          cov_1s85the5m2().b[1][1]++;
        }
        cov_1s85the5m2().s[9]++;
        return {
          texto: "User",
          clase: "badge-blue"
        };
      }
      // Alterna el menú móvil
      toggleMenu() {
        cov_1s85the5m2().f[4]++;
        cov_1s85the5m2().s[10]++;
        this.menuAbierto = !this.menuAbierto;
      }
      // Cierra el menú (al navegar en móvil)
      cerrarMenu() {
        cov_1s85the5m2().f[5]++;
        cov_1s85the5m2().s[11]++;
        this.menuAbierto = false;
      }
      // Confirmar y ejecutar logout
      confirmarLogout() {
        cov_1s85the5m2().f[6]++;
        cov_1s85the5m2().s[12]++;
        import_sweetalert2.default.fire({
          title: "\xBFCerrar sesi\xF3n?",
          text: "Se cerrar\xE1 tu sesi\xF3n actual.",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "S\xED, salir",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          cov_1s85the5m2().f[7]++;
          cov_1s85the5m2().s[13]++;
          if (result.isConfirmed) {
            cov_1s85the5m2().b[2][0]++;
            cov_1s85the5m2().s[14]++;
            this.authService.logout();
          } else {
            cov_1s85the5m2().b[2][1]++;
          }
        });
      }
      static ctorParameters = (cov_1s85the5m2().s[15]++, () => {
        cov_1s85the5m2().f[8]++;
        cov_1s85the5m2().s[16]++;
        return [{
          type: AuthService
        }, {
          type: Router
        }];
      });
    };
    cov_1s85the5m2().s[17]++;
    NavbarComponent = __decorate([Component({
      selector: "app-navbar",
      standalone: true,
      imports: [CommonModule, RouterLink, RouterLinkActive],
      template: navbar_component_default,
      styles: [navbar_component_default2]
    })], NavbarComponent);
  }
});

// src/app/shared/components/navbar/navbar.component.spec.ts
var require_navbar_component_spec = __commonJS({
  "src/app/shared/components/navbar/navbar.component.spec.ts"(exports) {
    init_testing();
    init_router();
    init_testing2();
    init_navbar_component3();
    init_auth_service();
    describe("NavbarComponent", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let routerSpy;
      const mockSesionAdmin = {
        mensaje: "OK",
        idUsuario: 1,
        nombre: "Admin Test",
        rol: "ADMIN"
      };
      const mockSesionUser = {
        mensaje: "OK",
        idUsuario: 2,
        nombre: "Pedro Garc\xEDa",
        rol: "USER"
      };
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = jasmine.createSpyObj("AuthService", [
          "getSesion",
          "logout",
          "isAdmin",
          "isLoggedIn"
        ]);
        authServiceSpy.getSesion.and.returnValue(mockSesionAdmin);
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        routerSpy.navigate.and.returnValue(Promise.resolve(true));
        yield TestBed.configureTestingModule({
          imports: [NavbarComponent, RouterTestingModule],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar la sesi\xF3n al inicializar", () => {
        expect(authServiceSpy.getSesion).toHaveBeenCalled();
        expect(component.sesion).toEqual(mockSesionAdmin);
      });
      it("deber\xEDa iniciar con menuAbierto en false", () => {
        expect(component.menuAbierto).toBeFalse();
      });
      it("deber\xEDa retornar la inicial en may\xFAscula del nombre del usuario", () => {
        expect(component.inicialNombre).toBe("A");
      });
      it('deber\xEDa retornar "?" si no hay sesi\xF3n activa', () => {
        component.sesion = null;
        expect(component.inicialNombre).toBe("?");
      });
      it("deber\xEDa retornar inicial en may\xFAscula si el nombre comienza en min\xFAscula", () => {
        component.sesion = __spreadProps(__spreadValues({}, mockSesionUser), { nombre: "pedro" });
        expect(component.inicialNombre).toBe("P");
      });
      it("deber\xEDa retornar badge-purple para rol ADMIN", () => {
        const badge = component.rolBadge;
        expect(badge.texto).toBe("Admin");
        expect(badge.clase).toBe("badge-purple");
      });
      it("deber\xEDa retornar badge-blue para rol USER", () => {
        component.sesion = mockSesionUser;
        const badge = component.rolBadge;
        expect(badge.texto).toBe("User");
        expect(badge.clase).toBe("badge-blue");
      });
      it("deber\xEDa retornar badge-blue si no hay sesi\xF3n", () => {
        component.sesion = null;
        const badge = component.rolBadge;
        expect(badge.clase).toBe("badge-blue");
      });
      it("deber\xEDa alternar el estado del men\xFA al llamar toggleMenu", () => {
        expect(component.menuAbierto).toBeFalse();
        component.toggleMenu();
        expect(component.menuAbierto).toBeTrue();
        component.toggleMenu();
        expect(component.menuAbierto).toBeFalse();
      });
      it("deber\xEDa cerrar el men\xFA al llamar cerrarMenu", () => {
        component.menuAbierto = true;
        component.cerrarMenu();
        expect(component.menuAbierto).toBeFalse();
      });
      it("deber\xEDa existir el m\xE9todo confirmarLogout", () => {
        expect(component.confirmarLogout).toBeDefined();
      });
      it("deber\xEDa llamar a confirmarLogout sin lanzar error", () => {
        expect(() => component.confirmarLogout()).not.toThrow();
      });
    });
  }
});
export default require_navbar_component_spec();
//# sourceMappingURL=spec-app-shared-components-navbar-navbar.component.spec.js.map
