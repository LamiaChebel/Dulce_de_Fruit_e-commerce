import { success } from "../helpers/index.js";
import Query from "../models/query.js";

// Lecture des catégories de produits

export const all = async (req, res) => {
  try {
    const query =
      "SELECT product_category.id, product_category.name, product_category.img_title, product_category.img_url from product_category";
    const [product_categorys] = await Query.find(query);
    if (product_categorys.length) {
      const msg = "Display product_categorys succeeded";
      res.status(200).json(success(msg, product_categorys));
    } else {
      const msg = "product_categorys not yet";
      res.status(200).json(success(msg));
    }
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

// Lecture d'une seule catégorie de produits
export const one = async (req, res) => {
  try {
    const query =
      "SELECT product_category.id, product_category.name, product_category.img_title, product_category.img_url FROM product_category WHERE product_category.id = ?";

    const product_category = await Query.findByValue(
      query,
      req.params.id
    );

    if (!product_category) {
      const msg = "This product_category doesn't exist in the database";
      res.status(200).json(success(msg, product_category));
    } else {
      const msg =
        "Display of the product_category " + product_category[0].name;
      res.status(200).json(success(msg, product_category));
    }
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

//  Pour ajouter une catégorie de produits  dans la base de données

export const addProductCategory = async (req, res) => {
  try {
    const query = "INSERT INTO product_category (name, img_title, img_url) VALUES (?,?,?)";
    const result = await Query.write(query, req.body);

    if (result.affectedRows) {
      const msg = `Creating ${result.affectedRows} line with product_category's id ${result.insertId}`;
      res.status(201).json(success(msg, result));
    } else
      throw Error(
        "Not added product_category because syntax error in the object."
      );
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

// Pour modifier le nom de la catégorie de produits

export const update = async (req, res) => {
  const { name, img_title, img_url } = req.body;

  try {
    const query =
      "UPDATE product_category SET product_category.name = ?, product_category.img_title = ?, product_category.img_url = ? WHERE product_category.id = ?";
    const result = await Query.write(query, [name, img_title, img_url, req.params.id]);

    if (result.affectedRows) {
      const msg = `Modified product_category : ${result.info}`;
      res.status(200).json(success(msg, result));
    } else
      throw Error(
        `Not modified product_category because can't find the product_category with an ${req.params.id}`
      );
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};

export const remove = async (req, res) => {
  try {
    const query = "DELETE FROM product_category WHERE product_category.id = ?";
    const result = await Query.remove(query, req.params.id);

    if (result.affectedRows) {
      const msg = "Removed product_category";
      res.status(200).json(success(msg));
    } else
      throw Error(
        `Can't find the product_category with an ID ${req.params.id}`
      );
  } catch (error) {
    res.status(500).json(error);
    throw Error(error);
  }
};
