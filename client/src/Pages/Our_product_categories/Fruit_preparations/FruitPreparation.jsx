import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./fruitprep.module.css";

function FruitPreparation() {
  return (
    <main className={styles.fruitprep}>
      <PageHeader title="nos préparations de fruits" />
    </main>
  )
}

export default FruitPreparation;