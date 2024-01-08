import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import CookiesContent from "./CookiesContent/CookiesContent.jsx";

import style from "./index.module.css";

function CookiesPolicy() {
  return (
    <main className={style.cookiespolicy}>
      <PageHeader title="politique sur les cookies" />
      <CookiesContent />
    </main>
  );
}

export default CookiesPolicy;
