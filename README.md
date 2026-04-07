# ecoglobe-website

## Convenciones para imágenes y assets

- **Logos de marcas**:
  - Se ubican en `public/logos`.
  - Se accede a ellos mediante rutas absolutas desde la raíz, por ejemplo: `/logos/canadian-solar.png`.
  - Estos logos no se importan como módulos en los componentes de React.

- **Otros assets estáticos (hero, iconos, etc.)**:
  - Pueden ubicarse en `public` (por ejemplo, `public/hero`, `public/icons`) cuando no necesitan pasar por el bundler.

- **Assets que se importan desde el código**:
  - Si se necesitan imágenes que formen parte del bundle (por ejemplo, para imports dinámicos), se recomienda usar una carpeta `src/assets` y referenciarlas mediante imports, idealmente utilizando el alias `@` configurado en `vite.config.js` (`@/assets/...`).
