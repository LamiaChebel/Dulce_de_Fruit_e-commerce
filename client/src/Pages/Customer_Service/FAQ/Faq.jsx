import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import styles from "./faq.module.css";

function Faq() {
  return (
    <main className={styles.faq}>
      <PageHeader title="foire aux questions" />
      <section className={styles.faq}>
        <article className={styles.faqitem}>
          <h3>Quels types de préparations vendez-vous chez Dulce de Fruit ?</h3>
          <p>
            Nous vendons des préparations 100% fruits, allant des confitures aux
            purées et aux en-cas sains, le tout sans additifs ni conservateurs.
          </p>
        </article>

        <article className={styles.faqitem}>
          <h3>Quelle est la provenance de vos fruits ?</h3>
          <p>
            Nous sourçons nos fruits auprès de producteurs locaux et de cultures
            durables pour garantir la fraîcheur et la qualité de nos produits.
          </p>
        </article>

        <article className={styles.faqitem}>
          <h3>Comment sont conservées vos préparations sans conservateurs ?</h3>
          <p>
            Nos préparations sont scellées hermétiquement pour préserver leur
            fraîcheur. De plus, notre processus de préparation permet de
            conserver les saveurs naturelles des fruits.
          </p>
        </article>

        <article className={styles.faqitem}>
          <h3>
            Proposez-vous des options pour les régimes alimentaires spéciaux ?
          </h3>
          <p>
            Oui, nous avons des préparations adaptées aux régimes végétariens,
            végétaliens et sans gluten. Vous pouvez filtrer nos produits en
            fonction de vos besoins alimentaires.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Faq;
