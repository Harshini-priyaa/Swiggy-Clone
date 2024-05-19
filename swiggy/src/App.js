import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/foods" element={<ProductPage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
