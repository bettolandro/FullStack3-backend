import {
  __esm
} from "./chunk-X225SWGN.js";

// src/environments/environment.ts
function cov_1nvuzc589y() {
  var path = "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\environments\\environment.ts";
  var hash = "6958b8e132cc609451f3324040ce00f191e84039";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\Betto\\Suimativa3FullStack3\\FullStack3-backend\\FullStack3-backend\\fullstack3-frontend\\src\\environments\\environment.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 27
        },
        end: {
          line: 7,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "environment.js",
      sourceRoot: "",
      sources: ["environment.ts"],
      names: [],
      mappings: "AACA,MAAM,CAAC,MAAM,WAAW,GAAG;IACzB,UAAU,EAAE,KAAK;IAEjB,uDAAuD;IACvD,WAAW,EAAE,oCAAoC;IAEjD,wDAAwD;IACxD,YAAY,EAAE,qCAAqC;CACpD,CAAC",
      sourcesContent: ["\r\nexport const environment = {\r\n  production: false,\r\n\r\n  // URL base del microservicio de usuarios (puerto 8081)\r\n  apiUsuarios: 'http://localhost:8081/api/usuarios',\r\n\r\n  // URL base del microservicio de productos (puerto 8082)\r\n  apiProductos: 'http://localhost:8082/api/productos',\r\n};\r\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6958b8e132cc609451f3324040ce00f191e84039"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1nvuzc589y = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var environment;
var init_environment = __esm({
  "src/environments/environment.ts"() {
    "use strict";
    cov_1nvuzc589y();
    environment = (cov_1nvuzc589y().s[0]++, {
      production: false,
      // URL base del microservicio de usuarios (puerto 8081)
      apiUsuarios: "http://localhost:8081/api/usuarios",
      // URL base del microservicio de productos (puerto 8082)
      apiProductos: "http://localhost:8082/api/productos"
    });
  }
});

export {
  environment,
  init_environment
};
//# sourceMappingURL=chunk-J2TET66I.js.map
