// src/pages/ProductPage.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const ProductPage = ({ products, addToCart }) => {
  return (
    <div className="product-page">
      <h1>Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
