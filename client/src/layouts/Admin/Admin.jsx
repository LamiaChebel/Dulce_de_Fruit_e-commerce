import React from "react";
import { Link } from "react-router-dom";

// import FormLogin from "./Components/FormLogin.jsx";

import style from "./admin.module.css";

function Admin({ child }) {

    const Child = child;

    return (
        <>
            <main className={style.adminMain}>
                <nav className={style.adminNav}>
                    <Link to={"/admin/connection"}>Identifiez-vous</Link>
                </nav>
                <Child />

            </main>

        </>

    )
}

export default Admin;