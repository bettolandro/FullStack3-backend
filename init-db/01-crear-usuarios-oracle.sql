-- ============================================================
-- ARCHIVO: init-db/01-crear-usuarios-oracle.sql
-- DESCRIPCIÓN: Script de inicialización de Oracle XE.
-- Se ejecuta automáticamente al crear el contenedor oracle-db.
-- Crea los usuarios/schemas y los permisos necesarios para
-- cada microservicio.
-- ============================================================

-- Conectar como SYSTEM para crear usuarios
ALTER SESSION SET "_ORACLE_SCRIPT"=TRUE;

-- ── SCHEMA PARA MS-USUARIOS ──────────────────────────────
CREATE USER MS_USUARIOS IDENTIFIED BY msusuarios123;
GRANT CONNECT, RESOURCE TO MS_USUARIOS;
GRANT CREATE SESSION TO MS_USUARIOS;
GRANT UNLIMITED TABLESPACE TO MS_USUARIOS;

-- ── SCHEMA PARA MS-PRODUCTOS ─────────────────────────────
CREATE USER MS_PRODUCTOS IDENTIFIED BY msproductos123;
GRANT CONNECT, RESOURCE TO MS_PRODUCTOS;
GRANT CREATE SESSION TO MS_PRODUCTOS;
GRANT UNLIMITED TABLESPACE TO MS_PRODUCTOS;

-- Las tablas y secuencias las crea Hibernate automáticamente
-- gracias a spring.jpa.hibernate.ddl-auto=update
