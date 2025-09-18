# 📦 INSTALLATION
Ce guide décrit toutes les étapes nécessaires pour installer, configurer et lancer l'interface web de **Cash Sights** en local.

## 🧰 Prérequis
Assurez-vous d’avoir les éléments suivants installés :
- **Git** `>=2.30`
- **Node.js** `>=18.0.0`
- **pnpm** `>=8.x` (ou `npm` / `yarn`, mais pnpm est conseillé)
- **Accès SSH** au repo GitHub :  
  `git@github.com:Horus-Turboss-Finance/web-interface.git`

## 🚀 Étapes d'installation
### 1. Cloner le dépôt
```bash
git clone git@github.com:Horus-Turboss-Finance/web-interface.git
cd web-interface
````

### 2. Installer les dépendances
```bash
pnpm install
```

> [!TIP]
> Utilisez `pnpm` pour des performances accrues et une gestion propre du cache.

## 🧪 Lancer l'environnement de développement
```bash
pnpm dev
```

Cela démarre le serveur de développement Vite avec `--host` activé (accessible via `localhost:5173` depuis le réseau local).

## 🛠️ Linter le code
```bash
pnpm lint
```

Cela utilise `eslint` avec des règles React/TS configurées localement.

## 🧱 Build de production
Le projet utilise un build **client + server** séparé pour le SSR (Server-Side Rendering).

### 1. Build uniquement côté client
```bash
pnpm build:client
```

### 2. Build uniquement côté serveur
```bash
pnpm build:server
```

### 3. Build complet préproduction
```bash
pnpm preproduction
```

Cela effectue :
* Transpilation TypeScript
* Build SSR (`vite --ssr`)
* Output dans `dist/client/` et `dist/server/`

## 👀 Prévisualiser le build
```bash
pnpm preview
```

Cela démarre un serveur local Vite pour visualiser le build statique.

## 🧯 Dépannage
* Si un module semble manquant : `pnpm install`
* Si le build échoue : supprimer `node_modules/` + `.pnpm-store` et relancer l'installation
* Vérifiez les permissions SSH si le clone Git échoue

## 📁 Arborescence des fichiers clés
```
.
├── src/
│   ├── server-entry.tsx    → Point d'entrée SSR
│   ├── client-entry.tsx    → Entrée client React
│   └── ...
├── dist/                   → Build final
│   ├── client/
│   └── server/
├── DOCS/
│   └── INSTALLATION.md     → Ce fichier
├── package.json
└── vite.config.js
```

## 📚 Documentation associée
* [`README.md`](../README.md)
* [`ARCHITECTURE.md`](./ARCHITECTURE.md)
* [`CONTRIBUTING.md`](../CONTRIBUTING.md)

--- 

<div align="center">Une fois l’installation terminée, vous pouvez commencer à développer, corriger des bugs ou proposer des améliorations via pull request.</div>