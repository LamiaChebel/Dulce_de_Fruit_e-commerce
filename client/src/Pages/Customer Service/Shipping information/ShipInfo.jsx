import React from 'react';

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./shipinfo.module.css";

function ShipInfo() {
  return (
    <main className={styles.shipInfo}>
      <PageHeader title="informations de livraison" />
    </main>
  )
}

export default ShipInfo;