// ============================================================
// ARCHIVO: src/main.ts
// DESCRIPCIÓN: Punto de entrada de la aplicación Angular.
// Inicializa la app usando el AppComponent y la configuración
// definida en app.config.ts (enfoque standalone, sin NgModules).
// ============================================================

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication arranca la aplicación en modo standalone
// Si hay algún error de configuración, se verá en la consola aquí
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error('Error al iniciar la aplicación:', err));
