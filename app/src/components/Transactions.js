import React, { useState, useEffect } from 'react';
import * as UI from '../ui/Transactions.ui'
import { useFetch } from '../hooks/useFetch';
import TransactionItem from './TransactionItem';

export default function Transactions(){
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const { data } = await useFetch('/transactions');
    setTransactions(data)

  }
  useEffect(() => {
    fetchTransactions()
  },[])

  return (
    <UI.TransactionList
      data={transactions}
      renderItem={ TransactionItem }
      keyExtractor={ item => item.id }
    />
  )
}