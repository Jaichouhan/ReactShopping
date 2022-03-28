import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About US/About";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact/Contact";
import Shop from "./Component/Shop/Shop";
import Sell from "./Component/Sell With us/Sell";
import Wpay from "./Component/Wpay/Wpay";
import Cart from "./Component/Cart/Cart";
import Related from "./Component/Related/Related";
import ShopPage from "./Component/ShopPage/ShopPage";
import Checkout from "./Component/Check Out/Checkout";
import Dashboard from "./Component/Dashboard/Dashboard";
import Allproduct from "./Component/AllProduct/Allproduct";
import Privacy from "./Component/Privacy and Policy/Privacy";
import Terms from "./Component/Terms and Conditions/Terms";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Wpay" element={<Wpay />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Related" element={<Related />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Allproduct" element={<Allproduct />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
