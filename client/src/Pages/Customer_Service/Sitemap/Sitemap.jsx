import React from "react";

import { Link } from "react-router-dom";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./sitemap.module.css";

function Sitemap() {
  return (
    <main className={styles.sitemap}>
      <PageHeader title="plan du site" />

      {/* Classés par chemin URL */}

      <div className={styles.flex}>
        <section className={styles.card}>
          <h3>
            <Link to={"/"}>Accueil</Link>
          </h3>
          <ul>
            <li>
              <Link to={"/notre boutique"}>Notre boutique</Link>
            </li>
            <li>
              <Link to={"/notre-boutique/preparations-de-fruits"}>
                Pr&eacute;paration 100% fruits
              </Link>
            </li>
            <li>
              <Link to={"/notre-boutique/purees-de-fruits"}>
                Pur&eacute;es de fruits
              </Link>
            </li>
            <li>
              <Link to={"/notre-boutique/purees-de-fruits-secs"}>
                Pur&eacute;es de fruits secs
              </Link>
            </li>
            <li>
              <Link to={"/notre-boutique/smoothies"}>Smoothie</Link>
            </li>
            <li>
              <Link to={"/nos recettes"}>Nos recettes</Link>
            </li>
            <li>
              <Link to={"/nos-marques-partenaires"}>
                Nos marques partenaires
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.card}>
          <h3>Dulce de Fruit</h3>
          <ul>
            <li>
              <Link to={"/dulce-de-fruit/notre-histoire"}>Notre histoire</Link>
            </li>
            <li>
              <Link to={"/dulce-de-fruit/nos-engagements"}>
                Nos engagements
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.card}>
          <h3>Service client</h3>
          <ul>
            <li>
              <Link to={"/service-client/informations-de-livraison"}>
                Informations de livraison
              </Link>
            </li>
            <li>
              <Link to={"/service-client/faq"}>Foire aux questions</Link>
            </li>
            <li>
              <Link to={"/service-client/nous-contacter"}>Nous contacter</Link>
            </li>
            <li>
              <Link to={"/service-client/espace-fournisseur"}>
                Espace Fournisseur
              </Link>
            </li>
            <li>
              <Link to={"/service-client/plan-du-site"}>Plan du site</Link>
            </li>
          </ul>
        </section>

        <section className={styles.card}>
          <h3>Informations l&eacute;gales</h3>
          <ul>
            <li>
              <Link to={"/informations-legales/mentions-legales"}>
                Mentions l&eacute;gales
              </Link>
            </li>
            <li>
              <Link to={"/informations-legales/cgv"}>
                Conditions g&eacute;n&eacute;rales de vente
              </Link>
            </li>
            <li>
              <Link to={"/informations-legales/cgu"}>
                Conditions g&eacute;n&eacute;rales d'utilisation
              </Link>
            </li>
            <li>
              <Link to={"/informations-legales/protection-des-donnees"}>
                Protection des donn&eacute;es
              </Link>
            </li>
            <li>
              <Link to={"/informations-legales/politique-sur-les-cookies"}>
                Politique sur les cookies
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Sitemap;
