import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Margherita Pizza', price: 300, imageUrl: 'https://www.yumcurry.com/wp-content/uploads/2020/06/pizza-margherita-recipe.jpg' },
    { id: 2, name: 'Briyani', price: 280, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XPovz94kfi9151ZRCmY2IHSFaRnmW7wTcB_xVWl90w&s' },
    { id: 3, name: 'Cheeseburger', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0LIbpZfBDUaXiGR6Rxzi9jsd7tCezfMFu5VfPz6bXQ&s' },
    { id: 4, name: 'Pasta Carbonara', price: 250, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HmeJwUJzvA9dLOin0bnhJWiEaIed3SSDqYluCJDs1g&s' },
    { id: 5, name: 'Tacos', price: 200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gFb2V5Gbmi9-Umy5HPh6ex9Ys-llVGSSLCannEdxMA&s' },
    { id: 6, name: 'Chicken Wings', price: 350, imageUrl: 'https://www.thecookierookie.com/wp-content/uploads/2018/12/baked-chicken-wings-reshoot.jpg' },
    { id: 7, name: 'Caesar Salad', price: 180, imageUrl: 'https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg' },
    { id: 8, name: 'Chocolate Cake', price: 120, imageUrl: 'https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1.png' },
    { id: 9, name: 'Ice Cream', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiy3NtHm9dRj5mgsSEa5zjBS9Mn-jHbJswiUYf8Za3Q&s' },
    { id: 10, name: 'Sushi Platter', price: 400, imageUrl: 'https://thetablecompany.in/cdn/shop/products/Screenshot2020-06-25at6.37.35PM_1000x1000.png?v=1593090644' },
    { id: 11, name: 'Margarita', price: 250, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsdpCZZjRkq7X4fxb5fYQClF99OIElqZdk7SIpVcEIA&s' },
    { id: 12, name: 'French Fries', price: 80, imageUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/12/air-fryer-french-fries-horizontal-hero-web-ready-1.jpg' },
    { id: 13, name: 'Grilled Cheese Sandwich', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXuyuLHPj1p-UkPRkwBIgcimUGP_9xgCDK0CAwNFtVg&s' },
    { id: 14, name: 'Veggie Wrap', price: 130, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZB0G6kx6sVAxeZdrPhbnLB5t9RhPEOb3NIuuZeGBTw&s' },
    { id: 15, name: 'Smoothie', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZB0G6kx6sVAxeZdrPhbnLB5t9RhPEOb3NIuuZeGBTw&s' },
    { id: 16, name: 'Pancakes', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCTC9nu61LjquT1gPovEZ1b1EXdLJrqb6A9HoHrUw8g&s' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foods" element={<ProductPage products={products} addToCart={addToCart} />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
