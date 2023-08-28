import React from "react";
import { Link } from 'react-router-dom';

import { useEffect, useState } from "react";

import { getDatas } from "../../../services/api.js";


import FormBrand from "../Components/FormBrand.jsx";

import spinner from "../../../assets/svg/spinner.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import style from "../admin.module.css";

function Brand() {

// récupération des données de marque et affichage en tableau
  const [brands, setBrands] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const brands = await getDatas(
          "http://localhost:3001/api/v1/dulce-de-fruit/brand"
        );

        setBrands(brands.data.result);
        setKey(brands.data.result[0]);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {(!brands.length && !key.length) < 0 ? (
        <figure>
          <img src={spinner} alt="chargement de la page" />
          <figcaption>Chargement de la page...</figcaption>
        </figure>
      ) : (
        <>
          <h3>Liste des marques</h3>

          <table>
            <thead>
              <tr>
                {Object.keys(key).map((k, i) => {
                  return <th key={i}>{k}</th>;
                })}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, i) => {
                return (
                  <tr key={i}>
                    <td>{brand.id}</td>
                    <td>{brand.title}</td>

                    <td>

                      <Link to={`update/${brand.id}`}>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          aria-hidden="true"
                        /> Modifier
                      </Link>
                      <Link to={`delete/${brand.id}`}>
                        <FontAwesomeIcon icon={faTrashCan} aria-hidden="true" />
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                {Object.keys(key).map((k, i) => {
                  return <th key={i}>{k}</th>;
                })}
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>

          <FormBrand  />
        </>
      )}
    </>
  );
}

export default Brand;
