# Media Técnica – Institución Universitaria Pascual Bravo

## 📁 Estructura de archivos

```
media-tecnica/
├── index.html      ← Estructura de la página
├── styles.css      ← Estilos visuales
├── data.js         ← ✏️ AQUÍ van todos los datos (instituciones, profesores, drive)
├── app.js          ← Lógica interactiva (no editar normalmente)
└── netlify.toml    ← Configuración de despliegue
```

---

## ✏️ Cómo editar la información

Todo el contenido dinámico está en **`data.js`**. Abre ese archivo y verás los 5 programas. Cada institución tiene este formato:

```js
{
  nombre: "IE Nombre de la Institución",
  grados: [
    {
      grado:    "10°",
      profesor: "Nombre Apellido",
      drive:    "https://drive.google.com/drive/folders/ID_DE_TU_CARPETA"
    },
    {
      grado:    "11°",
      profesor: "Otro Profesor",
      drive:    "https://drive.google.com/drive/folders/ID_DE_TU_CARPETA"
    }
  ]
}
```

### Agregar una nueva institución
1. Abre `data.js`
2. Busca el programa al que pertenece (ej: `arte`, `electricidad`, etc.)
3. Copia y pega un bloque de institución dentro del arreglo `instituciones: [...]`
4. Cambia el nombre, profesores y links de Drive
5. Guarda el archivo

### Agregar más grados
Dentro de `grados: [...]` de una institución, agrega tantos objetos como grados tenga.

### Cambiar el link de Drive
Copia el link de la carpeta de Google Drive (asegúrate de que sea público o con permisos a quien tenga el link) y pégalo en el campo `drive`.

---

## 🚀 Despliegue en Netlify (paso a paso)

### Opción A – Arrastrar y soltar (más fácil)
1. Ve a [netlify.com](https://netlify.com) y crea una cuenta gratuita
2. Inicia sesión y en el panel, busca la sección **"Sites"**
3. Arrastra toda la carpeta `media-tecnica/` al área que dice *"Drag and drop your site folder here"*
4. Espera unos segundos y Netlify te dará una URL como `https://nombre-aleatorio.netlify.app`
5. ¡Listo! Tu sitio está publicado

### Opción B – Desde GitHub (recomendado para actualizaciones frecuentes)
1. Crea un repositorio en [github.com](https://github.com) y sube los archivos
2. En Netlify → **Add new site** → **Import an existing project** → conecta tu GitHub
3. Selecciona el repositorio → Deploy
4. Cada vez que edites `data.js` y hagas push al repo, el sitio se actualiza automáticamente

---

## 🔗 Link de Drive – Cómo obtenerlo
1. Abre la carpeta en Google Drive
2. Click derecho → **"Obtener enlace"**
3. Cambia el acceso a **"Cualquier persona con el enlace"**
4. Copia el enlace y pégalo en `data.js`

---

## 🎨 Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Colores principales | `styles.css` línea 5-20 (variables CSS) |
| Imagen de fondo | `styles.css` buscar `background-image: url(...)` |
| Links de FORMATOS y SAPE | `index.html` buscar `onclick="window.open(..."` |
| Titulo del header | `index.html` dentro de `<div class="header-text">` |

---

## 💡 Notas
- El sitio es completamente estático (HTML + CSS + JS), no necesita servidor ni base de datos
- Funciona en móviles y tabletas
- La imagen de fondo es de Unsplash; puedes reemplazarla por una propia subiendo el archivo a la carpeta y cambiando la URL en `styles.css`
