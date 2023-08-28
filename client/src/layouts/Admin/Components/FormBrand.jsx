import React, { useState } from "react";

import { add } from "../../../services/api";

import style from "../admin.module.css";

function FormBrand() {

  // Récupération des entrées

  const [input, setInput] = useState({
    title: "",
  });

  function handleChange(e) {
    const newinput = { ...input };
    newinput[e.target.id] = e.target.value;
    setInput(newinput);

}
  const submitHandler = async (e) => {
    e.preventDefault();
    await add("http://localhost:3001/api/v1/dulce-de-fruit/brand/add", {
        title:`${input.title}`
    });

  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <fieldset>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="nom de la marque"
          value={input.title}
          onChange={handleChange}
        />
        <input type="submit" value="ajouter" />
      </fieldset>
    </form>
  );
}

export default FormBrand;
