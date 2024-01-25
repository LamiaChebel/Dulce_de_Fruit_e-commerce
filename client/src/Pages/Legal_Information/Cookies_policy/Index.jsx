import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import CookiesContent from "./CookiesContent/CookiesContent.jsx";

import style from "./index.module.css";

function CookiesPolicy() {
  return (
    <main className={style.cookiespolicy}>
      {/* Header */}
      <PageHeader title="politique sur les cookies" />
      {/* différents sections */}
      <CookiesContent />
    </main>
  );
}

export default CookiesPolicy;
