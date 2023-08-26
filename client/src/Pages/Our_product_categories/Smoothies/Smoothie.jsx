import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./smoothie.module.css";

function Smoothie() {
  return (
    <main className={styles.smoothie}>
      <PageHeader title="smoothies" />
    </main>
  )
}

export default Smoothie;