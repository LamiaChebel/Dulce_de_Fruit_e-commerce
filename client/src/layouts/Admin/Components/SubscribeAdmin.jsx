import React from "react";

import style from "../admin.module.css";

function SubscribeAdmin() {
    return (
        // Formulaire de création administrateur

        <section className={style.formSection}>

            <h3>Enregistrez-vous pour créer et acc&eacute;der &agrave; votre interface administrateur !</h3>

            <form action="" method="post" className={style.adminConnect}>
                <fieldset className={style.adminLogin}>

                    <label htmlFor="alias">Pseudo :</label>
                    <input type="text"
                        name="alias"
                        id="alias"
                        placeholder="Entrez le pseudonyme de votre choix."
                    //    value={alias}
                    />

                    <label htmlFor="mail">E-mail :</label>
                    <input type="email"
                        name="mail"
                        id="mail"
                        placeholder="Entrez votre e-mail par ex hnbbbb@gmail.com, ..."
                    //    value={mail}
                    />

                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password"
                        name="password"
                        id="password"
                        placeholder="Entrez votre mot de passe qui a au minimum 12 caractères dont des majuscules, des minuscules, des nombres et des caractères spéciaux"
                    //    vamue={password}
                    />

                    <input type="submit"
                        value="Se connecter"
                        className={style.connect} />

                </fieldset>
            </form>

        </section>

    )
}

export default SubscribeAdmin;