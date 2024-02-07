import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  //récupérer le chemin de l'URL pour retourner les pages liées à la page où se trouve l'utilisateur
  const location = useLocation();
  // transformer la chaîne de caratère contenant l'URI en tableau qui
  const pathnames = location.pathname.split("/");
  // .filter((item) => item)
  // .map((item) => item.replaceAll("-", " ").replace(item[0], item[0].toUpperCase()));
  console.log(pathnames);

  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {pathnames.map((name, index) => {
          const routeTo = `${pathnames.slice(0, index + 1).join("/")}`;
          console.log(routeTo);
          const isLast = index === pathnames.length - 1;
          const capitalizedName = name
            .replaceAll("-", " ")
            .replace(name.charAt(0), name.charAt(0).toUpperCase());
            console.log(name.at(0));
          return (
            <li key={index}>
              {isLast ? (
                <span>{capitalizedName}</span>
              ) : (
                <Link to={routeTo}>
                  {!routeTo ? "Accueil" : capitalizedName} /
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
