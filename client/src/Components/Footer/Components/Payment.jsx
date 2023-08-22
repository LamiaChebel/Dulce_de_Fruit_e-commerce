import React from "react";

import payment from "../../../assets/img/payment-infos/payment.png";
import ssl from "../../../assets/img/payment-infos/ssl.png";

import style from "../footer.module.css";

function Payment() {
    return (
        <>
            {/* Informations de paiement*/}
            <aside className={style.paymentInfo}>

                <h4>Tous les paiements sont sécurisés.</h4>
                
                <figure>
                    <figcaption></figcaption>
                    <img src={payment} 
                         alt="moyens de paiement autorisés comme carte bancaire, mastercard, visa et paypal" />
                    <img src={ssl} 
                         alt="certificat ssl mise en place pour le paiement sur ce site" 
                         className={style.ssl}/>
                </figure>

            </aside>
        

        </>
    )
}

export default Payment;