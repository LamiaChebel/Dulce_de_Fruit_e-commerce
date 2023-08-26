import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./shipinfo.module.css";

function ShipInfo() {
  return (
    <main className={styles.shipInfo}>
      <PageHeader title="informations de livraison" />

      <section className={styles.deliveryinfo}>
        <h3>Modalit&eacute;s de livraison</h3>
        <p>
          Les commandes sont trait&eacute;es le lendemain du jour de leur
          enregistrement. Les commandes pass&eacute;es le vendredi, le samedi ou le
          dimanche sont trait&eacute;es le lundi suivant. Les commandes sont exp&eacute;di&eacute;es
          48h (jours ouvr&eacute;s) apr&egrave;s leur validation en ligne.
        </p>
        <p>
          Les d&eacute;lais sont indiqu&eacute;s en jours ouvr&eacute;s, apr&egrave;s mise en livraison,
          hors probl&egrave;me d&apos;acheminement postal et selon disponibilit&eacute; des
          produits.
        </p>
        <ul>
          <li>Livraison en point relais Colissimo - 3 &aacute; 7 jours ouvrables</li>
          <li>
            Livraison standard Colissimo sans signature - 2 &aacute; 5 jours ouvrables
          </li>
          <li>
            Livraison standard Colissimo avec signature - 2 &aacute; 5 jours ouvrables
          </li>
          <li>Livraison express Chronopost - 1 jour avant 13H ouvrable</li>
        </ul>
      </section>

      <section className={styles.shippingcost}>
        <h3>Frais de Livraison</h3>
        <p>Les frais de livraison varient en fonction de l&apos;option choisie :</p>
        <ul>
        <li>Livraison en point relais Colissimo - 4,50 &euro; offert d&egrave;s 50 &euro; d&apos;achat</li>
          <li>
            Livraison standard Colissimo sans signature - 4,90 &euro; offert d&egrave;s 50 &euro; d&apos;achat
          </li>
          <li>
            Livraison standard Colissimo avec signature - 5,90 &euro; offert d&egrave;s 50 &euro; d&apos;achat
          </li>
          <li>Livraison express Chronopost - 11,50 &euro;</li>
        </ul>
      </section>

      <section className={styles.tracking}>
        <h3>Suivi de Livraison</h3>
        <p>
          Vous recevrez un num&eacute;ro de suivi d&egrave;s que votre commande sera exp&eacute;di&eacute;e.
          Utilisez-le pour suivre l&apos;&eacute;tat de votre livraison.
        </p>
      </section>
    </main>
  );
}

export default ShipInfo;
