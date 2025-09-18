# 📘 Convention de nommage
Ce document définit les règles à respecter afin d’assurer une **cohérence du code**, une **meilleure lisibilité**, et une **maintenance facilitée** sur le long terme.

## 📁 Noms de fichiers & dossiers

| Type               | Convention                     | Exemple                          |
|--------------------|--------------------------------|----------------------------------|
| Composant React    | `PascalCase`                | `UserCard.tsx`, `Dashboard.tsx` |
| Hook personnalisé  | `camelCase` + préfixe `use` | `useAuth.ts`, `useFetchData.ts` |
| Fichier utilitaire | `kebab-case`                | `format-date.ts`                |
| Fichier de style   | `kebab-case`                | `button.module.css`             |
| Répertoire logique | `kebab-case`                | `user-profile/`, `auth/`        |
| Fichier de test    | Suffixe `.test.tsx`         | `LoginForm.test.tsx`            |

## 🧩 Composants React
* Les composants doivent être nommés en **`PascalCase`**
* 1 fichier = 1 composant (sauf très petits composants internes)
* Utiliser **l’export par défaut** pour les composants
* Toujours utiliser l’extension `.tsx`, même sans JSX, pour uniformité

```tsx
// ✅ src/components/Button.tsx
function Button() {
  return <button>Click</button>;
}
export default Button;
```

## 🔗 Hooks React
* Toujours commencer le nom du hook par `use`
* Fichier en **camelCase**, identique au nom du hook
* Préfixer avec le domaine si nécessaire : `useAuthToken`, `useUserStore`

```ts
// ✅ src/hooks/useFetchUser.ts
function useFetchUser() {
  // ...
}
```

## 🌍 Variables & constantes
### 🧮 Variables locales
* Utiliser **`camelCase`**
* Choisir des noms explicites - éviter les abréviations non standardisées

```ts
const userList = [];
const isLoading = true;
```

### 🧱 Constantes globales
* Utiliser **`SCREAMING_SNAKE_CASE`**
* Centraliser dans `/config/constants.ts` ou fichiers dédiés

```ts
export const API_BASE_URL = "https://api.cashsight.fr";
```

## 🚏 Routes (React Router)
* Définir les routes dans `src/app.tsx`
* Utiliser **`kebab-case`** pour les segments d’URL
* Nommer les composants de page en **`PascalCase`**

```tsx
<Route path="/user-profile" element={<UserProfile />} />
```

## 🔌 API Services
* Dossier : `src/features/api/`
* Fichier par domaine ou ressource : `user.ts`, `auth.ts`, `cashflow.ts`
* Fonctions nommées en **`camelCase`**, verbes descriptifs

```ts
export async function fetchUserById(id: string) { ... }
export async function loginUser(credentials: Credentials) { ... }
```

## ⚠️ À éviter
* ❌ Abréviations peu claires : `usr`, `cfg`, `tmp`, `t`, etc.
* ❌ Utilisation systématique de `index.tsx` pour tout
* ❌ Fichiers "fourre-tout" comme `utils.ts` → préférer des fichiers utilitaires spécifiques (`formatDate.ts`, `parseJwt.ts`, etc.)

## 📌 Bonnes pratiques supplémentaires
* Commenter les hooks complexes ou les helpers non triviaux
* Un composant = une seule responsabilité
* Préférer l’import explicite aux `index.ts` opaques
* Préfixer les types/interfaces avec `I` **uniquement si cela apporte de la clarté**

> 🧠 Ces conventions peuvent évoluer avec le projet.
> Toute proposition d’amélioration est bienvenue via une *pull request* ou une *issue*.