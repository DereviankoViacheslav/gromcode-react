import React from 'react';
import Transaction from './Transaction'

function TransactionsList(props) {

  return (
    <ul className="transactions">
      {props.transactions.map(({ id, ...transaction }) => (
        <li className="transaction" key={id}>
          <Transaction {...transaction} />
        </li>
      ))}
    </ul>
  );
}

export default TransactionsList;