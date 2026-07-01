# Haruki-Zone

Portfolio personal hecho con React, Vite y Tailwind CSS. La pagina funciona como un panel visual con secciones para perfil, habilidades, proyectos, estado actual, contacto y musica.

## Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

## Como ejecutar el proyecto

Instala las dependencias:

```bash
npm install
```

Inicia el servidor local:

```bash
npm run dev
```

Genera la version de produccion:

```bash
npm run build
```

Previsualiza el build:

```bash
npm run preview
```

## Estructura principal

```text
src/App.tsx
components/nav.tsx
components/footer.tsx
components/dashboard/
public/
```

- `src/App.tsx`: organiza el layout general de la pagina.
- `components/nav.tsx`: barra superior de navegacion.
- `components/footer.tsx`: footer inferior.
- `components/dashboard/hero-card.tsx`: tarjeta principal.
- `components/dashboard/profile-panels.tsx`: paneles About, Skills, Contact, Current Status y Now Playing.
- `components/dashboard/projects-panel.tsx`: panel de proyectos.
- `components/dashboard/data.ts`: datos editables de proyectos y habilidades.
- `public/`: imagenes, gifs e iconos usados por la pagina.

## Como modificar contenido

Para cambiar proyectos o habilidades, edita:

```text
components/dashboard/data.ts
```

Para cambiar textos del perfil, contacto, estado o musica, edita:

```text
components/dashboard/profile-panels.tsx
```

Para cambiar la tarjeta principal, edita:

```text
components/dashboard/hero-card.tsx
```

Para cambiar imagenes, coloca los archivos en `public/` y usalos con `assetUrl("archivo.ext")`.

## Deploy en GitHub Pages

El proyecto esta preparado para publicarse en:

```text
https://haruharuk1.github.io/haruki-zone/
```

La configuracion importante esta en:

```text
vite.config.ts
```

```ts
base: "/haruki-zone/"
```

Si el repositorio cambia de nombre, tambien hay que cambiar ese `base`.

### Publicar manualmente en rama gh-pages

Construye el proyecto:

```bash
npm run build
```

Crea un worktree para la rama de deploy:

```bash
git worktree add --orphan gh-pages-dist
```

Copia el build:

```powershell
Copy-Item -Recurse -Force dist\* gh-pages-dist\
```

Publica:

```bash
cd gh-pages-dist
git add .
git commit -m "Deploy GitHub Pages"
git branch -M gh-pages
git push -f origin gh-pages
cd ..
git worktree remove gh-pages-dist
```

En GitHub, configura Pages asi:

```text
Settings > Pages
Source: Deploy from a branch
Branch: gh-pages
Folder: /root
```

## Notas

- No edites `dist/` a mano. Se genera automaticamente con `npm run build`.
- `dist/`, `node_modules/` y archivos generados estan ignorados por Git.
- Si agregas imagenes nuevas, revisa que esten en `public/` y que se usen con rutas compatibles con GitHub Pages.
