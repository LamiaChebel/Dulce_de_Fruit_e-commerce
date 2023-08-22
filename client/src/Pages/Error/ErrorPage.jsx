import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import style from "./error.module.css";

function ErrorPage() {
    return (
        <main className={style.error}>

            <section className={style.txt}>
                
                <h2 className={style.errorTitle}>Oups ! Erreur 404</h2>

                    <p>Nous sommes désolés, mais il semblerait que vous vous soyez égaré
                        dans nos gourmandises fruitées.
                        La page que vous cherchez n'a pas été trouvée.</p>
                    <p>Ne vous inquiétez pas, nos délicieux fruits sont toujours
                        à portée de main ! Vous pouvez retourner à notre page
                        d'accueil pour découvrir notre délicieuse sélection de
                        préparations de fruits savoureuses.</p>
                    <p><Link to="/" className={style.linkBack}>
                        <FontAwesomeIcon icon={faChevronLeft}
                            className={style.chevron}
                            aria-hidden="true" />
                        Retour vers l&apos;accueil
                    </Link></p>

            </section>
        </main>
    )
}

export default ErrorPage;