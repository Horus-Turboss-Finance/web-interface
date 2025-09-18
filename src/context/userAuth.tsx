import { createContext } from "react";
import type { UserContextType } from "../types/@types.user";

export const AuthContext = createContext<UserContextType | null>(null);