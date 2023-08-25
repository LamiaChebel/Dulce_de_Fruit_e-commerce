import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import styles from "./index.module.css";

function LegalMentions() {
  return (
    <main className={styles.legalMentions}>
      <PageHeader title="mentions légales" />
    </main>
  );
}

export default LegalMentions;
