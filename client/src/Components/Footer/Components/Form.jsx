import React from "react";

import style from "../footer.module.css";

function Form() {
    return (
        <>
            {/* Formulaire de newsletter*/}
            <form action="" method="post">
                <fieldset className={style.formFooter}>
                    
                    <legend className={style.legendFooter}>Inscription &agrave; la newsletter</legend>
                   
                    <label htmlFor="mail">E-mail :</label>
                    <input type="email"
                           name="mail"
                           id="mail"
                           placeholder="Entrez votre e-mail"
                           aria-placeholder="Votre mail" />
                    
                    <input type="submit" 
                           value="S'inscrire" 
                           className={style.subscribe} />
                </fieldset>
            </form>
        </>
    )
}

export default Form;