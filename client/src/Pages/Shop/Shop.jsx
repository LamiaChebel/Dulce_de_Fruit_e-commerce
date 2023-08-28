import React from "react";

import PageHeader from "../../Components/UI/PageHeader.jsx";
import Section from "./Components/Section.jsx";

import styles from "./shop.module.css";

function Shop() {
  return (
    <main className={styles.brand}>
      <PageHeader title="notre boutique" />
      <Section />      
    </main>
  )
}

export default Shop;