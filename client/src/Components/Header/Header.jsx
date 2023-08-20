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
            <div role="banner" className={style.hidden}>
                <p className={style.bannerTxt}>Livraison offerte &aacute; partir de 50€ d'achat</p>
            </div>
            <section className={style.banner}>

                {/* Logo de l'entreprise */}
                <h1 className={style.logo}>
                    <Link to={"/"}>
                        <img src={logo} alt="logo de Dulce de Fruit qui redirige vers la page d'accueil" />
                    </Link>
                </h1>


                {/* Authentification */}
                <Link to={"/connexion"} className={style.connexion} title="Identifiez-vous ou enregistrez-vous">
                    <FontAwesomeIcon icon={faCircleUser} className={style.userIcon} aria-hidden="true" />
                    Connexion
                </Link>

                {/* Panier */}
                <Link to={"/cart"} className={style.cart} title="Voir mon panier">
                    <FontAwesomeIcon icon={faBagShopping} className={style.cartIcon} aria-hidden="true" />
                   Panier
                </Link>

            </section>

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