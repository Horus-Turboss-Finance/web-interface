# 🧱 Architecture - Cash Sights
Ce document présente l’architecture de l’interface web de **Cash Sights**, ainsi que les choix techniques structurants.
L’objectif est de garantir une base de code **maintenable**, **évolutive** et **performante**, adaptée à une application moderne.

## 🧭 Vue d'ensemble
Le frontend est structuré selon une approche **modulaire** et **scalée** autour de trois couches principales :
Le frontend est structuré selon une approche **modulaire** et **scalable**, organisée autour de plusieurs couches principales.

> [!NOTE]
> Cette architecture est susceptible d’évoluer lors du prochain refactor.

```
src/            
├── assets/             → Icônes, images, médias statiques
├── components/         → Composants réutilisables dans toute l'application
├── config/             → Fichiers de configuration (ex : thèmes, constantes)
├── context/            → Contexts React & providers (états globaux ou locaux)
├── features/           → Domaines fonctionnels encapsulés (logique métier + API)
├── hooks/              → Custom hooks (useCustom...)
├── layout/             → Layouts de pages réutilisables (404, ComingSoon, etc.)
├── pages/              → Pages de l’application (points d’entrée des routes)
├── style/              → Feuilles de styles globales et modulaires
│   ├── components/     → Styles des composants
│   │   └── index-components.css
│   ├── layout/         → Styles des layouts
│   │   └── index-layout.css
│   ├── page/           → Styles des pages
│   │   └── index-pages.css
│   └── index-style.css → Import central des styles
├── testing/            → Dossier réservé aux tests (non encore implémenté)
├── types/              → Types TypeScript partagés
├── utils/              → Fonctions utilitaires & helpers
├── app.tsx             → Entrée principale de l'application
├── client-entry.tsx    → Point d’entrée pour le rendu côté client (CSR)
└── server-entry.tsx    → Point d’entrée pour le rendu côté serveur (SSR)

```

## 🧩 Routing
Le routage est géré avec **React Router v7.7.0**.
* Défini dans `src/app.tsx`, exporté via `client-entry.tsx` ou `server-entry.tsx` selon le mode de rendu.
* Utilise `BrowserRouter` (CSR) ou `StaticRouter` (SSR).
* Authentification encapsulée dans un wrapper `AuthRoute` (ex. `notForLogged`, `needLogin`).

## 🪄 Lazy Loading & Code Splitting
*(en cours de réflexion - pas encore implémenté)*

Utilisation prévue de **`React.lazy`** et des **imports dynamiques de Vite** pour charger les modules ou routes secondaires à la demande.

Objectif :
* Réduire le bundle initial
* Optimiser le TTI (*Time-To-Interactive*)
* Améliorer la fluidité perçue

**Exemple :**
```tsx
const Dashboard = React.lazy(() => import("@/features/dashboard"));
```

Un composant global `Suspense` avec un `Loader` sera utilisé en fallback.

## 🧱 Organisation des Composants
L’organisation suivra une logique claire basée sur la responsabilité du composant :
* `components/` → composants **purs**, réutilisables, sans logique métier
  *(ex: `Button.tsx`, `Modal.tsx`, `InputField.tsx`)*
* `features/` → composants **métier**, encapsulant logique, hooks, services et vues
  *(ex: `features/cashflow/`, `features/auth/`)*
* `layout/` → composants de layout applicatif (`PublicLayout`, `PrivateLayout`)
* `pages/` → points d’entrée des routes, souvent des wrappers autour de `features`

Exemple de structure d’une *feature* :
```
features/
└── auth/
    ├── components/
    ├── hooks/
    ├── services/
    └── index.ts
```

## 🌍 Gestion de l'état global
Aucun store global (comme Redux, Zustand, etc.) n’est utilisé **tant qu’une solution locale reste viable**, afin de limiter la complexité inutile du code.

## 🔌 Communication avec le backend
L’API REST est encapsulée dans des services, localisés dans `src/features/api/`.
* Requêtes HTTP via **Axios**
* Endpoints centralisés pour clarté et évolutivité
* Gestion des erreurs via **interceptors**
* Possibilité d’**ajout de mocks** avec **MSW** pour les tests
* Les appels API sont **encapsulés dans des custom hooks** (ex: `useUser()`)

> [!CAUTION]
> La logique métier conditionne où et comment l'API est appelée - souvent dans les hooks métier, pas directement dans les composants.

## ✅ Tests *(en cours de réflexion)*
* **Vitest** pour les tests unitaires
* **Testing Library** : tests UI
* Structure des tests calquée sur le code source (`__tests__`, ou fichiers `.test.tsx`)
* **Pas de snapshot testing** inutile

## 🤝 Contribution
Merci de vous référer au fichier [`CONTRIBUTING.md`](./CONTRIBUTING.md) pour connaître :
* le workflow Git
* les conventions de commits
* la procédure de test avant les PRs

> Pour toute question d’architecture, merci d’ouvrir une *issue* ou de mentionner un mainteneur dans la PR concernée.