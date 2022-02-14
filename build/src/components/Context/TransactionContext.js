import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import transactions from '../Data/transactions';

const TransactionContext = createContext();

//const initialData = {id:1, balance:100, deposit: 0, withdraw: 100}

const TransactionProvider = ({ children }) => {
    const [data, setData] = useState(transactions);
    const transaction = { data }

    const link = 'http://localhost:5000/api/v1';

    useEffect(() =>{
        getTransactions();
    }, [])

    const getTransactions = async () => {
        const data = await axios.get(link);
        console.log(data);
    }
    
    return (
        <TransactionContext.Provider value={transaction}>
            { children }
        </TransactionContext.Provider>
    )
}




export { TransactionProvider }
export default TransactionContext;