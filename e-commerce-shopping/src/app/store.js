import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore from Redux Toolkit
import productsReducer from '../features/products/productsSlice'; // Importing the products slice reducer
import cartReducer from '../features/cart/cartSlice'; // Importing the cart slice reducer

// Configuring the Redux store
const store = configureStore({
  reducer: { // Reducers for the store
    products: productsReducer, // Adding the products slice reducer
    cart: cartReducer, // Adding the cart slice reducer
  },
});

export default store; // Exporting the configured store