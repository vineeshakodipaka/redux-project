// src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import products from './Data';
import Navbar from './layout/Navbar';
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))} */}

      <ProductList/>
    </div>
  );
};

const App = () => {
  return (
  
     <>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
     </>
        

  );
};

export default App; 
