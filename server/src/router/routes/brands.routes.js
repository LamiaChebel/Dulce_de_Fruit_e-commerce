import { Router } from 'express';

import {all, one, addBrand, update, remove} from "../../controllers/brand.js";

// utilisation du TOKEN

// import { auth } from "../../middlewares/auth.js";

// Routes pour les marques des produits de la page Nos marques partenaires

const router = Router();

router.get("/", all); // lecture de toutes les marques distribuées
router.get("/:id", one); // lecture d'une seule marque via l'id

router.post("/add", addBrand); // ajout d'une marque

router.patch("/:id", update); // modification partielle d'une marque ciblée
router.delete("/:id", remove); //suppression totale de la marque souhaitée


export default router;