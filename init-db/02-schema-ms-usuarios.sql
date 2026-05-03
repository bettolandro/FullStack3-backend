-- ============================================================
-- ARCHIVO: init-db/02-schema-ms-usuarios.sql
-- DESCRIPCIÓN: Crea las tablas, secuencias e inserta datos
-- iniciales en el schema MS_USUARIOS.
-- Hibernate también puede crear las tablas, pero tenerlas
-- aquí con datos asegura que estén listas desde el inicio.
-- ============================================================

-- Conectar al schema de usuarios
ALTER SESSION SET CURRENT_SCHEMA = MS_USUARIOS;

-- ── LIMPIEZA (por si existe algo previo) ─────────────────
BEGIN EXECUTE IMMEDIATE 'DROP TABLE USUARIO CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP SEQUENCE SEQ_USUARIO'; EXCEPTION WHEN OTHERS THEN NULL; END;
/

-- ── SECUENCIA ────────────────────────────────────────────
CREATE SEQUENCE SEQ_USUARIO
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

-- ── TABLA ────────────────────────────────────────────────
CREATE TABLE USUARIO (
    ID_USUARIO NUMBER PRIMARY KEY,
    NOMBRE     VARCHAR2(100)  NOT NULL,
    CORREO     VARCHAR2(120)  NOT NULL UNIQUE,
    PASSWORD   VARCHAR2(100)  NOT NULL,
    ROL        VARCHAR2(20)   NOT NULL,
    ACTIVO     NUMBER(1)      DEFAULT 1 NOT NULL
);

-- ── DATOS INICIALES ──────────────────────────────────────
INSERT INTO USUARIO (ID_USUARIO, NOMBRE, CORREO, PASSWORD, ROL, ACTIVO)
VALUES (SEQ_USUARIO.NEXTVAL, 'Administrador Principal', 'admin@tienda.cl', 'admin123', 'ADMIN', 1);

INSERT INTO USUARIO (ID_USUARIO, NOMBRE, CORREO, PASSWORD, ROL, ACTIVO)
VALUES (SEQ_USUARIO.NEXTVAL, 'Cliente Uno', 'cliente1@tienda.cl', 'cliente123', 'USER', 1);

INSERT INTO USUARIO (ID_USUARIO, NOMBRE, CORREO, PASSWORD, ROL, ACTIVO)
VALUES (SEQ_USUARIO.NEXTVAL, 'Cliente Dos', 'cliente2@tienda.cl', 'cliente123', 'USER', 1);

COMMIT;
