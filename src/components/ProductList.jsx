import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const clickAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Список наших товаров</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => clickAddToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;