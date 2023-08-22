import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import ErrorPage from "../../Pages/Error/ErrorPage.jsx";

import Home from "../../Pages/Home/Home.jsx";

function Template() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="*" element={<ErrorPage />} />

            </Routes>
            <Footer />
        </>
    )
}

export default Template;