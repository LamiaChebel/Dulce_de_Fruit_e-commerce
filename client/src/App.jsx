import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Template from "./layouts/E-commerce/Template.jsx";

import Admin from "./layouts/Admin/Admin.jsx";
import Header from "./layouts/Admin/Components/Header.jsx";
import Footer from "./layouts/Admin/Components/Footer.jsx";

import FormLogin from "./layouts/Admin/Components/FormLogin.jsx";
import SubscribeAdmin from "./layouts/Admin/Components/SubscribeAdmin.jsx";
import Dashboard from "./layouts/Admin/Components/Dashboard.jsx";
import Product from "./layouts/Admin/Components/Product.jsx";
import ProdCategory from "./layouts/Admin/Components/ProdCategory.jsx";
import Brand from "./layouts/Admin/Components/Brand.jsx";


function App() {
  const location = useLocation();
  // console.log(location);

  if (location.pathname.includes("admin")) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route path="signin" element={<FormLogin />} />
            
            <Route path="signin/dashboard" element={<Dashboard />} />
            <Route path="signin/dashboard/products" element={<Product />} />
            <Route path="signin/dashboard/products-categories" element={<ProdCategory />} />
            <Route path="signin/dashboard/brands" element={<Brand />} />
           
            <Route path="signup" element={<SubscribeAdmin />} />
          </Route>
        </Routes>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Template />
      </>
    );
  }
}

export default App;
