import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./component/navbar/navbar.jsx";
import Product from "./component/product/product.jsx";
import Carousel from "./component/caouselProduct/carouselProduct.jsx";
import ProductListComponent from './asset/productObject/productList.jsx';
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
    </Routes>
    </>
  );
}
export default App;
