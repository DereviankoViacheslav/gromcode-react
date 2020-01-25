import React from 'react';

function ProductRow({ product }) {
  const { name, price, stocked } = product;

  return (
    <tr>
      <td>{stocked ? name : <span style={{ color: 'red' }}>{name}</span>}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;