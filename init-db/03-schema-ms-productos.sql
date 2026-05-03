-- ============================================================
-- ARCHIVO: init-db/03-schema-ms-productos.sql
-- DESCRIPCIÓN: Crea las tablas, secuencias e inserta datos
-- iniciales en el schema MS_PRODUCTOS.
-- ============================================================

-- Conectar al schema de productos
ALTER SESSION SET CURRENT_SCHEMA = MS_PRODUCTOS;

-- ── LIMPIEZA ─────────────────────────────────────────────
BEGIN EXECUTE IMMEDIATE 'DROP TABLE PRODUCTO CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP SEQUENCE SEQ_PRODUCTO'; EXCEPTION WHEN OTHERS THEN NULL; END;
/

-- ── SECUENCIA ────────────────────────────────────────────
CREATE SEQUENCE SEQ_PRODUCTO
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

-- ── TABLA ────────────────────────────────────────────────
CREATE TABLE PRODUCTO (
    ID_PRODUCTO NUMBER PRIMARY KEY,
    NOMBRE      VARCHAR2(120)   NOT NULL,
    DESCRIPCION VARCHAR2(250),
    PRECIO      NUMBER(10,2)    NOT NULL,
    STOCK       NUMBER          NOT NULL,
    CATEGORIA   VARCHAR2(80),
    ACTIVO      NUMBER(1)       DEFAULT 1 NOT NULL
);

-- ── DATOS INICIALES ──────────────────────────────────────
INSERT INTO PRODUCTO (ID_PRODUCTO, NOMBRE, DESCRIPCION, PRECIO, STOCK, CATEGORIA, ACTIVO)
VALUES (SEQ_PRODUCTO.NEXTVAL, 'Notebook Lenovo IdeaPad', 'Notebook para estudio y oficina', 549990, 10, 'Tecnologia', 1);

INSERT INTO PRODUCTO (ID_PRODUCTO, NOMBRE, DESCRIPCION, PRECIO, STOCK, CATEGORIA, ACTIVO)
VALUES (SEQ_PRODUCTO.NEXTVAL, 'Mouse Logitech Inalambrico', 'Mouse ergonomico USB', 19990, 25, 'Accesorios', 1);

INSERT INTO PRODUCTO (ID_PRODUCTO, NOMBRE, DESCRIPCION, PRECIO, STOCK, CATEGORIA, ACTIVO)
VALUES (SEQ_PRODUCTO.NEXTVAL, 'Teclado Mecanico Redragon', 'Teclado mecanico RGB', 45990, 15, 'Accesorios', 1);

INSERT INTO PRODUCTO (ID_PRODUCTO, NOMBRE, DESCRIPCION, PRECIO, STOCK, CATEGORIA, ACTIVO)
VALUES (SEQ_PRODUCTO.NEXTVAL, 'Monitor Samsung 24', 'Monitor Full HD de 24 pulgadas', 129990, 8, 'Pantallas', 1);

INSERT INTO PRODUCTO (ID_PRODUCTO, NOMBRE, DESCRIPCION, PRECIO, STOCK, CATEGORIA, ACTIVO)
VALUES (SEQ_PRODUCTO.NEXTVAL, 'Audifonos JBL Tune', 'Audifonos bluetooth', 39990, 20, 'Audio', 1);

COMMIT;
