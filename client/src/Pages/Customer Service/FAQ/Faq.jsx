import React from 'react';

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import styles from "./faq.module.css";

function Faq() {
  return (
    <main className={styles.faq}>
      <PageHeader title="foire aux questions" />
    </main>
  )
}

export default Faq;