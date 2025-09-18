import { createContext } from "react";
import type { FinancialContextType } from "../types/@types.financesParams";

export const FinancialContext = createContext<FinancialContextType | null>(null);
