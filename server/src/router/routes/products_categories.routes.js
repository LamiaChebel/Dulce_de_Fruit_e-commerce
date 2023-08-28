/**
 * Product_categories : shop and admin
 */
import { Router } from "express";

// import { auth } from "../../middlewares/auth.js";

import {
  all,
  one,
  addProductCategory,
  update,
  remove,
} from "../../controllers/product_category.js";

// Routes pour les catégories de produits de la page Nos catégories de produits et du CRUD Admin

const router = Router();

router.get("/", all); // lecture de toutes les catégories de produits
router.get("/:id", one); // lecture d'une seule catégorie via l'id

router.post("/add", addProductCategory); // ajout d'une catégorie de produits

router.patch("/:id", update); // modification partielle d'une catégorie de produits ciblée
router.delete("/:id", remove); //suppression totale de la catégorie de produits souhaitée

export default router;
