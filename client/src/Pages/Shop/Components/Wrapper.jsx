import { Link } from "react-router-dom";

import styles from "../shop.module.css";

function Wrapper({ item}) {
  return (
    <div>
      {!item ? (
        <p>Pas de vente disponible</p>
      ) : (
        <div>
          <figure>
            <img src={`${item.img_productUrl}`} alt={item.img_productTitle} />
            <figcaption>{item.name}</figcaption>
          </figure>

          <p>{item.brandTitle}</p>

          <p className={styles.priceCtn}>{item.ttc_price}&euro;</p>

          <Link to={`/notre-boutique/${item.id}`} className={styles.linkDetail}>
            Découvrir
          </Link>
        </div>
      )}
    </div>
  );
}

export default Wrapper;
