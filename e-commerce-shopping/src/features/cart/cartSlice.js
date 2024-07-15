import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice function from Redux Toolkit

// Creating a slice for cart state
const cartSlice = createSlice({
  name: 'cart', // Name of the slice
  initialState: { // Initial state of the slice
    items: [{ id: 1 }, { id: 2 }], // Example items in the cart for testing
  },
  reducers: { // Reducers to handle actions
    addItem: (state, action) => { // Reducer to add an item to the cart
      state.items.push(action.payload); // Adding the item (action.payload) to the items array
    },
    removeItem: (state, action) => { // Reducer to remove an item from the cart
      state.items = state.items.filter(item => item.id !== action.payload.id); // Filtering out the item with the matching id from the items array
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions; // Exporting the action creators
export default cartSlice.reducer; // Exporting the reducer function