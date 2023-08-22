import React from "react";

import { Link } from "react-router-dom";

import style from "../footer.module.css";

function Navbar() {
    return (
        <>
            {/* Menu secondaire de navigation*/}
            <div className={style.navbar}>

                <nav className={style.menu}>
                    <h4>Nos cat&eacute;gories de produits</h4>
                    <Link to={"preparations-100%-fruits"}>Pr&eacute;paration 100% fruits</Link>
                    <Link to={"purees-de-fruits"}>Pur&eacute;es de fruits</Link>
                    <Link to={"purees-de-fruit-secs"}>Pur&eacute;es de fruits secs</Link>
                    <Link to={"smoothies"}>Smoothie</Link>
                </nav>


                <nav className={style.menu}>
                    <h4>Marques distribu&eacute;es</h4>
                    <Link to={"nos-marques-partenaires"}>Nos marques partenaires</Link>
                </nav>


                <nav className={style.menu}>
                    <h4>Dulce de Fruit</h4>
                    <Link to={"notre-histoire"}>Notre histoire</Link>
                    <Link to={"nos-engagements"}>Nos engagements</Link>
                </nav>

                <nav className={style.menu}>
                    <h4>Service Client</h4>
                    <Link to={"informations-de-livraison"}>Informations de livraison</Link>
                    <Link to={"faq"}>Foire aux questions</Link>
                    <Link to={"nous-contacter"}>Nous contacter</Link>
                    <Link to={"espace-fournisseur"}>Espace Fournisseur</Link>
                    <Link to={"plan-du-site"}>Plan du site</Link>
                </nav>

                <nav className={style.menu}>
                    <h4>Informations l&eacute;gales</h4>
                    <Link to={"mentions-legales"}>Mentions l&eacute;gales</Link>
                    <Link to={"cgv"}>Conditions g&eacute;n&eacute;rales de vente</Link>
                    <Link to={"cgu"}>Conditions g&eacute;n&eacute;rales d'utilisation</Link>
                    <Link to={"protection-des-donnees"}>Protection des donn&eacute;es</Link>
                    <Link to={"politique-sur-les-cookies"}>Politique sur les cookies</Link>
                    <Link to={"https://ws.facil-iti.com/" } 
                          target='_blank'
                          rel="noopener">
                        Accessibilit&eacute; facil'iti
                    </Link>
                </nav>

            </div>

        </>
    )
}

export default Navbar;