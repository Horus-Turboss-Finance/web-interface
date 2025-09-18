import { render } from "./dist/server/server-entry.js";
import compression from "compression";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'node:fs/promises';
import express from 'express';
import path from 'node:path';
import sirv from "sirv";

// Constants
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cached production assets
const templateHtml = await fs.readFile(path.resolve(__dirname, './dist/client/index.html'), 'utf-8');

// Create http server
const app = express()

app.use(compression())
app.use(base, sirv(path.resolve(__dirname, './dist/client'), { extensions: [] }))

// Servez les assets en statique AVANT (tu l'as déjà)
app.use(base, sirv(path.resolve(__dirname, './dist/client'), { extensions: [] }))

app.get(/\.(js|css|map|json|png|jpg|jpeg|svg|ico|webp|woff2?)$/, (req, res) => {
  res.status(404).end(); // pas de HTML ici
});

// SSR UNIQUEMENT pour les requêtes HTML
app.get(/(.*)/, async (req, res, next) => {
  const accept = req.headers.accept || '';
  if (!accept.includes('text/html')) return next(); // Laisse passer les assets/API

  try {
    const htmlRender = render(req.originalUrl);
    const template = templateHtml;

    const html = template
      .replace(`<!--app-head-->`, htmlRender.head ?? '')
      .replace(`<!--app-html-->`, htmlRender.html ?? '')

    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.status(200).type('html').send(html);
  } catch (e) {
    console.error(e.stack);
    res.status(500).end("Une erreur est survenue");
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Frontend running on port ${port}`)
})