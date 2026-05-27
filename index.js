import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { renderCV } from './src/renderer.js';

const args = process.argv.slice(2);
const langs = args.length ? args : ['es'];

let data;
const dataPath = resolve('data/cv-data.js');

if (existsSync(dataPath)) {
    data = (await import(`file://${dataPath}`)).cv;
} else {
    console.error('No se encontro data/cv-data.js');
    process.exit(1);
}

for (const lang of langs) {
    if (!['es', 'ca', 'en'].includes(lang)) {
        console.warn(`Idioma "${lang}" no soportado. Usando "es".`);
        continue;
    }

    if (!data.profiles[lang]) {
        console.warn(`No hay datos para "${lang}".`);
        continue;
    }

    const outputPath = resolve(`output/cv-${lang}.pdf`);
    renderCV(data, lang, outputPath);
    console.log(`CV generado: ${outputPath}`);
}
