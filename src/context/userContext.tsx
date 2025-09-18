import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { deleteMyAccount, getUserInfo, loginUser, signOutMyAccount, signupUser, updateMyEmail, updateMyPassword, updateMyProfile } from "../features/auth/api/authApi";
// import { SinglePageLayout } from '../utils/siglePageLayout/singlePageLayout';

import type { IUser } from '../types/@types.user';
import { AuthContext } from './userAuth';

// ---------------------
// 🔹 Auth Context
// ---------------------

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /** 🔹 Récupère les infos utilisateur */
  const fetchUser = useCallback(
    async (ignore: { value: boolean }) => {
      try {
        const userData = await getUserInfo();

        if (!ignore.value) {
          setUser({
            PPURL: "https://cashsight.fr/logo.png",
            name: userData.name,
            pseudo: userData.pseudo,
            email: userData.email,
            banner: "#694810ff",
          });
        }
      } catch {
        if (!ignore.value) {
          setUser(null);
        }
      } finally {
        if (!ignore.value) setLoading(false);
      }
    },
    []
  );

  /** 🔹 Charge l'utilisateur si un token existe */
  useEffect(() => {
    const ignore = { value: false };
    fetchUser(ignore);
    return () => {
      ignore.value = true;
    };
  }, [fetchUser]);

  /** 🔹 Connexion utilisateur */
  const login = async ({ email, password }: { email: string; password: string }) => {
    await loginUser({ email, password });
    await fetchUser({ value: false });
    navigate("/@me");
  };

  /** 🔹 Inscription utilisateur */
  const signup = async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => {
    await signupUser({ email, password, name });
    await fetchUser({ value: false });
    navigate("/@me");
  };

  /** 🔹 Déconnexion utilisateur */
  const logout = () => {
    setUser(null);
    signOutMyAccount();
    navigate("/signin");
  };

  /** 🔹 Mise à jour profil */
  const UpdateMyProfilUser = async ({
    name,
    pseudo,
  }: {
    name?: string;
    pseudo?: string;
  }) => {
    await updateMyProfile({ name, pseudo });
    await fetchUser({ value: false });
  };

  /** 🔹 Mise à jour email */
  const UpdateMyEmailUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await updateMyEmail({ email, password });
    await fetchUser({ value: false });
  };

  /** 🔹 Mise à jour mot de passe */
  const UpdateMyCredentialUser = async ({
    newPassword,
    oldPassword,
  }: {
    newPassword: string;
    oldPassword: string;
  }) => {
    await updateMyPassword({
      newPassword,
      oldPassword,
    });
    await fetchUser({ value: false });
  };

  /** 🔹 Suppression du compte */
  const DeleteMyAccountUser = async () => {
    await deleteMyAccount();
    signOutMyAccount();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token: user ? "cookie-managed" : null,
        UpdateMyCredentialUser,
        UpdateMyEmailUser,
        DeleteMyAccountUser,
        UpdateMyProfilUser,
        login,
        signup,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// ---------------------
// 🔹 Route protégée
// ---------------------
export const AuthRoute = ({
  needLogin,
  notForLogged,
}: {
  needLogin?: boolean;
  notForLogged?: boolean;
}) => {
  const context = useContext(AuthContext);
  if (!context) return <Navigate to="/signin" replace />;

  const isLogged = !!context.user;

  if (needLogin && !isLogged) return <Navigate to="/signin" replace />;
  if (notForLogged && isLogged) return <Navigate to="/@me" replace />;

  return <Outlet />;
};