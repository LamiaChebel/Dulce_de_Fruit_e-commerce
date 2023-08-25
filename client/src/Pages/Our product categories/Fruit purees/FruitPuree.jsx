import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./fruitpuree.module.css";

function FruitPuree() {
  return (
    <main className={styles.fruitpuree}>
      <PageHeader title="nos purées de fruits" />
    </main>
  )
}

export default FruitPuree;