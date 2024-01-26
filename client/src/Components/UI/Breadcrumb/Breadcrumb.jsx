import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  console.log(useLocation());
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to={"/"}>Accueil</Link> /
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name}>
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link to={routeTo}>{name} /</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
