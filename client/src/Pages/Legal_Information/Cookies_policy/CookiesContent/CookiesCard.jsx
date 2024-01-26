import React from "react";

function CookiesCard(props) {
  const { key, title, details } = props;

  return (
    <section key={key}>
      <h3>{title}</h3>
      <>{details}</>
    </section>
  );
}

export default CookiesCard;
