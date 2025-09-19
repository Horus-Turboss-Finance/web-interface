# 🧠 STATE MANAGEMENT 
Ce document décrit la stratégie de **gestion d'état** adoptée dans l'interface web, avec un focus sur :
* la séparation entre **état global** et **état local**,
* l'utilisation exclusive de **custom React hooks** pour encapsuler la logique métier et l'état,
* les **bonnes pratiques** pour garantir un code **scalable**, **lisible** et **maintenable**.

## 🎯 Objectif
L'idée n'est **pas** de sur-ingénier l'état, mais de :
* Centraliser la **logique métier** dans des hooks réutilisables
* Maintenir un **état global minimal** (auth, utilisateur, feature toggles…)
* Garder les **états locaux isolés** au niveau des composants ou features
* Minimiser la dépendance aux outils tiers (**pas de Redux, Zustand, Jotai, etc.**)

## ⚖️ Global vs Local
### 🟦 État local
Utilisé dans :
- Composants UI (formulaires, modales, pagination, etc.)
- Données temporaires ou non partagées

```tsx
const [isOpen, setIsOpen] = useState(false);
const [search, setSearch] = useState("");
```

### 🟨 État global
Géré à l'aide de **custom hooks** partagés, basés sur :
* `useContext`
* `useReducer`
* `useSyncExternalStore` (dans certains cas avancés)

Exemples :
* Authentification (`useAuth`)
* Informations utilisateur (`useUser`)
* Notifications (à venir)

## 🪝 Custom Hooks (Logique Métiers)
Chaque **feature métier** dispose de ses propres hooks, qui encapsulent :
* La **logique métier**
* Les **appels API** (via `axios`)
* L'**état local ou global** associé à cette feature

### Exemple simplifié : `useAuth.ts`
```ts
import { useState, useEffect } from "react";
import { login, logout } from "@/api/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (credentials: Credentials) => {
    const result = await login(credentials);
    setUser(result.user);
  };

  const signOut = async () => {
    await logout();
    setUser(null);
  };

  return { user, signIn, signOut, isAuthenticated: !!user };
}
```

> ✅ Chaque hook est **isolé** dans le dossier `src/hooks/` ou `features/*/hooks/`, **typé** et **documenté**.

## 🧩 Séparation des responsabilités
| Élément                | Représentation dans le code       | Exemple                            |
| ---------------------- | --------------------------------- | ---------------------------------- |
| **Actions**            | Méthodes dans le hook             | `signIn()`, `updateUserSettings()` |
| **État**               | `useState`, `useReducer`          | `const [user, setUser] = ...`      |
| **Effets secondaires** | `useEffect`, `axios` dans le hook | `fetch on mount`, etc.             |
| **Structure**          | Dossiers modulaires par feature   | `features/auth/hooks/useAuth.ts`   |

> ❌ Pas de `actions.ts`, `reducers.ts`, `slices.ts` type Redux.

## 📦 Middleware
Aucun middleware comme **Redux Thunk** ou **Redux Saga** n'est utilisé.
Les effets asynchrones sont gérés **directement dans les hooks**, avec `async/await` et **Axios**, pour :
* une **meilleure lisibilité**,
* un **débogage simplifié**,
* une **dépendance réduite** aux solutions tierces.

## 💾 Persistance
La **persistance d'état** (authentification, session) est entièrement **gérée côté serveur** via **cookies HTTP** :
* Le serveur utilise les cookies envoyés automatiquement pour répondre avec les bonnes données
* Aucun `localStorage` ou `sessionStorage` côté client n'est utilisé pour les données sensibles

## 🧭 Bonnes pratiques
* Un hook = une responsabilité métier claire
* Ne pas exposer trop d'état brut, encapsuler la logique dans le hook
* Utiliser un **pattern par feature** : `hooks/`, `services/`, `components/`


## 🔍 Cas d'usage typiques
| Hook                      | Rôle                                                   |
| ------------------------- | ------------------------------------------------------ |
| `useAuth()`               | Gestion de l'authentification et de la session         |
| `useUser()`               | Accès aux infos de l'utilisateur courant               |
| `useFinancial()`          | Logique métier et récupération des données financières |
| `useNotificationCenter()` | Gestion centralisée des notifications (à venir)        |


> 🧠 L'utilisation exclusive des **custom hooks** pour la gestion d'état permet de garder une architecture simple, claire et performante, particulièrement adaptée aux **applications React modernes** à taille humaine ou modulaire.