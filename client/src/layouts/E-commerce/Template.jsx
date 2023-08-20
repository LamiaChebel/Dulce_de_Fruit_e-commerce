import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import Home from "../../Pages/Home/Home";

function Template() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Template;