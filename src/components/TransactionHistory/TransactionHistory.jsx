import React, { useState, useEffect } from "react";
import { Container, Transaction, TransactionWrapper } from "./TransactionHistoryStyle";
import axios from "../../api/axios";

import TimeAgo from "react-timeago";
import englishStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(englishStrings);

function TransactionHistory() {
  let [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `/transactions?status=All-Transactions`,
        {
          headers: {
            contenType: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setTransactions(response.data.transaction);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const regex = /([0-9]{4}-[0-9]{2}-[0-9]{2})?.([:0-9]+)/;

  return (
    <Container>
      <TransactionWrapper>
        {transactions.length > 0 ?
          transactions.map((transaction) => {
            return (
              <div key={transaction.id}>
                <Transaction>
                  <div>
                    <p>
                      <b>
                        <TimeAgo
                          date={`${transaction.updatedAt.match(regex)}`}
                          formatter={formatter}
                        /></b>
                      {`${', '} ${transaction.updatedAt.slice(11, 16)}${Number(transaction.updatedAt.slice(11, 13)) > 12 ? 'PM' : 'AM'}`}

                    </p>
                    <p>Withdraw fund</p>
                    <p>{transaction.updatedAt.split("T")[0]}</p>
                  </div>

                  <div className="status">
                    <label>{transaction.status === false ? (<p className='label-red'>Pending</p>) : (<p className='label-green'>Success</p>)}</label>
                    <p>{transaction.amount.toLocaleString()}</p>
                  </div>
                </Transaction>
              </div>
            );
          }) : <p style={{ color: 'gray' }}> No transaction record available 😒 </p>
        }
      </TransactionWrapper>
    </Container>
  );
}

export default TransactionHistory;
