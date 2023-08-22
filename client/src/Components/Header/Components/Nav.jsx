import React from 'react';

import { NavLink } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import style from "./nav.module.css";

function Nav() {
    return (
        <nav className={style.navHeader}>
            {/* Bannière Menu avec icône hamburger */}
            <div>
                <p className={style.menuTxt}>menu</p>
                {/* <button className='btn btn-active'>
                    <FontAwesomeIcon icon={faBars} />
                </button> */}
            </div>
            {/* Première version du menu principal */}
            <div className={style.desktopNav}>
                <NavLink to={"/"}>accueil</NavLink>
                <NavLink to={"/notre-boutique"}>notre boutique</NavLink>
                <NavLink to={"/nos-recettes"}>nos recettes</NavLink>
                <NavLink to={"/dulce-de-fruit"}>dulce de fruit</NavLink>
                <NavLink to={"/notre-histoire"}>notre histoire</NavLink>
                <NavLink to={"/nos-engagements"}>nos engagements</NavLink>
                <NavLink to={"/nous-contacter"}>nous contacter</NavLink>
            </div>

        </nav>
    )
}

export default Nav;