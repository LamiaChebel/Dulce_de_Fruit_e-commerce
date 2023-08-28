import React from "react";

import { useEffect, useState } from "react";

import { getDatas } from "../../../services/api.js";

import spinner from "../../../assets/svg/spinner.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import style from "../admin.module.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getDatas(
          "http://localhost:3001/api/v1/dulce-de-fruit/product"
        );

        setProducts(products.data.result);
        setKey(products.data.result[0]);

    } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {(!products.length && !key.length) < 0 ? (
        <figure>
          <img src={spinner} alt="chargement de la page" />
          <figcaption>Chargement de la page...</figcaption>
        </figure>
      ) : (
        <>
          <h3>Liste des produits</h3>

          <table>
            <thead>
              <tr>
                {Object.keys(key).map((k, i) => {
                  return k === "brandId" || k === "brandTitle" || k === "imgProductId" || k === "categoryId" || k === "categoryImgTitle" || k === "categoryImgUrl" || k === "detail_desc" || k === "ingredients_list"
                  || k === "kJ_calories" || k === "kcal_calories"|| k === "total_fat"|| k === "saturated_fat"|| k === "total_carbohydrate"|| k === "total_sugar"|| k === "fibre"|| k === "salt"
                  || k === "protein" || k === "img_productTitle" ? (
                    <></>
                  ) : (
                    <th key={i}>{k}</th>
                  );
                })}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => {
                let d = new Date(product.created_at);
                let d1 = new Date(product.updated_at);

                return (
                  <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.ref}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.ttc_price}</td>
                    <td>{product.kg_price}</td>
                    <td>{product.stock === 0 ? "Non disponible" : product.stock}</td>
                    <td>{product.weight}</td>

                    <td>
                      {product.our_favorite ? (
                        <FontAwesomeIcon
                          icon={faHeart}
                          beat
                          style={{ color: "#ff0000" }}
                          aria-hidden="true"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faXmark} />
                      )}
                    </td>

                    <td>
                      {d.toLocaleDateString() + " à " + d.toLocaleTimeString()}
                    </td>
                    <td>
                      {d1 === null ? "vide" :d1.toLocaleDateString() + " à " + d1.toLocaleTimeString()}
                    </td>

                    <td>
                      <img
                        src={product.img_productUrl}
                        alt={product.img_productTitle}
                      />
                    </td>

                    <td>{product.categoryName}</td>

                    <td>
                      <button>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          aria-hidden="true"
                        />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faTrashCan} aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                {Object.keys(key).map((k, i) => {
                  return k === "brandId" || k === "brandTitle" || k === "imgProductId" || k === "categoryId" || k === "categoryImgTitle" || k === "categoryImgUrl" || k === "detail_desc" || k === "ingredients_list"
                  || k === "kJ_calories" || k === "kcal_calories"|| k === "total_fat"|| k === "saturated_fat"|| k === "total_carbohydrate"|| k === "total_sugar"|| k === "fibre"|| k === "salt"
                  || k === "protein" || k === "img_productTitle" ? <></> : <th key={i}>{k}</th>;
                })}
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </>
  );
}

export default Product;
