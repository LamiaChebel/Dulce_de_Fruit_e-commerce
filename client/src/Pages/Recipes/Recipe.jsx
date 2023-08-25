import React from "react";

import PageHeader from "../../Components/UI/PageHeader.jsx";

import styles from "./recipe.module.css";

function Recipe() {
  return (
    <main className={styles.recipe}>
      <PageHeader title="nos recettes" />
    </main>
  )
}

export default Recipe;