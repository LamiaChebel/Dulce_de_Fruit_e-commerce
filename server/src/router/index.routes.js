import { Router } from "express";
import brandsRoutes from "./routes/brands.routes.js";

const router = Router();

//  Test de vérification du serveur
// router.get("/", (req, res) => {
//     res.json({ msg: "server is running" });
// });

router.use("/brand",brandsRoutes)


export default router;
