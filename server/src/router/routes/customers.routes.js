/**
 * Customer and adresses, cart
 */

import { Router } from 'express';

import {signup, signin} from '../../controllers/customer.js';

import { auth } from '../../middlewares/auth.js';

// Routes pour les clients 

const router = Router();


router.post("/signup", signup); // s'inscrire
router.post("/signin", auth, signin); // se connecter

// router.patch("/:id", update); // modification partielle d'un client ciblé
// router.delete("/:id", remove); //suppression totale du client souhaité


export default router;