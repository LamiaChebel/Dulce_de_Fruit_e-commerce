import React from 'react';

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./sitemap.module.css";

function Sitemap() {
  return (
    <main className={styles.sitemap}>
      <PageHeader title="plan du site" />
    </main>
  )
}

export default Sitemap;