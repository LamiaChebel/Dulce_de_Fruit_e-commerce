import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Template from "./layouts/E-commerce/Template.jsx";
import Admin from "./layouts/Admin/Admin.jsx";
import SubscribeAdmin from "./layouts/Admin/Components/SubscribeAdmin.jsx";
import FormLogin from "./layouts/Admin/Components/FormLogin.jsx";

function App() {

  const location = useLocation();
  console.log(location);

  if (location.pathname.includes("admin")) {
    return (
      <Routes>
        <Route path="/admin" element={<Admin child={FormLogin} />} />
        <Route path="/admin/create-new-admin" element={<Admin child={SubscribeAdmin} />} />
      </Routes>
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
