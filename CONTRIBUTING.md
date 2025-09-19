# 🛠️ CONTRIBUTING.md
Merci de vouloir contribuer à **Cash Sights - Interface Web** !  
Ce document décrit les bonnes pratiques à suivre pour assurer un développement propre, lisible et maintenable à long terme.

## 🔧 Stack et Contexte
- **Framework** : React + ViteJS
- **Langage** : TypeScript
- **Gestion de versions** : Git
- **Convention de commits** : [Gitmoji](https://gitmoji.dev/)
- **Workflow Git** : GitFlow simplifié (cf. ci-dessous)

## 📁 Structure du projet
Le projet suit une architecture modulaire et évolutive. Merci de respecter la structure de fichiers existante lors de l'ajout de nouvelles fonctionnalités.

## 📦 Installation du projet
Avant de commencer à développer, assurez-vous d'avoir les dépendances à jour :
```bash
pnpm install
````

## 🚦 Git Workflow
Nous utilisons un **GitFlow simplifié** adapté aux applications web :
* `main` → code stable et déployé en production
* `develop` → branche de développement intégrant les nouvelles features
* `feature/xxx` → nouvelle fonctionnalité
* `fix/xxx` → correctif de bug
* `hotfix/xxx` → correctif en production

### Exemple de cycle :
```bash
# Créer une nouvelle fonctionnalité
git checkout develop
git pull
git checkout -b feature/ajout-tableau-de-bord

# Développer, committer, pusher
git commit -m ":sparkles: Ajout du composant Dashboard"
git push origin feature/ajout-tableau-de-bord

# Créer une PR vers develop
```

## ✍️ Règles de commit avec Gitmoji
Nous utilisons **gitmoji** pour améliorer la lisibilité de l'historique Git.

### 🔑 Principaux gitmojis utilisés :
| Emoji | Code                 | Description                            |
| ----- | -------------------- | -------------------------------------- |
| ✨    | `:sparkles:`         | Nouvelle fonctionnalité                |
| 🐛    | `:bug:`              | Correction de bug                      |
| ♻️    | `:recycle:`          | Refactoring                            |
| 🔥    | `:fire:`             | Suppression de code ou fichier inutile |
| 🧪    | `:test_tube:`        | Ajout ou MAJ de tests                  |
| 📝    | `:memo:`             | MAJ de documentation                   |
| 💄    | `:lipstick:`         | MAJ UI / style                         |
| 🚚    | `:truck:`            | Renommage ou déplacement de fichier    |
| ✅    | `:white_check_mark:` | Ajout d'un test passé avec succès      |

### Exemple de message de commit :
```bash
git commit -m ":sparkles: Ajout du composant Header"
```

## ✅ Tests & Vérifications
Avant toute **pull request**, merci de :

1. Vérifier que l'application se build correctement :
   ```bash
   pnpm build
   ```

2. Lancer les tests unitaires (soon) :
   ```bash
   pnpm test
   ```

3. Lancer le linter :
   ```bash
   pnpm lint
   ```

4. Vérifier que l'application fonctionne en local :
   ```bash
   pnpm dev
   ```

5. Vérifier que la version Server Side Rendering (SSR) fonctionne correctement :
   ```bash
   node ./server.js
   ```

## 📥 Création d'une Pull Request
Une PR propre doit :
* Être basée sur `develop` (jamais `main`)
* Contenir un titre explicite et un résumé clair dans la description
* Inclure des captures d'écran si modification UI
* Passer tous les tests
* Être revue par au moins **1 staff**

## 💬 Code Review
Lors des revues de code, on vérifie :
* Cohérence avec l'architecture existante
* Lisibilité, modularité, DRY
* Séparation logique des composants/fichiers
* Qualité des messages de commits
* Présence de tests (unitaires / e2e selon les cas)
* Conformité aux normes de code

## 🧹 Normes de Code
* Utiliser `ESLint` + `Prettier`
* Suivre les conventions JSX/React standard
* Code clair, explicite, évitant les abréviations inutiles
* Favoriser les composants fonctionnels et hooks
* Ne pas laisser de console.log (sauf contre indication) ou TODO (sauf contre indication) non traités dans les PRs

## 🙏 Merci !
Merci de contribuer à rendre **Cash Sights** plus robuste et plus agréable à utiliser !
Pour toute question, n'hésitez pas à ouvrir une *issue* ou à contacter un membre de l'équipe core.