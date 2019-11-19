import React from 'react';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction__history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.length > 0 &&
          items.map(el => (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
