import React,{createContext,useReducer} from 'react';
import transactionsReducer from '../reducer/transactionsReducer';
import { TransactionType, initialStateType } from "../types";

const initialState: initialStateType = {
    transactions: [/* { id:1,desc:"Sample Transaction", type:'income',amount: 200 } */],
    deleteTransaction: () => {},
    addTransaction: () => {},
    updateTransaction: () => {},
  };


export const AppContext = createContext(initialState);

export const AppProvider:React.FC = ({children}) => {
    const [state,dispatch] = useReducer(transactionsReducer,initialState)
    

    const addTransaction=(transaction: TransactionType)=>{
       dispatch({type:'ADD_TRANSACTION',payload:transaction}) 
    }

    const deleteTransaction = (id:number) => {
       dispatch({type:'DELETE_TRANSACTION',payload:id})
    }

    const updateTransaction = (transaction:TransactionType) => {
        dispatch({type:'UPDATE_TRANSACTION',payload:transaction}) 
     }
 
    return(
        <AppContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction,updateTransaction}}>
            {children}
        </AppContext.Provider>
    )
}


