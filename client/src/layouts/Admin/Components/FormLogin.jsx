import React from "react";
import { Link } from "react-router-dom";

import style from "../admin.module.css";

function FormLogin() {
    return (
        // Formulaire d'authenfication admin

        <section className={style.formSection}>

            <h3>Connectez-vous pour acc&eacute;der &agrave; votre interface administrateur !</h3>

            <form action="" method="get" className={style.adminConnect}>
                <fieldset className={style.adminLogin}>

                    <label htmlFor="mail">E-mail :</label>
                    <input type="email"
                        name="mail"
                        id="mail"
                        placeholder="Entrez votre e-mail."
                    //    value={mail}
                    />

                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password"
                        name="password"
                        id="password"
                        placeholder="Entrez votre mot de passe."
                    //    vamue={password}
                    />

                    <input type="submit"
                        value="Se connecter"
                        className={style.connect} />

                </fieldset>
            </form>

            {/* Accès Inscription admin */}
            
            <div className={style.subBtn}>
                <p className={style.subTxt}>Pas encore de compte ?</p>
                <Link to={"/admin/create-account-admin"} className={style.createAdmin}>Cr&eacute;er un compte administrateur</Link>
            </div>
        </section>

    )
}

export default FormLogin;