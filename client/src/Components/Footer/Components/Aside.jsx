import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';

import style from "../footer.module.css";

function Aside() {
    return (
        <>
            {/* Icônes de réseaux sociaux avec lien */}
            <aside className={style.socialNetworks}>
                {/* Instagram */}
                <Link to={"https://www.instagram.com/"}
                    target='_blank'
                    rel="noopener"
                    className={style.instagram}
                    title="Instagram">
                    <FontAwesomeIcon icon={faInstagram}
                        className={style.icons}
                        aria-hidden="true" />
                </Link>

                {/* Facebook */}

                <Link to={"https://fr-fr.facebook.com/"}
                    target='_blank'
                    rel="noopener"
                    className={style.facebook}
                    title="Facebook">
                    <FontAwesomeIcon icon={faFacebook}
                        className={style.icons}
                        aria-hidden="true" />
                </Link>

                {/* Tiktok */}

                <Link to={"https://www.tiktok.com/fr/"}
                    target='_blank'
                    rel="noopener"
                    className={style.tiktok}
                    title="Tiktok">
                    <FontAwesomeIcon
                        icon={faTiktok}
                        className={style.icons}
                        aria-hidden="true" />
                </Link>

                {/* Pinterest */}

                <Link to={"https://www.pinterest.fr/"}
                    target='_blank'
                    rel="noopener"
                    className={style.pinterest}
                    title="Pinterest">
                    <FontAwesomeIcon icon={faPinterest}
                        className={style.icons}
                        aria-hidden="true" />
                </Link>

            </aside>
        </>
    )
}

export default Aside;