import React from 'react';
import Basket from './Basket';

export default function Checkout({ cartItems, products, complete }) {
  return <div>
      <p>checkout here</p>
      <Basket
        cartItems={cartItems}
        complete={complete}
        products={products}
      />
  </div>;
}
