import React from 'react';
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav>
      <h1>Добро пожаловать</h1>
      <NavLink to="/" >Главное</NavLink>
      <NavLink to="/cart" ><div>Корзина ({cartItems.length})</div></NavLink>
      
    </nav>
  );
};

export default Navbar;
