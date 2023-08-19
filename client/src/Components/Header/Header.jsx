import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-regular-svg-icons';
import { faBagShopping} from '@fortawesome/free-solid-svg-icons';

import logo from "../../assets/img/logo.png";

import style from "./header.module.css";

function Header() {
    return (
        <header>
            <Link to={"/"}>
                <h1>
                    <img src={logo} alt="logo de Dulce de Fruit qui redirige vers la page d'accueil" />
                </h1>
            </Link>

            <Link to={"/connexion"} className={style.connexion}>
                <FontAwesomeIcon icon={faCircleUser} className={style.userIcon} aria-hidden="true" />
            </Link>
            
            <Link to={"/cart"} className={style.cart}>
                <FontAwesomeIcon icon={faBagShopping} className={style.cartIcon} aria-hidden="true" />
            </Link>

        </header>
    )
}

export default Header;