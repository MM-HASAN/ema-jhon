import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  //const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  console.log(cart);
  return (
    <div>
      <p>Cart summary</p>
      <h2> item ordered: {cart.length} </h2>
      <p>Total Price: {total}</p>
    </div>
  );
};

export default Cart;
