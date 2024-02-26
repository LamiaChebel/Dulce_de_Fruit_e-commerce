import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import styles from "./index.module.css";

function DataProtection() {
  return (
    <main className={styles.dataprotection}>
      <PageHeader title="protection des données" />
      <section>
        <hgroup>
          <h3>donn&eacute;es personnelles</h3>
          <p>D&eacute;finitions</p>
        </hgroup>

        <p>
          L&apos;&Eacute;diteur ou Dulce de Fruit : La personne, physique ou morale, qui
          &eacute;dite les services de communication au public en ligne.
        </p>
        <p>
          Le Site ou{" "}
          <a
            href="/"
           title="Aller sur la page d'accueil">
            www.dulcedefruit.fr
          </a>
          {" "}: L&apos;ensemble des sites, pages Internet et services en ligne propos&eacute;s
          par l&apos;&Eacute;diteur.
        </p>
        <p>L&apos;Utilisateur : La personne utilisant le Site et les services.</p>

        
      </section>
    </main>
  );
}

export default DataProtection;
