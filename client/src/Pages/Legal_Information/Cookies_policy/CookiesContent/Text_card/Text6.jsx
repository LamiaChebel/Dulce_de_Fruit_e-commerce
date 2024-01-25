import React from "react";
import { Link } from "react-router-dom";

function Text6() {
  return (
    <p>
      L&apos;Utilisateur et le Membre peuvent configurer leur logiciel de
      navigation de mani&egrave;re &agrave; ce que des Cookies soient
      enregistr&eacute;s dans leur terminal ou qu&apos;ils soient
      rejet&eacute;s, soit syst&eacute;matiquement, soit selon leur
      &eacute;metteur.
      <p>
        Pour conna&icirc;tre les modalit&eacute;s applicables &agrave; la
        gestion des Cookies stock&eacute;s dans leur navigateur, Dulce de Fruit
        invite l&apos;Utilisateur et le Membre &agrave; consulter le menu
        d&apos;aide de leur navigateur ainsi que la rubrique &laquo; Vos traces
        &raquo; du site de la Commission Nationale de l&apos;Informatique &amp;
        des Libert&eacute;s, la &laquo; CNIL &raquo;
        <Link to={"https://www.cnil.fr/vos-libertes/vos-traces/les-cookies/"}>
          (https://www.cnil.fr/vos-libertes/vos-traces/les-cookies/)
        </Link>
      </p>
      .{" "}
    </p>
  );
}

export default Text6;
