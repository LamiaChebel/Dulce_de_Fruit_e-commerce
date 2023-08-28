import { Router } from 'express';

import {all, one, addBrand, update, remove} from "../../controllers/brand.js";

// utilisation du TOKEN

import { auth } from "../../middlewares/auth.js";

// Routes pour les marques des produits de la page Nos marques partenaires

const router = Router();

router.get("/", auth, all); // lecture de toutes les marques distribuées
router.get("/:id", auth, one); // lecture d'une seule marque via l'id

router.post("/add", auth, addBrand); // ajout d'une marque

router.patch("/:id", auth, update); // modification partielle d'une marque ciblée
router.delete("/:id", auth, remove); //suppression totale de la marque souhaitée


export default router;