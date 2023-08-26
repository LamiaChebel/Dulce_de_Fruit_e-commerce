import React from "react";

import { Link } from "react-router-dom";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./index.module.css";

function LegalMentions() {
  return (
    <main className={styles.legalMentions}>
      <PageHeader title="mentions l&eacute;gales" />
      <article id={styles.total}>
        <section>
          <h3>1 - &Eacute;dition du site</h3>
          <p>
            En vertu de l&apos;article 6 de la loi n&deg; 2004-575 du 21 juin 2004 pour
            la confiance dans l&apos;&eacute;conomie num&eacute;rique, il est pr&eacute;cis&eacute; aux
            utilisateurs du site internet
            <Link to={"https://www.dulcedefruit.fr"}> Dulce de Fruit </Link>
            l&apos;identit&eacute; des diff&eacute;rents intervenants dans le cadre de sa
            r&eacute;alisation et de son suivi:
          </p>
          <p>
            <span>Propri&eacute;taire du site :</span> Dulce de Fruit - Contact :
            accueil@dulcedefruit.fr - 01 08 45 32 19 - Adresse : 12, avenue
            Marceau - 75008 Paris.
          </p>
          <p>
            <span>Identification de l&apos;entreprise :</span>
            SARL Dulce de Fruit au capital social de 11000&euro; - SIREN : 324806501
            - RCS : 38324806501 - Num&eacute;ro d&apos;identification TVA : FR 38 324 806
            501 - Adresse postale : 12, avenue Marceau - 75008 Paris - voir les
            CGV en cliquant <Link to={"/informations-legales/cgv"}>ici</Link>
          </p>
          <p>
            <span>Directrice de la publication :</span>
            Pauline JONAS - Contact : pauline.jonas@dulcedefruit.fr.
          </p>
          <p>
            <span>H&eacute;bergeur : </span>
            OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1 -
            T&eacute;l&eacute;phone : 1007
          </p>
          <p>
            <span>D&eacute;l&eacute;gu&eacute; &agrave; la protection des donn&eacute;es :</span>
            Dulce de Fruit - Data Protection Officer - Contact :
            dpo@dulcedefruit.fr
          </p>
          <p>
            <span>Conception et d&eacute;veloppement du site :</span>
            Cr&eacute;A Digital - Responsable du projet : Jason YOMA
          </p>
        </section>

        <section>
          <h3>2 - Acc&egrave;s au site</h3>
          <p>
            Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
            force majeure, interruption programm&eacute;e ou non et pouvant d&eacute;coulant
            d&apos;une n&eacute;cessit&eacute; de maintenance. En cas de modification, interruption
            ou suspension du Site, l&apos;&eacute;diteur ne saurait &ecirc;tre tenu responsable.
          </p>
        </section>

        <section>
          <h3>3 - Collecte des donn&eacute;es</h3>
          <p>
            Le Site assure &agrave; l&apos;Utilisateur une collecte et un traitement
            d&apos;informations personnelles dans le respect de la vie priv&eacute;e
            conform&eacute;ment &agrave; la loi n&deg;78-17 du 6 janvier 1978 relative &agrave;
            l&apos;informatique, aux fichiers et aux libert&eacute;s. 
            En vertu de la loi
            Informatique et Libert&eacute;s, en date du 6 janvier 1978, l&apos;Utilisateur
            dispose d&apos;un droit d&apos;acc&egrave;s, de rectification, de suppression et
            d&apos;opposition de ses donn&eacute;es personnelles.
          </p>
          <p>
            L&apos;Utilisateur exerce ce droit :
            <ul>
              <li>par mail &agrave; l&apos;adresse email dpo@dulcedefruit.fr </li>
              <li>
                par voie postale au D&eacute;l&eacute;gu&eacute; &agrave; la protection des donn&eacute;es - 12,
                avenue Marceau - 75008 Paris ;
              </li>
              <li>via un formulaire de contact ; </li>
              <li>via son espace personnel</li>
            </ul>
          </p>
          <p>
            Toute utilisation, reproduction, diffusion, commercialisation,
            modification de toute ou partie du Site, sans autorisation de
            l&apos;&eacute;diteur est prohib&eacute;e et pourra entraîner des actions et poursuites
            judiciaires telles que notamment pr&eacute;vues par le Code de la propri&eacute;t&eacute;
            intellectuelle et le Code civil.
          </p>
          <p>Pour plus d&apos;informations, se reporter aux CGU du site <Link to={"/informations-legales/cgv"}>ici</Link></p>
          <p>Pour plus d&apos;informations, se reporter aux CGV du site <Link to={"/informations-legales/cgu"}>ici</Link></p>
          <p>
            Pour plus d&apos;informations en mati&egrave;re de protection des donn&eacute;es &agrave;
            caract&egrave;re personnel , se reporter &agrave; la Charte en mati&egrave;re de
            protection des donn&eacute;es &agrave; caract&egrave;re personnel du site <Link to={"/informations-legales/protection-des-donnees"}>ici</Link>
          </p>
          <p>
            Pour plus d&apos;informations en mati&egrave;re de cookies, se reporter &agrave; la
            Charte en mati&egrave;re de cookies du site <Link to={"/informations-legales/politique-sur-les-cookies"}>ici</Link>
          </p>
        </section>
      </article>
    </main>
  );
}

export default LegalMentions;

