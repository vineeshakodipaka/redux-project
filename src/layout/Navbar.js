// src/layout/Navbar.js
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchProducts,resetProducts  } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, searchProducts } from '../actions';

const Navbar = () => {
  const { totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');


  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); // Update the local state
    dispatch(searchProducts(query)); // Dispatch the search action
  };

  // const handleSearch = () => {
  //   dispatch(searchProducts(searchQuery));
  // };

  // const clearSearch = () => {
  //   dispatch(searchProducts('')); // Clear the search query
  //   setSearchQuery(''); // Clear the local state
  // };
  
  return (
    <nav className="navbar navbar-expand-lg navbar ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>

        <div className="input-group col">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch} // Update search as you type
          className="form-control" 
          // onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-secondary" onClick={clearSearch}>
          Clear
        </button> */}
      </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart" ></i>
              <span className="badge rounded-pill badge-notification bg-primary">{totalQuantity}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
