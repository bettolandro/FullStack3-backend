import {
  Router,
  init_router
} from "./chunk-45UUSLVD.js";
import {
  environment,
  init_environment
} from "./chunk-J2TET66I.js";
import {
  HttpClient,
  init_http
} from "./chunk-DPIYGMOA.js";
import {
  Injectable,
  __decorate,
  __esm,
  init_core,
  init_esm,
  init_tslib_es6,
  tap
} from "./chunk-X225SWGN.js";

// src/app/core/services/auth.service.ts
function cov_w0y2wf6kw() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\core\\services\\auth.service.ts";
  var hash = "0e86c64dd54cb0e40e6e2e676bbe3651a2f2d18a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\core\\services\\auth.service.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 38
        }
      },
      "2": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 25
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 29
        }
      },
      "4": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 22,
          column: 55
        }
      },
      "5": {
        start: {
          line: 22,
          column: 24
        },
        end: {
          line: 22,
          column: 52
        }
      },
      "6": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 50
        }
      },
      "7": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 41
        }
      },
      "8": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 63
        }
      },
      "9": {
        start: {
          line: 38,
          column: 21
        },
        end: {
          line: 38,
          column: 59
        }
      },
      "10": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 46
        }
      },
      "11": {
        start: {
          line: 43,
          column: 23
        },
        end: {
          line: 43,
          column: 39
        }
      },
      "12": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 39
        }
      },
      "13": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 73
        }
      },
      "14": {
        start: {
          line: 50,
          column: 28
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "15": {
        start: {
          line: 50,
          column: 34
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "16": {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 59,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 13
          }
        },
        loc: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 22,
            column: 52
          }
        },
        line: 22
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 13
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 26
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 17
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 32
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 16
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 37
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        loc: {
          start: {
            line: 42,
            column: 14
          },
          end: {
            line: 45,
            column: 5
          }
        },
        line: 42
      },
      "7": {
        name: "(anonymous_7)",
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
            column: 28
          },
          end: {
            line: 49,
            column: 5
          }
        },
        line: 47
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 50,
            column: 28
          },
          end: {
            line: 50,
            column: 29
          }
        },
        loc: {
          start: {
            line: 50,
            column: 34
          },
          end: {
            line: 53,
            column: 5
          }
        },
        line: 50
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 39,
            column: 15
          },
          end: {
            line: 39,
            column: 45
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 39,
            column: 22
          },
          end: {
            line: 39,
            column: 38
          }
        }, {
          start: {
            line: 39,
            column: 41
          },
          end: {
            line: 39,
            column: 45
          }
        }],
        line: 39
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
      "16": 0
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
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "auth.service.js",
      sourceRoot: "",
      sources: ["auth.service.ts"],
      names: [],
      mappings: ";AACA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAE,UAAU,EAAE,MAAM,sBAAsB,CAAC;AAClD,OAAO,EAAc,GAAG,EAAE,MAAM,MAAM,CAAC;AACvC,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;AACzC,OAAO,EAAE,WAAW,EAAE,MAAM,mCAAmC,CAAC;AAMzD,IAAM,WAAW,GAAjB,MAAM,WAAW;IAMZ;IACA;IALV,qDAAqD;IACpC,WAAW,GAAG,oBAAoB,CAAC;IAEpD,YACU,IAAgB,EAChB,MAAc;QADd,SAAI,GAAJ,IAAI,CAAY;QAChB,WAAM,GAAN,MAAM,CAAQ;IACrB,CAAC;IAEJ,4DAA4D;IAC5D,6CAA6C;IAC7C,qDAAqD;IACrD,KAAK,CAAC,YAA0B;QAC9B,OAAO,IAAI,CAAC,IAAI,CAAC,IAAI,CACnB,GAAG,WAAW,CAAC,WAAW,QAAQ,EAClC,YAAY,CACb,CAAC,IAAI;QACJ,6DAA6D;QAC7D,GAAG,CAAC,QAAQ,CAAC,EAAE,CAAC,IAAI,CAAC,aAAa,CAAC,QAAQ,CAAC,CAAC,CAC9C,CAAC;IACJ,CAAC;IAED,4DAA4D;IAC5D,uCAAuC;IACvC,MAAM;QACJ,YAAY,CAAC,UAAU,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC;QAC1C,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;IACnC,CAAC;IAED,4DAA4D;IAC5D,wDAAwD;IACxD,UAAU;QACR,OAAO,YAAY,CAAC,OAAO,CAAC,IAAI,CAAC,WAAW,CAAC,KAAK,IAAI,CAAC;IACzD,CAAC;IAED,4DAA4D;IAC5D,oEAAoE;IACpE,SAAS;QACP,MAAM,IAAI,GAAG,YAAY,CAAC,OAAO,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC;QACpD,OAAO,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;IACxC,CAAC;IAED,6DAA6D;IAC7D,OAAO;QACL,MAAM,MAAM,GAAG,IAAI,CAAC,SAAS,EAAE,CAAC;QAChC,OAAO,MAAM,EAAE,GAAG,KAAK,OAAO,CAAC;IACjC,CAAC;IAED,4DAA4D;IACpD,aAAa,CAAC,QAAuB;QAC3C,YAAY,CAAC,OAAO,CAAC,IAAI,CAAC,WAAW,EAAE,IAAI,CAAC,SAAS,CAAC,QAAQ,CAAC,CAAC,CAAC;IACnE,CAAC;;;;;;AApDU,WAAW;IAHvB,UAAU,CAAC;QACV,UAAU,EAAE,MAAM,CAAC,+CAA+C;KACnE,CAAC;GACW,WAAW,CAqDvB",
      sourcesContent: ["\r\nimport { Injectable } from '@angular/core';\r\nimport { HttpClient } from '@angular/common/http';\r\nimport { Observable, tap } from 'rxjs';\r\nimport { Router } from '@angular/router';\r\nimport { environment } from '../../../environments/environment';\r\nimport { LoginRequest, LoginResponse } from '../../models/usuario.model';\r\n\r\n@Injectable({\r\n  providedIn: 'root' // Disponible en toda la aplicaci\xF3n (singleton)\r\n})\r\nexport class AuthService {\r\n\r\n  // Clave usada para guardar la sesi\xF3n en localStorage\r\n  private readonly SESSION_KEY = 'fullstack3_session';\r\n\r\n  constructor(\r\n    private http: HttpClient,\r\n    private router: Router\r\n  ) {}\r\n\r\n  // \u2500\u2500\u2500 LOGIN \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // Llama al endpoint POST /api/usuarios/login\r\n  // Si es exitoso, guarda la respuesta en localStorage\r\n  login(credenciales: LoginRequest): Observable<LoginResponse> {\r\n    return this.http.post<LoginResponse>(\r\n      `${environment.apiUsuarios}/login`,\r\n      credenciales\r\n    ).pipe(\r\n      // tap() ejecuta un efecto secundario sin modificar el stream\r\n      tap(response => this.guardarSesion(response))\r\n    );\r\n  }\r\n\r\n  // \u2500\u2500\u2500 LOGOUT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // Limpia la sesi\xF3n y redirige al login\r\n  logout(): void {\r\n    localStorage.removeItem(this.SESSION_KEY);\r\n    this.router.navigate(['/login']);\r\n  }\r\n\r\n  // \u2500\u2500\u2500 VERIFICAR AUTENTICACI\xD3N \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // Retorna true si hay una sesi\xF3n activa en localStorage\r\n  isLoggedIn(): boolean {\r\n    return localStorage.getItem(this.SESSION_KEY) !== null;\r\n  }\r\n\r\n  // \u2500\u2500\u2500 OBTENER SESI\xD3N \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // Retorna el objeto LoginResponse guardado, o null si no hay sesi\xF3n\r\n  getSesion(): LoginResponse | null {\r\n    const data = localStorage.getItem(this.SESSION_KEY);\r\n    return data ? JSON.parse(data) : null;\r\n  }\r\n\r\n  // \u2500\u2500\u2500 VERIFICAR ROL ADMIN \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  isAdmin(): boolean {\r\n    const sesion = this.getSesion();\r\n    return sesion?.rol === 'ADMIN';\r\n  }\r\n\r\n  // \u2500\u2500\u2500 M\xC9TODO PRIVADO: GUARDAR SESI\xD3N \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  private guardarSesion(response: LoginResponse): void {\r\n    localStorage.setItem(this.SESSION_KEY, JSON.stringify(response));\r\n  }\r\n}\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0e86c64dd54cb0e40e6e2e676bbe3651a2f2d18a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_w0y2wf6kw = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var AuthService;
var init_auth_service = __esm({
  "src/app/core/services/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_esm();
    init_router();
    init_environment();
    cov_w0y2wf6kw();
    cov_w0y2wf6kw().s[0]++;
    AuthService = class AuthService2 {
      http;
      router;
      // Clave usada para guardar la sesión en localStorage
      SESSION_KEY = (cov_w0y2wf6kw().s[1]++, "fullstack3_session");
      constructor(http, router) {
        cov_w0y2wf6kw().f[0]++;
        cov_w0y2wf6kw().s[2]++;
        this.http = http;
        cov_w0y2wf6kw().s[3]++;
        this.router = router;
      }
      // ─── LOGIN ───────────────────────────────────────────────
      // Llama al endpoint POST /api/usuarios/login
      // Si es exitoso, guarda la respuesta en localStorage
      login(credenciales) {
        cov_w0y2wf6kw().f[1]++;
        cov_w0y2wf6kw().s[4]++;
        return this.http.post(`${environment.apiUsuarios}/login`, credenciales).pipe(
          // tap() ejecuta un efecto secundario sin modificar el stream
          tap((response) => {
            cov_w0y2wf6kw().f[2]++;
            cov_w0y2wf6kw().s[5]++;
            return this.guardarSesion(response);
          })
        );
      }
      // ─── LOGOUT ──────────────────────────────────────────────
      // Limpia la sesión y redirige al login
      logout() {
        cov_w0y2wf6kw().f[3]++;
        cov_w0y2wf6kw().s[6]++;
        localStorage.removeItem(this.SESSION_KEY);
        cov_w0y2wf6kw().s[7]++;
        this.router.navigate(["/login"]);
      }
      // ─── VERIFICAR AUTENTICACIÓN ─────────────────────────────
      // Retorna true si hay una sesión activa en localStorage
      isLoggedIn() {
        cov_w0y2wf6kw().f[4]++;
        cov_w0y2wf6kw().s[8]++;
        return localStorage.getItem(this.SESSION_KEY) !== null;
      }
      // ─── OBTENER SESIÓN ──────────────────────────────────────
      // Retorna el objeto LoginResponse guardado, o null si no hay sesión
      getSesion() {
        cov_w0y2wf6kw().f[5]++;
        const data = (cov_w0y2wf6kw().s[9]++, localStorage.getItem(this.SESSION_KEY));
        cov_w0y2wf6kw().s[10]++;
        return data ? (cov_w0y2wf6kw().b[0][0]++, JSON.parse(data)) : (cov_w0y2wf6kw().b[0][1]++, null);
      }
      // ─── VERIFICAR ROL ADMIN ──────────────────────────────────
      isAdmin() {
        cov_w0y2wf6kw().f[6]++;
        const sesion = (cov_w0y2wf6kw().s[11]++, this.getSesion());
        cov_w0y2wf6kw().s[12]++;
        return sesion?.rol === "ADMIN";
      }
      // ─── MÉTODO PRIVADO: GUARDAR SESIÓN ──────────────────────
      guardarSesion(response) {
        cov_w0y2wf6kw().f[7]++;
        cov_w0y2wf6kw().s[13]++;
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(response));
      }
      static ctorParameters = (cov_w0y2wf6kw().s[14]++, () => {
        cov_w0y2wf6kw().f[8]++;
        cov_w0y2wf6kw().s[15]++;
        return [{
          type: HttpClient
        }, {
          type: Router
        }];
      });
    };
    cov_w0y2wf6kw().s[16]++;
    AuthService = __decorate([Injectable({
      providedIn: "root"
      // Disponible en toda la aplicación (singleton)
    })], AuthService);
  }
});

export {
  AuthService,
  init_auth_service
};
//# sourceMappingURL=chunk-6YKIA4DS.js.map
