import {
  AuthService,
  init_auth_service
} from "./chunk-6YKIA4DS.js";
import {
  Router,
  init_router
} from "./chunk-45UUSLVD.js";
import "./chunk-QT67HBTK.js";
import "./chunk-J2TET66I.js";
import "./chunk-DPIYGMOA.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-X225SWGN.js";

// src/app/core/guards/auth.guard.spec.ts
init_testing();
init_router();

// src/app/core/guards/auth.guard.ts
init_router();
init_core();
init_auth_service();
function cov_w265vx19e() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\core\\guards\\auth.guard.ts";
  var hash = "9e2efb901dd5785687a13ddba00cd96580ae2796";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\app\\core\\guards\\auth.guard.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 5,
          column: 43
        }
      },
      "2": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 6,
          column: 33
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "4": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 20
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 36
        }
      },
      "6": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 26
          }
        },
        loc: {
          start: {
            line: 4,
            column: 43
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }, {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 13,
            column: 5
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
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "auth.guard.js",
      sourceRoot: "",
      sources: ["auth.guard.ts"],
      names: [],
      mappings: "AACA,OAAO,EAAiB,MAAM,EAAE,MAAM,iBAAiB,CAAC;AACxD,OAAO,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;AACvC,OAAO,EAAE,WAAW,EAAE,MAAM,0BAA0B,CAAC;AAEvD,MAAM,CAAC,MAAM,SAAS,GAAkB,CAAC,KAAK,EAAE,KAAK,EAAE,EAAE;IACvD,MAAM,WAAW,GAAG,MAAM,CAAC,WAAW,CAAC,CAAC;IACxC,MAAM,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,CAAC;IAE9B,IAAI,WAAW,CAAC,UAAU,EAAE,EAAE,CAAC;QAC7B,OAAO,IAAI,CAAC;IACd,CAAC;SAAM,CAAC;QACN,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;QAC5B,OAAO,KAAK,CAAC;IACf,CAAC;AACH,CAAC,CAAC",
      sourcesContent: ["\r\nimport { CanActivateFn, Router } from '@angular/router';\r\nimport { inject } from '@angular/core';\r\nimport { AuthService } from '../services/auth.service';\r\n\r\nexport const authGuard: CanActivateFn = (route, state) => {\r\n  const authService = inject(AuthService);\r\n  const router = inject(Router);\r\n\r\n  if (authService.isLoggedIn()) {\r\n    return true;\r\n  } else {\r\n    router.navigate(['/login']);\r\n    return false;\r\n  }\r\n};\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9e2efb901dd5785687a13ddba00cd96580ae2796"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_w265vx19e = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_w265vx19e();
cov_w265vx19e().s[0]++;
var authGuard = (route, state) => {
  cov_w265vx19e().f[0]++;
  const authService = (cov_w265vx19e().s[1]++, inject(AuthService));
  const router = (cov_w265vx19e().s[2]++, inject(Router));
  cov_w265vx19e().s[3]++;
  if (authService.isLoggedIn()) {
    cov_w265vx19e().b[0][0]++;
    cov_w265vx19e().s[4]++;
    return true;
  } else {
    cov_w265vx19e().b[0][1]++;
    cov_w265vx19e().s[5]++;
    router.navigate(["/login"]);
    cov_w265vx19e().s[6]++;
    return false;
  }
};

// src/app/core/guards/auth.guard.spec.ts
init_auth_service();
describe("authGuard", () => {
  let authServiceSpy;
  let routerSpy;
  const mockRoute = {};
  const mockState = { url: "/dashboard" };
  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", ["isLoggedIn", "isAdmin", "getSesion"]);
    routerSpy = jasmine.createSpyObj("Router", ["navigate", "createUrlTree", "serializeUrl"]);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
  });
  it("deber\xEDa permitir el acceso cuando el usuario est\xE1 logueado", () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    const result = TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));
    expect(result).toBeTrue();
  });
  it("deber\xEDa denegar el acceso y redirigir al login cuando no est\xE1 logueado", () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);
    const result = TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));
    expect(result).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/login"]);
  });
  it("deber\xEDa llamar a isLoggedIn exactamente una vez", () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));
    expect(authServiceSpy.isLoggedIn).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=spec-app-core-guards-auth.guard.spec.js.map
