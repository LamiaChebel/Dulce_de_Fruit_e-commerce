import { React, useState } from "react";

import { NavLink, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "./nav.module.css";

function Nav() {
  const [showNav, setshowNav] = useState(false);
  const [showSubnav, setshowSubnav] = useState(false);
  const [showSubnav2, setshowSubnav2] = useState(false);

  //   Ouverture/fermeture menu principale

  function handleToggle(e) {
    e.preventDefault();
    return setshowNav(!showNav);
  }

  //   Ouverture/fermeture sous-menu

  function handleToggleSubnav(e) {
    e.preventDefault();
    return setshowSubnav(!showSubnav);
  }

  function handleToggleSubnav2(e) {
    e.preventDefault();
    return setshowSubnav2(!showSubnav2);
  }

  function closeMenu(e) {
    return setshowNav(!showNav);
  }

  return (
    <>
      <div role="navigation" className={style.navHeader}>
        {/* Bannière Menu avec icône hamburger */}
        <div className={style.burgerMenu}>
          <p className={style.menuTxt}>menu</p>
          <button className={style.btn} onClick={handleToggle}>
            <FontAwesomeIcon
              icon={showNav ? faClose : faBars}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* menu principal */}
        <nav
          className={`${style.desktopNav} ${showNav ? style.isActive : null }`}
        >
          <NavLink to={"/"} onClick={closeMenu}>accueil</NavLink>

          {/* Sous-menu de Note boutique */}
          <div role="menu" className={style.submenu}>
            <NavLink to={"/notre-boutique"} onClick={closeMenu}>notre boutique</NavLink>
            <button className={style.btn} onClick={handleToggleSubnav}>
              <FontAwesomeIcon
                icon={showSubnav ? faChevronDown : faChevronRight}
                aria-hidden="true"
              />
            </button>
          </div>
          <ul
            className={`${style.shopList} ${
              showSubnav ? style.isActive : null
            }`}
          >
            <li>
              <NavLink to={"/notre-boutique/preparations-de-fruits"} onClick={closeMenu}>
                pr&eacute;rations 100% fruits
              </NavLink>
            </li>
            <li>
              <NavLink to={"/notre-boutique/purees-de-fruits"} onClick={closeMenu}>
                pur&eacute;es de fruits
              </NavLink>
            </li>
            <li>
              <NavLink to={"/notre-boutique/purees-de-fruits-secs"} onClick={closeMenu}>
                pur&eacute;es de fruits secs
              </NavLink>
            </li>
            <li>
              <NavLink to={"/notre-boutique/smoothies"} onClick={closeMenu}>smoothies</NavLink>
            </li>
          </ul>

          <NavLink to={"/nos-recettes"} onClick={closeMenu}>nos recettes</NavLink>

          <div role="menu" className={style.submenu}>
            <p>Dulce de Fruit</p>
            <button className={style.btn} onClick={handleToggleSubnav2}>
              <FontAwesomeIcon
                icon={showSubnav2 ? faChevronDown : faChevronRight}
                aria-hidden="true"
              />
            </button>
          </div>
          <ul
            className={`${style.shopList} ${
              showSubnav2 ? style.isActive : null
            }`}
          >
            <li>
              <NavLink to={"/dulce-de-fruit/notre-histoire"} onClick={closeMenu}>
                notre histoire
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dulce-de-fruit/nos-engagements"} onClick={closeMenu}>
                nos engagements
              </NavLink>
            </li>
          </ul>
          <NavLink to={"/service-client/nous-contacter"} onClick={(e) => { setshowNav(!showNav) }}>
            nous contacter
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
