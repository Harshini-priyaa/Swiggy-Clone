import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const handleQuantityChange = (index, delta) => {
    const newQuantity = (cartItems[index].quantity || 1) + delta;
    if (newQuantity > 0) {
      updateQuantity(index, newQuantity);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
            <span>{item.quantity || 1}</span>
            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
          </div>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default CartPage;
