import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faBox, faCreditCard, faTruckFast, faEnvelope, faSpa } from '@fortawesome/free-solid-svg-icons';

import style from "../home.module.css";

function Infos() {
    return (
        <>
            <div className={style.info}>
                <dl>
                    <dt><FontAwesomeIcon icon={faCircleQuestion}
                                         className={style.infosIcons}
                                         aria-hidden="true" /></dt>
                    <dd>FAQ</dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faBox}
                                         className={style.infosIcons}
                                         aria-hidden="true" /></dt>
                    <dd>Frais de port gratuit &agrave; partir de 50&euro; d&apos;achat</dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faCreditCard}
                                         className={style.infosIcons}
                                         aria-hidden="true" /></dt>
                    <dd>Paiement s&eacute;curis&eacute;</dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faTruckFast}
                                         className={style.infosIcons}
                                         aria-hidden="true" /></dt>
                    <dd>Livraison rapide</dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faEnvelope}
                                         className={style.infosIcons}
                                         aria-hidden="true" /></dt>
                    <dd>Contactez-nous</dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faSpa}
                                         className={style.infosIcons}
                                         aria-hidden="true" /></dt>
                    <dd>Nos engagements</dd>
                </dl>

            </div>

        </>
    )
}

export default Infos;