import { Router } from "express";
import brandsRoutes from "./routes/brands.routes.js";

const router = Router();
// const API = "/api/v1/dulce-de-fruit";

//  Test de vérification du serveur
// router.get("/", (req, res) => {
//     res.json({ msg: "server is running" });
// });

router.use("/brand",brandsRoutes)

// router.use(`${API}/brands`, brandsRoutes);

export default router;
