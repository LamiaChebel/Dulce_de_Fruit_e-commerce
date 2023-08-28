/**
 * Product with brands, categories and images
 */
import { Router } from 'express';

import { auth } from "../../middlewares/auth.js";

import {all, one, favorite, newProduct, addProduct, addImg, update, remove, } from "../../controllers/product.js";

// Routes pour les produits de la page Notre boutique et du produit en détail

const router = Router();

router.get("/",  auth, all); // lecture de tous les produits distribuées
router.get("/:id",  auth, one); // lecture d'un seul produit via l'id
router.get("/favorite",  auth, favorite); // lecture d'un seul produit via l'id
router.get("/new", auth, newProduct); // lecture d'un seul produit via l'id

router.post("/add", auth, addProduct); // ajout d'un produit
router.post("/addImg", auth, addImg); // ajout d'un produit

router.patch("/:id", auth, update); // modification partielle d'un produit ciblé
router.delete("/:id", auth, remove); //suppression totale du produit souhaité


export default router;