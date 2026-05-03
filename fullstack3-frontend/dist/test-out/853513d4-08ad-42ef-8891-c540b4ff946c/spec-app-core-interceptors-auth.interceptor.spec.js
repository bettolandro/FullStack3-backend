import {
  HttpTestingController
} from "./chunk-MU4QYCSZ.js";
import {
  Router,
  init_router
} from "./chunk-45UUSLVD.js";
import "./chunk-QT67HBTK.js";
import {
  HttpClient,
  init_http,
  provideHttpClient,
  withInterceptors
} from "./chunk-DPIYGMOA.js";
import {
  TestBed,
  catchError,
  init_core,
  init_esm,
  init_testing,
  inject,
  throwError
} from "./chunk-X225SWGN.js";

// src/app/core/interceptors/auth.interceptor.spec.ts
init_testing();
init_http();
init_router();
init_http();

// src/app/core/interceptors/auth.interceptor.ts
init_core();
init_esm();
init_router();
function cov_2mugtz62jh() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\core\\interceptors\\auth.interceptor.ts";
  var hash = "b0d082e004b354b5d69cc3b6f9aee790d426515d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\core\\interceptors\\auth.interceptor.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 31
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 33
        }
      },
      "2": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 15,
          column: 8
        }
      },
      "3": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 10,
          column: 9
        }
      },
      "4": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 58
        }
      },
      "5": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 40
        }
      },
      "6": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 39
        }
      },
      "7": {
        start: {
          line: 14,
          column: 32
        },
        end: {
          line: 14,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 31
          },
          end: {
            line: 4,
            column: 32
          }
        },
        loc: {
          start: {
            line: 4,
            column: 46
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 37
          },
          end: {
            line: 6,
            column: 38
          }
        },
        loc: {
          start: {
            line: 6,
            column: 48
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 26
          },
          end: {
            line: 14,
            column: 27
          }
        },
        loc: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 14,
            column: 37
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 10,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 10,
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
        line: 7
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "auth.interceptor.js",
      sourceRoot: "",
      sources: ["auth.interceptor.ts"],
      names: [],
      mappings: "AAGA,OAAO,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;AACvC,OAAO,EAAE,UAAU,EAAE,UAAU,EAAE,MAAM,MAAM,CAAC;AAC9C,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;AAEzC,MAAM,CAAC,MAAM,eAAe,GAAsB,CAAC,GAAG,EAAE,IAAI,EAAE,EAAE;IAC9D,MAAM,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,CAAC;IAE9B,OAAO,IAAI,CAAC,GAAG,CAAC,CAAC,IAAI,CACnB,UAAU,CAAC,CAAC,KAAwB,EAAE,EAAE;QACtC,IAAI,KAAK,CAAC,MAAM,KAAK,GAAG,EAAE,CAAC;YACzB,YAAY,CAAC,UAAU,CAAC,oBAAoB,CAAC,CAAC;YAC9C,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;QAC9B,CAAC;QACD,gDAAgD;QAChD,sEAAsE;QACtE,8DAA8D;QAC9D,OAAO,UAAU,CAAC,GAAG,EAAE,CAAC,KAAK,CAAC,CAAC;IACjC,CAAC,CAAC,CACH,CAAC;AACJ,CAAC,CAAC",
      sourcesContent: ["\r\n\r\nimport { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';\r\nimport { inject } from '@angular/core';\r\nimport { catchError, throwError } from 'rxjs';\r\nimport { Router } from '@angular/router';\r\n\r\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\r\n  const router = inject(Router);\r\n\r\n  return next(req).pipe(\r\n    catchError((error: HttpErrorResponse) => {\r\n      if (error.status === 401) {\r\n        localStorage.removeItem('fullstack3_session');\r\n        router.navigate(['/login']);\r\n      }\r\n      // Para status 0 (sin conexi\xF3n) y otros errores:\r\n      // NO mostramos Swal aqu\xED \u2014 lo manejan los componentes individualmente\r\n      // para dar mensajes m\xE1s espec\xEDficos (qu\xE9 microservicio fall\xF3)\r\n      return throwError(() => error);\r\n    })\r\n  );\r\n};\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b0d082e004b354b5d69cc3b6f9aee790d426515d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_2mugtz62jh = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2mugtz62jh();
cov_2mugtz62jh().s[0]++;
var authInterceptor = (req, next) => {
  cov_2mugtz62jh().f[0]++;
  const router = (cov_2mugtz62jh().s[1]++, inject(Router));
  cov_2mugtz62jh().s[2]++;
  return next(req).pipe(catchError((error) => {
    cov_2mugtz62jh().f[1]++;
    cov_2mugtz62jh().s[3]++;
    if (error.status === 401) {
      cov_2mugtz62jh().b[0][0]++;
      cov_2mugtz62jh().s[4]++;
      localStorage.removeItem("fullstack3_session");
      cov_2mugtz62jh().s[5]++;
      router.navigate(["/login"]);
    } else {
      cov_2mugtz62jh().b[0][1]++;
    }
    cov_2mugtz62jh().s[6]++;
    return throwError(() => {
      cov_2mugtz62jh().f[2]++;
      cov_2mugtz62jh().s[7]++;
      return error;
    });
  }));
};

// src/app/core/interceptors/auth.interceptor.spec.ts
describe("authInterceptor", () => {
  let httpMock;
  let http;
  let routerSpy;
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        { provide: Router, useValue: routerSpy }
      ]
    });
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });
  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });
  it("deber\xEDa dejar pasar peticiones exitosas sin modificarlas", () => {
    http.get("/api/test").subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const req = httpMock.expectOne("/api/test");
    req.flush({ ok: true });
  });
  it("deber\xEDa eliminar la sesi\xF3n y redirigir al login ante un error 401", () => {
    localStorage.setItem("fullstack3_session", JSON.stringify({ rol: "USER" }));
    http.get("/api/test").subscribe({
      error: () => {
      }
    });
    const req = httpMock.expectOne("/api/test");
    req.flush({ message: "Unauthorized" }, { status: 401, statusText: "Unauthorized" });
    expect(localStorage.getItem("fullstack3_session")).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/login"]);
  });
  it("deber\xEDa propagar el error 401 al subscriber", (done) => {
    http.get("/api/test").subscribe({
      next: () => fail("No deber\xEDa tener \xE9xito"),
      error: (err) => {
        expect(err.status).toBe(401);
        done();
      }
    });
    const req = httpMock.expectOne("/api/test");
    req.flush({}, { status: 401, statusText: "Unauthorized" });
  });
  it("deber\xEDa propagar errores que no son 401 sin redirigir", (done) => {
    http.get("/api/test").subscribe({
      next: () => fail("No deber\xEDa tener \xE9xito"),
      error: (err) => {
        expect(err.status).toBe(500);
        expect(routerSpy.navigate).not.toHaveBeenCalled();
        done();
      }
    });
    const req = httpMock.expectOne("/api/test");
    req.flush({}, { status: 500, statusText: "Server Error" });
  });
  it("deber\xEDa propagar errores de red (status 0) sin redirigir al login", (done) => {
    http.get("/api/test").subscribe({
      next: () => fail("No deber\xEDa tener \xE9xito"),
      error: (err) => {
        expect(err.status).toBe(0);
        expect(routerSpy.navigate).not.toHaveBeenCalled();
        done();
      }
    });
    const req = httpMock.expectOne("/api/test");
    req.flush(null, { status: 0, statusText: "Unknown Error" });
  });
});
//# sourceMappingURL=spec-app-core-interceptors-auth.interceptor.spec.js.map
