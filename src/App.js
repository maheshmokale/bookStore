import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Amplify
import { Amplify } from "aws-amplify";


// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Admin from './pages/Admin';

// Components
import Header from "./components/Header"

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const App = () => {
  {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/cart" element={<><Cart /><p>Cart</p> </>} />

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}>Checkout</Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="*" element={<Error />}></Route>
            {/*<Route path="/books/:id"children={<BookDetails></BookDetails>}></Route> */}
            <Route path="/books/:id" component={BookDetails} />


          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
