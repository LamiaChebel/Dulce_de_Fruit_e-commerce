import { Router } from "express";
import brandsRoutes from "./routes/brands.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import customersRoutes from "./routes/customers.routes.js";
import product_categoriesRoutes from "./routes/products_categories.routes.js";
import productsRoutes from "./routes/products.routes.js";

const router = Router();

//  Test de vérification du serveur
// router.get("/", (req, res) => {
//     res.json({ msg: "server is running" });
// });

router.use("/brand", brandsRoutes);
router.use("/admin",adminRoutes);
router.use("/customer",customersRoutes);
router.use("/product_category",product_categoriesRoutes);
router.use("/product",productsRoutes);



export default router;
