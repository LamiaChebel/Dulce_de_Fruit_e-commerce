import React from "react";

import CookiesCard from "./CookiesCard.jsx";

import Text0 from "./Text_card/Text0.jsx";
import Text1 from "./Text_card/Text1.jsx";
import Text2 from "./Text_card/Text2.jsx";
import Text3 from "./Text_card/Text3.jsx";
import Text4 from "./Text_card/Text4.jsx";
import Text5 from "./Text_card/Text5.jsx";
import Text6 from "./Text_card/Text6.jsx";

function CookiesContent() {
  return (
    <div>
      <CookiesCard
        key="0"
        title="Qu'est-ce qu'un cookie ?"
        details={<Text0 />}
      />
      <CookiesCard
        key="1"
        title="A quoi servent les Cookies émis sur le Site ?"
        details={<Text1 />}
      />
      <CookiesCard
        key="2"
        title="Les Cookies déposés par un Tiers sur des espaces du
        Site"
        details={<Text2 />}
      />
      <CookiesCard
        key="3"
        title="Les Cookies intégrés à des applications Tierces sur le
        Site – Plugin réseaux sociaux"
        details={<Text3 />}
      />
      <CookiesCard
        key="4"
        title="Partage de l'utilisation du terminal de l’Utilisateur ou
        du Membre avec d'autres personnes"
        details={<Text4 />}
      />
      <CookiesCard
        key="5"
        title="La gestion et l’utilisation des Cookies par l’Utilisateur
        ou le Membre"
        details={<Text5 />}
      />
      <CookiesCard
        key="6"
        title="Gestion des Cookies à partir du logiciel de navigation :"
        details={<Text6 />}
      />
    </div>
  );
}

export default CookiesContent;
