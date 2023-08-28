import React from "react";

import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import { getDatas } from "../../services/api";

import spinner from "../../assets/svg/spinner.svg";

import style from "./shop.module.css";

// import { addToCart, calculateTotalAmount } from "../../helpers/cart";
// import { modifyCart } from "../../store/slices/cart";

function SingleProduct() {
    
    const { id } = useParams();

    // const {cart} = useSelector(state => ({...state.cart}));
    // const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const product = await getDatas(`http://localhost:3001/api/v1/dulce-de-fruit/product/${id}`);
                
                setProduct(product.data.result);
                
                setIsLoading(false);
            } catch (error) {
                throw Error(error);
            }
        }
        fetchProduct();
    }, [id]);

    // const handleAddToCart = (e) => {
    //     e.preventDefault();
    //     const productToAdd = {id:product.id, ...product.productInfo[product.productInfo.findIndex(t => parseInt((t.idPackaging)) === parseInt(pkg.idPkg))]};
    //     const newCart = addToCart( cart, productToAdd );
    //     const totalAmount = calculateTotalAmount(newCart).toFixed(2);
    //     dispatch(modifyCart({cart: newCart, totalAmount}));
    // };

    if (isLoading)
        return (
            <div className={style.spinner}>
                <img src={spinner} alt="" />
            </div>
        );

    return (
        <main id="single-product">
            <section className={style.ctn}>
                    <h3>{product[0].name}</h3>           
                    <p>Ref: {product[0].ref}</p>
                    <p>Marque : {product[0].brandTitle}</p>
                    <p>Catégorie : {product[0].categoryName}</p>
				    <img src={product[0].img_productUrl} alt={product[0].img_productTitle} />

				{/* <form>
					<select value={pkg.idPackaging} onChange={changeHandler}>
						{
							product.productInfo.map(info => {
								return (
									<option key={info.idPackaging} value={info.idPackaging}>Pochette de {info.weight}</option>
								)
							})
						}
					</select>
				</form> */}

                <p>{product[0].ttc_price}€</p>
                <p>{product[0].weight}</p>
                <p>{product[0].kg_price}€</p>

				{/* <button className="addToCart" onClick={handleAddToCart}>ajouter au panier</button>
                <p>❤️ Ajouter à ma liste d'envies</p> */}

                <p>{product[0].description}</p>
                <p>{product[0].detail_desc}</p>
                <aside>
                    <h4>Ingr&eacute;dients</h4>
                    <div>
                        <p>{product[0].ingredients_list}</p>
                    </div>
                </aside>
                <aside>
                    <h4>Valeurs nutritionnelles</h4>
                    <div>
                        <p>&Eacute;nergie kJ : {product[0].kJ_calories}</p>
                        <p>&Eacute;nergie kcal : {product[0].kcal_calories}</p>
                        <p>Mati&egrave;res grasses : {product[0].total_fat}</p>
                        <p>dont satur&eacute;es : {product[0].saturated_fat}</p>
                        <p>Glucides : {product[0].total_carbohydrate}</p>
                        <p>dont sucres : {product[0].total_sugar}</p>
                        <p>Fibres : {product[0].fibre }</p>
                        <p>Prot&eacute;ines : {product[0].protein}</p>
                        <p>Sel : {product[0].salt}</p>
                    </div>
                </aside>


            </section>
        </main>
    );
}

export default SingleProduct;
