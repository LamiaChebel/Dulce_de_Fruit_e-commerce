import React from "react";

import { useEffect, useState } from "react";

import { getDatas } from "../../../services/api.js";

import Wrapper from "./Wrapper.jsx";

import spinner from "../../../assets/svg/spinner.svg";

import style from "../shop.module.css";

function Section() {

  // Récupération des produits dans la base de données via l'API

  const [products, setProducts] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getDatas(
          "http://localhost:3001/api/v1/dulce-de-fruit/product"
        );

        setProducts(products.data.result);
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchData();
  }, []);

  // Ajout d'un indicateur de chargement des données
  
  if (isLoading)
    return (
      <div className="spinner">
        <img src={spinner} alt="" />
      </div>
    );

  return (
    <>
      <div className={style.shopSection}>
        {products
          ? products.map((p) => {
              return <Wrapper key={p.id} item={p} className={style.shopCard}/>;
            })
          : null}
      </div>
    </>
  );
}

export default Section;
