import React, { useCallback, useEffect, useState } from 'react';

import { addBankAPI, deleteBankAPI, editBankAPI, getBanksAPI } from '../features/api/banks/bankApi';
import { addCategoryAPI, deleteCategoryAPI, editCategoryAPI, getCategoryAPI } from '../features/api/categories/categoryApi';
import { createTransactionApi, deleteTransactionApi, editTransactionApi, getTransactionsApi } from '../features/api/transactions/transactionApi';

import { useUser } from '../hooks/user';

import { defaultCategories, type IBank, type ICategory, type ITransaction } from '../types/@types.financesParams';
import { FinancialContext } from './financialContext';

export const FinancialProvider : React.FC<{children: React.ReactNode}> = ({ children }) => {
  const {token} = useUser()

  const [bank, setBank] = useState<IBank[]|null>(null);
  const [category, setCategory] = useState<ICategory[]|null>(null)
  const [transaction, setTransaction] = useState<ITransaction[]|null>(null)

  const fetchData = useCallback(async (token: string) => {
    const userCategories = await getCategoryAPI({ token });
    const BanksData = await getBanksAPI({token});
    const TransactionData = await getTransactionsApi({token});

    if(TransactionData.length > 0){
      const TransformedData = TransactionData.map((b): ITransaction => {
        return {
          ...b,
          amount: parseFloat(b.amount as string),
        }
      })

      setTransaction(TransformedData);
    }else setTransaction([])

    if(BanksData.length > 0){
      const TransformedData = BanksData.map((b): IBank => {
        return {
          ...b,
          balance: parseFloat(b.balance as string),
        }
      })

      setBank(TransformedData);
    }

    // On transforme le tableau utilisateur en map {name -> catégorie}
    const userCategoryMap = new Map(userCategories.map((c: ICategory) => [c.base_category, c]));

    // Construire la liste finale
    const mergedCategories = defaultCategories
    // Si la catégorie par défaut a été supprimée → on la retire
    .filter(cat => {
      const userCat = userCategories.find(c => c.base_category === cat.label);
      return !userCat || userCat.name !== "deleted"; // Si supprimée, elle n'existe plus
    })
    // Si elle existe dans les catégories utilisateur → on l'écrase
    .map(cat => userCategoryMap.get(cat.label) || {
      id: 0, // Pas en DB encore
      icon: cat.icon,
      name: cat.label,
      type: cat.type,
      base_category: undefined
    });

    // On ajoute les catégories perso que l'utilisateur a créées (pas dans la liste par défaut)
    const customCategories = userCategories.filter(
      uc => !defaultCategories.some(dc => dc.label === uc.base_category)
    );

    setCategory([...mergedCategories, ...customCategories]);
  }, [])

  useEffect(() => {
    if (!token) return;
    fetchData(token);
  }, [fetchData, token])

  const addBank = async (params: {label: string, type: string, balance: number, icon: string}) => {
    return new Promise((res, rej) => {
      addBankAPI({token: token??"", ...params}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  const addCategory = async ({name, icon, type}: {name: string, icon: string, type: number}) => {
    return new Promise((res, rej) => {
      addCategoryAPI({token: token??"", name: name, icon: icon, type}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  const addTransaction = async ({bankId, categoryId, amount, type, status, date, description, baseCategory}: {bankId: number, categoryId: number, amount: number, type: "credit"|"debit"|"transfert", status?: "pending"|"completed"|"failed", date?: string, description?: string, baseCategory?: string}) => {
    return new Promise((res , rej) => {
      if(isNaN(categoryId)) createTransactionApi({token: token??"", bankId, baseCategory, amount, type, status, date, description}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
      else createTransactionApi({token: token??"", bankId, categoryId, amount, type, status, date, description}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  const removeBank = async ({id}: {id: number}) => {
    return new Promise((res, rej) => {
      deleteBankAPI({token: token??"", id: `${id}`}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  const removeCategory = async ({id, base_category, data}: {id?:number, base_category?:string, data?: {icon:string, type: 1|2}}) => {
    if(!id && !base_category) throw new Error("Au moins un paramètre est requis pour supprimer une catégorie");
    if(base_category) return new Promise((res, rej) => {
      const {icon, type} = data!;
      addCategoryAPI({token: token??"", name: "deleted", icon, type, base_category}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })

    return new Promise((res, rej) => {
      deleteCategoryAPI({token: token??"", id: `${id}`}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  const removeTransaction = async ({id}: {id: number}) => {
    return new Promise((res , rej) => {
      deleteTransactionApi({token: token??"", id: `${id}`}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  const updateBank = async ({id, label, type, balance, icon}: {id: number, label: string, type: string, balance: number, icon: string}) => {
    return new Promise((res, rej) => {
      editBankAPI({token: token??"", id: `${id}`, label, type, balance, icon}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  const updateTransaction = async ({bankId, categoryId, amount, id, status, date, description, baseCategory}: {bankId: number, categoryId: number, amount: number, id: number, status?: "pending"|"completed"|"failed", date?: string, description?: string, baseCategory?: string}) => {
    return new Promise((res , rej) => {
      if(isNaN(categoryId)) editTransactionApi({token: token??"", bankId, baseCategory, amount, status, date, description, id}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
      else editTransactionApi({token: token??"", bankId, categoryId, amount, status, date, description, id}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }
  
  const updateCategory = ({id, base_category, icon, name, type}: {id?: number, base_category?: string, icon: string, name: string, type?: 1|2}) => {
    if(!id && !base_category) throw new Error("Au moins un paramètre est requis pour modifier une catégorie");

    if(base_category) return new Promise((res, rej) => {
      addCategoryAPI({token: token??"", name: name, icon, type: type!, base_category}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })

    return new Promise((res, rej) => {
      editCategoryAPI({token: token??"", id: `${id}`.toString(), name: name, icon: icon}).then(() => fetchData(token??"")).catch(rej).finally(() => res(""))
    })
  }

  return <FinancialContext.Provider value={{bank, removeBank, updateBank, addBank, addCategory, category, removeCategory, updateCategory, transaction, addTransaction, removeTransaction, updateTransaction}}>
    {children}
  </FinancialContext.Provider>
};