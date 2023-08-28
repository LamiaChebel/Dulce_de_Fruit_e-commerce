import React from "react";

import { Link, Outlet} from "react-router-dom";

import styles from "../admin.module.css";

function Navbar(){
    return(
        <>
        <nav className={styles.dashboardNav}>
            <Link to='products'>Produits</Link>

            <Link to='products-categories'>Cat&eacute;gories</Link>

            <Link to='brands'>Marques</Link>

            <Outlet/>
        </nav>

        </>
    )
}

export default Navbar;