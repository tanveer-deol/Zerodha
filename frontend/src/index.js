import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NotFound from "./landing_page/NotFound";
import "react-toastify/dist/ReactToastify.css";
import SignUpPage from "./landing_page/signup/SignUpPage";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <CookiesProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </CookiesProvider>
  </BrowserRouter>
);
