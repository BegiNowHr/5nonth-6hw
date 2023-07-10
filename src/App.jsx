import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import cartReducer from './store/cartSlice';
import products from './products.json';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <ProductList products={products} />
    </Provider>
  );
};

export default App;
