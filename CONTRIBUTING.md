# 🛠️ CONTRIBUTING.md
Merci de vouloir contribuer à **Cash Sights - Interface Web** !  
Ce document décrit les bonnes pratiques à suivre pour assurer un développement propre, lisible et maintenable à long terme.

## 🧠 Préambule
Tout développement doit :
- Partir d’une *issue* claire (fonctionnalité, bug, amélioration)
- S'intégrer dans le **GitFlow simplifié** du projet

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
```

## 🗂️ Branching Strategy
### 🔧 Types de branches
| Type       | Préfixe        | Description                           | Base        | Destination |
|------------|----------------|---------------------------------------|-------------|-------------|
| Feature    | `feature/`     | Nouvelle fonctionnalité               | `develop`   | `develop`   |
| Fix        | `fix/`         | Correction non urgente                | `develop`   | `develop`   |
| Hotfix     | `hotfix/`      | Correction urgente (prod)             | `main`      | `main`      |
| Refactor   | `refactor/`    | Refonte sans changement fonctionnel   | `develop`   | `develop`   |
| Chore      | `chore/`       | Maintenance ou tâche annexe           | `develop`   | `develop`   |

### 🧾 Convention de nommage
```bash
<type>/<issue-id>-<slug>
```

Exemples :
* `feature/123-login-api`
* `fix/234-empty-input-crash`

## 🔄 Cycle complet d'une fonctionnalité
### 1. 📌 Création d’une issue
* Créer une *issue* avec : description, contexte, critères d’acceptation.
* Taguer avec le bon type (`feature`, `fix`, `chore`, etc.).

### 2. 🌱 Création de branche
```bash
git checkout develop
git pull
git checkout -b feature/123-register-endpoint
```

### 3. 💻 Développement local
* Suivre les conventions du projet (`pnpm`, TypeScript, structure modulaire).
* Faire des commits clairs et gitmoji-compliants :
  ```bash
  git commit -m ":sparkles: Ajout de l'endpoint d'inscription"
  ```

#### 🔑 Principaux gitmojis utilisés :
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

### 4. ⬆️ Push & Pull Request

```bash
git push origin feature/123-register-endpoint
```

* Créer une **PR vers `develop`**
* Utiliser un template
* Vérifier que les conditions pour la PR sont complété

### 5. 🔍 Code Review
* Min. 1 reviewer
* Respect des normes (`ESLint`, `Prettier`, structure, testabilité)

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

## 🎯 Releases & Versioning
### 📦 Versioning : Semantic Versioning (SemVer)

```
MAJOR.MINOR.PATCH[-label]
```

| Type   | Raison                                         |
| ------ | ---------------------------------------------- |
| MAJOR  | Breaking change                                |
| MINOR  | Nouvelle fonctionnalité compatible             |
| PATCH  | Bugfix / modification mineure                  |
| -label | Pre-release (`-alpha`, `-beta`, `-rc.1`, etc.) |

#### Utilisation du label :
| Situation                             | Utiliser `-label` ? | Exemple        |
| ------------------------------------- | ------------------- | -------------- |
| Fonctionnalité incomplète             | ✅ Oui              | `1.5.0-alpha`  |
| Testable mais pas prête pour la prod  | ✅ Oui              | `1.5.0-beta.3` |
| Release candidate pour test final     | ✅ Oui              | `1.5.0-rc.1`   |
| Release stable et prête pour prod     | ❌ Non              | `1.5.0`        |

Exemples :
* `1.4.0` : ajout d’une nouvelle feature
* `1.4.1` : correction d’un bug
* `2.0.0` : changement cassant
* `2.0.0-beta.1` : version bêta

### 🛠️ Processus de release
1. Regrouper les PR dans `develop`
2. Préparer la release :
   ```bash
   git checkout main
   git pull
   git merge develop
   git tag -a v1.4.0 -m "Release v1.4.0"
   git push origin main --tags
   ```
3. Le pipeline CI déclenche le déploiement
4. (Si hotfix a été fait sur `main`) :
   ```bash
   git checkout develop
   git pull origin main
   ```

## 🧪 Post-merge checklist
* [ ] L’application build correctement (`pnpm build`)
* [ ] Les tests passent (`pnpm test`)
* [ ] Lint OK (`pnpm lint`)
* [ ] Fonctionne en local (`pnpm dev`)
* [ ] SSR fonctionnel (`node ./server.js`)
* [ ] L’issue associée est **clôturée**
* [ ] Le changelog est à jour (automatique ou manuel)

## 📝 Exemple complet
```bash
# Étape 1 : Création de la branche
git checkout develop
git pull
git checkout -b feature/321-register-endpoint

# Étape 2 : Développement
# ... code + commits
git commit -m ":sparkles: Ajout du formulaire d'inscription"

# Étape 3 : Push & PR
git push origin feature/321-register-endpoint
# → PR vers develop

# Étape 4 : Merge PR → develop

# Étape 5 : Release
git checkout main
git merge develop
git tag -a v1.4.0 -m "Release v1.4.0"
git push origin main --tags
```

## 📥 Création d'une Pull Request
Une PR propre doit :
* Utiliser un template fourni (ou justifier pourquoi blank)
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

Votre rigueur sur ce processus permet à **Cash Sights** de rester une base de code saine, maintenable et évolutive.

Pour toute question, n'hésitez pas à ouvrir une *issue* ou à contacter un membre de l'équipe core.