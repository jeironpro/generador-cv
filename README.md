# CV Generator

Generador de currículums vitae en PDF con soporte multilingüe (español, catalán, inglés).

## Requisitos

- Node.js >= 18

## Instalación

```bash
npm install
```

## Uso

```bash
# Español (por defecto)
npm run build

# Idioma específico
npm run build:es
npm run build:ca
npm run build:en

# Todos los idiomas
npm run build:all
```

Los PDFs se generan en `output/cv-{lang}.pdf`.

## Estructura

```
cv-generator/
├── data/
│   ├── cv-data.js               # Datos personales (nombre, contacto, perfiles por idioma)
│   └── imagen.(png/jpg/...)     # Foto de perfil
├── src/
│   ├── renderer.js              # Orquestación del PDF
│   ├── components.js            # Componentes visuales (panel, secciones, iconos)
│   └── i18n.js                  # Traducciones de etiquetas
├── templates/
│   └── default.js               # Tema visual (colores, fuentes, márgenes)
├── index.js                     # Punto de entrada
└── output/                      # PDFs generados
```

## Datos

Edita `data/cv-data.js` para modificar el contenido del CV. Cada idioma tiene su propio perfil con experiencia laboral, educación, habilidades, etc.

## Personalización

- **Tema**: `templates/default.js` — colores del panel izquierdo/derecho, fuentes
- **Traducciones**: `src/i18n.js` — etiquetas de secciones y campos por idioma
- **Iconos**: se usan iconos de [Lucide](https://lucide.dev) renderizados con PDFKit

## Tecnologías

- [PDFKit](https://pdfkit.org/) — generación de PDFs
- [Lucide Static](https://lucide.dev/guide/static/js-modules/node) — iconos SVG
