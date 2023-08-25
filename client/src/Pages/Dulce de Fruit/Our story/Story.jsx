import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";

import styles from "./story.module.css";

function Story() {
  return (
    <main className={styles.story}>
      <PageHeader title="notre histoire" />
    </main>
  )
}

export default Story;