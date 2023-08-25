import React from "react";

import style from "./ui.module.css";

// Composant header secondaire qui se retrouve sur plusieurs pages 

function PageHeader({ title }) {
  return (
    <header className={style.container}>
      {/* <Breadcrumb /> */}
      <h2 className={style.pageHeader}>{title}</h2>
    </header>
  );
}

export default PageHeader;
