import React from 'react';
import { createRoot } from 'react-dom/client';

import { BookProvider } from "./context/books";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';
const root = createRoot(document.getElementById('root'));

root.render(
  <BookProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </BookProvider>
);
