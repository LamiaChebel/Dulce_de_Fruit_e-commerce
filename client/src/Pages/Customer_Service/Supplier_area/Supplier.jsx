import React from "react";

import { Link } from "react-router-dom";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import supplier from "../../../assets/img/supplier.jpg";

import styles from "./supplier.module.css";

function Supplier() {
  return (
    <main className={styles.supplier}>
      <PageHeader title="espace fournisseur" />

      <div className={styles.cont1}>
        <div className={styles.txt}>
          <p>
            Vous produisez ou distribuez des produits issus de l'agriculture
            biologique ?
          </p>
          <p>
            Vous avez fait le choix de la distribution spécialisée en ligne ?
          </p>
          <p>
            Vous distribuez des produits contribuant à la préservation de
            l'environnement ?
          </p>
          <p>
            Vous travaillez dans le respect des hommes et de la nature et
            l'éthique tient une place importante dans votre entreprise ?
          </p>
        </div>

        <figure>
          <img src={supplier} alt="" />
        </figure>
      </div>

      <div className={styles.cont2}>
        <div className={styles.child1}>
          <p>Alors soyez les bienvenus ici.</p>
          <p>
            Si vous souhaitez distribuer vos produits de préparations de fruits
            sur www.dulcedefruit.fr, nous nous ferons un plaisir d'étudier votre
            proposition.
          </p>
          <p>
            Nous recevons un grand nombre de propositions et nous nous efforçons
            d'y répondre dans les meilleurs délais. Merci pour votre patience.
          </p>
        </div>
        <div className={styles.child2}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.mailIcon}
            aria-hidden="true"
          />
          <h3>Vous souhaitez contacter le service</h3>
          <span> Equipe Partenariat / Fournisseurs </span>
          <Link to={"mailto:teamfournisseurs@dulcedefruit.fr"}>
            Contact e-mail
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Supplier;
