# ============================================================
# ARCHIVO: fullstack3-frontend/Dockerfile
# ============================================================

# ── STAGE 1: COMPILAR ANGULAR ────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# Copiar manifiestos de dependencias
COPY package*.json ./

# --legacy-peer-deps evita errores de peer dependencies
# que son comunes con Angular Material en entornos limpios
RUN npm install --legacy-peer-deps

# Copiar el resto del proyecto
COPY . .

# Compilar en modo producción
RUN npm run build -- --configuration production

# ── STAGE 2: SERVIR CON NGINX ────────────────────────────
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular 17 genera output en dist/fullstack3-frontend/browser/
COPY --from=build /app/dist/fullstack3-frontend/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
