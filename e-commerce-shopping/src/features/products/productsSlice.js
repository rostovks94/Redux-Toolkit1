import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asynchronous thunk action to fetch product data by its ID
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return response.data; // Returning the response data if the request is successful
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Handling error by rejecting with the error response
    }
  }
);

// Slice for managing products state
const productsSlice = createSlice({
  name: 'products', // Name of the slice
  initialState: { // Initial state of the slice
    products: {}, // Object to store product data
    loading: false, // Boolean to indicate loading state
    error: null, // Variable to store error messages
  },
  reducers: {}, // Reducers (not needed in this example)
  extraReducers: (builder) => { // Handling actions outside the slice
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true; // Setting loading state to true
        state.error = null; // Resetting error state
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false; // Setting loading state to false
        state.products[action.payload.id] = action.payload; // Storing the fetched product data
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false; // Setting loading state to false
        state.error = action.payload; // Storing the error message
      });
  },
});

export default productsSlice.reducer;