import React from 'react';
import ShoppingCart from './features/cart/ShoppingCart'; // Importing ShoppingCart component

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to E-Commerce Shopping</h1> {/* Header title */}
      </header>
      <main>
        <ShoppingCart /> {/* Including ShoppingCart component */}
      </main>
    </div>
  );
};

export default App; // Exporting App component