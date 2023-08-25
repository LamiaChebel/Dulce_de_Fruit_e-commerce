import React from "react";
import { Link, Outlet} from "react-router-dom";

// import FormLogin from "./Components/FormLogin.jsx";

import style from "./admin.module.css";

function Admin() {

    return (
        <>
            <main className={style.adminMain}>
                <nav className={style.adminNav}>
                    <Link to={"login"}>Connexion</Link>
                    <Link to={"signup"}>S&apos;inscrire</Link>
                </nav>
                <Outlet/>
            </main>

        </>

    )
}

export default Admin;