import axios from 'axios';
import React, { useState } from 'react';
import List from './List'

function TransactionsList() {
  const [filteredTransactions, setFilteredTransactions] = useState({});
  console.log();
  const handleFilterChange = async( event) => {
      event.preventDefault()
        try {
          const { data } = await axios.get(`http://localhost:4000/transactionDetails`, {
            headers: { token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMSwiaWF0IjoxNjczMzI4MTk2LCJleHAiOjE2NzM5MzI5OTZ9.jMMceILsumhPvdbFj0iW1h3APIUzLla5DACDvvfBTrs" }
          });
          console.log(data);
          setFilteredTransactions({...data});
          return data
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div>
        <div> {filteredTransactions.map()}</div>
    </div>
  );
}

export default TransactionsList;
