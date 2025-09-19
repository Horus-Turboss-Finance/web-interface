# 💸 Cash Sights – Interface Web
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://cashsight.fr/)
[![Coverage](https://img.shields.io/badge/coverage-100%25-success)]()
[![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?logo=vite)](https://vitejs.dev/)

## 🧠 À propos
**Cash Sights** est une plateforme qui permet aux jeunes (18-25 ans), mais aussi aux moins jeunes, de gérer leurs finances quotidiennes de manière simple et efficace grâce au **Kiff Score**.
Ce dépôt contient l'**interface web** de Cash Sights, développée avec **React** et **ViteJS**, pour des performances optimales et une expérience utilisateur fluide.

🔗 Site en production : [https://cashsight.fr/](https://cashsight.fr/)

📁 Dépôt Git : `git@github.com:Horus-Turboss-Finance/web-interface.git`

## ⚙️ Stack technique
* **React 19.1.0** – Interface utilisateur moderne et réactive
* **ViteJS 7.0.4** – Bundler ultra-rapide pour le développement
* **TypeScript 5.8.3** – Typage statique robuste
* **React Router 7.7.0** – Routage côté client
* **Axios 1.10.0** – Appels API
* **ESLint / Prettier** – Linting et formatage du code

## 🚀 Démarrage rapide
### Prérequis
* Node.js `>=18.x`
* npm ou yarn

### Installation
```bash
git clone git@github.com:Horus-Turboss-Finance/web-interface.git
cd web-interface
npm install
```

### Lancer le serveur de développement
```bash
npm run dev
```

### Build pour la production
```bash
npm run preproduction
```

## 📚 Documentation
Toute la documentation technique est disponible dans le dossier [`./DOCS/`](./DOCS/).

## ✨ Contribution
Les contributions sont les bienvenues. Merci de consulter le fichier [`CONTRIBUTING.md`](./CONTRIBUTING.md), et de créer une *issue* pour discuter de vos propositions.

## 🧩 TODO / Roadmap
* [ ] Mise en place des **tests**
* [ ] Internationalisation (i18n)
* [ ] Ajout de métriques et d'outils d'analyse pour améliorer l'UX
* [ ] Ajout d'un bouton pour afficher **toutes les transactions** (et non uniquement les dépenses ou les revenus)
* [ ] Modifier le style de l'entrée de sélection d'icônes (passer de *row* à *square*)
* [ ] Supprimer et modifier les types de comptes et de catégories pour une compatibilité avec le format FR (et non franglais)
* [ ] Ajouter un lien d'ancrage sur la page de contact, au niveau du titre, pointant vers le formulaire
* [ ] Dashboard administrateur
* [ ] Intégration du **Kiff Score**
* [ ] Page de configuration des notifications et des emails
* [ ] Fonctionnalité de notifications
* [ ] Page de confidentialité
* [ ] Mise en place d'une Architecture micro-frontend pour les modules très découplés
* [ ] Ajout du lazy loading
* [ ] Ajout d'un storybook (pour les composants UI)


> Développé avec ❤️ par l'équipe **Horus Turboss Finance**.