// karma.conf.js
// Ubicación: fullstack3-frontend/karma.conf.js
//
// IMPORTANTE para Angular 21 con @angular/build:
// El builder inyecta sus propios plugins internamente.
// El karma.conf.js SOLO debe declarar los plugins de karma puros.
// NO incluir '@angular-devkit/build-angular' ni '@angular/build/plugins/karma'.

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage')
    ],
    client: {
      jasmine: {
        random: false
      },
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },

    // ─── COBERTURA ───────────────────────────────────────────────────────────
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/fullstack3-frontend'),
      subdir: '.',
      reporters: [
        { type: 'html' },        // Reporte visual → coverage/fullstack3-frontend/index.html
        { type: 'lcovonly' },    // Para SonarQube → lcov.info
        { type: 'text-summary' } // Resumen en consola
      ]
    },

    reporters: ['progress', 'kjhtml'],

    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};
