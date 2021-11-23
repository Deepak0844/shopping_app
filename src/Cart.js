import * as React from 'react';

export function Cart({ deleteBtn, name, price, image }) {
  return (
    <section>
      <div className="cartItem">
        <img src={image} alt={name}></img>
        <p>{name}</p>
        <p>₹ {price}</p>
        {deleteBtn}
      </div>
    </section>
  );
}
