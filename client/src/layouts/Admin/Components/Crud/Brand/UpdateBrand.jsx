import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDatas, update } from "../../../../../services/api";


import style from "../../../admin.module.css";

function UpdateBrand() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [value, setValue] = useState({
        id : id,
        title : ""
    })
    useEffect(() => {
        async function fetchBrand() {
          try {
            const brand = await getDatas(
                `http://localhost:3001/api/v1/dulce-de-fruit/brand/${id}`);
                console.log(brand.data.result[0].title);
            setValue({...value, title : brand.data.result[0].title });
          } catch (error) {
            throw new Error(error);
          }
        }
        fetchBrand()
      }, []);
    
    

  function handleChange(e) {
    return setValue({...value, title : e.target.value});
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await update(`http://localhost:3001/api/v1/dulce-de-fruit/brand/${id}`, value)
    .then(res => {
        navigate("/admin/signin/dashboard/brands");
    })
    .catch(error => console.log(error));

  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <fieldset>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          /*placeholder="nom de la marque"*/
          value={value.title}
          onChange={handleChange}
        />
        <input type="submit" value="Modifier" />
      </fieldset>
    </form>
  );
}

export default UpdateBrand;
