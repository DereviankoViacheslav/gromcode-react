import React from 'react';
import moment from 'moment';

function formatDate(time, format) {
  return moment(time).format(format);
}

function Transaction({ from, to, amount, rate, time }) {

  return (
    <>
      <span className="transaction__date">{formatDate(time, 'DD MMM')}</span>
      <span className="transaction__time">{formatDate(time, 'HH:mm')}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amount}</span>
    </>
  );
}

export default Transaction;