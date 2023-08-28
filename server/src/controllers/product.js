import { success } from "../helpers/index.js";
import Query from "../models/query.js";

// Lecture des produits

export const all = async (req, res) => {
  try {
    const query = `SELECT product.id, product.ref, product.name, 
                       product.description, product.detail_desc, 
                       product.ttc_price, product.kg_price, 
                       product.stock, product.weight, 
                       product.ingredients_list, 
                       product.kJ_calories, product.kcal_calories, 
                       product.total_fat, product.saturated_fat, 
                       product.total_carbohydrate, product.total_sugar, 
                       product.fibre, product.protein, product.salt, 
                       product.our_favorite, product.created_at, 
                       product.updated_at, 
                       
                       brand.id AS brandId, brand.title AS brandTitle, 
                       
                       img_product.id AS imgProductId,
                       img_product.title AS img_productTitle, 
                       img_product.url AS img_productUrl, 
                       
                       product_category.id AS categoryId,
                       product_category.name AS categoryName, 
                       product_category.img_title AS categoryImgTitle,
                       product_category.img_url AS categoryImgUrl
                       
                       FROM product

                       JOIN brand ON product.brand_id = brand.id 
                       JOIN img_product ON img_product.product_id = product.id 
                       JOIN product_category ON product.product_category_id = product_category.id
                       GROUP BY product.name`;

    const [products] = await Query.find(query);
    if (products.length) {
      const msg = "Display products succeeded";
      res.status(200).json(success(msg, products));
    } else {
      const msg = "products not yet";
      res.status(200).json(success(msg));
    }
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

// Lecture d'un seul produit
export const one = async (req, res) => {
  try {
    const queryProduct = `SELECT product.id, product.ref, product.name, 
                        product.description, product.detail_desc, 
                        product.ttc_price, product.kg_price, 
                        product.stock, product.weight, 
                        product.ingredients_list, 
                        product.kJ_calories, product.kcal_calories, 
                        product.total_fat, product.saturated_fat, 
                        product.total_carbohydrate, product.total_sugar, 
                        product.fibre, product.protein, product.salt, 
                        product.our_favorite, product.created_at, 
                        product.updated_at, 
      
                        brand.id AS brandId, brand.title AS brandTitle, 
      
                        img_product.id AS imgProductId,
                        img_product.title AS img_productTitle, 
                        img_product.url AS img_productUrl, 
      
                        product_category.id AS categoryId,
                        product_category.name AS categoryName, 
                        product_category.img_title AS categoryImgTitle,
                        product_category.img_url AS categoryImgUrl
      
                        FROM product

                        JOIN brand ON product.brand_id = brand.id 
                        JOIN img_product ON img_product.product_id = product.id 
                        JOIN product_category ON product.product_category_id = product_category.id
                        WHERE product.id = ?`;

    const product = await Query.findByValue(queryProduct, req.params.id);

    if (!product) {
      const msg = "This product doesn't exist in the database";
      res.status(204).json(success(msg));
    } else {
      const msg = `Display of the product ${product[0].name}`;
      res.status(200).json(success(msg, product));
    }
  } catch (error) {
    res.status(500).json(error);
    // throw Error(error);
  }
};

// Sélection de certains produits coup de coeur

export const favorite = async(req, res) => {

  try {
      const query = `SELECT product.id, product.name, product.ttc_price,

                      brand.id AS brandId, brand.title AS brandTitle,

                      img_product.id AS imgProductId,
                      img_product.title AS img_productTitle,
                      img_product.url AS img_productUrl

                      FROM product

                      JOIN brand ON product.brand_id = brand.id
                      JOIN img_product ON img_product.product_id = product.id
                      WHERE product.our_favorite = 1`;

      const [fav] = await Query.find(query);
      console.log(fav);

      if(fav){
          const msg = "Display favorite products";
          res.status(200).json(success(msg, fav));
      } else {
          const msg = "Pb to display favorite products because syntax error in the objet ";
          res.status(200).json(success(msg));
      }
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
}

// Sélection des nouveautés

export const newProduct = async (req, res) => {
  try {
      const query = `SELECT product.id, product.name, product.ttc_price,
                     product.created_at,

                     brand.id AS brandId, brand.title AS brandTitle,

                    img_product.id AS imgProductId,
                    img_product.title AS img_productTitle,
                    img_product.url AS img_productUrl

                    FROM product

                    JOIN brand ON product.brand_id = brand.id
                    JOIN img_product ON img_product.product_id = product.id
                    ORDER BY product.id DESC LIMIT 3`;

      const [newResult] = await Query.find(query);
      console.log(typeof newResult);

      if(newResult){
      const msg = "Display new products";
      res.status(200).json(success(msg, newResult));
      }
    else {
      const msg = "Pb to display new products because syntax error in the objet ";
      res.status(200).json(success(msg));
  }

  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
}

//  Pour ajouter un produit dans la base de données

export const addProduct = async (req, res) => {
  const data = {
    ...req.body,
  };
console.log(data);
  try {
    const query = `INSERT INTO product (ref,name,description, detail_desc,ttc_price, kg_price,stock, weight, ingredients_list, kJ_calories, kcal_calories,total_fat, saturated_fat,total_carbohydrate, total_sugar,fibre, protein, salt,our_favorite, created_at,updated_at, brand_id, product_category_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),NULL,?,?)`;

    const result = await Query.write(query, data);

    if (result.affectedRows) {
      const msg = `product added`;
      res.status(201).json(success(msg));
    } else throw Error("Not added product because syntax error in the object.");
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

// Ajout Image produit

export const addImg = async (req, res) => {
  try {
    const query =
      "INSERT INTO img_product (title, url, product_id) VALUES(?,?,?)";

    const result = await Query.write(query, req.body);
    console.log(result);

    if (result.affectedRows) {
      const msg = `product image added`;
      res.status(201).json(success(msg, result));
    } else
      throw Error(
        "Not added product image because syntax error in the object."
      );
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

// Pour modifier le produit

export const update = async (req, res) => {
  const data = {
    ...req.body,
    ...req.params,
  };

  try {


    const query = `UPDATE product SET ref = ?, name = ?, 
    description = ?, detail_desc = ?, 
    ttc_price = ?, kg_price = ?, 
    stock = ?, weight = ?, 
    ingredients_list = ?, 
    kJ_calories = ?, kcal_calories = ?, 
    total_fat = ?, saturated_fat = ?, 
    total_carbohydrate = ?, total_sugar = ?, 
    fibre = ?, protein = ?, salt = ?, 
    our_favorite = ?, created_at = ?, 
    updated_at = ?, brand_id = ?, 
    product_category_id  = ? 
    
    WHERE product.id = ?`;

    const result = await Query.write(query, data);

    if (result.affectedRows) {
      const msg = `Modified product : ${result.info}`;
      res.status(200).json(success(msg));
    } else
      throw Error(
        `Not modified product because can't find the product with an ${req.params.id}`
      );
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

// Supprimer un produit

export const remove = async (req, res) => {
  try {
    const query = "DELETE FROM product WHERE id = ?";
    const result = await Query.remove(query, req.params.id);

    if (result.affectedRows) {
      const msg = "Removed product";
      res.status(200).json(success(msg));
    } else
      throw Error(
        `Can't find the product with an ID ${req.params.id}. Error syntax !`
      );
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};
