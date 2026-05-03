// ============================================================
// ARCHIVO: fullstack3-frontend/src/environments/environment.prod.ts
// DESCRIPCIÓN: Variables de entorno para producción / Docker.
//
// En Docker Compose, los contenedores se comunican por nombre
// de servicio (no por localhost). Los nombres "ms-usuarios" y
// "ms-productos" deben coincidir exactamente con los definidos
// en el docker-compose.yml.
//
// IMPORTANTE: El frontend Angular corre en el BROWSER del cliente,
// no dentro del contenedor. Por eso las URLs deben ser accesibles
// desde el navegador del usuario, no desde dentro de Docker.
// Si expones los puertos en docker-compose (ports: "8081:8081"),
// puedes usar localhost normalmente desde el navegador.
// ============================================================

export const environment = {
  production: true,

  // Usar localhost porque el browser accede desde fuera de Docker
  // Los puertos están expuestos en docker-compose.yml
  apiUsuarios:  'http://localhost:8081/api/usuarios',
  apiProductos: 'http://localhost:8082/api/productos',
};
