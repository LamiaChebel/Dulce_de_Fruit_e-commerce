/**
 * Admin : add product, categories, brands, and images, customers and adress, admin information
 */

import { Router } from 'express';

import {checkToken, signup, signin} from '../../controllers/admin.js';

import { auth } from '../../middlewares/auth.js';

// Routes pour l'admin

const router = Router();

router.get("/checkToken", auth, checkToken);

router.post("/signup", signup); // s'inscrire
router.post("/signin", signin); // se connecter

// router.patch("/:id", auth, update); // modification partielle d'un admin ciblé
// router.delete("/:id", auth, remove); //suppression totale de l'admin souhaité

export default router;