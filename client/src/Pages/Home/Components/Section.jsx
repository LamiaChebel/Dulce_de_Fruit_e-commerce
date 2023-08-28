import React from "react";

import { useEffect, useState } from "react";

import { getDatas } from "../../../services/api.js";

import Wrapper from "./Wrapper";

import spinner from "../../../assets/svg/spinner.svg";

import style from "../home.module.css";

function Section() {
  const [newProduct, setNewProduct] = useState(null);
  const [ourFavorite, setOurFavorite] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const newProduct = await getDatas(
          "http://localhost:3001/api/v1/dulce-de-fruit/product/new"
        );
        const ourFavorite = await getDatas(
          "http://localhost:3001/api/v1/dulce-de-fruit/product/favorite"
        );

        setNewProduct(newProduct.data.result);
        setOurFavorite(ourFavorite.data.result);

        setIsLoading(false);
      } catch (error) {
        throw Error(error);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading)
    return (
      <div className={style.spinner}>
        <img src={spinner} alt="" />
      </div>
    );

  return (
    <div className={`${style.ctn} ${style.secondaryCtn}`}>
      <Wrapper
        item={newProduct}
        title="Nos nouveautés"
      />

      <Wrapper
        item={ourFavorite}
        title="Nos coups de coeur"
      />
    </div>
  );
}

export default Section;
