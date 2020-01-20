import React from 'react';
import moment from 'moment';

function formatDate(format, time) {
  return moment(time).format(format);
}

function formatNumber(locales, number) {
  return new Intl.NumberFormat(locales).format(number);
}

function Transaction({ from, to, amount, rate, time }) {

  return (
    <>
      <span className="transaction__date">{formatDate('DD MMM', time)}</span>
      <span className="transaction__time">{formatDate('HH:mm', time)}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{formatNumber('en-GB', rate)}</span>
      <span className="transaction__amount">{formatNumber('en-GB', amount)}</span>
    </>
  );
}

export default Transaction;