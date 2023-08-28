import { Link } from 'react-router-dom';

import styles from "../home.module.css";

function Wrapper({item, title}) {
    
        return (
            <article>
                <h2>{title}</h2>
                {
                    !item ? <p>Pas encore de vente</p>
                    :
                    <>
                    <figure>
                        <img src={`${item.img_productUrl}`} alt="" />
                        <figcaption>{item.name}</figcaption>
                    </figure>
                
                    <p>{item.brandTitle}</p>

                    <p className={styles.priceCtn}>{item.ttc_price}&euro;</p>

                    <Link to={`/product/${item.id}`} className={styles.linkDetail}>Découvrir</Link>

                    </>
                }
            </article>
        )
}

export default Wrapper;
