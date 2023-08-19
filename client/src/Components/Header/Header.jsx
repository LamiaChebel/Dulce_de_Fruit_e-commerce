import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Components/Nav";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import logo from "../../assets/img/logo.png";

import style from "./header.module.css";

function Header() {
    return (
        <header>
            {/* Logo de l'entreprise */}
            <Link to={"/"}>
                <h1 className={style.logo}>
                    <img src={logo} alt="logo de Dulce de Fruit qui redirige vers la page d'accueil" />
                </h1>
            </Link>

            {/* Authentification */}
            <Link to={"/connexion"} className={style.connexion}>
                <FontAwesomeIcon icon={faCircleUser} className={style.userIcon} aria-hidden="true" />
            </Link>

            {/* Panier */}
            <Link to={"/cart"} className={style.cart}>
                <FontAwesomeIcon icon={faBagShopping} className={style.cartIcon} aria-hidden="true" />
            </Link>

            {/* Barre de recherche */}
            <form action="" method="get" id="searchShop">

                <input type="text" name="searchShop" id="searchShop" placeholder="Rechercher" aria-label="rechercher en entrant des mots-clés" />
                <button type="submit" value="search" aria-label="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={style.searchIcon} aria-hidden="true" />
                </button>

            </form>

            {/* Menu de navigation principal */}
            <Nav />
            
        </header>
    )
}

export default Header;