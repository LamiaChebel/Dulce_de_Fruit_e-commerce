import React from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import style from "./nav.module.css";

function Nav() {
    return (
        <nav>
            {/* Bannière Menu avec icône hamburger */}
            <div>
                <p>menu</p>
                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <ul role='menubar'>
                <li><NavLink to={"/accueil"}>accueil</NavLink></li>
                <li>
                    <ul>
                        <NavLink to={"/notre-boutique"}>notre boutique</NavLink>
                        
                    </ul>
                </li>
                <li><NavLink to={"/nos-recettes"}>nos recettes</NavLink></li>
                <li><NavLink to={"/dulce-de-fruit"}>dulce de fruit</NavLink></li>

            </ul>
        </nav>
    )
}

export default Nav;