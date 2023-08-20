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
                <Link to={{ pathname: "https://www.instagram.com/" }} target='_blank' className={style.instagram} title="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className={style.icons} aria-hidden="true" />
                </Link>

                {/* Facebook */}

                <Link to={{ pathname: "https://fr-fr.facebook.com/" }} target='_blank' className={style.facebook} title="Facebook">
                    <FontAwesomeIcon icon={faFacebook} className={style.icons} aria-hidden="true" />
                </Link>

                {/* Tiktok */}

                <Link to={{ pathname: "https://www.tiktok.com/fr/" }} target='_blank' className={style.tiktok} title="Tiktok">
                    <FontAwesomeIcon icon={faTiktok} className={style.icons} aria-hidden="true" />
                </Link>

                {/* Pinterest */}

                <Link to={{ pathname: "https://www.pinterest.fr/" }} target='_blank' className={style.pinterest} title="Pinterest">
                    <FontAwesomeIcon icon={faPinterest} className={style.icons} aria-hidden="true" />
                </Link>
                
            </aside>
        </>
    )
}

export default Aside;