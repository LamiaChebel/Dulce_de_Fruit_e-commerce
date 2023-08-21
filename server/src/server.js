import express from "express";
import "dotenv/config";
import cors from "cors";

import { PORT } from "./config/const.js";
import router from "./router/index.routes.js";

const app = express();
const API = "/api/v1/dulce-de-fruit";


/************************************Actions sur le serveur****************************************************/
app.use(cors())
    // .use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(`${API}`, router);

/************************************Ecoute du serveur************************************************/

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

