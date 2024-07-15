import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../products/productsSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Assuming we have a cart state
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    // Dispatching fetchProductById action for each cart item
    cartItems.forEach((item) => {
      if (!products[item.id]) { // If product data is not already in the store
        dispatch(fetchProductById(item.id)); // Dispatch the action to fetch product data
      }
    });
  }, [cartItems, dispatch, products]); // Dependencies for useEffect

  if (loading) { // If loading state is true
    return <div>Loading...</div>; // Display loading message
  }

  if (error) { // If there is an error
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      {cartItems.map((item) => ( // Mapping through cart items
        <div key={item.id}> 
          {products[item.id] ? ( // If product data is available
            <div>
              <h2>{products[item.id].title}</h2> {/* Display product title */}
              <p>{products[item.id].price}</p> {/* Display product price */}
            </div>
          ) : (
            <div>Loading...</div> // Display loading message if product data is not available
          )}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart; // Exporting the ShoppingCart component