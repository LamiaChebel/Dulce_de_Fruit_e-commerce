import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import CookiesContent from "./CookiesContent/CookiesContent.jsx";

import style from "./index.module.css";
import Breadcrumb from "../../../Components/UI/Breadcrumb/Breadcrumb.jsx";

function CookiesPolicy() {
  return (
    <main className={style.cookiespolicy}>
      {/* Fil d'Ariane */}
      <Breadcrumb />
      {/* Header */}
      <PageHeader title="politique sur les cookies" />
      {/* différents sections */}
      <CookiesContent />
    </main>
  );
}

export default CookiesPolicy;
