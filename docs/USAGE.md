# ▶️ USAGE
Ce document explique **comment utiliser l'interface Cash Sights en local**, avec un focus sur les commandes de développement, de build, et la configuration via les variables d’environnement.

## 🔄 Lancer l'application en local (mode développement)
### 1. Installer les dépendances
```bash
pnpm install
```

> 🔍 Si vous utilisez `npm` ou `yarn`, adaptez les commandes ci-dessous.

### 2. Démarrer le serveur de développement
```bash
pnpm dev
```

Cela démarre Vite avec :
* **HMR activé** (Hot Module Replacement)
* Serveur local accessible depuis votre réseau (`--host`)

## 📜 Scripts NPM disponibles
| Script               | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| `pnpm dev`           | Démarre le serveur de dev avec Vite             |
| `pnpm lint`          | Exécute ESLint sur tout le projet               |
| `pnpm build:client`  | Build côté client React (SPA ou hydratation SSR) dans `dist/client/`     |
| `pnpm build:server`  | Build côté serveur (SSR) dans `dist/server/`                             |
| `pnpm preproduction` | Build client + serveur pour un déploiement complet                       |
| `pnpm preview`       | Lance un serveur local pour prévisualiser le build (statique uniquement) |

## 📁 Structure des builds
Après un build `preproduction`, la structure est la suivante :

```
dist/
├── client/   → Bundle côté navigateur
└── server/   → Bundle pour le serveur SSR
```

Le fichier d'entrée serveur est défini dans :

```ts
server.js
```

## ❓ Foire aux Questions
### Puis-je lancer uniquement le client sans SSR ?
Oui. `npm run dev` le permet

### Le projet supporte-t-il le hot-reloading ?
Oui, via Vite. Toute modification sauvegardée est rechargée instantanément dans le navigateur.

> 🧠 Si vous rencontrez un problème ou souhaitez contribuer, merci de lire [`CONTRIBUTING.md`](../CONTRIBUTING.md) pour suivre le bon workflow.