import React, { Component } from 'react';
import Transaction from './Transaction'

class TransactionsList extends Component {

  render() {

    return (
      <ul className="transactions">
        {this.props.transactions.map(({ id, ...transaction }) => (
          <li className="transaction"  key={id}>
            <Transaction {...transaction} />
          </li>
        ))}
      </ul>
    );
  };
}

export default TransactionsList;