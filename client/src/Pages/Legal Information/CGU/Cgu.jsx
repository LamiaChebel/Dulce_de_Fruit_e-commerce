import React from "react";

import { Link } from "react-router-dom";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./cgu.module.css";

function Cgu() {
  return (
    <main className={styles.cgu}>
      <PageHeader title="conditions générales d'utilisation" />

      <article>
        <div>
          <p>
            Le pr&eacute;sent document a pour objet de d&eacute;finir les
            modalit&eacute;s et conditions dans lesquelles d&apos;une part,
            <span>Dulce de Fruit</span>
            met &agrave; la disposition de ses utilisateurs le site, et les
            services disponibles sur le site et d&apos;autre part, la
            mani&egrave;re par laquelle l&apos;utilisateur acc&egrave;de au site
            et utilise ses services.
          </p>
          <p>
            Toute connexion au site est subordonn&eacute;e au respect des
            pr&eacute;sentes conditions.
          </p>
          <p>
            Pour l&apos;utilisateur, le simple acc&egrave;s au site de
            <span>Dulce de Fruit</span> &agrave; l&apos;adresse URL suivante{" "}
            <Link to={"/"}>https://www.dulcedefruit.fr</Link> implique
            l&apos;acceptation de l&apos;ensemble des conditions d&eacute;crites
            ci-apr&egrave;s.
          </p>
        </div>
        <hr />
        <section>
          <h3>1 - Propri&eacute;t&eacute; intellectuelle et contrefaçons.</h3>
          <p>
            <span>Dulce de Fruit</span>est propri&eacute;taire des droits de
            propri&eacute;t&eacute; intellectuelle et d&eacute;tient les droits
            d&apos;usage sur tous les &eacute;l&eacute;ments accessibles sur le
            site internet, notamment les textes, images, graphismes, logos,
            vid&eacute;os, architecture, ic&ocirc;nes et sons.
          </p>
          <p>
            Toute reproduction, repr&eacute;sentation, modification,
            publication, adaptation de tout ou partie des &eacute;l&eacute;ments
            du site, quel que soit le moyen ou le proc&eacute;d&eacute;
            utilis&eacute;, est interdite, sauf autorisation &eacute;crite
            pr&eacute;alable de <span>Dulce de Fruit</span>
          </p>
          <p>
            Toute exploitation non autoris&eacute;e du site ou de l&apos;un
            quelconque des &eacute;l&eacute;ments qu&apos;il contient sera
            consid&eacute;r&eacute;e comme constitutive d&apos;une contrefaçon
            et poursuivie conform&eacute;ment aux dispositions des articles{" "}
            <Link
              to={
                "https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000032655082&cidTexte=LEGITEXT000006069414&dateTexte=20160605"
              }
            >
              L.335-2 et suivants du Code de Propri&eacute;t&eacute;
              Intellectuelle
            </Link>
            .
          </p>
        </section>
        <hr />
        <section>
          <h3>2 - Limitations de responsabilit&eacute;.</h3>
          <p>
            <span>Dulce de Fruit</span>ne pourra &ecirc;tre tenu pour
            responsable des dommages directs et indirects caus&eacute;s au
            mat&eacute;riel de l&apos;utilisateur, lors de l&apos;acc&egrave;s
            au site <Link to={"/"}>www.dulcedefruit.fr</Link>.
          </p>
          <p>
            <span>Dulce de Fruit</span>d&eacute;cline toute
            responsabilit&eacute; quant &agrave; l&apos;utilisation qui pourrait
            &ecirc;tre faite des informations et contenus pr&eacute;sents sur{" "}
            <Link to={"/"}>www.dulcedefruit.fr</Link>.
          </p>
          <p>
            <span>Dulce de Fruit</span>s&apos;engage &agrave; s&eacute;curiser
            au mieux le site <Link to={"/"}>www.dulcedefruit.fr</Link>,
            cependant sa responsabilit&eacute; ne pourra &ecirc;tre mise en
            cause si des donn&eacute;es ind&eacute;sirables sont
            import&eacute;es et install&eacute;es sur son site &agrave; son
            insu.
          </p>

          <p>
            Des espaces interactifs (espace contact ou commentaires) sont
            &agrave; la disposition des utilisateurs.{" "}
            <span>Dulce de Fruit</span> se r&eacute;serve le droit de supprimer,
            sans mise en demeure pr&eacute;alable, tout contenu
            d&eacute;pos&eacute; dans cet espace qui contreviendrait &agrave; la
            l&eacute;gislation applicable en France, en particulier aux
            dispositions relatives &agrave; la protection des donn&eacute;es.
          </p>
          <p>
            Le cas &eacute;ch&eacute;ant, <span>Dulce de Fruit</span> se
            r&eacute;serve &eacute;galement la possibilit&eacute; de mettre en
            cause la responsabilit&eacute; civile et/ou p&eacute;nale de
            l&apos;utilisateur, notamment en cas de message &agrave;
            caract&egrave;re raciste, injurieux, diffamant, ou pornographique,
            quel que soit le support utilis&eacute; (texte, photographie …).
          </p>
        </section>
        <hr />
        <section>
          <h3>3 - CNIL et gestion des donn&eacute;es personnelles.</h3>
          <p>
            Conform&eacute;ment aux dispositions de {""}
            <Link
              to={
                "https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460"
              }
            >
              la loi 78-17 du 6 janvier 1978 modifi&eacute;e
            </Link>
            , l&apos;utilisateur du site{" "}
            <Link to={"/"}>www.dulcedefruit.fr</Link>
            dispose d&apos;un droit d&apos;acc&egrave;s, de modification et de
            suppression des informations collect&eacute;es. Pour exercer ce
            droit, envoyez un message &agrave; notre
            D&eacute;l&eacute;gu&eacute; &agrave; la Protection des
            Donn&eacute;es &agrave; {""}
            <Link to={"mailto:dpo@dulcedefruit.fr"}>dpo@dulcedefruit.fr</Link>.
          </p>
          <p>
            Pour plus d'informations sur la façon dont nous traitons vos
            donn&eacute;es (type de donn&eacute;es, finalit&eacute;,
            destinataire...), lisez notre charte des donn&eacute;es personnelles {""}
            <Link to={"/informations-legales/protection-des-donnees"}>ici</Link>
            .
          </p>
        </section>
        <hr />
        <section>
          <h3>4 - Publication par l&apos;Utilisateur</h3>
          <p>
            Le site permet aux membres de publier les contenus suivants :
            commentaires et photos.
          </p>
          <p>
            Dans ses publications, le membre s&apos;engage &agrave; respecter
            les r&egrave;gles de la Netiquette (r&egrave;gles de bonne conduite
            de l&apos;internet) et les r&egrave;gles de droit en vigueur.
          </p>
          <p>
            Le site peut exercer une mod&eacute;ration sur les publications et
            se r&eacute;serve le droit de refuser leur mise en ligne, sans avoir
            &agrave; s&apos;en justifier aupr&egrave;s du membre.
          </p>
          <p>
            Le membre reste titulaire de l&apos;int&eacute;gralit&eacute; de ses
            droits de propri&eacute;t&eacute; intellectuelle. Mais en publiant
            une publication sur le site, il c&egrave;de &agrave; la
            soci&eacute;t&eacute; &eacute;ditrice le droit non exclusif et
            gratuit de repr&eacute;senter, reproduire, adapter, modifier,
            diffuser et distribuer sa publication, directement ou par un tiers
            autoris&eacute;, dans le monde entier, sur tout support
            (num&eacute;rique ou physique), pour la dur&eacute;e de la
            propri&eacute;t&eacute; intellectuelle. Le Membre c&egrave;de
            notamment le droit d'utiliser sa publication sur internet et sur les
            r&eacute;seaux de t&eacute;l&eacute;phonie mobile.
          </p>
          <p>
            La soci&eacute;t&eacute; &eacute;ditrice s'engage &agrave; faire
            figurer le nom du membre &agrave; proximit&eacute; de chaque
            utilisation de sa publication.
          </p>
          <p>
            Tout contenu mis en ligne par l'Utilisateur est de sa seule
            responsabilit&eacute;. L'Utilisateur s'engage &agrave; ne pas mettre
            en ligne de contenus pouvant porter atteinte aux
            int&eacute;r&ecirc;ts de tierces personnes. Tout recours en justice
            engag&eacute; par un tiers l&eacute;s&eacute; contre le site sera
            pris en charge par l'Utilisateur.
          </p>
          <p>
            Le contenu de l'Utilisateur peut &ecirc;tre &agrave; tout moment et
            pour n'importe quelle raison supprim&eacute; ou modifi&eacute; par
            le site, sans pr&eacute;avis.
          </p>
        </section>
        <hr />

        <section>
          <h3>5 - Liens hypertextes et cookies</h3>
          <p>
            Le site <Link to={"/"}>www.dulcedefruit.fr</Link> contient des liens
            hypertextes vers d&apos;autres sites et d&eacute;gage toute
            responsabilit&eacute; &agrave; propos de ces liens externes ou des
            liens cr&eacute;s par d&apos;autres sites vers{" "}
            <Link to={"/"}>www.dulcedefruit.fr</Link>.
          </p>
          <p>
            La navigation sur le site <Link to={"/"}>www.dulcedefruit.fr</Link> {""}
            est susceptible de provoquer l&apos;installation de cookie(s) sur
            l&apos;ordinateur de l&apos;utilisateur.
          </p>
          <p>
            Un " cookie ” est un fichier de petite taille qui enregistre des
            informations relatives &agrave; la navigation d&apos;un utilisateur
            sur un site. Les donn&eacute;es ainsi obtenues permettent d'obtenir
            des mesures de fr&eacute;quentation, par exemple.
          </p>
          <p>
            Vous avez la possibilit&eacute; d&apos;accepter ou de refuser les
            cookies en modifiant les param&egrave;tres de votre navigateur.
            Aucun cookie ne sera d&eacute;pos&eacute; sans votre consentement.
          </p>
          <p>
            Les cookies sont enregistr&eacute;s pour une dur&eacute;e maximale
            de 24 mois.
          </p>
          <p>
            Pour plus d'informations sur la façon dont nous faisons usage des
            cookies, lisez notre politique sur les cookies <Link to={"/informations-legales/politique-sur-les-cookies"}>ici</Link>.
          </p>
        </section>
        <hr />

        <section>
          <h3>
            6 - &Eacute;volution des conditions g&eacute;n&eacute;rales
            d&apos;utilisation
          </h3>
          <p>
            Le site <Link to={"/"}>www.dulcedefruit.fr</Link> se r&eacute;serve
            le droit de modifier les clauses de ces conditions
            g&eacute;n&eacute;rales d&apos;utilisation &agrave; tout moment et
            sans justification.
          </p>
        </section>
        <hr />

        <section>
          <h3>7 - Droit applicable et attribution de juridiction.</h3>
          <p>
            Tout litige en relation avec l&apos;utilisation du site{" "}
            <Link to={"/"}>www.dulcedefruit.fr</Link> est soumis au droit
            français. En dehors des cas où la loi ne le permet pas, il est fait
            attribution exclusive de juridiction aux tribunaux comp&eacute;tents
            de Paris.
          </p>
        </section>
      </article>
    </main>
  );
}

export default Cgu;
