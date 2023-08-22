import React from "react";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

// import FormLogin from "./Components/FormLogin.jsx";

import style from "./admin.module.css";

function Admin({child}) {
    
    const Child = child;

    return (
        <>

            <Header />
            <main className={style.adminMain}>

                <Child />

            </main>


            <Footer />
        </>


    )
}

export default Admin;