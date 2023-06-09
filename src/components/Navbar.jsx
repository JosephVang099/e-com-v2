
import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";




const Navbar = () => {
  return (
    <div className="navbar">
    <div className="links">
        <Link to="/" className='title'>AZN BUZZIN ~_~</Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
            <ShoppingCart size={32} />
        </Link>
    </div>
  </div>
);
};
export default Navbar;
