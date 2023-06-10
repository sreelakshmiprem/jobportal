import React from 'react';
import Nav1 from "./Units/Nav1";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Checkout from './pages/Checkout'
export default function App(){
return (
    <div>
      <Nav1></Nav1>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          

       </Routes>
    </div>
 );
};


