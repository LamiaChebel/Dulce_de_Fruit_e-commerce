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
                    <Link to={"/notre-boutique/preparations-de-fruits"}>Pr&eacute;paration 100% fruits</Link>
                    <Link to={"/notre-boutique/purees-de-fruits"}>Pur&eacute;es de fruits</Link>
                    <Link to={"/notre-boutique/purees-de-fruits-secs"}>Pur&eacute;es de fruits secs</Link>
                    <Link to={"/notre-boutique/smoothies"}>Smoothie</Link>
                </nav>


                <nav className={style.menu}>
                    <h4>Marques distribu&eacute;es</h4>
                    <Link to={"/nos-marques-partenaires"}>Nos marques partenaires</Link>
                </nav>


                <nav className={style.menu}>
                    <h4>Dulce de Fruit</h4>
                    <Link to={"/dulce-de-fruit/notre-histoire"}>Notre histoire</Link>
                    <Link to={"/dulce-de-fruit/nos-engagements"}>Nos engagements</Link>
                </nav>

                <nav className={style.menu}>
                    <h4>Service Client</h4>
                    <Link to={"/service-client/informations-de-livraison"}>Informations de livraison</Link>
                    <Link to={"/service-client/faq"}>Foire aux questions</Link>
                    <Link to={"/service-client/nous-contacter"}>Nous contacter</Link>
                    <Link to={"/service-client/espace-fournisseur"}>Espace Fournisseur</Link>
                    <Link to={"/service-client/plan-du-site"}>Plan du site</Link>
                </nav>

                <nav className={style.menu}>
                    <h4>Informations l&eacute;gales</h4>
                    <Link to={"/informations-legales/mentions-legales"}>Mentions l&eacute;gales</Link>
                    <Link to={"/informations-legales/cgv"}>Conditions g&eacute;n&eacute;rales de vente</Link>
                    <Link to={"/informations-legales/cgu"}>Conditions g&eacute;n&eacute;rales d'utilisation</Link>
                    <Link to={"/informations-legales/protection-des-donnees"}>Protection des donn&eacute;es</Link>
                    <Link to={"/informations-legales/politique-sur-les-cookies"}>Politique sur les cookies</Link>
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