import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Template from "./layouts/E-commerce/Template";

function App() {
  const location = useLocation();
  console.log(location);
  if (location.pathname.includes("/admin")) {
    return (
      <Routes>
        {/* <Route path="/admin" element={<Admin />} > */}
        {/* </Route> */}
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
