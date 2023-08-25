import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import styles from "./index.module.css";

function CookiesPolicy() {
  return (
    <main className={styles.cookiespolicy}>
      <PageHeader title="politique sur les cookies" />
    </main>
  );
}

export default CookiesPolicy;
