/**
 * Product with brands, categories and images
 */
import { Router } from 'express';

// import { auth } from "../../middlewares/auth.js";

import {all, one, favorite, newProduct, addProduct, addImg, update, remove, } from "../../controllers/product.js";

// Routes pour les produits de la page Notre boutique et du produit en détail

const router = Router();

router.get("/", all); // lecture de tous les produits distribuées
router.get("/:id", one); // lecture d'un seul produit via l'id
router.get("/favorite", favorite); // lecture d'un seul produit via l'id
router.get("/new", newProduct); // lecture d'un seul produit via l'id

router.post("/add", addProduct); // ajout d'un produit
router.post("/addImg", addImg); // ajout d'un produit

router.patch("/:id", update); // modification partielle d'un produit ciblé
router.delete("/:id", remove); //suppression totale du produit souhaité


export default router;